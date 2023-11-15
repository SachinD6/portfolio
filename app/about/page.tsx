import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sachin Chaudhary - About Me",
  description:
    "Expert in React, Next.js, tRPC, Postgres, Tailwind CSS and Typescript",
};

export default function About() {
  return (
    <div className="container mx-auto mt-16 border-zinc-900 dark:border-zinc-400 border-2 p-0">
      <div className="border-b-2 border-zinc-900 dark:border-zinc-400 p-7">
        <h2 className="text-4xl text-gray-800 dark:text-gray-200 font-bold">&lt;about-me&gt;</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center border-b-2 border-zinc-900 dark:border-zinc-400">
        <div className="lg:w-1/3 lg:border-r-2 border-zinc-900 dark:border-zinc-400 mb-2 lg:mb-0 py-7 flex items-center gap-6">
          <div className="relative w-16 h-16">
            <Image
              src="/avatar.png"
              fill
              alt=""
              className="object-center object-cover rounded-full"
            />
          </div>
          <p className="text-zinc-900 dark:text-zinc-300">sachin.chaudhary</p>
        </div>
        <div className="lg:w-1/2 text-zinc-900 dark:text-zinc-300">
          <blockquote className="italic">
          Where logic meets innovation, code emerges.
          </blockquote>
        </div>
      </div>
      <div className="p-6 text-zinc-800 dark:text-zinc-400 min-h-fit space-y-4">
        <p className="leading-7 text-lg">
          Hey, I&apos;m Sachin Chaudhary, the 20-year-old coding enthusiast! I
          love keeping up with the newest technologies. Whether it&apos;s the
          latest programming languages, or tech trends. I&apos;m always eager to
          explore and learn.
        </p>
        <p className="leading-7 text-lg">
          In September 2022, I joined a computer science engineering program.
          Now, in my second year, it&apos;s been a mix of tough and exciting.
          I&apos;m figuring out how computers really work, from coding to all
          the computer stuff. It&apos;s not just about classes; it&apos;s like
          solving puzzles every day.
        </p>
        <p className="leading-7 text-lg">
          I&apos;m still on this journey, learning more with every step.
          I&apos;m curious where this coding adventure will take me next! I am
          not just seeking opportunities; I am here to contribute, learn & craft
          solutions for tommorow.
        </p>
      </div>
    </div>
  );
}
