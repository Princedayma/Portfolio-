"use client";
import React, { useRef, useEffect } from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import gsap from "gsap";

export default function Home() {
  const textRef = useRef(null);
  const paragraphRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    // Text animation
 // Animate the header text
gsap.fromTo(
  textRef.current,
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
);

// Animate the paragraph
gsap.fromTo(
  paragraphRef.current,
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power4.out" }
);

// Animate the icons
gsap.fromTo(
  iconsRef.current,
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: "power3.out",
    stagger: 0.2,
  }
);

  }, []);

  return (
    <section className="bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center h-screen p-4">
      <h1 ref={textRef} className="text-4xl font-bold">
        Welcome to My{" "}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Portfolio
        </span>
      </h1>
      <p ref={paragraphRef} className="mt-4 text-lg font-mono text-center">
      Hello, my name is Prince. I am a passionate undergraduate and a tech enthusiast who enjoys learning about new technologies and exploring new things.
      </p>
      <div className="mt-6 flex space-x-4">
        {[
          {
            href: "www.linkedin.com/in/prince-dayma-ab6271333",
            icon: <FaLinkedin className="w-8 h-8" />,
          },
          {
            href: "https://github.com/Princedayma",
            icon: <FaGithub className="w-8 h-8" />,
          },
          {
            href: "/",
            icon: <FaGlobe className="w-8 h-8" />,
          },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
            ref={(el) => (iconsRef.current[index] = el)} // Assigning refs to each icon
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
