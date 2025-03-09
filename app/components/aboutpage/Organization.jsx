"use client";
import React from 'react';
import { Card, CardContent, Typography, Grid, Slide, SvgIcon } from '@mui/material';
import { useInView } from 'react-intersection-observer';

// Define the OrganizationIcon component
const OrganizationIcon = (props) => (
  <SvgIcon {...props} style={{ marginRight: 2}}>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor" className="size-6">
  <path strokelinecap="round" strokelinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>

  </SvgIcon>
);

const OrganizationSection = ({ organizationList }) => (
  <section className='bg-white text-black dark:bg-black dark:text-white p-8'>
    <Typography variant="h4" gutterBottom className="flex items-center">
      <OrganizationIcon className="mx-2" />
      Organizations
    </Typography>
    <Grid container direction="column" spacing={2}>
      {organizationList.map((organization, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.9,
        });

        return (
          <Grid item key={index} ref={ref}>
            <Slide direction="up" in={inView} timeout={500}>
              <Card
                className='bg-white text-black dark:bg-black dark:text-white p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/50'
                elevation={0}
              >
                <CardContent>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item className="flex items-center">
                      <OrganizationIcon className="mx-2" />
                      <div>
                        <Typography variant="h6">{organization.position}</Typography>
                        <Typography>{organization.company}</Typography>
                      </div>
                    </Grid>
                    <Grid item>
                      <Typography>{organization.duration}</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" className="mt-2">
                    {organization.description}
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

export default OrganizationSection;
