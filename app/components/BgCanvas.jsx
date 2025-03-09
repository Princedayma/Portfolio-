// components/AnimatedBackground.js
"use client"
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedBackground() {
  const starsRef = useRef();

  // Rotate the star field
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={generateStars(10000)}
          count={10000}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" color={0xffffff} size={0.1} />
    </points>
  );
}

// Function to generate star positions
function generateStars(count) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = THREE.MathUtils.randFloatSpread(2000);
    positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(2000);
    positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(2000);
  }
  return positions;
}

export default function BackgroundCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.5} />
      <AnimatedBackground />
    </Canvas>
  );
}
