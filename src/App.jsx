import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import BentoGrid from './sections/BentoGrid'
import TechStack from './sections/TechStack'
import ProjectGallery from './sections/ProjectGallery'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Effect */}
      <div className="fixed inset-0 mesh-gradient opacity-40 pointer-events-none" />
      
      <Navbar />
      
      <main className="relative z-10 container mx-auto px-6 pt-24 space-y-32 pb-20">
        <Hero />
        <BentoGrid />
        <TechStack />
        <ProjectGallery />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-10 text-center text-slate-500 text-sm border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Azizjon Radjabov. Built with React & Framer Motion.</p>
      </footer>
    </div>
  )
}

export default App
