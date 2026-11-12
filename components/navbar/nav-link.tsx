"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { SPRING_SNAPPY } from "@/animations/ui-animations";
import { type NavLinkProps } from "@/types/navigation-types";

export const NavLink: FC<NavLinkProps> = ({
  href,
  label,
  active,
  onClick,
}) => {
  return (
    <li className="nav-li relative">
      <a
        href={href}
        onClick={onClick}
        aria-current={active ? "page" : undefined}
        className={`nav-link relative block w-full py-2 sm:w-auto sm:py-0 ${active ? "text-white" : ""}`}
      >
        {label}
        {active && (
          <motion.span
            layoutId="active-nav"
            transition={SPRING_SNAPPY}
            className="absolute -bottom-1 left-0 right-0 mx-auto h-px w-6 bg-gradient-to-r from-coral to-lavender"
          />
        )}
      </a>
    </li>
  );
};
