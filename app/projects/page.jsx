"use client"
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { DarkModeToggle } from '../components/DarkModeToggle'; // Adjust the import path accordingly

const projects = [
  {
    title: "NextAuth",
    description:
      "Implemented robust user registration and login functionalities with secure password encryption using bcrypt. Integrated multi-factor authentication, ensuring data remains secure and protected against unauthorized access.",
    link: "https://github.com/Princedayma/NextAuth",
    link2: "https://next-auth-rouge-ten.vercel.app/SignUp",
    date: "December 12, 2002",
    avatars: [
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
      "https://www.growisto.com/wp-content/uploads/2024/10/Tailwind_CSS_Logo.svg.png",
     
      "https://static-00.iconduck.com/assets.00/mongodb-icon-2048x2048-cezvpn3f.png",   
      //    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz34OmNVyIMh1rguNfXC3MBk7Qq3DTduJVVg&s",
     
    ],
  },
  {
    title: "NextPortFolio",
    description: "A comprehensive branding design project for a modern startup.",
    link: "#",
    link2: "#",
    date: "july 12, 2024",
    avatars: [
    
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
      "https://www.growisto.com/wp-content/uploads/2024/10/Tailwind_CSS_Logo.svg.png",
     
      "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png", 
     
    ],
  },
  {
    title: "Pixellens Website",
    description: "A 3D modeling project with interactive animations using Three.js.",
    link: "https://github.com/Princedayma/Pixellens-mbm",
    link2: "pixellens-mbm.vercel.app",
    date: "September 5, 2024",
    avatars: [
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png",
     
     
     
    ],
  },
  {
    title: "React-ToDo",
    description: " Built a feature-rich To-Do app using **React** for the frontend and **MySQL** for data storage. ",
    link: "https://github.com/Princedayma/React-Todo",
    link2: "oibsip-taskno-3.vercel.app",
    date: "july 10, 2024",
    avatars: [
      
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz34OmNVyIMh1rguNfXC3MBk7Qq3DTduJVVg&s",
     
    
      "https://www.growisto.com/wp-content/uploads/2024/10/Tailwind_CSS_Logo.svg.png",
     
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6mo_YNOG7enbZWx314h1przJe2LL-kYkvRpI1kfnZgkTOsDszYBcndE&s", 
    ],
  },
];

export default function Projects() {
  return (
    <section className="bg-white text-black dark:bg-black dark:text-white p-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 pt-12">My Projects</h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
      Through my recent web development project, I showcased my ability to harness the power of modern JavaScript frameworks like React.js, Next.js, and Tailwind CSS to create dynamic, responsive, and visually appealing web applications.
      The project not only highlights my technical expertise in front-end and back-end development but also reflects my enthusiasm for integrating innovative solutions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            link2={project.link2}
            date={project.date}
            avatars={project.avatars}
          />
        ))}
      </div>
    </section>
  );
}
