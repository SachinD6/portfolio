import { type ClassValue, clsx } from "clsx";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
    status: "COMPLETED",
    image: "/code2snap-thumbnail.png",
  },
  {
    projectTitle: "AI Image Transformer",
    projectData: {
      liveURL: "",
      githubURL: "https://github.com/SachinD6/hit-track",
      relatedLinks: [],
    },
    description: [
      "A web app that transforms images using AI.",
      " Built using Next.js server actions & cloudinary.",
      " The app can transform images into different art styles, generative-fill, and more on the go.",
    ],
    tech: ["Next.js", "Typescript", "Redis", "Aceternity UI"],
    status: "INPROGRESS",
    image: "/image-gallery-thumbnail.png",
  },
  {
    projectTitle: "disney plus clone",
    projectData: {
      liveURL: "",
      githubURL: "https://github.com/SachinD6/Dmovie",
      relatedLinks: [],
    },
    description: [
      "Movie app that fetches data from TMDB API.",
      "Show movies based on genres, popular movies, and more. Search for movies and view their details.",
    ],
    tech: ["Next.js", "Styled Components", "Javascript"],
    status: "COMPLETED",
    image:
      // "https://framerusercontent.com/images/iSsBxNa72M1QZTVGjcCoeviElZ8.jpg?scale-down-to=512",
      "/disney-plus.jpg",
  },
];

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sachin Chaudhary",
  url: "https://sachinchaudhary.tech",
  sameAs: [
    "https://www.linkedin.com/in/sachinxduhan",
    "https://github.com/sachind6",
    // "https://twitter.com/sachinchaudhary"
  ],
  jobTitle: "Full-Stack Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Lovely Professional University",
  },
  knowsAbout: [
    "Next.js",
    "Python",
    "JavaScript",
    "Docker",
    "AWS",
    "Generative AI",
    "DevOps",
  ],
  description:
    "Explore the portfolio of Sachin Chaudhary, a full-stack developer specializing in Next.js, Python, JavaScript, Docker, AWS, and Generative AI. Enhance your skills with expert tutorials and insights.",
  image: "https://sachinchaudhary.tech/images/home/thumbnail.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sachinchaudhary.tech",
  },
};

export const metaData = {
  title:
    "Full-Stack Developer | Next.js, React, TypeScript, DevOps & Gen AI | Sachin Chaudhary",
  description:
    "Explore the portfolio of Sachin Chaudhary, a full-stack developer specializing in Next.js, React, TypeScript, Docker, AWS, and Generative AI.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Typescript",
    "Docker",
    "AWS",
    "Generative AI",
    "DevOps",
    "Sachin Chaudhary",
  ],
  openGraph: {
    url: "https://sachinchaudhary.tech",
    type: "website",
    title:
      "Full-Stack Developer | Next.js, React, TypeScript, DevOps & Gen AI | Sachin Chaudhary",
    description:
      "Explore the portfolio of Sachin Chaudhary, a full-stack developer specializing in Next.js, React, Typescript, Docker, AWS, and Generative AI.",
    images: [
      {
        url: "https://sachinchaudhary.tech/images/home/thumbnail.png", // Replace with your image
        width: 1200,
        height: 630,
        alt: "Sachin Chaudhary Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://sachinchaudhary.tech",
  },
};
