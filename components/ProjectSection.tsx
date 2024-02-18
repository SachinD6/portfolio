"use client";
import { cn } from "@/lib/utils";
import Status from "./Status";
import LinkText from "./ui/LinkText";
import { projects2 } from "@/lib/utils";

interface ProjectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  projectTitle?: string;
  projectData?: {
    liveURL?: string;
    githubURL?: string;
    relatedLinks?: Array<{
      label?: string | React.ReactNode;
      link?: string;
    }>;
  };
  description?: string[];
  tech?: string[];
  category?: Array<
    | 'accessibilty'
    | 'ui/ux'
    | 'design-system'
    | 'static-website'
    | 'full-stack'
  >;
  // status?: 'Ongoing' | 'Open Source' | 'Maintained';
}

const ProjectSection: React.FunctionComponent = () => {
  return (
    <div
      className="projects-section grid grid-cols-1 justify-start gap-4"
      id="projects">
      <h2 className="project-heading leading-snug font-medium text-base text-zinc-900">
        {'projects.'}
      </h2>
      <div className="project-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8">
        {projects2?.map(
          (project, projectIndex: number) => (
            <ProjectCard2 {...project} key={projectIndex} />
          ),
        )}
      </div>
    </div>
  );
};


const ProjectCard2: React.FunctionComponent<ProjectItemProps> = ({ 
  projectTitle,
  projectData,
  description,
  tech,
  category,
  // status,
  className,
  ...attr
}) => {
  return (
    <>
     <h3 className="text-neutral-500 text-xs uppercase font-bold">
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
            {
              projectData?.liveURL && (
                <LinkText
                className="text-sm font-normal text-neutral-100"
                href={projectData?.liveURL}
                target={'_blank'}>
                {'Live Preview'}
              </LinkText>
              )
            }
        
            {
              projectData?.githubURL && (
                <LinkText
                className="text-sm font-normal text-neutral-100"
                href={projectData?.githubURL}
                target={'_blank'}>
                {'Github'}
              </LinkText>
              )
   }
          </div>
          <div className="project-item-content-wrapper">
           
            <ul className="project-description-list-content-wrapper mt-4 flex flex-col items-start justify-start gap-2 pl-3">
              {description?.map((descriptionItem, descriptionIndex) => (
                <li
                  key={descriptionIndex}
                  className="project-description-item text-zinc-900 dark:text-zinc-300 list-disc list-outside">
                  {descriptionItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
