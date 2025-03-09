"use client";
import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Fade } from '@mui/material';

const hobbyData = [
  {
    title: 'Golden Days',
    description: ' Golden Days: An ode to college life',
    image: '/photos/goldendaysthambnail.jpg',
    link: 'https://www.youtube.com',
  },
  {
    title: 'Muntzir',
    description: 'Muntzir means one who anticipates or one who wait Muntzir is a metaphorical short film story of a boy who is waiting, waiting for what?.',
    image: '/photos/muntzir.jpeg',
    link: 'https://www.youtube.com',
  },
  {
    title: 'Farewell Film',
    description: 'A beautifull Farewell to our 2024 batch Club Seniors.',
    image: '/photos/pixellens.png',
    link: 'https://youtu.be/smtpEY2kCoA?si=Kju7Ba0mnBnCC3-B',
  },
];

export default function HobbyCards() {
  const [visible, setVisible] = React.useState(false);

  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.current.disconnect();
        }
      },
      { threshold: 0.8 }
    )
  );

  React.useEffect(() => {
    const currentObserver = observer.current;
    const element = document.getElementById('hobby-cards');
    if (element) {
      currentObserver.observe(element);
    }
    return () => {
      if (element) {
        currentObserver.unobserve(element);
      }
    };
  }, []);

  return (
    <Grid container spacing={2} id="hobby-cards">
      {hobbyData.map((hobby, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Fade in={visible} timeout={500}>
            <Card className="bg-white text-black dark:bg-black dark:text-white">
              <CardMedia sx={{ height: 250 }} image={hobby.image} title={hobby.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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
