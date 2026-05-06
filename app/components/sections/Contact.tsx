"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoMdSend, IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { PERSONAL } from "@/app/lib/data";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-acid tracking-widest uppercase">
            05 / Contact
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Let's Build
              <br />
              <span className="text-gradient-acid">Something</span>
              <br />
              Great.
            </h2>
            <p className="font-sans text-secondary text-lg leading-relaxed mb-10 max-w-md">
              I'm currently open to new roles, freelance projects, and technical
              collaborations. Whether it's a full-time position or a side
              project — let's talk.
            </p>

            {/* Email */}
            <div className="mb-8">
              <p className="font-mono text-xs text-tertiary tracking-wider mb-3">
                EMAIL
              </p>
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 text-primary hover:text-acid transition-colors"
              >
                <IoMdMail
                  size={16}
                  className="text-tertiary group-hover:text-acid transition-colors"
                />
                <span className="font-mono text-base">{PERSONAL.email}</span>
                <span
                  className={`font-mono text-xs transition-all ${copied ? "text-acid opacity-100" : "text-tertiary opacity-0 group-hover:opacity-100"}`}
                >
                  {copied ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-xs text-tertiary tracking-wider mb-3">
                FIND ME ON
              </p>
              <div className="flex gap-3">
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 border border-border hover:border-acid rounded transition-all"
                >
                  <FaGithub
                    size={14}
                    className="text-secondary group-hover:text-acid transition-colors"
                  />
                  <span className="font-mono text-xs text-secondary group-hover:text-acid transition-colors">
                    GitHub
                  </span>
                </a>
                <a
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 border border-border hover:border-acid rounded transition-all"
                >
                  <FaLinkedin
                    size={14}
                    className="text-secondary group-hover:text-acid transition-colors"
                  />
                  <span className="font-mono text-xs text-secondary group-hover:text-acid transition-colors">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (status === "sent") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          to_name: "Yavuz Tokus",
          from_email: formData.email,
          to_email: "yavuztokus2010@gmail.com",
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("sent");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again later.");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4 border border-acid/30 rounded-lg bg-acid/5 relative">
        <div className="w-12 h-12 rounded-full bg-acid/20 flex items-center justify-center">
          <IoMdSend size={20} className="text-acid" />
        </div>
        <p className="font-mono text-sm text-acid">
          Message sent — I'll be in touch soon.
        </p>

        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", message: "" });
          }}
          className="mt-4 px-5 py-2 border border-acid/50 rounded-full hover:bg-acid/10 transition-all font-mono text-xs text-acid flex items-center gap-2 group"
        >
          <IoMdMail
            size={14}
            className="group-hover:scale-110 transition-transform"
          />
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {[
        { id: "name", label: "NAME", type: "text", placeholder: "Your name" },
        {
          id: "email",
          label: "EMAIL",
          type: "email",
          placeholder: "you@company.com",
        },
      ].map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <label
            htmlFor={id}
            className="block font-mono text-xs text-tertiary tracking-wider mb-2"
          >
            {label}
          </label>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            required
            value={formData[id as keyof typeof formData]}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full bg-surface border border-border rounded px-4 py-3 font-mono text-sm text-primary placeholder:text-tertiary focus:outline-none focus:border-acid/50 transition-colors disabled:opacity-50"
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs text-tertiary tracking-wider mb-2"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about the project or opportunity..."
          required
          value={formData.message}
          onChange={handleChange}
          disabled={status === "sending"}
          className="w-full bg-surface border border-border rounded px-4 py-3 font-mono text-sm text-primary placeholder:text-tertiary focus:outline-none focus:border-acid/50 transition-colors resize-none disabled:opacity-50"
        />
      </div>

      {status === "error" && (
        <div className="text-red-400 font-mono text-xs bg-red-400/10 border border-red-400/30 rounded px-3 py-2">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group flex items-center justify-center gap-3 w-full py-3.5 bg-acid hover:bg-acid/90 text-ink font-mono text-sm font-bold rounded active:scale-95 transition-all disabled:opacity-60"
      >
        {status === "sending" ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>
            Send Message
            <FaArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>
    </form>
  );
}
