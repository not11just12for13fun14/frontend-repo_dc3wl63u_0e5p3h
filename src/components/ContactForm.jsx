import React, { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', business: '', email: '', problem: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => {
      setStatus('Thanks! We\'ll reach out shortly.')
    }, 800)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Let\'s talk</h3>
            <p className="mt-3 text-white/70">Tell us where automations could save you the most time.</p>
            <ul className="mt-6 space-y-3 text-white/70">
              <li>• Lead intake & qualification</li>
              <li>• Content & ads at scale</li>
              <li>• CRM updates & follow-up</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-white/80">Name</label>
                <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[hsl(195_100%_75%)]" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-white/80">Business</label>
                <input name="business" value={form.business} onChange={onChange} className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[hsl(195_100%_75%)]" placeholder="Company Inc." />
              </div>
              <div>
                <label className="text-sm text-white/80">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[hsl(195_100%_75%)]" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-white/80">What\'s the biggest time sink right now?</label>
                <textarea name="problem" value={form.problem} onChange={onChange} rows="4" className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[hsl(195_100%_75%)]" placeholder="Describe your process..." />
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[hsl(280_100%_34%)] via-[hsl(300_100%_50%)] to-[hsl(180_100%_50%)] px-5 py-2 font-semibold text-white shadow-[0_0_15px_hsla(300,100%,50%,0.6),0_0_30px_hsla(180,100%,50%,0.4)] hover:scale-[1.02] transition-transform">
                Send
              </button>
              {status && <p className="text-[hsl(195_100%_75%)]">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
