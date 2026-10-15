import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Styling & Tools",
    skills: ["Tailwind CSS", "DaisyUI", "Shadcn UI", "Git", "GitHub", "Figma"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "Firebase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// WHAT I WORK WITH</p>

        <h2 className="section-title">
          Technical <span className="text-emerald-400">Skills</span>
        </h2>

        <p className="section-description">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="mb-5 text-lg font-semibold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-emerald-400/15 bg-emerald-400/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}