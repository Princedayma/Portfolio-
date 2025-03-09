"use client"
import React, { useEffect, useRef } from 'react';
import { Chip, Box, Typography } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import GitHubIcon from '@mui/icons-material/GitHub';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  useEffect(() => {
    skillRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const skillsData = [
    {
      category: 'Web Development',
      skills: ['Next.js', 'React.js', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      category: 'DevOps',
      skills: ['Docker'],
    },
    {
      category: 'Artificial Intelligence & Machine Learning',
      skills: ['Python', 'Numpy', 'PyTorch', 'Pandas'],
    },
  ];

  return (
    <Box className="w-full bg-white text-black dark:bg-black dark:text-white p-2" sx={{ paddingTop: 12, paddingLeft: 8, paddingRight: 8}}>
      <Typography className="p-2" variant="h4" gutterBottom>
        <FaceIcon/>
        Skills
      </Typography>
      {skillsData.map((group, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
          <Typography variant="h6" gutterBottom>
            {group.category}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {group.skills.map((skill, idx) => (
              <Chip
                key={idx}
                ref={addToRefs}
                icon={<GitHubIcon />}
                label={skill}
                variant={idx % 2 === 0 ? 'filled' : 'outlined'}
                color="Secondry"
                size="medium"
                className="bg-white text-black dark:bg-black dark:text-white m-2 hover:scale-110 hover:shadow-lg transition-transform duration-800 ease-in-out"
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
