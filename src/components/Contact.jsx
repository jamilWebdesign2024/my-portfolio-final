
import { motion } from "motion/react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

const contacts = [
  {
    icon: FiMail,
    label: "Email",
    value: "jamiluddinjishan@gmail.com",
    href: "mailto:jamiluddinjishan@gmail.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/md-jamil2",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/jamilWebdesign2024",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// LET'S CONNECT</p>

        <h2 className="section-title">
          Let's Build Something{" "}
          <span className="text-emerald-400">Great</span>
        </h2>

        <p className="section-description">
          I'm open to frontend development opportunities, junior developer
          roles, and interesting projects. If you think we could work
          together, feel free to reach out.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contacts.map(({ icon: Icon, label, value, href }, index) => (
            <motion.a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/40 hover:bg-emerald-400/[0.04]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-xl text-emerald-400">
                <Icon />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm text-gray-400">
                  {label}
                </span>
                <span className="mt-1 block break-words text-sm font-medium">
                  {value}
                </span>
              </span>

              <FiArrowUpRight className="shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400" />
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
          <FiMapPin className="text-emerald-400" />
          Chattogram, Bangladesh
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-6 text-center sm:p-10">
          <h3 className="text-xl font-semibold sm:text-2xl">
            Have an opportunity in mind?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400">
            Let's talk about how I can contribute to your team and grow
            through meaningful work.
          </p>

          <a
            href="mailto:jamiluddinjishan@gmail.com?subject=Development%20Opportunity"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-gray-950 transition hover:bg-emerald-300"
          >
            Get in Touch <FiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
