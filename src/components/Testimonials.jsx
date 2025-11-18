import React from 'react'

const testimonials = [
  {
    name: 'Marisa K.',
    company: 'Local Boutique (Stony Plain)',
    quote: 'They automated our content calendar and follow-ups — I finally have my evenings back!'
  },
  {
    name: 'Darren L.',
    company: 'Home Services (Spruce Grove)',
    quote: 'Our booking pipeline runs itself now. Real savings and happier customers.'
  },
  {
    name: 'Janelle P.',
    company: 'Cafe Owner (Parkland County)',
    quote: 'Weekly promos and email campaigns — created and scheduled in minutes.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-white">Local Wins</h3>
        <p className="mt-3 text-center text-white/70">Real stories from our neighbors</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_20px_hsla(280,100%,34%,0.25)]">
              <div className="absolute -inset-0.5 rounded-2xl bg-[conic-gradient(from_0deg_at_50%_50%,hsla(300,100%,50%,0.25),hsla(180,100%,50%,0.25),transparent_60%)] opacity-0 blur-md transition-opacity hover:opacity-100 pointer-events-none" />
              <div className="relative">
                <p className="text-white/80">“{t.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-[hsl(195_100%_75%)] drop-shadow-[0_0_12px_hsla(180,100%,50%,0.6)]">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
