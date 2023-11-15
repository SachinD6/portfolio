export function TechsAndSkills() {
  const boxShadowStyle = "6px 6px 0px rgba(0, 128, 128, 1)";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Frontend Skills */}
      <div
        className={`border p-4 rounded-md shadow-md transform hover:shadow-xl transition-transform`}
        style={{ boxShadow: boxShadowStyle }}
      >
        <h3 className="font-xl text-teal-700 dark:text-teal-300 border-b-2 border-teal-600 dark:border-white inline mb-4 pb-1">
          frontend skills
        </h3>
        <ul className="mt-4">
          <li>- React (Next.js)</li>
          <li>- Tailwind css & shadcn/ui</li>
          <li>- Redux</li>
        </ul>
      </div>

      {/* Backend Skills */}
      <div
        className={`border p-4 rounded-md shadow-md transform hover:shadow-xl transition-transform`}
        style={{ boxShadow: boxShadowStyle }}
      >
        <h3 className="font-xl text-teal-700 dark:text-teal-300 border-b-2 border-teal-600 dark:border-white inline mb-4 pb-1">
          backend skills
        </h3>
        <ul>
          <li className="mt-4">- PostgreSQL</li>
          <li>- Node.js</li>
          <li>- Prisma & Drizzle ORM</li>
          <li>- Redis</li>
          <li>- WebSockets</li>
        </ul>
      </div>

      {/* DevOps Skills */}
      <div
        className={`border  p-4 rounded-md shadow-md transform hover:shadow-xl transition-transform`}
        style={{ boxShadow: boxShadowStyle }}
      >
        <h3 className="font-xl text-teal-700 dark:text-teal-300 border-b-2 border-teal-600 dark:border-white  inline mb-4 pb-1">
        miscellaneous skills
        </h3>
        <ul>
          <li className="mt-4">- Docker</li>
          <li>- tRPC</li>
          <li>- Supabase</li>
          <li>- Typescript</li>
        </ul>
      </div>
    </div>
  );
}
