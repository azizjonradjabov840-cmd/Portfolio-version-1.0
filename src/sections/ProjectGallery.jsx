import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A headless commerce solution with Next.js and Shopify API.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "Shopify"],
    link: "#",
    github: "#"
  },
  {
    title: "Utility Dashboard",
    description: "Custom admin panel for managing internal company operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Firebase", "Ant Design"],
    link: "#",
    github: "#"
  },
  {
    title: "AI Chat Interface",
    description: "Minimalist UI for LLM interactions with streaming responses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
    tags: ["OpenAI", "Vite", "Framer Motion"],
    link: "#",
    github: "#"
  }
]

const ProjectGallery = () => {
  return (
    <section id="projects-more" className="py-20">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-4">Other Projects</h2>
          <p className="text-slate-400">A collection of various web experiments and utilities.</p>
        </div>
        <a href="#" className="text-sm font-medium text-cyan-400 hover:underline">View All Projects</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden glass border-white/5"
          >
            {/* Project Image */}
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold text-slate-500">{tag}</span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex items-center gap-4">
                <a href={project.link} className="flex items-center gap-1 text-xs font-bold hover:text-cyan-400 transition-colors">
                  <ExternalLink size={14} /> DEMO
                </a>
                <a href={project.github} className="flex items-center gap-1 text-xs font-bold hover:text-cyan-400 transition-colors">
                  <Github size={14} /> CODE
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectGallery
