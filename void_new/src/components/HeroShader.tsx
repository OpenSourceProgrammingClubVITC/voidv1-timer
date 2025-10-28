"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { UniformsUtils } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

// Create noise textures
function createNoiseTexture(size = 512) {
  const data = new Uint8Array(size * size * 4);
  for (let i = 0; i < size * size * 4; i += 4) {
    const val = Math.random() * 255;
    data[i] = val;
    data[i + 1] = val;
    data[i + 2] = val;
    data[i + 3] = 255;
  }
  const texture = new THREE.DataTexture(data, size, size);
  texture.format = THREE.RGBAFormat;
  texture.needsUpdate = true;
  return texture;
}

const noiseTexture = createNoiseTexture();
const noiseTexture2 = createNoiseTexture();

// Enhanced black hole shader with improved effects
const blackHoleShader = {
  uniforms: {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2(1, 1) },
    iMouse: { value: new THREE.Vector4() },
    iNoise1: { value: noiseTexture },
    iNoise2: { value: noiseTexture2 },
    enableBlackHole: { value: 1.0 },
    parallaxOffset: { value: new THREE.Vector2(0, 0) },

    // Look & feel settings
    holeRadius: { value: 0.27 },
    holeSoftness: { value: 0.15 },
    centerGlowIntensity: { value: 2.5 },
    ringRadius: { value: 0.35 },
    ringWidth: { value: 0.3 },
    vignetteRadius: { value: 1.2 },
    vignetteSoftness: { value: 0.68 },
    noiseScale: { value: 3.8 },
    noiseIntensity: { value: 1.0 },
    noiseSpeed: { value: 0.33 },
    noiseDetail: { value: 2.0 },
    noiseOffset: { value: 0.0 },
    noiseRotation: { value: 0.0 },

    // Purple theme colors
    holeColor: { value: new THREE.Vector3(0.55, 0.25, 0.9) },      // Purple
    ringColor: { value: new THREE.Vector3(0.65, 0.35, 0.95) },     // Lighter purple
    glowColor: { value: new THREE.Vector3(0.85, 0.55, 1.0) },      // Brightest purple
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float iTime;
    uniform vec2 iResolution;
    uniform vec4 iMouse;
    uniform sampler2D iNoise1;
    uniform sampler2D iNoise2;
    varying vec2 vUv;
    
    uniform float enableBlackHole;
    uniform vec2 parallaxOffset;

    // Configurable uniforms
    uniform float holeRadius;
    uniform float holeSoftness;
    uniform float centerGlowIntensity;
    uniform float ringRadius;
    uniform float ringWidth;
    uniform float vignetteRadius;
    uniform float vignetteSoftness;
    uniform float noiseScale;
    uniform float noiseIntensity;
    uniform float noiseSpeed;
    uniform float noiseDetail;
    uniform float noiseOffset;
    uniform float noiseRotation;

    // Color uniforms
    uniform vec3 holeColor;
    uniform vec3 ringColor;
    uniform vec3 glowColor;

    // Improved hash function
    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 19.19);
      return fract(p.x * p.y);
    }

    // Improved noise function with subtle rotation
    float noise(vec2 p) {
      float angle = noiseRotation;
      mat2 rot = mat2(cos(angle), sin(angle), -sin(angle), cos(angle));
      p = rot * p;
      
      vec2 i = floor(p);
      vec2 f = fract(p);
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      float offset = noiseOffset;
      
      float a = hash21(i + vec2(0.0, 0.0) + offset);
      float b = hash21(i + vec2(1.0, 0.0) + offset);
      float c = hash21(i + vec2(0.0, 1.0) + offset);
      float d = hash21(i + vec2(1.0, 1.0) + offset);
      
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    // FBM (Fractal Brownian Motion) for more natural patterns
    float fbm(vec2 p) {
      float f = 0.0;
      float w = 0.5;
      float sum = 0.0;
      
      for(int i = 0; i < 8; i++) {
        if (i >= int(noiseDetail)) break;
        
        float octaveAngle = float(i) * 0.1;
        mat2 rot = mat2(cos(octaveAngle), sin(octaveAngle), -sin(octaveAngle), cos(octaveAngle));
        
        f += w * noise(p);
        sum += w;
        w *= 0.5;
        p = rot * p * 2.0;
      }
      
      return f / sum;
    }

    void main() {
      // Get the aspect ratio
      float aspect = iResolution.x / iResolution.y;
      
      // Calculate UV coordinates
      vec2 uv = vUv;
      
      // Center point
      vec2 center = vec2(0.5, 0.5);
      
      // Calculate distance from center for circular elements
      vec2 circleUV = uv - center;
      if (aspect > 1.0) {
        circleUV.x *= aspect;
      } else {
        circleUV.y /= aspect;
      }
      float dist = length(circleUV);
      
      // For the noise pattern, use raw UV coordinates
      vec2 noiseUV = uv 
        + (1.0 - enableBlackHole) * (vec2(0.0, iTime * 0.04) + parallaxOffset);
      
      // Time variables
      float t = iTime * noiseSpeed;
      
      // Create dynamic distortion
      vec2 p = (noiseUV - 0.5) * noiseScale;
      
      // Apply rotation
      float angle = t * 0.2;
      mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      p = rot * p;
      
      // Add flowing effect from the black hole
      vec2 rv = p / (length(p * 2.5) * (p * 30.0 + sin(t * 0.2) * 5.0));
      
      // Generate base pattern
      float val = 0.5 * fbm(p * 2.0 + fbm(p + vec2(t * 0.1, t * -0.05)) * 5.0);
      
      // Apply counter-rotation for more movement
      p = rot * p * 0.7;
      
      // Add more detail
      float pattern = val + 0.5 * fbm(p * val * 8.0 + t * 0.1);
      
      // Enhance contrast
      pattern = pow(pattern, 0.8) * noiseIntensity;
      
      // Create bright center with pulsing
      float centerGlow = 1.0 - smoothstep(0.0, 0.6, dist);
      centerGlow = pow(centerGlow, 1.2) * (centerGlowIntensity + sin(t * 1.2) * 0.5);
      
      // Create accretion disk with dynamic thickness
      float ringWidthDynamic = ringWidth + sin(t * 1.5) * 0.05;
      float ringRadiusDynamic = ringRadius + sin(t * 0.7) * 0.05;
      float ringMask = smoothstep(ringRadiusDynamic - ringWidthDynamic, ringRadiusDynamic, dist) * 
                       smoothstep(ringRadiusDynamic + ringWidthDynamic, ringRadiusDynamic, dist);
      
      // Add noise to the ring
      ringMask *= 1.0 + pattern * 0.5;
      
      // Create black hole center
      float holeRadiusDynamic = holeRadius + sin(t * 0.5) * 0.02;
      float holeMask = smoothstep(holeRadiusDynamic - holeSoftness, holeRadiusDynamic + holeSoftness, dist);
      
      // Add noise to hole edge
      holeMask = mix(holeMask, holeMask * (1.0 + pattern * 0.5 - 0.25), 0.7);
      
      // Create the main color
      float brightness = pattern * 0.6;
      
      // Apply colors to different components
      vec3 noiseColor = holeColor * brightness;
      vec3 ringComponent = ringColor * ringMask * 0.4;
      vec3 glowComponent = glowColor * centerGlow * 0.2;
      
      // Toggle black hole contributions
      ringComponent *= enableBlackHole;
      glowComponent *= enableBlackHole;
      
      // Combine components
      vec3 finalColor = noiseColor + ringComponent + glowComponent;
      
      // Apply hole mask
      holeMask = mix(1.0, holeMask, enableBlackHole);
      finalColor *= holeMask;
      
      // Create vignette for blending
      float vignette = smoothstep(vignetteRadius, vignetteRadius - vignetteSoftness, dist + pattern * 0.1);
      
      // Apply vignette to brightness
      finalColor *= vignette;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

// Film grain shader for added texture
const filmGrainShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0.0 },
    intensity: { value: 0.065 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float intensity;
    varying vec2 vUv;

    float gaussian(float z, float u, float o) {
      return (1.0 / (o * sqrt(2.0 * 3.1415))) * exp(-(((z - u) * (z - u)) / (2.0 * (o * o))));
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float seed = dot(vUv, vec2(12.9898, 78.233));
      float noise = fract(sin(seed) * 43758.5453 + time * 2.0);
      noise = gaussian(noise, 0.0, 0.5 * 0.5);
      vec3 grain = vec3(noise) * (1.0 - color.rgb);
      color.rgb += grain * intensity;
      gl_FragColor = color;
    }
  `,
};

type HeroShaderProps = {
  enableBlackHole?: boolean;
  position?: "fixed" | "absolute";
  parallax?: { x: number; y: number };
};

export default function HeroShader({ 
  enableBlackHole = true, 
  position = "fixed", 
  parallax = { x: 0, y: 0 } 
}: HeroShaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const uniformsRef = useRef<Record<string, THREE.IUniform> | null>(null);
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const smoothedMouse = useRef(new THREE.Vector2(0.5, 0.5));

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Track mouse for interactive effects (window-based coords, smoothed)
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX / window.innerWidth;
      const mouseY = 1.0 - event.clientY / window.innerHeight; // flip Y
      mouse.current.set(mouseX, mouseY);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Use powerPreference for better performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, 
      alpha: true,
      powerPreference: "high-performance",
      precision: isMobile ? "mediump" : "highp"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    container.appendChild(renderer.domElement);

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    // Clone uniforms per instance
    const uniforms = UniformsUtils.clone(blackHoleShader.uniforms) as Record<string, THREE.IUniform>;
    uniforms.enableBlackHole.value = enableBlackHole ? 1.0 : 0.0;
    uniforms.parallaxOffset.value.set(parallax.x, parallax.y);
    uniformsRef.current = uniforms;

    // Create the quad with our shader
    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: blackHoleShader.vertexShader,
        fragmentShader: blackHoleShader.fragmentShader,
        transparent: false,
        depthWrite: false,
      });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shaderMaterial);
    quad.position.z = -1;
    scene.add(quad);

    // Post-processing setup
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    
    // Add bloom for stronger glow effects
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.22,  // Stronger bloom for more vibrant effect
      0.4,
      0.9
    );
    
    if (isMobile) {
      bloomPass.resolution = new THREE.Vector2(width * 0.5, height * 0.5);
    }
    composer.addPass(bloomPass);
    
    const filmPass = new ShaderPass(filmGrainShader);
    composer.addPass(filmPass);

    // Initial uniforms
    uniforms.iResolution.value.set(width, height);

    // Animation with smooth mouse and app-ready dispatch
    let rafId = 0;
    let frames = 0;
    const wrappedAnimate = (t: number) => {
      // time in seconds like the provided snippet
      const timeSec = t * 0.001;
      uniforms.iTime.value = timeSec;
      filmPass.uniforms.time.value = timeSec;

      // Smooth out mouse (lower factor = smoother)
      smoothedMouse.current.lerp(mouse.current, 0.1);
      const sx = smoothedMouse.current.x * (typeof window !== 'undefined' ? window.innerWidth : width);
      const sy = smoothedMouse.current.y * (typeof window !== 'undefined' ? window.innerHeight : height);
      // Update both a dedicated uniform (if used elsewhere) and iMouse for the shader
      if (!('smoothedMouse' in uniforms)) {
        uniforms['smoothedMouse'] = { value: new THREE.Vector2(sx, sy) } as THREE.IUniform;
      } else {
        (uniforms['smoothedMouse'].value as THREE.Vector2).set(sx, sy);
      }
      uniforms.iMouse.value.x = sx;
      uniforms.iMouse.value.y = sy;

      composer.render();

      frames++;
      if (frames === 2 && typeof window !== 'undefined') {
        try {
          const evt = new CustomEvent('app-ready', { detail: { source: 'hero' } });
          window.dispatchEvent(evt);
        } catch {}
      }
      rafId = requestAnimationFrame(wrappedAnimate);
    };
    wrappedAnimate(0);

    // Handle resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      composer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(rafId);
      ro.disconnect();
      composer.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [enableBlackHole, parallax.x, parallax.y]);

  // Update parallax when prop changes
  useEffect(() => {
    if (uniformsRef.current) {
      uniformsRef.current.parallaxOffset.value.set(parallax.x, parallax.y);
    }
  }, [parallax.x, parallax.y]);

  const wrapperClass = position === "fixed" ? "fixed inset-0 -z-10" : "absolute inset-0 -z-10";
  return <div ref={containerRef} className={wrapperClass} />;
}