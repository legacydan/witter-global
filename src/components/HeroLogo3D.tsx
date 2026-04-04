"use client";

export function HeroLogo3D() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] aspect-square mx-auto relative flex items-center justify-center animate-fade-in">
      <iframe 
        src="https://omma.build/p/standalone-3d-model-design-57t79b" 
        className="w-full h-full border-none outline-none md:scale-110 pointer-events-auto"
        title="Witter Global 3D Logo"
        loading="lazy"
        allow="autoplay; fullscreen"
      />
      {/* Fade edge mask for blending into the deep navy background cleanly */}
      <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0_0_80px_60px_#040c1b] mix-blend-multiply opacity-50" />
    </div>
  );
}
