import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  const links = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "about",
      path: "/about",
    },
    {
      text: "article",
      path: "/article",
    },
    // {
    //   text: "projects",
    //   path: "/projects",
    // },
    {
      text: "contact",
      path: "mailto:sachinxchaudhary@gmail.com",
    },
  ];

  return (
    <nav className="flex flex-wrap justify-between items-center w-full px-4 lg:px-8 py-2 lg:py-4">
      {/* <div className="logo p-2"></div> */}
      <div className="lg:flex gap-6 items-center justify-center lg:justify-end mt-4 lg:mt-0 shadow-sm border border-zinc-200 dark:border-zinc-700 rounded-full bg-zinc-100 dark:bg-zinc-800 p-3">
        {links.map(({ text, path }, index) => (
          <Link key={index} href={path} className="text-zinc-900 dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-600 cursor-pointer lg:mx-2 mx-2">
            {text}
          </Link>
        ))}
      </div>
     <div className="mx-auto mt-4 lg:mt-0">
     {/* <ModeToggle /> */}
     </div>
    </nav>
  );
}
