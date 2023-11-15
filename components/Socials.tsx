import React from "react";
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

const socials: SocialLink[] = [
  // { icon: SiTwitter, href: "https://x.com" },
  { icon: SiGithub, href: "https://github.com/sachind6" },
  { icon: SiLinkedin, href: "https://linkedin.com/in/sachinxduhan" },
];

const Social: React.FC = () => {
  return (
    <div className="flex gap-5">
      {socials.map((social, index) => (
        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
          <social.icon className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
        </a>
      ))}
    </div>
  );
};

export default Social;
