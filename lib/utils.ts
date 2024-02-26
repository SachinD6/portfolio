import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const projects = [
  {
    projectTitle: "code2snap",
    projectData: {
      liveURL: "https://code2snap.vercel.app/",
      githubURL: "https://github.com/SachinD6/code2snap",
      relatedLinks: [],
    },
    description: [
      "Convert your code snippets into visually appealing images.",
      "Customize syntax colors, toggle background visibility, and switch between dark and light themes effortlessly.",
    ],
    tech: ["Next.js", "Typescript", "Shadcn/ui", "react-ace"],
    status: "Complete",
  },
  {
    projectTitle: "hit-track",
    projectData: {
      liveURL: "",
      githubURL: "https://github.com/SachinD6/hit-track",
      relatedLinks: [],
    },
    description: [
      "Website analytics tool to track user interactions and events on your website.",
      "Tracks views, geo-location, and user interactions.",
      "Built using Next.js, Redis & Upstash."
    ],
    tech: ["Next.js", "Typescript", "Redis", "Aceternity UI"],
    status: "InProgress",
  },
  {
    projectTitle: "disney plus clone",
    projectData: {
      liveURL: "",
      githubURL: "https://github.com/SachinD6/Dmovie",
      relatedLinks: [],
    },
    description: [
      "A clone of disney plus UI built using React and styled-components.",
    ],
    tech: ["Next.js", "Styled Components", "Javascript"],
    status: "Complete",
  },
];
