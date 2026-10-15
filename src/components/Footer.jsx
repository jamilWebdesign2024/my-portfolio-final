
import { motion } from "motion/react";
import {
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiArrowUp,
  FiMail,
  FiCode,
} from "react-icons/fi";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jamilWebdesign2024",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-jamil2",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:jamiluddinjishan@gmail.com",
    icon: FiMail,
  },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-16 overflow-hidden border-t border-white/10 bg-[#080d0b] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-emerald-400/[0.08] blur-[100px]" />

      <div className="relative mx-auto w-[min(100%-2rem,1100px)]">
        {/* Main CTA */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 py-14 sm:py-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-300">
              <FiCode />
              LET'S BUILD SOMETHING
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Have an idea?
              <br />
              <span className="text-emerald-400">
                Let's make it real.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
              I'm open to frontend developer opportunities and exciting
              projects. Let's connect and create something meaningful.
            </p>
          </div>

          <motion.a
            href="mailto:jamiluddinjishan@gmail.com?subject=Let's%20Work%20Together"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-[#07110c] transition hover:bg-emerald-300"
          >
            Let's Talk
            <FiArrowUpRight size={20} />
          </motion.a>
        </div>

        {/* Footer content */}
        <div className="grid gap-10 py-10 md:grid-cols-[1.5fr_1fr_1fr] md:py-12">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-2xl font-bold tracking-tight"
            >
              JAMIL
              <span className="text-emerald-400">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Frontend Developer focused on building clean, responsive,
              and user-friendly web experiences with modern technologies.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              Chattogram, Bangladesh
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              QUICK LINKS
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:pl-1 hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              CONNECT WITH ME
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Find me online or send me an email.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  aria-label={label}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>

            <a
              href="mailto:jamiluddinjishan@gmail.com"
              className="mt-4 inline-block break-all text-sm text-gray-400 transition hover:text-emerald-400"
            >
              jamiluddinjishan@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-gray-500">
            © {currentYear} Md Jamil Uddin. Crafted with care.
          </p>

          <div className="flex items-center justify-between gap-5 sm:justify-end">
            <span className="text-xs text-gray-500">
              React · Tailwind CSS · Motion
            </span>

            <a
              href="#top"
              aria-label="Back to top"
              title="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
            >
              <FiArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
