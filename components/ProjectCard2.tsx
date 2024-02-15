"use client";
import { cn } from "@/lib/utils";
import Status from "./Status";
import LinkText from "./ui/LinkText";

const ProjectCard2 = () => {
  return (
    <>
     <h3 className="text-neutral-500 text-xs uppercase font-bold my-6">
            projects
          </h3>
      <div
        className={cn(
          "project-item border-l-2 pl-4 hover:border-orange-300 cursor-default transition-all"
        )}
      >
        <div className="flex flex-col items-start justify-between max-md:flex-col max-md:justify-start max-md:gap-2 max-sm:w-[320px]">
          <h3 className="flex items-center gap-4 mb-2 project-title font-semibold text-xl text-zinc-900 dark:text-white  w-[46ch] max-md:w-[30ch]">
            code2snap{/* {projectTitle} */}
            <Status
                      isComplete
                      className=" border rounded-full dark:border-neutral-700 px-2 py-1"
                    />
          </h3>
          <div className="project-links-wrapper text-sm flex flex-row items-center justify-start  gap-4">
          <LinkText
                className="text-sm font-normal text-neutral-100"
                href="/"
                target={'_blank'}>
                {'Live Preview'}
              </LinkText>
              <LinkText
                className="text-sm font-normal text-neutral-100"
                href="/"
                target={'_blank'}>
                {'Github'}
              </LinkText>
          </div>
          <div className="project-item-content-wrapper">
           
            <ul className="project-description-list-content-wrapper mt-4 flex flex-col items-start justify-start gap-2 pl-3">
              {/* {description?.map((descriptionItem, descriptionIndex) => ( */}
              <li className="font-semibold text-neutral-300 text-sm list-disc list-outside">
                {/* //   key={descriptionIndex}>
            //   {descriptionItem} */}
                Building a community management + social app using NextJS,
                Tailwind, Typescript.
              </li>
              <li className="font-semibold text-neutral-300 text-sm list-disc list-outside">
                {/* //   key={descriptionIndex}>
            //   {descriptionItem} */}
                Working on auditing existing components created using
                TailwindCSS support; Fixed UX for components, improved layouts
                for upcoming features.
              </li>
              {/* ))} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard2;
