"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, PERSONAL } from "@/app/lib/data";
import { useTheme } from "../ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}

          <div className="flex items-center gap-2">
            <img
              src="/icon"
              alt="YT Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <a href="#" className="font-mono text-sm text-acid tracking-widest">
              {PERSONAL.name.split(" ")[0].toLowerCase()}.tech
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs text-secondary hover:text-primary transition-colors tracking-wider uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-8 h-8 flex items-center justify-center rounded border border-border hover:border-muted text-secondary hover:text-primary transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}{" "}
                {/* ✅ ikonları göster */}
              </button>
            )}

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-acid text-ink font-mono text-xs font-semibold rounded hover:bg-acid/90 transition-all tracking-wide"
            >
              Hire Me
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center text-secondary hover:text-primary"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-md pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 pt-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-3xl font-bold text-primary hover:text-acid transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setMenuOpen(false)}
                className="mt-4 self-start px-6 py-3 bg-acid text-ink font-mono text-sm font-semibold rounded"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
