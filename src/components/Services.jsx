import React from 'react'

const services = [
  { title: 'AI Ads', icon: '🎯', desc: 'Automated ad creation, A/B testing, and budget optimization that learns from your results.' },
  { title: 'Content Creation', icon: '💡', desc: 'Blogs, emails, and social posts generated in your brand voice with approvals built-in.' },
  { title: 'Automations', icon: '⚙️', desc: 'From lead capture to CRM updates and follow-ups — reduce manual work with smart workflows.' },
  { title: 'Consulting', icon: '📈', desc: 'Roadmaps, tools, and AI training for your team to sustainably scale operations.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_20px_hsla(180,100%,50%,0.4)]">What We Do</h3>
        <p className="mt-3 text-center text-white/70">Practical automation for real businesses</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-[hsl(195_100%_75%)]/60 hover:shadow-[0_10px_50px_-20px_hsla(180,100%,50%,0.6)]">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_0%,hsla(300,100%,50%,0.2),transparent_40%),radial-gradient(circle_at_70%_100%,hsla(180,100%,50%,0.2),transparent_40%)]" />
              <div className="relative">
                <div className="text-4xl">{s.icon}</div>
                <h4 className="mt-4 text-xl font-semibold text-white">{s.title}</h4>
                <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
