
import { motion } from "motion/react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";
import Terminal from "./Terminal";

const technologies = [
  { label: "React · Next.js", icon: FiCode },
  { label: "MERN Stack", icon: FiLayers },
  { label: "MongoDB · PostgreSQL", icon: FiDatabase },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] items-center gap-12 px-5 pb-16 pt-36 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:pt-32"
    >
      {/* Left: introduction */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 font-mono text-xs text-zinc-400"
        >
          <span className="text-emerald-400">$</span>
          <span>jamil.dev</span>
          <span className="text-zinc-700">/</span>
          <span>portfolio</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-zinc-400 sm:text-base"
        >
          MD JAMIL UDDIN
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-zinc-50 sm:text-6xl md:text-7xl xl:text-[88px]"
        >
          Frontend
          <br />
          <span className="relative inline-block">
            Developer
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-emerald-400 sm:-bottom-2 sm:h-[5px]"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9"
        >
          I build responsive, user-friendly web experiences with React,
          Next.js, and modern web technologies. I enjoy turning ideas into
          clean, functional, and engaging digital products.
        </motion.p>

        {/* Technology badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-7 flex flex-wrap gap-3"
        >
          {technologies.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2.5 text-xs text-zinc-400 transition hover:border-emerald-400/40 hover:text-emerald-300 sm:text-sm"
            >
              <Icon size={16} className="shrink-0 text-emerald-400" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            Explore My Work <FiArrowUpRight size={17} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
          >
            Let's Talk <FiArrowDownRight size={17} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-xs tracking-wide text-zinc-600"
        >
          BASED IN CHATTOGRAM, BANGLADESH
        </motion.p>
      </div>

      {/* Right: animated terminal */}
      <div className="relative z-10 w-full min-w-0">
        <div className="pointer-events-none absolute -inset-5 rounded-full bg-emerald-500/[0.06] blur-3xl" />
        <Terminal />
      </div>
    </section>
  );
}
