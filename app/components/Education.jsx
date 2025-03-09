"use client";
import React from 'react';
import {Card, CardContent, Typography, Grid, Slide } from '@mui/material';


const EducationSection = ({ educationList }) => (
  <section className='pt-12'>
    <Typography variant="h4" gutterBottom>
      Education
    </Typography>
    <Grid container direction="column" spacing={2}>
      {educationList.map((education, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <Grid item key={index} ref={ref}>
            <Slide direction="up" in={inView} timeout={500}>
              <Card elevation={0}>
                <CardContent>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">{education.degree}</Typography>
                      <Typography>{education.institution}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{education.duration}</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2">{education.description}</Typography>
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

