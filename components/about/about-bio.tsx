"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";
import { HERO_LOCATION, HERO_NAME } from "@/constants/hero-constants";

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="glass gradient-border p-8 md:p-10 lg:col-span-7"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
        Who I Am
      </p>
      <h3 className="mb-4 text-2xl font-bold md:text-3xl">
        {HERO_NAME} · {HERO_LOCATION}
      </h3>
      <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
        I&apos;m an undergraduate student at SLIIT, currently progressing through
        my degree after completing Year 1, Semester 1. I&apos;m building my
        foundation in technology and exploring where I can make the most impact.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        I&apos;m especially interested in cybersecurity, networking, and computer
        systems. Alongside my studies, I co-founded PlantOS, a web and mobile
        greenhouse monitoring system, and manage social media pages with a
        combined audience of over <span className="text-white">1.2 million followers</span>.
        I&apos;m always learning, experimenting, and exploring new technology.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="btn-primary">
          <span>Start a project</span>
          <span aria-hidden>→</span>
        </a>
        <a href="#work" className="btn-ghost">
          <span>See past work</span>
        </a>
      </div>
    </motion.div>
  );
};
