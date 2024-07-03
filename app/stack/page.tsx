import { TechStack } from "@/components/tech-stack";

export const DEVELOPMENT_SKILLS = [
  {
    title: "Next.js",
    description: "React framework for production.",
    imageUrl:
      "/nextjs-icon.webp",
  },
  {
    title: "Redis",
    description: "In-memory data structure store.",
    imageUrl:
      "/redis-icon.webp",
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework.",
    imageUrl:
      "/tailwind-css-icon.webp",
  },
  {
    title: "Typescript",
    description: "A typed superset of JavaScript.",
    imageUrl:
      "/typescript-icon.webp",
  },
  {
    title: "Supabase",
    description: "The open source Firebase alternative.",
    imageUrl: "/supabase.png",
  },
  {
    title: "MongoDB",
    description: "The open source Firebase alternative.",
    imageUrl:
      "/mongodb.jpeg",
  },
  {
    title: "PostgreSQL",
    description: "The open source Firebase alternative.",
    imageUrl:
      "/postgres.png",
  },
];

const AI_ITEMS = [
  {
    title: "ChatGPT",
    description: "OpenAI",
    imageUrl:
      "/chatgpt.avif",
  },
  {
    title: "Gemini",
    description: "Google Research",
    imageUrl:
      "/google.png",
  },
];

const DEVOPS = [
  {
    title: "Docker",
    description: "Containerization",
    imageUrl:
      "/docker-icon.png",
  },
  {
    title: "Kubernetes",
    description: "Container Orchestration",
    imageUrl:
      "/kubernetes-icon.webp",
  },
  {
    title: "AWS",
    description: "Amazon Web Services",
    imageUrl:
      "/aws-icon.webp",
  },
];

export default function TechStackPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto mt-12 ">
        <h1 className="text-5xl font-bold"> Stack</h1>
        <p className="text-neutral-200 mt-4 text-lg">
          Techs I have worked with and currently working.{" "}
        </p>
        <TechStack items={DEVELOPMENT_SKILLS} title="Development" />
        <TechStack items={DEVOPS} title="DevOps" />
        <TechStack items={AI_ITEMS} title="Generative AI" />
      </div>
    </>
  );
}
