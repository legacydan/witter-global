"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    let width = 0;
    const onResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        width = canvasRef.current.parentElement.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.15,
      dark: 1, // Render in dark mode styling
      diffuse: 1.2,
      mapSamples: 25000,
      mapBrightness: 6,
      baseColor: [0.04, 0.11, 0.23], // Matches #0B1D3A softly
      markerColor: [0.83, 0.68, 0.21], // Gold (#D4AF37ish)
      glowColor: [0.04, 0.11, 0.3], // Navy glow
      markers: [
        { location: [26.1224, -80.1373], size: 0.1 },     // Fort Lauderdale
        { location: [40.7128, -74.0060], size: 0.05 },     // New York
        { location: [51.5072, -0.1276], size: 0.04 },      // London
      ],
      onRender: (state: any) => {
        if (!pointerInteracting.current) {
          phi += 0.002;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    } as any);

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-full max-w-[800px] aspect-square mx-auto relative flex items-center justify-center animate-fade-in delay-200">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
          }
        }}
      />
      {/* Decorative Gold Rings */}
      <div className="absolute inset-0 rounded-full border border-gold-500/20 scale-105 pointer-events-none" />
      <div className="absolute inset-0 rounded-full border border-gold-500/10 scale-110 rotate-12 pointer-events-none" />
    </div>
  );
}
