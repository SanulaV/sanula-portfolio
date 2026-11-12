"use client";

import { type FC } from "react";
import Image from "next/image";

export const ParallaxBackground: FC = () => {

  return (
    <section className="hero-backdrop absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div className="absolute inset-0 -z-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/sanula-hero-background.jpg"
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
          >
            <source src="/assets/sanula-hero-background.mp4" type="video/mp4" />
          </video>
          <Image
            src="/assets/mobile-hero-background.jpg"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:hidden"
          />
        </div>
        <div aria-hidden className="absolute inset-0 -z-40 bg-gradient-to-b from-black/5 via-primary/15 to-primary/80" />
      </div>
    </section>
  );
};
