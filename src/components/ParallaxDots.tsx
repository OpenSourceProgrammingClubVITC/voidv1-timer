"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface Dot {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  color: string
  twinkleSpeed: number
  twinklePhase: number
}

// Seeded random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

export const ParallaxDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>(0)
  const isTouchDevice = useRef(false)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Check if device supports touch
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0

    // Set canvas size and initialize dots
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      ctx.scale(dpr, dpr)

      // Reinitialize dots when canvas size changes
      initDots()
    }

    const dotColors = [
      "rgba(157, 78, 221, opacity)", // #9D4EDD
      "rgba(199, 125, 255, opacity)", // #C77DFF
      "rgba(123, 44, 191, opacity)", // #7B2CBF
      "rgba(224, 170, 255, opacity)", // #E0AAFF
      "rgba(90, 24, 154, opacity)", // #5A189A
      "rgba(36, 0, 70, opacity)", // #240046
    ]

    // Initialize dots with deterministic values
    const initDots = () => {
      const dots: Dot[] = []
      // Adjust number of dots based on device type
      const numDots = isTouchDevice.current
        ? Math.min(200, Math.floor((canvas.width * canvas.height) / 5000)) // Fewer dots for mobile
        : Math.min(300, Math.floor((canvas.width * canvas.height) / 4000)) // More dots for desktop

      const seed = 12345 // Fixed seed for deterministic values

      // Create a grid-based distribution for more even coverage
      const gridCols = Math.ceil(Math.sqrt(numDots * (canvas.width / canvas.height)))
      const gridRows = Math.ceil(numDots / gridCols)
      const cellWidth = canvas.width / gridCols
      const cellHeight = canvas.height / gridRows

      let dotCount = 0

      // Place dots in a grid with some randomness for natural appearance
      for (let row = 0; row < gridRows && dotCount < numDots; row++) {
        for (let col = 0; col < gridCols && dotCount < numDots; col++) {
          const i = dotCount

          const r1 = seededRandom(seed + i)
          const r2 = seededRandom(seed + i + 1)
          const r3 = seededRandom(seed + i + 2)
          const r4 = seededRandom(seed + i + 3)
          const r5 = seededRandom(seed + i + 4)
          const r6 = seededRandom(seed + i + 5)
          const r7 = seededRandom(seed + i + 6)

          // Calculate position within the cell, with some randomness
          const cellX = col * cellWidth
          const cellY = row * cellHeight
          const xOffset = r1 * cellWidth
          const yOffset = r2 * cellHeight

          const colorIndex = Math.floor(r6 * dotColors.length)

          // Adjust dot properties based on device type
          const sizeMultiplier = isTouchDevice.current
            ? r3 < 0.85
              ? r3 * 2
              : r3 * 4 // Slightly larger dots on average for mobile
            : r3 < 0.8
              ? r3 * 2.5
              : r3 * 5 // Size distribution for desktop

          // Speed adjustments for different devices - make desktop dots much faster
          const speedFactor = isTouchDevice.current ? 0.15 : 0.35 // Significantly increased speed factor for desktop
          const speedBase = isTouchDevice.current ? 0.1 : 0.25 // Significantly increased base speed for desktop

          dots.push({
            x: cellX + xOffset,
            y: cellY + yOffset,
            size: sizeMultiplier + 1, // Ensure minimum size
            speed: r4 * speedFactor + speedBase,
            opacity: r5 * 0.6 + 0.4, // Higher opacity for better visibility
            color: dotColors[colorIndex],
            twinkleSpeed: r6 * (isTouchDevice.current ? 0.03 : 0.025) + (isTouchDevice.current ? 0.02 : 0.015), // Increased twinkling for desktop
            twinklePhase: r7 * Math.PI * 2,
          })

          dotCount++
        }
      }

      dotsRef.current = dots
    }

    // Handle viewport resizing and maintain dot distribution
    const handleResize = () => {
      if (!canvas) return

      const oldWidth = canvas.width
      const oldHeight = canvas.height

      setCanvasSize()

      // Adjust existing dot positions when resizing
      if (dotsRef.current.length > 0) {
        dotsRef.current = dotsRef.current.map((dot) => {
          // Scale dot positions proportionally to the new canvas size
          return {
            ...dot,
            x: (dot.x / oldWidth) * canvas.width,
            y: (dot.y / oldHeight) * canvas.height,
          }
        })
      }
    }

    setCanvasSize()
    window.addEventListener("resize", handleResize)

    // Handle both mouse and touch events
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const event = e instanceof MouseEvent ? e : e.touches[0]

      if (!event) return

      // For desktop, apply an immediate small movement to make the effect more responsive
      if (!isTouchDevice.current && dotsRef.current.length > 0) {
        const oldMouseX = mouseRef.current.x
        const oldMouseY = mouseRef.current.y
        const newMouseX = event.clientX - rect.left
        const newMouseY = event.clientY - rect.top

        // Calculate the movement vector
        const moveX = newMouseX - oldMouseX
        const moveY = newMouseY - oldMouseY

        // Apply a small immediate movement to dots for extra responsiveness
        // Only do this for significant mouse movements
        if (Math.abs(moveX) > 5 || Math.abs(moveY) > 5) {
          const normalizedMoveX = (moveX / rect.width) * 2
          const normalizedMoveY = (moveY / rect.height) * 2

          dotsRef.current.forEach((dot) => {
            dot.x += normalizedMoveX * dot.speed * 10 // Immediate small shift
            dot.y += normalizedMoveY * dot.speed * 10
          })
        }
      }

      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }

    // Add touch event listeners
    if (isTouchDevice.current) {
      window.addEventListener("touchmove", handlePointerMove)
      window.addEventListener("touchstart", handlePointerMove)
    } else {
      window.addEventListener("mousemove", handlePointerMove)
    }

    const drawDot = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number,
    ) => {
      ctx.save()
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)

      // Use the dot's color with its current opacity
      const fillColor = color.replace("opacity", opacity.toString())
      ctx.fillStyle = fillColor

      // Add subtle glow effect
      ctx.shadowColor = fillColor
      ctx.shadowBlur = size * 1.5

      ctx.fill()
      ctx.restore()
    }

    // Animation
    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return

      // Update time reference for smooth animations
      timeRef.current = timestamp

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const rect = canvas.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y

      dotsRef.current.forEach((dot) => {
        // Calculate twinkling effect
        const twinkle = Math.sin(timeRef.current * dot.twinkleSpeed + dot.twinklePhase)
        const currentOpacity = Math.max(0.2, dot.opacity * (0.7 + 0.3 * twinkle))

        // Different movement behavior based on device type
        if (isTouchDevice.current) {
          // For mobile: faster random movement for a more dynamic effect
          const time = timeRef.current * 0.0003 // Increased speed for mobile
          dot.x += Math.sin(time + dot.twinklePhase * 3) * 0.5
          dot.y += Math.cos(time + dot.twinklePhase * 2) * 0.5

          // Ensure dots wrap around screen
          if (dot.x < -dot.size * 2) dot.x = canvas.width + dot.size
          if (dot.x > canvas.width + dot.size * 2) dot.x = -dot.size
          if (dot.y < -dot.size * 2) dot.y = canvas.height + dot.size
          if (dot.y > canvas.height + dot.size * 2) dot.y = -dot.size
        } else {
          // For desktop: parallax effect based on mouse position
          // Apply a gentle base movement regardless of mouse
          const time = timeRef.current * 0.0006 // Further increased speed for desktop
          dot.x += Math.sin(time + dot.twinklePhase) * 0.4 // Further increased base movement
          dot.y += Math.cos(time + dot.twinklePhase * 2) * 0.4

          // Calculate parallax based on mouse position
          const distanceFromCenter = {
            x: (mouseX - centerX) / centerX,
            y: (mouseY - centerY) / centerY,
          }

          // Apply stronger parallax movement with increased responsiveness
          dot.x += distanceFromCenter.x * dot.speed * 5.0 // Further increased multiplier for faster response
          dot.y += distanceFromCenter.y * dot.speed * 5.0

          // Ensure dots wrap around screen
          if (dot.x < -dot.size * 2) dot.x = canvas.width + dot.size
          if (dot.x > canvas.width + dot.size * 2) dot.x = -dot.size
          if (dot.y < -dot.size * 2) dot.y = canvas.height + dot.size
          if (dot.y > canvas.height + dot.size * 2) dot.y = -dot.size
        }

        drawDot(ctx, dot.x, dot.y, dot.size, dot.color, currentOpacity)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      // Only remove mouse event listener if not a touch device
      if (!isTouchDevice.current) {
        window.removeEventListener("mousemove", handlePointerMove)
      }
      window.removeEventListener("touchmove", handlePointerMove)
      window.removeEventListener("touchstart", handlePointerMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: isTouchDevice.current ? 0.6 : 0.8 }}
    />
  )
}