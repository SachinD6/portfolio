import { Dock, DockIcon } from "@/components/dock";
import React from "react";
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
export type IconProps = React.HTMLAttributes<SVGElement>;

export function SocialIcons() {
  return (
    <div className="relative flex  w-full  flex-col items-center justify-center overflow-hidden">
      <Dock>
        <DockIcon>
          <a
            href="https://linkedin.com/in/sachinxduhan"
            target="_blank"
            className="shadow-lg border border-stone-800 p-2 rounded-[0.4rem] hover:scale-125 transition-all"
          >
            <SiLinkedin className="h-6 w-6" />
          </a>
        </DockIcon>
        <DockIcon>
          <a
            href="https://github.com/sachind6"
            target="_blank"
            className="shadow-lg border border-stone-800 p-2 rounded-[0.4rem] hover:scale-125 transition-all"
          >
            <SiGithub className="h-6 w-6" />
          </a>
        </DockIcon>
        <DockIcon>
          <a
            href=""
            target="_blank"
            className="shadow-lg border border-stone-800 p-2 rounded-[0.4rem] hover:scale-125 transition-all"
          >
            <SiTwitter className="h-6 w-6" />
          </a>{" "}
        </DockIcon>
      </Dock>
    </div>
  );
}
