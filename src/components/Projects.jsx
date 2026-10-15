
import { motion } from "motion/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "BuyNest",
    category: "E-commerce",
    description:
      "A modern online bookstore with authentication and a responsive shopping experience.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "NextAuth"],
    live: "https://buy-nest-ruby.vercel.app",
    github: "https://github.com/jamilWebdesign2024/buyNest",
    number: "01",
    accent: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    title: "Study Sphere",
    category: "Education Platform",
    description:
      "A collaborative study platform featuring student, tutor, and admin dashboards.",
    tech: ["React", "React Query", "Express.js", "MongoDB", "Firebase"],
    live: "https://study-sphere-fb1d4.web.app",
    github: "https://github.com/jamilWebdesign2024/study-client",
    number: "02",
    accent: "from-blue-500/20 to-violet-500/10",
  },
  {
    title: "Athletic Club",
    category: "Sports Management",
    description:
      "A sports club management application built with a responsive frontend and backend integration.",
    tech: ["React", "Firebase", "Node.js", "Express.js", "MongoDB"],
    live: "https://athletic-club-c3623.web.app",
    github: "https://github.com/jamilWebdesign2024/Athletic-web-client",
    number: "03",
    accent: "from-orange-500/20 to-rose-500/10",
  },
];

export default function Projects() {
  return (
    <section id="work" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// SELECTED PROJECTS</p>

        <h2 className="section-title">
          Featured <span className="text-emerald-400">Work</span>
        </h2>

        <p className="section-description">
          A selection of projects I've built while learning and applying
          modern web development technologies.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40"
            >
              <div
                className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${project.accent}`}
              >
                <span className="text-7xl font-bold tracking-tighter text-white/10 transition duration-300 group-hover:scale-110">
                  {project.number}
                </span>

                <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300 backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold transition group-hover:text-emerald-400">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 px-2 py-1 text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                  >
                    Live Demo <FiExternalLink />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                    >
                      <FiGithub /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
