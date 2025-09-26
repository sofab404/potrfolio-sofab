'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three'; // Required for Vanta.js
import NET from 'vanta/dist/vanta.net.min'; // Example effect

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    // Initialize Vanta.js effect
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE, // Pass THREE.js instance
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xe83e78,
          backgroundColor: 0x24163e,
          points: 9.00,
          maxDistance: 19.00,
          showDots: false
          // Add other Vanta.js options here
        })
      );
    }

    // Cleanup Vanta.js effect when component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]); // Re-run effect only if vantaEffect changes

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        height: '100vh', // Or your desired dimensions
        position: 'absolute', // To cover the background
        top: 0,
        left: 0,
        zIndex: -1, // Ensure it's in the background
        //opacity: '50%'
      }}
    >
      {/* Foreground content can go here if desired */}
    </div>
  );
};

export default VantaBackground;