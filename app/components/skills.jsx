"use client";
import React from "react";

const skillsData = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Responsive UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "Auth Flow Design"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git/GitHub", "Vercel", "Postman", "Problem Solving", "Debugging"],
  },
  {
    category: "Learning Focus",
    items: ["System Design Basics", "Performance Optimization", "TypeScript"],
  },
];

const Skills = () => {
  return (
    <section className="mx-auto w-full max-w-6xl bg-white px-6 py-16 text-black dark:bg-black dark:text-white">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
        Organized for hiring relevance: what I can ship today, and what I am actively leveling up.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {skillsData.map((group) => (
          <article key={group.category} className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
