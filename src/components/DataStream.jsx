import React, { useEffect, useRef } from 'react'

// Animated background with floating colored dots simulating data flow
export default function DataStream() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      canvas.width = window.innerWidth * DPR
      canvas.height = window.innerHeight * DPR
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
    }

    window.addEventListener('resize', resize)
    resize()

    const colors = [
      'hsla(180,100%,50%,0.9)', // cyan
      'hsla(300,100%,50%,0.9)', // magenta
      'hsla(195,100%,75%,0.9)', // baby blue
      'hsla(280,100%,34%,0.9)', // deep purple
    ]

    const DOT_COUNT = 70
    const dots = Array.from({ length: DOT_COUNT }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 * DPR + 1 * DPR,
      vx: (Math.random() - 0.5) * 0.4 * DPR,
      vy: (Math.random() - 0.5) * 0.4 * DPR,
      c: colors[Math.floor(Math.random() * colors.length)],
      a: Math.random() * Math.PI * 2,
      s: 0.005 + Math.random() * 0.01,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // subtle grid glow
      ctx.fillStyle = 'hsla(240,10%,4%,1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      dots.forEach(d => {
        d.a += d.s
        d.x += d.vx + Math.cos(d.a) * 0.2 * DPR
        d.y += d.vy + Math.sin(d.a) * 0.2 * DPR

        if (d.x < 0) d.x = canvas.width
        if (d.x > canvas.width) d.x = 0
        if (d.y < 0) d.y = canvas.height
        if (d.y > canvas.height) d.y = 0

        const gradient = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4)
        gradient.addColorStop(0, d.c)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r * 3, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-0 opacity-[0.6]"
      aria-hidden="true"
    />
  )
}
