"use client";
import React, { useRef, useEffect } from "react";
import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import gsap from "gsap";

export default function Home() {
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );
    gsap.fromTo(
      subTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power3.out" }
    );
    gsap.fromTo(
      actionsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.45, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Prince Dayma • Full-Stack Developer
        </p>
        <h1 ref={textRef} className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          I build reliable web products that deliver measurable user impact.
        </h1>
        <p ref={subTextRef} className="mt-5 max-w-3xl text-base text-slate-600 dark:text-slate-300 md:text-lg">
          Final-year CSE student focused on shipping clean, production-ready experiences with Next.js, React, and modern backend tooling.
        </p>

        <div ref={actionsRef} className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-slate-900 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            View Projects <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href="https://drive.google.com/file/d/1ZVO4dXjh9Az3GxNMvNskJlH7KWIdmSB2/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:border-white"
          >
            Resume
          </a>
          <div className="ml-0 flex items-center gap-3 md:ml-2">
            {[
              {
                href: "https://www.linkedin.com/in/prince-dayma-ab6271333",
                icon: <FaLinkedin className="h-5 w-5" />,
              },
              {
                href: "https://github.com/Princedayma",
                icon: <FaGithub className="h-5 w-5" />,
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-300 p-2 text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Projects Shipped", value: "8+" },
            { label: "Hackathons", value: "2" },
            { label: "Best Hackathon Rank", value: "Top 50" },
            { label: "Core Stack", value: "MERN" },
          ].map((item, index) => (
            <div
              key={item.label}
              ref={(el) => (statsRef.current[index] = el)}
              className="rounded-lg border border-slate-200 p-4 dark:border-slate-800"
            >
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
