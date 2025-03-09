"use client";
import * as React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Fade, Grid } from "@mui/material";

const hobbyData = [
  {
    title: "Golden Days",
    description: "Golden Days: An ode to college life",
    image: "/photos/goldendaysthambnail.jpg",
    link: "https://www.youtube.com",
  },
  {
    title: "Muntzir",
    description: "Muntzir means one who anticipates or one who waits. A metaphorical short film story of a boy waiting—for what?",
    image: "/photos/muntzir.jpeg",
    link: "https://www.youtube.com",
  },
  {
    title: "Farewell Film",
    description: "A beautiful farewell to our 2024 batch Club Seniors.",
    image: "/photos/pixellens.png",
    link: "https://youtu.be/smtpEY2kCoA?si=Kju7Ba0mnBnCC3-B",
  },
];

export default function HobbyCards() {
  const [visible, setVisible] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this only runs in the browser

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stop observing after first intersection
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <Grid container spacing={2} ref={elementRef}>
      {hobbyData.map((hobby, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Fade in={visible} timeout={500}>
            <Card className="bg-white text-black dark:bg-black dark:text-white">
              <CardMedia sx={{ height: 250 }} image={hobby.image} title={hobby.title} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {hobby.title}
                </Typography>
                <Typography variant="body2">{hobby.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={hobby.link} target="_blank">
                  Watch Now
                </Button>
              </CardActions>
            </Card>
          </Fade>
        </Grid>
      ))}
    </Grid>
  );
}
