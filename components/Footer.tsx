import Link from "next/link";

const links = [
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Article",
    path: "/article",
  },
  // {
  //   text: "projects",
  //   path: "/projects",
  // },
  {
    text: "Contact",
    path: "mailto:sachinxchaudhary@gmail.com",
  },
];

export default function Footer() {
  return (
    <>
      <div className="border-t-2 border-zinc-700 py-8 px-4 flex flex-wrap justify-center lg:justify-between font-sans mt-32">
        <div className="flex max-w-2xl gap-6 flex-wrap justify-center lg:justify-start">
          {links.map(({ text, path }, index) => (
            <Link key={index} href={path} className="text-zinc-900 dark:text-white hover:text-teal-500 dark:hover:text-teal-500 cursor-pointer">
                {text}
            </Link>
          ))}
        </div>
        <div className="mt-4 lg:mt-0 text-center lg:text-left">
          <p className="text-zinc-500 dark:text-zinc-400">
            © 2023 Sachin Chaudhary. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
