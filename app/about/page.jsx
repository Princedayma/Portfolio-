import React from 'react';
import EducationSection from '../components/aboutpage/Education';
import OrganizationSection from '../components/aboutpage/Organization';
import HackathonSection from '../components/aboutpage/Hackathon';
import Skills from '../components/skills';

const educationData = [
  {
    degree: 'Computer Science Engineer',
    institution: 'MBM University',
    duration: '2022 - 2026',
    description: 'Bachelor of Engineering.',
  },
  {
    degree: 'Sr. Secondery Education',
    institution: 'Gov. High Secondary School',
    duration: '2020 – 2021',
    description: '12th ',
  },
  // Add more entries as needed
];

const organizationData = [
  {
    position: 'TPO Volunteer',
    company: 'Training and Placment Cell.',
    duration: '7/2023 - 12/2023',
    description: 'MBM University',
  },
  // Add more entries as needed
];

const hackathonData = [
  {
    title: 'Ideathon (SIH)',
    organizer: 'MBM Univeristy',
    year: '2022',
    description: 'A remarkable 3rd position in theIdeathon event, as part of the SmartIndia Hackathon Preliminary round at TechKriti’23.',
  },
  {
    title: '72 Hours continuous heckthon',
    organizer: 'VGU University, Jaipur',
    year: '2021',
    description: 'Top 50 out on 500 teams.',
  },
 
  // Add more entries as needed
];

const About = () => (
  <div>
        <Skills/>
    <EducationSection educationList={educationData} />
    <OrganizationSection organizationList={organizationData} />
    <HackathonSection hackathonList={hackathonData} />
  </div>
);

export default About;
