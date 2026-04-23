"use client";
import React, { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "NextAuth Platform",
    description: "Authentication-first web app with secure login, account creation, and production-style session flow.",
    link: "https://github.com/Princedayma/NextAuth",
    link2: "https://next-auth-rouge-ten.vercel.app/SignUp",
    date: "2024",
    stack: ["Next.js", "MongoDB", "Tailwind", "Auth"],
    impact: ["Implemented encrypted auth flow for safer user onboarding", "Reduced friction in sign-up/login with a cleaner UX"],
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Personal brand platform focused on conversion-ready storytelling, project credibility, and clean UI.",
    link: "https://github.com/Princedayma/Portfolio-",
    link2: "",
    date: "2024 - Ongoing",
    stack: ["Next.js", "React", "Tailwind"],
    impact: ["Improved project communication for hiring visibility", "Structured sections around experience and outcomes"],
    featured: true,
  },
  {
    title: "Pixellens Website",
    description: "Interactive website for a visual-first brand with responsive layout and animated presentation.",
    link: "https://github.com/Princedayma/Pixellens-mbm",
    link2: "https://pixellens-mbm.vercel.app",
    date: "2024",
    stack: ["Bootstrap", "JavaScript", "UI"],
    impact: ["Strengthened visual consistency across pages", "Improved presentation quality for portfolio showcase"],
    featured: false,
  },
  {
    title: "React Todo App",
    description: "Task management app with stateful interactions and persistent data storage.",
    link: "https://github.com/Princedayma/React-Todo",
    link2: "https://oibsip-taskno-3.vercel.app",
    date: "2024",
    stack: ["React", "MySQL", "Tailwind"],
    impact: ["Built CRUD task flow with reliable persistence", "Improved task completion experience through simple interaction design"],
    featured: false,
  },
];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Featured", "Next.js", "React", "Auth"];

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" ||
        (activeFilter === "Featured" && project.featured) ||
        project.stack.includes(activeFilter);
      const matchesSearch =
        !normalizedQuery ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.description.toLowerCase().includes(normalizedQuery) ||
        project.stack.join(" ").toLowerCase().includes(normalizedQuery);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, query]);

  return (
    <section className="mx-auto max-w-6xl bg-white px-6 pb-16 pt-28 text-black dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
        Built to answer one question clearly: can I deliver useful software that users can trust?
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tech, or keywords..."
            className="w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none ring-0 focus:border-slate-900 dark:border-slate-700 dark:focus:border-white md:max-w-md"
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
                  activeFilter === filter
                    ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-black"
                    : "border-slate-300 bg-transparent text-slate-700 dark:border-slate-700 dark:text-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            link2={project.link2}
            date={project.date}
            stack={project.stack}
            impact={project.impact}
            featured={project.featured}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="mt-8 text-sm text-slate-600 dark:text-slate-300">No projects match your filter.</p>
      )}
    </section>
  );
}
