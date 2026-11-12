import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "PlantOS",
    category: "Greenhouse Monitoring · Web & Mobile · Top 6 University Showcase",
    description:
      "A greenhouse monitoring system co-founded by Sanula Vineth. PlantOS helps users monitor soil water levels and toxic gas conditions through an online dashboard and mobile app. Selected among the top six projects at a university showcase.",
    subDescription: [
      "Web and mobile interfaces for greenhouse monitoring.",
      "Soil water level monitoring.",
      "Toxic gas monitoring.",
      "Online access to greenhouse conditions.",
      "Selected among the top six projects at a university showcase.",
    ],
    href: "https://projectplantos.netlify.app/",
    logo: "",
    image: "",
    accent: "from-mint/40 to-aqua/10",
    tags: [
      { id: 1, name: "Java", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Android Studio", path: "/assets/logos/react.svg" },
      { id: 4, name: "Arduino", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 2,
    title: "Sri Lanka Tourism Website",
    category: "Website · In Development",
    description:
      "A website in development focused on Sri Lankan tourism. More details will be added as the project takes shape.",
    subDescription: [
      "Currently in development.",
      "Focused on introducing visitors to Sri Lankan tourism.",
    ],
    href: "#contact",
    logo: "",
    image: "/projects/sri-lanka-tourism-coming-soon.jpg",
    accent: "from-sand/40 to-coral/10",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
];

export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };
export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};
export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };
export const PREVIEW_WINDOW = 1;
