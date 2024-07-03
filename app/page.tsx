import type { Metadata } from "next";
import PortfolioIntro from "@/components/PortfolioIntro";
import { ContactCard } from "@/components/contact-card";
import { TechStack } from "@/components/tech-stack";
import { ProjectCard } from "@/components/project-card";
import { jsonLdSchema, metaData } from "@/lib/utils";

import { DEVELOPMENT_SKILLS } from "./stack/page";

export const metadata: Metadata = metaData;


export default function Home() {
  return (
    <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="max-w-3xl mx-auto ">
        <div className="flex text-center">

        <PortfolioIntro />
        </div>

        <div className="projects">
          {/* <h2 className="font-normal text-2xl mb-6">&lt;projects&gt;</h2> */}
          {/* <ProjectCard /> */}
          {/* <TechsAndSkills /> */}
          {/* <ProjectSection /> */}
        </div>

        <div className="projects">
          {/* <h2 className="font-normal text-2xl mb-6">&lt;techs-and-skills&gt;</h2> */}
          {/* <ServiceCards /> */}

          <TechStack items={DEVELOPMENT_SKILLS} title="Tech Stack" description="Tools I use in daily basis." isHomePage={true}/>

          <ProjectCard />
          <ContactCard />
        </div>
        {/* <Images /> */}
      </div>
    </>
  );
}
