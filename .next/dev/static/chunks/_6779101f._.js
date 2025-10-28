(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/HeroShader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroShader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'three'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'three/examples/jsm/postprocessing/EffectComposer.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'three/examples/jsm/postprocessing/RenderPass.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'three/examples/jsm/postprocessing/ShaderPass.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'three/examples/jsm/postprocessing/UnrealBloomPass.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Create noise textures
function createNoiseTexture(size = 512) {
    const data = new Uint8Array(size * size * 4);
    for(let i = 0; i < size * size * 4; i += 4){
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
        iTime: {
            value: 0
        },
        iResolution: {
            value: new THREE.Vector2(1, 1)
        },
        iMouse: {
            value: new THREE.Vector4()
        },
        iNoise1: {
            value: noiseTexture
        },
        iNoise2: {
            value: noiseTexture2
        },
        enableBlackHole: {
            value: 1.0
        },
        parallaxOffset: {
            value: new THREE.Vector2(0, 0)
        },
        // Look & feel settings
        holeRadius: {
            value: 0.27
        },
        holeSoftness: {
            value: 0.15
        },
        centerGlowIntensity: {
            value: 2.5
        },
        ringRadius: {
            value: 0.35
        },
        ringWidth: {
            value: 0.3
        },
        vignetteRadius: {
            value: 1.2
        },
        vignetteSoftness: {
            value: 0.68
        },
        noiseScale: {
            value: 3.8
        },
        noiseIntensity: {
            value: 1.0
        },
        noiseSpeed: {
            value: 0.33
        },
        noiseDetail: {
            value: 2.0
        },
        noiseOffset: {
            value: 0.0
        },
        noiseRotation: {
            value: 0.0
        },
        // Purple theme colors
        holeColor: {
            value: new THREE.Vector3(0.55, 0.25, 0.9)
        },
        ringColor: {
            value: new THREE.Vector3(0.65, 0.35, 0.95)
        },
        glowColor: {
            value: new THREE.Vector3(0.85, 0.55, 1.0)
        }
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
  `
};
// Film grain shader for added texture
const filmGrainShader = {
    uniforms: {
        tDiffuse: {
            value: null
        },
        time: {
            value: 0.0
        },
        intensity: {
            value: 0.065
        }
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
  `
};
function HeroShader({ enableBlackHole = true, position = "fixed", parallax = {
    x: 0,
    y: 0
} }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new THREE.Vector2(0.5, 0.5));
    const smoothedMouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new THREE.Vector2(0.5, 0.5));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroShader.useEffect": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            const width = container.clientWidth;
            const height = container.clientHeight;
            // Track mouse for interactive effects (window-based coords, smoothed)
            const handleMouseMove = {
                "HeroShader.useEffect.handleMouseMove": (event)=>{
                    const mouseX = event.clientX / window.innerWidth;
                    const mouseY = 1.0 - event.clientY / window.innerHeight; // flip Y
                    mouse.current.set(mouseX, mouseY);
                }
            }["HeroShader.useEffect.handleMouseMove"];
            if ("TURBOPACK compile-time truthy", 1) {
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
            const uniforms = UniformsUtils.clone(blackHoleShader.uniforms);
            uniforms.enableBlackHole.value = enableBlackHole ? 1.0 : 0.0;
            uniforms.parallaxOffset.value.set(parallax.x, parallax.y);
            uniformsRef.current = uniforms;
            // Create the quad with our shader
            const shaderMaterial = new THREE.ShaderMaterial({
                uniforms,
                vertexShader: blackHoleShader.vertexShader,
                fragmentShader: blackHoleShader.fragmentShader,
                transparent: false,
                depthWrite: false
            });
            const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shaderMaterial);
            quad.position.z = -1;
            scene.add(quad);
            // Post-processing setup
            const composer = new EffectComposer(renderer);
            composer.addPass(new RenderPass(scene, camera));
            // Add bloom for stronger glow effects
            const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 0.22, 0.4, 0.9);
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
            const wrappedAnimate = {
                "HeroShader.useEffect.wrappedAnimate": (t)=>{
                    // time in seconds like the provided snippet
                    const timeSec = t * 0.001;
                    uniforms.iTime.value = timeSec;
                    filmPass.uniforms.time.value = timeSec;
                    // Smooth out mouse (lower factor = smoother)
                    smoothedMouse.current.lerp(mouse.current, 0.1);
                    const sx = smoothedMouse.current.x * (("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable");
                    const sy = smoothedMouse.current.y * (("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable");
                    // Update both a dedicated uniform (if used elsewhere) and iMouse for the shader
                    if (!('smoothedMouse' in uniforms)) {
                        uniforms['smoothedMouse'] = {
                            value: new THREE.Vector2(sx, sy)
                        };
                    } else {
                        uniforms['smoothedMouse'].value.set(sx, sy);
                    }
                    uniforms.iMouse.value.x = sx;
                    uniforms.iMouse.value.y = sy;
                    composer.render();
                    frames++;
                    if (frames === 2 && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                        try {
                            const evt = new CustomEvent('app-ready', {
                                detail: {
                                    source: 'hero'
                                }
                            });
                            window.dispatchEvent(evt);
                        } catch  {}
                    }
                    rafId = requestAnimationFrame(wrappedAnimate);
                }
            }["HeroShader.useEffect.wrappedAnimate"];
            wrappedAnimate(0);
            // Handle resize
            const onResize = {
                "HeroShader.useEffect.onResize": ()=>{
                    if (!container) return;
                    const w = container.clientWidth;
                    const h = container.clientHeight;
                    renderer.setSize(w, h);
                    composer.setSize(w, h);
                    uniforms.iResolution.value.set(w, h);
                }
            }["HeroShader.useEffect.onResize"];
            const ro = new ResizeObserver(onResize);
            ro.observe(container);
            return ({
                "HeroShader.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('mousemove', handleMouseMove);
                    }
                    cancelAnimationFrame(rafId);
                    ro.disconnect();
                    composer.dispose();
                    renderer.dispose();
                    container.removeChild(renderer.domElement);
                }
            })["HeroShader.useEffect"];
        }
    }["HeroShader.useEffect"], [
        enableBlackHole,
        parallax.x,
        parallax.y
    ]);
    // Update parallax when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroShader.useEffect": ()=>{
            if (uniformsRef.current) {
                uniformsRef.current.parallaxOffset.value.set(parallax.x, parallax.y);
            }
        }
    }["HeroShader.useEffect"], [
        parallax.x,
        parallax.y
    ]);
    const wrapperClass = position === "fixed" ? "fixed inset-0 -z-10" : "absolute inset-0 -z-10";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: wrapperClass
    }, void 0, false, {
        fileName: "[project]/components/HeroShader.tsx",
        lineNumber: 446,
        columnNumber: 10
    }, this);
}
_s(HeroShader, "W7zMAEve89oFGWJgF3cAthjy4So=");
_c = HeroShader;
var _c;
__turbopack_context__.k.register(_c, "HeroShader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroShader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeroShader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeroSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll-driven shrink effect for the hero band
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const scale = useTransform(scrollYProgress, [
        0,
        0.5
    ], [
        1,
        0.85
    ]);
    const inverseScale = useTransform(scale, {
        "HeroSection.useTransform[inverseScale]": (v)=>1 / v
    }["HeroSection.useTransform[inverseScale]"]);
    const radius = useTransform(scrollYProgress, [
        0,
        0.5
    ], [
        "0px",
        "40px"
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        ref: sectionRef,
        className: "relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden",
        style: {
            scale,
            borderRadius: radius
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[-1]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroShader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    enableBlackHole: true,
                    position: "absolute"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "relative z-20 text-center px-4 sm:px-6 mt-0 sm:mt-[20vh] w-full max-w-[90vw] sm:max-w-[80vw] mx-auto",
                style: {
                    scale: inverseScale,
                    marginTop: "clamp(18vh, calc(env(safe-area-inset-top, 0px) + 20vh), 32vh)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs sm:text-sm tracking-[0.2em] uppercase text-white/70 font-mono mb-2 sm:mb-4",
                        children: "Embrace the unknown"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mt-2 sm:mt-4 md:mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/text.png",
                            alt: "VOID",
                            width: 520,
                            height: 160,
                            className: "w-[220px] sm:w-[320px] md:w-[440px] lg:w-[520px] max-w-[92vw] h-auto object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs sm:text-sm tracking-[0.2em] uppercase text-white/70 font-mono mt-2 sm:mt-4",
                        children: "Trust the process"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "JiM95oyUv6AtUssa6xTAQEYQELk=", false, function() {
    return [
        useScroll,
        useTransform,
        useTransform,
        useTransform
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6779101f._.js.map