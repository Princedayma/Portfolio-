import React from "react";
import Link from "next/link";
import Home from "./components/home";

const experiences = [
  {
    role: "TPO Volunteer",
    org: "Training and Placement Cell, MBM University",
    period: "2023",
    impact: "Coordinated placement activities and helped streamline student-company communication.",
  },
  {
    role: "Hackathon Finalist",
    org: "Techkriti / SIH Ideathon",
    period: "2022",
    impact: "Secured 3rd place by presenting a practical product concept under time constraints.",
  },
];

const impactHighlights = [
  "Built and deployed full-stack projects end-to-end",
  "Focused on performance, responsive UI, and maintainable architecture",
  "Shipped features with measurable user and learning outcomes",
];

export default function HomePage() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white">
      <Home />

      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="mt-5 space-y-4">
              {experiences.map((item) => (
                <article key={item.role} className="border-l-2 border-slate-300 pl-4 dark:border-slate-700">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-semibold">{item.role}</h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{item.period}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.org}</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{item.impact}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
            <h2 className="text-2xl font-semibold">Impact</h2>
            <ul className="mt-5 space-y-3">
              {impactHighlights.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500 dark:bg-slate-300" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-slate-900 dark:text-white">
              Hiring test: I focus on outcomes, not only code.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Featured Work</h2>
            <Link href="/projects" className="text-sm font-semibold text-slate-700 underline underline-offset-4 dark:text-slate-200">
              See full projects
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Projects are now structured around problem, approach, and measurable impact.
          </p>
        </div>
      </section>
    </main>
  );
}
