import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Monitor, 
  Palette, 
  Database, 
  Share2, 
  Cloud,
  Layers,
  Zap
} from 'lucide-react'

const icons = [
  { name: 'React', icon: Code2, color: 'text-cyan-400' },
  { name: 'Python', icon: Monitor, color: 'text-blue-500' },
  { name: 'Tailwind', icon: Zap, color: 'text-sky-400' },
  { name: 'Git', icon: Share2, color: 'text-orange-500' },
  { name: 'Meta Ads', icon: Palette, color: 'text-indigo-500' },
  { name: 'Blender', icon: Database, color: 'text-orange-400' },
  { name: 'Node.js', icon: Layers, color: 'text-green-500' },
  { name: 'Vercel', icon: Cloud, color: 'text-white' },
]

const TechStack = () => {
  return (
    <section className="py-20 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-16 text-gradient"
      >
        My Tech Stack
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 w-full max-w-6xl">
        {icons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center gap-4 group cursor-pointer"
          >
            <div className={`w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all ${item.color}`}>
              <item.icon size={32} />
            </div>
            <span className="text-sm font-medium text-slate-500 group-hover:text-white transition-colors">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
