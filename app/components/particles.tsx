"use client";

import React, { useRef, useEffect } from "react";
import { useMousePosition } from "@/util/mouse";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three"; // Required for Vanta.js

interface ParticlesProps {
  className?: string;
}

export default function Particles({ className = "" }: ParticlesProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null); // Store the Vanta.js effect instance
  const mousePosition = useMousePosition();

  useEffect(() => {
    if (vantaRef.current) {
      // Initialize Vanta.js NET effect
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE, // Pass the THREE.js library
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff3f81, // Pink color
        backgroundColor: 0x0, // Black background
        points: 11.0,
        maxDistance: 21.0,
      });
    }

    // Clean up the effect when the component unmounts
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  // Optional: Update Vanta.js effect based on mouse position
  useEffect(() => {
	if (vantaEffect.current) {
		// Calculate normalized mouse position
		const normalizedX = mousePosition.x / window.innerWidth;
		const normalizedY = mousePosition.y / window.innerHeight;
	
		// Generate a valid hexadecimal color value based on both X and Y
		const newColor = Math.floor((normalizedX + normalizedY) * 0xffffff / 2);
	
		// Ensure the color is within the valid range
		const validColor = Math.min(Math.max(newColor, 0), 0xff3f81);
	
		// Update the Vanta.js effect with the new color
		vantaEffect.current.setOptions({
		  color: validColor,
		});
	  }
	}, [mousePosition.x, mousePosition.y]);

  return (
    <div className={className} ref={vantaRef} aria-hidden="true">
      {/* Vanta.js will render here */}
    </div>
  );
}
