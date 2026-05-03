"use client";

import { PERSONAL } from "@/app/lib/data";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineArrowDownRight } from "react-icons/hi2";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 section-padding overflow-hidden">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #a8ff3e 1.2px, transparent 1.2px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-ink pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-acid/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-acid/30 bg-acid/5">
            <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
            <span className="font-mono text-xs text-acid tracking-wider">
              {PERSONAL.availability}
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-sans font-bold leading-none tracking-tight mb-6"
        >
          <span className="block text-[clamp(48px,8vw,120px)] text-primary">
            {PERSONAL.name.split(" ")[0]}
          </span>
          <span className="block text-[clamp(48px,8vw,120px)] text-gradient">
            {PERSONAL.name.split(" ")[1]}
          </span>
        </motion.h1>

        {/* Role + tagline */}
        <motion.div
          {...fadeUp(0.35)}
          className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 mb-16"
        >
          <div>
            <p className="font-mono text-sm text-acid mb-2 tracking-widest uppercase">
              {PERSONAL.role}
            </p>
            <p className="font-sans text-lg md:text-xl text-secondary max-w-lg leading-relaxed">
              {PERSONAL.tagline}
            </p>
          </div>

          {/* Stats with CountUp animation */}
          <div className="flex gap-8 md:ml-auto">
            <div className="text-center">
              <div className="font-mono text-2xl font-bold text-primary">
                <CountUp start={0} end={PERSONAL.yearsExp} duration={3} />+
              </div>
              <div className="font-mono text-xs text-tertiary tracking-wide mt-1">
                Years exp.
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl font-bold text-primary">
                <CountUp start={0} end={50} duration={3} />+
              </div>
              <div className="font-mono text-xs text-tertiary tracking-wide mt-1">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl font-bold text-primary">
                <CountUp start={0} end={99} duration={3} />%
              </div>
              <div className="font-mono text-xs text-tertiary tracking-wide mt-1">
                Uptime avg.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="#work"
              className="group flex items-center gap-2 px-6 py-3 bg-acid text-ink font-mono text-sm font-bold rounded hover:bg-acid/90 active:scale-95 transition-all"
            >
              View My Work
              <HiOutlineArrowDownRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border hover:border-muted text-secondary hover:text-primary font-mono text-sm rounded transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Social + location */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-tertiary font-mono text-xs mr-4">
              <IoLocationOutline size={11} />
              <span>{PERSONAL.location}</span>
            </div>
            {[
              { href: PERSONAL.github, icon: FaGithub },
              { href: PERSONAL.linkedin, icon: FaLinkedin },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-border hover:border-acid hover:text-acid text-secondary rounded transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
