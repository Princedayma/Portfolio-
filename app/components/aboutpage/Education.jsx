"use client";
import React from 'react';
import { Card, CardContent, Typography, Grid, Slide, SvgIcon } from '@mui/material';
import { useInView } from 'react-intersection-observer';

// Sample SVG icon component
const AcademicCapIcon = (props) => (
  <SvgIcon {...props}>
    {/* Replace the path below with the actual path data of your SVG */}
    <path d="M12 2L1 7l11 5 9-4.5V14h2V7L12 2z" />
  </SvgIcon>
);

const EducationSection = ({ educationList }) => (
  <section className="bg-white text-black dark:bg-black dark:text-white p-8">
    <Typography variant="h4" gutterBottom className="flex items-center">
      <AcademicCapIcon className="mr-2" />
      Education
    </Typography>
    <Grid container direction="column" spacing={2}>
      {educationList.map((education, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.9,
        });

        return (
          <Grid item key={index} ref={ref}>
            <Slide direction="up" in={inView} timeout={500}>
              <Card
                elevation={0}
                className="bg-white text-black dark:bg-black dark:text-white p-4 transition-shadow duration-300 hover:shadow-lg"
              >
                <CardContent>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item className="flex items-center">
                      <AcademicCapIcon className="mr-2" />
                      <div>
                        <Typography variant="h6">{education.degree}</Typography>
                        <Typography>{education.institution}</Typography>
                      </div>
                    </Grid>
                    <Grid item>
                      <Typography>{education.duration}</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" className="mt-2">
                    {education.description}
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

export default EducationSection;
