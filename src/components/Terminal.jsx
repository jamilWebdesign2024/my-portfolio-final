
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FiRefreshCw } from "react-icons/fi";

const terminalLines = [
  { command: "$ whoami", output: "Md Jamil Uddin (Jishan)" },
  { command: "$ role --current", output: "Frontend Developer" },
  {
    command: "$ stack --list",
    output: "react · next.js · javascript · node.js · mongodb",
  },
  {
    command: "$ projects --featured",
    output: "BuyNest · Study Sphere · Athletic Club",
  },
  {
    command: "$ status --current",
    output: "✓ ready to build · learning · shipping",
  },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((count) => count + 1);
    }, visibleLines === 0 ? 700 : 850);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  const restartAnimation = () => setVisibleLines(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="terminal-window w-full overflow-hidden rounded-2xl border border-white/15 bg-[#101012] shadow-[0_25px_100px_rgba(0,0,0,0.4)]"
    >
      {/* Terminal title bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        <span className="font-mono text-xs text-zinc-500 sm:text-sm">
          jamil@portfolio ~
        </span>

        <button
          type="button"
          onClick={restartAnimation}
          aria-label="Replay terminal animation"
          className="rounded-md p-2 text-zinc-500 transition hover:bg-white/10 hover:text-emerald-400"
        >
          <FiRefreshCw size={16} />
        </button>
      </div>

      {/* Animated terminal content */}
      <div
        className="min-h-[300px] space-y-4 p-5 font-mono text-xs leading-6 sm:min-h-[360px] sm:p-7 sm:text-sm"
        aria-label="Animated developer profile terminal"
        aria-live="polite"
      >
        {terminalLines.slice(0, visibleLines).map((line) => (
          <motion.div
            key={line.command}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1"
          >
            <p className="break-words font-semibold text-zinc-100">
              {line.command}
            </p>

            <p className="break-words text-zinc-400">
              {line.output}
            </p>
          </motion.div>
        ))}

        {visibleLines < terminalLines.length && (
          <span className="inline-block h-4 w-2 animate-pulse bg-emerald-400" />
        )}

        {visibleLines === terminalLines.length && (
          <p className="text-emerald-400">
            <span className="mr-2">✓</span>
            <span>terminal ready</span>
            <span className="ml-1 inline-block animate-pulse">_</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
