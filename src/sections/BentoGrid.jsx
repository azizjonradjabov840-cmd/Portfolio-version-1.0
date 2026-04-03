import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Megaphone, ShieldCheck, Code2, ArrowUpRight } from 'lucide-react'
import { cn } from '../utils/cn'

const BentoCard = ({ title, description, icon: Icon, size, children, className }) => (
  <motion.div
    whileHover={{ scale: 0.98 }}
    transition={{ duration: 0.3 }}
    className={cn(
      "glass rounded-3xl p-8 relative group overflow-hidden border-white/5",
      size === 'lg' ? 'md:col-span-2 md:row-span-2 h-[500px]' : 
      size === 'md' ? 'md:col-span-1 md:row-span-2 h-[500px]' : 
      'md:col-span-1 md:row-span-1 h-[240px]',
      className
    )}
  >
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
      
      {children}

      <div className="absolute top-8 right-8 text-slate-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
        <ArrowUpRight size={24} />
      </div>
    </div>
  </motion.div>
)

const BentoGrid = () => {
  return (
    <section id="projects" className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
        {/* Large Card: AI Agent */}
        <BentoCard
          size="lg"
          title="Aether-OS"
          description="An autonomous AI agent with advanced screen vision and control capabilities. Built for seamless workflow automation."
          icon={Cpu}
          className="bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent"
        >
          <div className="mt-auto pt-6 flex gap-2">
            <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">Python</span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">PyTorch</span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">OpenCV</span>
          </div>
        </BentoCard>

        {/* Medium Card: Marketing */}
        <BentoCard
          size="md"
          title="Growth Marketing"
          description="Specializing in Meta Ads and benchmark analysis for international scaling and ROI optimization."
          icon={Megaphone}
          className="bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent"
        >
          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">Meta Ads</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">Growth</span>
            </div>
          </div>
        </BentoCard>

        {/* Small Card: Web Dev */}
        <BentoCard
          size="sm"
          title="Modern Web Architecture"
          description="Expert in building lightning-fast, production-ready web applications using React, Vite, and Tailwind CSS. Focused on clean code, performance optimization, and creating seamless user experiences that drive business results."
          icon={Code2}
        />

        {/* Medium Card: Cybersecurity */}
        <BentoCard
          size="md"
          title="System Security"
          description="Expertise in Ethical Hacking (Red/Blue Team) and system security auditing."
          icon={ShieldCheck}
          className="bg-gradient-to-bl from-red-500/10 via-transparent to-transparent"
        >
          <div className="mt-auto pt-6 font-mono text-xs text-green-500/60 overflow-hidden whitespace-nowrap">
            {`> access_granted: true`} <br />
            {`> kernel_version: 5.15.0-x64`} <br />
            {`> initializing_payload...`}
          </div>
        </BentoCard>
      </div>
    </section>
  )
}

export default BentoGrid
