"use client";
import React from 'react';
import { Card, CardContent, Typography, Grid, Slide, SvgIcon } from '@mui/material';
import { useInView } from 'react-intersection-observer';

// Sample SVG icon components


const GlobeIcon = (props) => (
  <SvgIcon {...props} style={{ marginRight: 6}}>
    {/* Replace with the actual path data of your SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
</svg>
  </SvgIcon>
);



const HackathonSection = ({ hackathonList }) => (
  <section className='bg-white text-black dark:bg-black dark:text-white p-8'>
    <Typography variant="h4" gutterBottom>
      <GlobeIcon />
      Hackathons
    </Typography>
    
    <Grid container direction="column" spacing={2}>
      {hackathonList.map((hackathon, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.9,
        });

        // Determine the icon to use based on the hackathon title or other criteria
        let IconComponent;
        if (hackathon.title.includes('Innovation')) {
          IconComponent = LightBulbIcon;
        } else if (hackathon.title.includes('Code')) {
          IconComponent = CodeIcon;
        } else {
          IconComponent = GlobeIcon; // Default icon
        }

        return (
          <Grid item key={index} ref={ref}>
            <Slide direction="up" in={inView} timeout={500}>
              <Card
                className='bg-white text-black dark:bg-black dark:text-white p-4 transition-shadow duration-300 hover:shadow-lg'
                elevation={0}
              >
                <CardContent>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item className="flex items-center">
                      <IconComponent className="mx-2 transition-transform duration-300 hover:scale-110" />
                      <div>
                        <Typography variant="h6">{hackathon.title}</Typography>
                        <Typography>{hackathon.organizer}</Typography>
                      </div>
                    </Grid>
                    <Grid item>
                      <Typography>{hackathon.year}</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" className="mt-2">
                    {hackathon.description}
                  </Typography>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        );
      })}
    </Grid>
  </section>
);

export default HackathonSection;
