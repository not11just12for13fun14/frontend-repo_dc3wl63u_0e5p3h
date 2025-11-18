import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,hsla(280,100%,34%,0.25),transparent_60%)] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[hsl(195_100%_75%)] font-semibold">Serving Stony Plain, Spruce Grove & Parkland County</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_hsla(180,100%,50%,0.4)]">
              Reclaim Your Time
            </h1>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[hsl(280_100%_34%)] via-[hsl(300_100%_50%)] to-[hsl(180_100%_50%)]">
              Grow Your Business
            </h2>
            <p className="mt-5 text-white/80 max-w-prose">
              We build AI automations that eliminate repetitive tasks, generate content at scale, and optimize your ad spend so you can focus on what matters.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-[hsl(280_100%_34%)] via-[hsl(300_100%_50%)] to-[hsl(180_100%_50%)] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-[0_0_20px_hsla(300,100%,50%,0.7),0_0_40px_hsla(180,100%,50%,0.5)] hover:scale-[1.03] hover:shadow-[0_0_25px_hsla(300,100%,50%,0.9),0_0_55px_hsla(180,100%,50%,0.7)] transition-all">
                Get a Free Audit
              </a>
              <a href="#services" className="text-white/80 hover:text-white">See Services</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 rounded-3xl blur-3xl bg-[conic-gradient(from_180deg_at_50%_50%,hsla(300,100%,50%,0.12),hsla(180,100%,50%,0.12),transparent_60%)]" />
            <div className="relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_40px_-15px_hsla(280,100%,34%,0.7)]">
              <div className="text-6xl">🧠</div>
              <p className="mt-3 text-white/80">Smart systems that work 24/7 — from lead intake to follow-ups and analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
