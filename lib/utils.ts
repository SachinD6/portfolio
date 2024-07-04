import { type ClassValue, clsx } from "clsx";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    projectTitle: "code2snap: An Innovative Project",
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
    projectTitle: "AI Image Transformer: Generative AI Solution",
    projectData: {
      liveURL: "",
      githubURL: "https://github.com/SachinD6/hit-track",
      relatedLinks: [],
    },
    description: [
      "Explore a variety of styles – all in real-time. Built with cutting-edge technology (Next.js & Cloudinary) for a seamless experience",
      " The app can transform images into different art styles, generative-fill, and more on the go.",
    ],
    tech: ["Next.js", "Typescript", "Redis", "Aceternity UI"],
    status: "INPROGRESS",
    image: "/image-gallery-thumbnail.png",
  },
  {
    projectTitle: "Disney Plus Clone: Showcasing React Prowess",
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
    "Sachin Chaudhary: Full-Stack Developer Expertise in Next.js, React, TypeScript, DevOps & Generative AI",
  description:
    "Discover the portfolio of Sachin Chaudhary, a skilled full-stack developer specializing in cutting-edge technologies like Next.js, React, TypeScript, Docker, AWS, and Generative AI.",
  keywords: [
    "full-Stack developer",
    "next.js",
    "react",
    "typescript",
    "docker",
    "aws",
    "generative ai",
    "devops",
    "Sachin Chaudhary",
  ],
  openGraph: {
    url: "https://sachinchaudhary.tech",
    type: "website",
    title:
      "Sachin Chaudhary: Full-Stack Developer Expertise in Next.js, React, TypeScript, DevOps & Generative AI",
    description:
      "Discover the portfolio of Sachin Chaudhary, a skilled full-stack developer specializing in cutting-edge technologies like Next.js, React, TypeScript, Docker, AWS, and Generative AI.",
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
