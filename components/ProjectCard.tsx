import React from "react";
// import { SiGithub } from "react-icons/si";
import { projects } from "@/lib/utils";

export function ProjectCard() {

  return (
    <>
      <div className="max-w-2xl ">
        {projects.map((project, index) => (
          <div key={index} className="space-y-2 my-8">
            <div className="flex gap-6 items-center">
              <a
                href={project.githubRepoUrl}
                className="text-black dark:text-white border-black dark:border-white border-b-2 font-semibold"
              >
                {project.title}
              </a>
              {project.livePreviewUrl && (
                <a
                  href={project.livePreviewUrl}
                  className="text-teal-700 dark:text-teal-300 font-semibold border-b-2 border-transparent hover:border-teal-700 dark:hover:border-teal-300 transition-all"
                >
                  Live preview
                </a>
              )}
            </div>
            <p className="text-zinc-800 dark:text-zinc-400">{project.description}</p>
            {project.techsUsed && (
              <div className="flex gap-4 items-center">
                <p className="font-semibold text-zinc-800 dark:text-zinc-300">Techs Used: </p>
                <span className="text-zinc-900 dark:text-zinc-300">{project.techsUsed}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
