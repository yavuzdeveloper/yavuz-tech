"use client";

import { EXPERIENCE } from "@/app/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ExperienceItem({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-border last:border-0 hover:bg-surface/40 transition-colors -mx-6 px-6 rounded-sm"
    >
      {/* Left: meta */}
      <div>
        <p className="font-mono text-xs text-acid tracking-wider mb-2">
          {item.period}
        </p>
        <p className="font-mono text-xs text-tertiary">{item.location}</p>
      </div>

      {/* Right: content */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-sans text-xl font-bold text-primary">
              {item.role}
            </h3>
            <p className="font-sans text-secondary mt-0.5">{item.company}</p>
          </div>
          <span className="shrink-0 px-2.5 py-1 bg-acid/10 border border-acid/20 rounded font-mono text-[11px] text-acid">
            {item.highlight}
          </span>
        </div>

        <p className="font-sans text-secondary leading-relaxed mb-4 max-w-2xl">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.stack.map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-surface border border-border rounded font-mono text-[11px] text-tertiary group-hover:border-muted transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Line indicator */}
      <div className="absolute left-0 top-0 w-px h-0 bg-acid group-hover:h-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-acid tracking-widest uppercase">
            02 / Experience
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans text-4xl md:text-5xl font-bold text-primary mb-12"
        >
          Where I've <span className="text-gradient-acid">Built</span> Things
        </motion.h2>

        <div>
          {EXPERIENCE.map((item, i) => (
            <ExperienceItem key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
