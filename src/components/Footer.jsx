import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
        <p className="text-sm">© {new Date().getFullYear()} AI Precision Marketing • Stony Plain • Spruce Grove • Parkland County</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}
