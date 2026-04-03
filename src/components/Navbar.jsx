import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Send } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="glass rounded-full px-4 md:px-8 py-3 flex items-center justify-between overflow-hidden"
      >
        <div className="flex items-center gap-4 md:gap-8">
          <a href="#" className="text-xs md:text-sm font-medium hover:text-cyan-400 transition-colors">Home</a>
          <a href="#projects" className="text-xs md:text-sm font-medium hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#about" className="hidden sm:block text-xs md:text-sm font-medium hover:text-cyan-400 transition-colors">About</a>
          <a href="#contact" className="text-xs md:text-sm font-medium hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4 border-l border-white/10 pl-4 md:pl-8">
          <a href="https://github.com/azizjonradjabov840-cmd" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Github size={18} className="w-4 h-4 md:w-[18px] md:h-[18px]" /></a>
          <a href="https://www.linkedin.com/in/azizjon-radjabov-b09ab9397?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin size={18} className="w-4 h-4 md:w-[18px] md:h-[18px]" /></a>
          <a href="https://t.me/linux_65" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Send size={18} className="w-4 h-4 md:w-[18px] md:h-[18px]" /></a>
        </div>
      </motion.nav>
    </header>
  )
}

export default Navbar
