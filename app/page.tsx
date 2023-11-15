import Image from "next/image";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { ProjectCard } from "@/components/ProjectCard";
import { TechsAndSkills } from "@/components/TechsAndSkills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sachin- Portfolio",
  description:
    "Expert in React, Next.js, tRPC, Postgres, Tailwind CSS and Typescript",
};

export default function Home() {
  return (
    <>
      <div className="max-w-2xl flex flex-col gap-5 mt-20">
        <div className="relative w-16 h-16">
          <Image
            src="/avatar.png"
            fill
            alt=""
            className="object-center object-cover rounded-full"
          />
        </div>

        <p className="text-zinc-900 dark:text-zinc-400 text-lg">
          I&apos;m Sachin, a fullstack developer based in India. I love building
          beautiful and functional websites and applications. I have experience
          working with React, Next.js, tRPC, Postgres, Typescript and so many
          more.
        </p>
        <Socials />
      </div>

      <div className="projects  mt-16">
        <h2 className="font-normal text-2xl mb-6">&lt;projects&gt;</h2>
        <ProjectCard />
      </div>

      <div className="projects  mt-16">
        <h2 className="font-normal text-2xl mb-6">&lt;techs-and-skills&gt;</h2>
        <TechsAndSkills />

        {/* <Images /> */}
      </div>
    </>
  );
}
