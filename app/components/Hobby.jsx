"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function QuiltedImageList() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR-related issues

  return (
    <ImageList sx={{ width: "50%", height: 450 }} variant="quilted" cols={4} rowHeight={121}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" style={{ filter: "grayscale(100%)" }} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  { img: "/photos/pixellensLogo.png", title: "Breakfast", rows: 2, cols: 2 },
  { img: "/photos/20240323_105154.jpg", title: "Burger" },
  { img: "/photos/IMG20240323120648.jpg", title: "Camera" },
];

export function HobbyList() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Box sx={{ width: "100%", height: 450, padding: 1 }}>
        <Typography variant="h3" gutterBottom>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Photography and Filmmaking
          </span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Since my childhood, I have always enjoyed taking photos. Capturing moments has always fascinated me. I am part of a college filming club called Pixellen, where I meet wonderful people who share the same passion. Together, we create short films, participate in competitions, and have a great time.
        </Typography>
      </Box>
    </div>
  );
}
