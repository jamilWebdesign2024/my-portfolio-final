
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
  FiDownload,
} from "react-icons/fi";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#about" },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav className="relative mx-auto flex max-w-[1600px] items-center justify-between rounded-full border border-white/[0.08] bg-zinc-950/85 px-5 py-3 backdrop-blur-xl sm:px-7">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Jamil Uddin homepage"
          className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white"
        >
          <span className="text-emerald-400">J</span>
          <span className="hidden sm:inline">JISHAN<span className="text-emerald-400">.</span></span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-emerald-400 xl:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="rounded-full p-2.5 text-white transition hover:bg-white/10"
          >
            {isDark ? <FiSun size={19} /> : <FiMoon size={19} />}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 transition hover:bg-emerald-400 sm:flex"
          >
            Resume <FiDownload size={15} />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="rounded-full p-2 text-white hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-emerald-400"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-zinc-950 sm:hidden"
              >
                Download Resume <FiDownload size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
