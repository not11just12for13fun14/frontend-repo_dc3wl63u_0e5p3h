import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_1px_0_rgba(255,255,255,0.2)_inset,0_0_30px_-10px_hsla(280,100%,34%,0.6)]">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧠</span>
              <span className="font-semibold tracking-tight text-white drop-shadow-[0_0_20px_hsla(180,100%,50%,0.6)]">
                AI Precision Marketing
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('home')} className="text-white/80 hover:text-white transition-colors">Home</button>
              <button onClick={() => scrollTo('services')} className="text-white/80 hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollTo('testimonials')} className="text-white/80 hover:text-white transition-colors">Testimonials</button>
              <button onClick={() => scrollTo('contact')} className="text-white/80 hover:text-white transition-colors">Contact</button>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-[hsl(280_100%_34%)] via-[hsl(300_100%_50%)] to-[hsl(180_100%_50%)] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_15px_hsla(300,100%,50%,0.6),0_0_30px_hsla(180,100%,50%,0.4)] hover:scale-[1.02] hover:shadow-[0_0_20px_hsla(300,100%,50%,0.8),0_0_40px_hsla(180,100%,50%,0.6)] transition-all">Get Started</a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {['home','services','testimonials','contact'].map((id)=> (
                <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left text-white/80 hover:text-white">{id.charAt(0).toUpperCase()+id.slice(1)}</button>
              ))}
              <button onClick={() => scrollTo('contact')} className="w-full mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[hsl(280_100%_34%)] via-[hsl(300_100%_50%)] to-[hsl(180_100%_50%)] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_15px_hsla(300,100%,50%,0.6),0_0_30px_hsla(180,100%,50%,0.4)]">Get Started</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
