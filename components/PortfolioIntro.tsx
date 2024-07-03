"use client"
import { CopyIcon, CheckIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { SiLinkedin } from "react-icons/si";
import { useState } from "react"; // Import useState hook

const PortfolioIntro = () => {
  const [emailCopied, setEmailCopied] = useState(false); // State to track if email is copied

  const copyEmail = () => {
    const email = "sachinxchaudhary@gmail.com";
    navigator.clipboard.writeText(email);
    setEmailCopied(true); // Set state to true after copying
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      

        <div className="mt-6 flex flex-col items-center">
            <div className="h-20 w-28 mb-2">
          <Avatar className="mb-4">
            <AvatarImage src="/logo.png" className="rounded-full h-20 w-28" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          </div>
          <h3 className="text-md font-semibold">
            Full Stack Developer
          </h3>
          <p className="text-neutral-300 leading-relaxed mt-3 text-md tracking-tight">
            I&apos;m <span className="text-neutral-100 font-semibold">Sachin Chaudhary</span>, a web developer from India. Specialized in Next.js and building beautiful & functional web experiences. From Dev to Ops, I Build & Deploy.
          </p>

          <div className="flex gap-4 items-center">
            <Button
              variant="outline"
              Icon={emailCopied ? CheckIcon : ArrowRightIcon} 
              iconPlacement="right"
              className={`mt-6 font-bold rounded-full border-stone-700 bg-stone-800`}
              onClick={(e) => {
                copyEmail();
                setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
              }}
            >
              {emailCopied ? " Copied" : "Email"}
              {!emailCopied ? (<CopyIcon className="ml-2 h-5 w-5" /> ): ( <CheckIcon ml-2 h-5 w-5 />)}
              
            </Button>
            <a href="https://linkedin.com/in/sachinxduhan" target="_blank" rel="noreferrer noopener">
            <Button
              variant="secondary"
              className="mt-6 rounded-full text-neutral-200 hover:text-white hover:bg-neutral-900 hover:scale-105 transition-all "
            >
              Connect on
              <SiLinkedin className="w-5 h-5 ml-2" />
            </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioIntro;
