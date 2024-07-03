"use client";
import { Card } from "./ui/card";
import { projects } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowUpRightFromCircle,
} from "lucide-react";
import Image from "next/image";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 1.2,
      delay: 0.1,
    },
  },
};

export const ProjectCard = () => {
  return (
    <>
      <h2 className="text-lg font-bold mt-20">From 0s to OMGs:</h2>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <Card className="w-full grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 rounded-xl hover:bg-[#191919] transition-all my-6">
            <Image
              src={project.image}
              alt="logo"
              height={300}
              width={300}
              className="h-full w-full md:w-auto rounded-xl hover:opacity-80 transition-all object-cover"
            />
            <div className="space-y-4">
              <div className="space-y-2 flex flex-col justify-end">
                <div className="flex gap-2 items-center">
                  {project.status === "COMPLETED" ? (
                    <a
                      href={
                        project.projectData.liveURL
                          ? project.projectData.liveURL
                          : project.projectData.githubURL
                      }
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <h3 className="text-lg font-semibold">
                        {project.projectTitle}
                      </h3>
                      <ArrowUpRightFromCircle className="h-5 w-5" />
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold">
                      {project.projectTitle}
                    </h3>
                  )}

                  {project.status === "INPROGRESS" && (
                    <span className="rounded-full bg-stone-900 border border-stone-700 px-2 text-[13px] tracking-tight">
                      IN PROGRESS
                    </span>
                  )}
                </div>
                <p className="text-neutral-200 text-md tracking-normal">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, index) => (
                  <div
                    className="rounded-md bg-transparent border border-stone-800 px-3 py-1 text-xs text-muted-foreground"
                    key={index}
                  >
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </>
  );
};
