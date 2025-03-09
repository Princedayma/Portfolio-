
import React from 'react';


// export default function HomePage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h4" className="text-blue-500">
//           Welcome to the 3D World
//         </Typography>
//         <Button variant="contained" color="primary">
//           Get Started
//         </Button>
//       </Box>
//       <div className="w-full h-96">
//         <Canvas>
//           {/* Add Three.js objects here */}
//         </Canvas>
//       </div>
//     </div>
//   );
// }
// src/components/HomeSection.jsx

const HomeSection = () => {
  return (
    <section className="text-center my-10">
      <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
      <p className="mt-4 text-gray-600">
        Hi, I'm Prince Dayma, a Full Stack Developer.
      </p>
    </section>
  );
};

export default HomeSection;
