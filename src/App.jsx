import React from 'react'
import DataStream from './components/DataStream'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-[hsl(240_10%_4%)] text-white">
      <DataStream />

      <Header />

      <main>
        <Hero />
        <Services />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </div>
  )
}

export default App
