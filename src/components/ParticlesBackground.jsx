
import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="portfolio-particles"
      className="pointer-events-none fixed inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 40,
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
            },
          },
          color: {
            value: ["#ffffff", "#a7f3d0", "#6ee7b7"],
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.5,
            },
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
