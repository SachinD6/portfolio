"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Status from "./Status";
import Social from "./Socials";

const PortfolioIntro = () => {
  return (
    <>
      <div className="mt-32">
        <div className="flex gap-x-4">
          <Image
            width={300}
            height={300}
            className="w-16 h-16 rounded-full object-cover"
            src="/avatar.png"
            alt="Profile"
          />
          <div>
            <h2 className="font-extrabold font-InterBlack dark:text-white text-3xl">
              SachinChaudhary
            </h2>
            <Link href={"https://github.com/sachind6"}>
              <span className="text-neutral-500 ">@ sachind6</span>
            </Link>
            <Status status="Available"/>
          </div>
        </div>

        <div className="mt-6 max-w-3xl">
          <h3 className="text-neutral-500 text-xs uppercase font-bold">
            About Me
          </h3>
          <p className="dark:text-neutral-300  font-medium  mt-3">
            I&apos;m eager to dive into real-world projects and contribute my
            skills to innovative endeavors.
          </p>
          <p className="mt-6 dark:text-neutral-300 max-sm:text-sm font-medium">
            I&apos;m driven by a desire to make a meaningful impact through
            technology and am always seeking new challenges to grow
            professionally. Let&apos;s connect and explore the endless
            possibilities of web development together!
          </p>
          {/* <Social /> */}

          <motion.button className=" pt-3 pl-8 gap-2 flex mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold" whileHover={{ scale: 1.1}}>
            View resume
            
        <ArrowUpRight />
            {/* <ArrowUpRight /> */}
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default PortfolioIntro;
