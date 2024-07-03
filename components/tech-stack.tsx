"use client";

import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export type Item = {
  title: string;
  description: string;
  imageUrl: string;
};

type Props = {
  items: Item[];
  title: string;
  description?: string;
  isHomePage?: boolean;
};

export function TechStack({
  items,
  title,
  description,
  isHomePage = false,
}: Props) {
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

  const rowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1, // Delay between animating each row
        staggerChildren: 0.1, // Stagger animation within each row
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <Card className="mt-20">
      <CardHeader className="pb-3 mb-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={rowVariants}
          className="grid md:grid-cols-2 gap-3"
        >
          {items?.map((item, index) => (
            <div
              key={index}
              className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-[#202020] hover:text-accent-foreground"
            >
              <Image
                className="mt-px h-10 w-10 object-contain"
                alt="logo"
                width={100}
                height={100}
                src={item.imageUrl}
              />
              <div className="space-y-1">
                <p className="text-sm font-bold leading-none">{item.title}</p>
                <p className="text-sm text-stone-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
        {isHomePage && (
          <Link href={"/stack"}>
            <Button variant="secondary" className="w-full mt-5">
              All Tools
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
