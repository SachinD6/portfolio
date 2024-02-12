import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
interface Project {
  title: string;
  description: string;
  livePreviewUrl?: string;
  githubRepoUrl?: string;
  techsUsed?: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const projects: Project[] = [
  {
    title: "code2snap",
    description:"Convert your code snippets into visually appealing images. Customize syntax colors, toggle background visibility, and switch between dark and light themes effortlessly.",
    livePreviewUrl: "https://code2snap.vercel.app/",
    techsUsed: "Next.js, Typescript, Shadcn/ui, react-ace",
    githubRepoUrl: "https://github.com/SachinD6/code2snap"
  },
  {
    title: "supabase-next-ssr-auth",
    description:"A boilerplate for next.js with supabase for authentication and SSR.",
    // livePreviewUrl: "",
    techsUsed: "Next.js, Typescript, Supabase, Shadcn/ui",
    githubRepoUrl: "https://github.com/SachinD6/supabase-ssr-auth"
  },
  // {
  //   title: "saasly", 
  //   description:"A saas website with stripe subscription integration and supabase for authentication and database.",
  //   // livePreviewUrl: "",
  //   githubRepoUrl:"https://github.com/SachinD6/saasly",
  //   techsUsed: "Next.js, Typescript, Supabase, Stripe, Shadcn/ui"
  // },
  {
    title: "disney plus clone",
    description:
      "A clone of disney plus UI built using React and styled-components.",
    // livePreviewUrl: "",
    techsUsed: "Next.js, Styled Components, Javascript",
    githubRepoUrl: "https://github.com/SachinD6/Dmovie"
  },
 
];