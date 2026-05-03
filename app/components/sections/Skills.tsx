"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/app/lib/data";

const CATEGORIES = [
  {
    key: "frontend" as const,
    label: "Frontend",
    color: "text-acid",
    dot: "bg-acid",
  },
  {
    key: "backend" as const,
    label: "Backend",
    color: "text-sky",
    dot: "bg-sky",
  },
  {
    key: "devops" as const,
    label: "DevOps",
    color: "text-amber",
    dot: "bg-amber",
  },
  {
    key: "tools" as const,
    label: "Tools",
    color: "text-secondary",
    dot: "bg-secondary",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-acid tracking-widest uppercase">
            04 / Skills
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans text-4xl md:text-5xl font-bold text-primary mb-16"
        >
          My <span className="text-gradient-acid">Stack</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, ci) => {
            const skills = SKILLS[cat.key];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + ci * 0.08 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
                  <span
                    className={`font-mono text-xs tracking-widest uppercase ${cat.color}`}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Skill list */}
                <div className="flex flex-col gap-2">
                  {skills.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.2 + ci * 0.06 + si * 0.03,
                      }}
                      className="group flex items-center gap-3 py-2 border-b border-border/50 hover:border-muted transition-colors cursor-default"
                    >
                      <span className="w-1 h-1 rounded-full bg-tertiary group-hover:bg-acid transition-colors" />
                      <span className="font-mono text-sm text-secondary group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
