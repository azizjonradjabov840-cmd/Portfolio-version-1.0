import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '../utils/cn'

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-20">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass px-4 py-2 rounded-full mb-8 flex items-center gap-2 text-sm font-medium text-cyan-400 border-cyan-500/20"
      >
        <Sparkles size={14} className="animate-pulse" />
        <span>Available for Freelance & Full-time Roles</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
      >
        <span className="text-gradient">Building Scalable Web Apps</span>
        <br />
        <span className="text-white">& Architecting Digital Growth.</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed"
      >
        <span className="text-white font-semibold">Azizjon Radjabov:</span> A hybrid specialist in React.js Development and Meta Ads Strategy. I build autonomous AI agents and high-converting digital ecosystems.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button className={cn(
          "group relative flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full",
          "hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shimmer-btn"
        )}>
          Explore My Work
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
