
import { motion } from "motion/react";
import { FiBookOpen, FiAward } from "react-icons/fi";


const timeline = [
  {
    icon: FiBookOpen,
    title: "MERN Stack Web Development",
    organization: "Programming Hero",
    period: "Completed — July 2025",
    description:
      "Completed practical training in modern web development, including React, Node.js, Express.js, MongoDB, authentication, and project development.",
  },
  {
    icon: FiAward,
    title: "Diploma in Engineering — Electronics",
    organization: "Chittagong Polytechnic Institute",
    period: "2020 — Present",
    description:
      "Studying Electronics Technology while developing practical programming skills and building web development projects.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// MY LEARNING JOURNEY</p>

        <h2 className="section-title">
          Education & <span className="text-emerald-400">Experience</span>
        </h2>

        <div className="relative mt-10 space-y-6 border-l border-emerald-400/30 pl-6">
          {timeline.map(({ icon: Icon, title, organization, period, description }) => (
            <article
              key={title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="absolute -left-[31px] top-7 flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />

              <Icon className="mb-4 text-2xl text-emerald-400" />

              <p className="mb-2 text-sm text-emerald-300">{period}</p>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-400">{organization}</p>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}