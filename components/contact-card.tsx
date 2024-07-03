"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ContactCard() {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
         <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center gap-10 md:gap-20 my-20"
      >
        <motion.div variants={textVariants} className="text-center md:text-left">
          <h3 className="font-semibold text-xl font-sans mb-4">
            Let&apos;s work together?
          </h3>
          <p className="leading-relaxed font-normal text-neutral-300">
            Explore if we are a good match and see if we can assemble the right
            team for the success of your project!
          </p>
        </motion.div>
        <motion.div variants={cardVariants}>
          <a href="mailto:sachinxchaudhary@gmail.com">
          <Card>
            <div className="flex justify-between">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                // className="invert"
              />
              <Image
                src="/contact-card.png"
                alt="logo"
                width={60}
                height={60}
                className="rotate-6"
              />
            </div>
            <div className="mt-3">
              <CardTitle>Email me</CardTitle>
              <CardDescription>sachinxchaudhary@gmail.com</CardDescription>
            </div>
          </Card>
          </a>
        </motion.div>
      </motion.div>
    </>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)] hover:bg-[rgba(40,40,40,0.90)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group rotate-2 hover:rotate-0 transition my-12 hover:cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-md text-neutral-300 py-2", className)}>{children}</h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-md font-semibold text-white font-mono max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
