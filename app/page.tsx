import Image from "next/image";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { TechsAndSkills } from "@/components/TechsAndSkills";
import type { Metadata } from "next";
import PortfolioIntro from "@/components/PortfolioIntro";
import ProjectSection from "@/components/ProjectSection";

export const metadata: Metadata = {
  title: "Sachin- Portfolio",
  description:
    "Expert in React, Next.js, tRPC, Postgres, Tailwind CSS and Typescript",
};

export default function Home() {
  return (
    <>
      <PortfolioIntro />

      <div className="projects  mt-16">
        {/* <h2 className="font-normal text-2xl mb-6">&lt;projects&gt;</h2> */}
        {/* <ProjectCard /> */}
        <ProjectSection />
      </div>

      <div className="projects  mt-16">
        <h2 className="font-normal text-2xl mb-6">&lt;techs-and-skills&gt;</h2>
        <TechsAndSkills />

        {/* <Images /> */}
      </div>
    </>
  );
}
