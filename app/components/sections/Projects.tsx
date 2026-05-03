"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { PROJECTS } from "@/app/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-surface border border-border rounded-lg p-6 md:p-8 hover:border-muted transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-acid/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-tertiary">
            {project.year}
          </span>
          {project.featured && (
            <span className="px-2 py-0.5 bg-acid/10 border border-acid/25 rounded-full font-mono text-[10px] text-acid tracking-wider">
              Featured
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-border hover:border-muted text-secondary hover:text-primary rounded transition-all"
          >
            <FaGithub size={14} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-border hover:border-acid hover:text-acid text-secondary rounded transition-all"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-sans text-xl md:text-2xl font-bold text-primary mb-3 flex items-center gap-2">
        {project.title}
        <HiOutlineArrowNarrowUp
          size={18}
          className="text-tertiary opacity-0 group-hover:opacity-100 group-hover:text-acid transition-all -translate-y-1 translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-1.5"
        />
      </h3>

      {/* Description */}
      <p className="font-sans text-secondary leading-relaxed mb-6 text-sm md:text-base">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map(tech => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-ink border border-border rounded font-mono text-[11px] text-tertiary group-hover:border-muted transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = PROJECTS.filter(p => p.featured);
  const others = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-acid tracking-widest uppercase">
            03 / Projects
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans text-4xl md:text-5xl font-bold text-primary mb-12"
        >
          Things I've <span className="text-gradient-acid">Shipped</span>
        </motion.h2>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            {others.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i + featured.length}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
