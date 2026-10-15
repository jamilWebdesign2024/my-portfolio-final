import { motion } from "motion/react";
import { FiCode, FiLayers, FiTarget } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Writing readable, maintainable, and reusable code.",
  },
  {
    icon: FiLayers,
    title: "Full-Stack Mindset",
    description: "Building responsive interfaces and learning backend systems.",
  },
  {
    icon: FiTarget,
    title: "Continuous Learning",
    description: "Improving my skills through practical projects and challenges.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// GET TO KNOW ME</p>

        <h2 className="section-title">
          About <span className="text-emerald-400">Me</span>
        </h2>

        <p className="section-description">
          I'm Md Jamil Uddin, a frontend developer from Chattogram,
          Bangladesh. I enjoy creating modern, responsive web experiences
          using React and Next.js. I'm also expanding my skills in backend
          development and databases to become a well-rounded full-stack
          developer.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/40"
            >
              <Icon className="mb-4 text-2xl text-emerald-400" />
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-7 text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}