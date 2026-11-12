import { type Service } from "@/types/portfolio-types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Website Building",
    description:
      "I build clear, responsive websites for people, projects, and businesses, with a focus on making them easy to use on phones and computers.",
    icon: "/assets/logos/react.svg",
    bullets: [
      "Personal and portfolio websites",
      "Small business and tourism websites",
      "Responsive layouts for mobile and desktop",
    ],
  },
  {
    id: 2,
    title: "Social Media Management",
    description:
      "I help manage social media pages through consistent publishing and day-to-day page management. I have experience managing pages with a combined audience of over 1.2 million followers.",
    icon: "/assets/socials/facebook.png",
    bullets: [
      "Page management and regular posting",
      "Content planning and organization",
      "Experience with pages reaching 1.2M+ followers combined",
    ],
  },
];
