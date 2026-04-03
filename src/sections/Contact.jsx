import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="relative glass rounded-[40px] p-12 md:p-24 overflow-hidden text-center">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/10 blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-indigo-500/10 blur-[120px] -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">Let's Connect</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to bring your next project to life? Whether it's a high-performance web app 
            or a strategic marketing campaign, I'm here to help.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:azizjonradjabov840@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all hover:scale-105"
            >
              <Mail size={20} />
              Say Hello
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/azizjonradjabov840-cmd", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/azizjon-radjabov-b09ab9397?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
                { icon: Send, href: "https://t.me/linux_65", label: "Telegram" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-cyan-400 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <p className="text-slate-500 text-sm">
            Based in International / Remote. Available worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
