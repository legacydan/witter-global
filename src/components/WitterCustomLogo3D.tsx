"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ─── Decorative sparkle (unchanged) ─── */
function Sparkle({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      <mesh scale={[3, 0.3, 0.1]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
      </mesh>
      <mesh scale={[0.3, 3, 0.1]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

/* ─── The Globe + Upward Gold Arrow ─── */
function LogoGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle auto-rotate with a subtle sway
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
    }
  });

  /* Gold PBR material shared by every arrow piece for a consistent finish */
  const goldMaterial = (
    <meshPhysicalMaterial
      color="#D4AF37"
      metalness={1}
      roughness={0.12}
      clearcoat={1}
      clearcoatRoughness={0.08}
    />
  );

  /* Arrow dimensions (upward-pointing) */
  const shaftHeight = 2.6;
  const shaftRadius = 0.13;
  const headHeight = 0.85;
  const headRadius = 0.38;

  // Shaft center so its bottom sits just inside the top of the globe
  // Globe radius = 1.2, shaft half = 1.3 → shaft bottom at y ≈ 0.2 (below globe top for anchor look)
  const shaftCenterY = 0.2 + shaftHeight / 2; // 1.5
  const shaftTopY = shaftCenterY + shaftHeight / 2; // 2.8
  const headCenterY = shaftTopY + headHeight / 2; // 3.225

  return (
    <group ref={groupRef}>
      {/* 1. The Central Globe */}
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhysicalMaterial
          color="#063E8A"
          roughness={0.15}
          metalness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Grid wrapper for the globe (subtle lat/long shimmer) */}
      <mesh>
        <sphereGeometry args={[1.205, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe={true}
          transparent={true}
          opacity={0.06}
        />
      </mesh>

      {/* 2. The Golden Upward Arrow — tilted forward slightly for dynamism */}
      <group rotation={[-Math.PI / 14, 0, Math.PI / 28]}>
        {/* Shaft */}
        <mesh position={[0, shaftCenterY, 0]}>
          <cylinderGeometry
            args={[shaftRadius, shaftRadius, shaftHeight, 48]}
          />
          {goldMaterial}
        </mesh>

        {/* Arrowhead (cone points up by default in three.js) */}
        <mesh position={[0, headCenterY, 0]}>
          <coneGeometry args={[headRadius, headHeight, 48]} />
          {goldMaterial}
        </mesh>

        {/* Decorative collar where shaft meets globe — hides the entry point */}
        <mesh position={[0, 0.35, 0]}>
          <torusGeometry args={[0.22, 0.05, 16, 48]} />
          <meshPhysicalMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Subtle secondary highlight cone behind the main tip for depth */}
        <mesh position={[0, headCenterY, -0.01]} scale={[0.95, 0.95, 0.95]}>
          <coneGeometry args={[headRadius, headHeight, 48]} />
          <meshStandardMaterial
            color="#B8924A"
            metalness={1}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* 3. Sparkles scattered near the arrow tip */}
      <Sparkle position={[0.9, 2.8, 0.2]} scale={0.08} />
      <Sparkle position={[-0.7, 3.1, -0.1]} scale={0.05} />
      <Sparkle position={[0.4, 2.4, 0.5]} scale={0.04} />
    </group>
  );
}

export function WitterCustomLogo3D() {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 1.2, 6.2], fov: 45 }}>
        <fog attach="fog" args={["#0B1D3A", 6, 18]} />

        {/* Lighting optimized to reflect beautifully against metallic gold */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-5, -10, -5]} intensity={0.5} color="#4A90E2" />
        <pointLight position={[0, 4, 3]} intensity={0.8} color="#F2E8D1" />

        <Environment preset="city" />

        <Float speed={2} rotationIntensity={0.15} floatIntensity={0.45}>
          <LogoGeometry />
        </Float>

        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#D4AF37]/10 blur-[100px] -z-10 rounded-full" />
    </div>
  );
}
