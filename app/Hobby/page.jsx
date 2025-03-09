"use client";
import * as React from "react";
import { Box } from "@mui/material";
import { HobbyList } from "../components/Hobby";
import HobbyCards from "../components/video";
import dynamic from "next/dynamic";

// ✅ Dynamically Import QuiltedImageList to Avoid SSR Issues
const QuiltedImageList = dynamic(() => import("../components/Hobby").then(mod => mod.QuiltedImageList), {
  ssr: false, // Prevents SSR rendering errors
});

export default function HobbyPage() {
  return (
    <div className="hobbies bg-white text-black dark:bg-black dark:text-white">
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2, paddingTop: 14 }}>
        {/* Left Section */}
        <Box sx={{ flex: 3 }}>
          <QuiltedImageList />
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 2, padding: 1, boxShadow: 3 }}>
          <HobbyList />
        </Box>
      </Box>

      <h1 className="text-4xl font-extrabold text-center py-8 mb-8">My Projects</h1>

      {/* HobbyCards Container with Gradient Background */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: 4,
          borderRadius: 2, // Optional: adds rounded corners
          marginTop: 3,
        }}
      >
        <HobbyCards className="py-4" />
      </Box>
    </div>
  );
}
