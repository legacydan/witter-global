"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Function to generate the 4-point star/sparkle
function Sparkle({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
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
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} roughness={0.1} metalness={0.8} />
      </mesh>
      {/* Flatten on Z axis to make a 2D-like star, stretch on X and Y */}
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

function LogoGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  // Auto-rotate the whole assembly slightly
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  // Calculate the arrow position at the end of the Torus arc
  const torusRadius = 1.6;
  const torusTube = 0.08;
  const arcSweep = Math.PI * 1.3; // Swooshes partway around
  
  // The end point of an arc starting from X-axis is roughly:
  const endX = Math.cos(arcSweep) * torusRadius;
  const endY = Math.sin(arcSweep) * torusRadius;

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

      {/* Grid wrapper for the globe (light latitude/longitude styling) */}
      <mesh>
        <sphereGeometry args={[1.205, 32, 32]} />
        <meshBasicMaterial color="#ffffff" wireframe={true} transparent={true} opacity={0.05} />
      </mesh>

      {/* 2. The Golden Swoosh (Torus) */}
      {/* We rotate the Torus so it angles aggressively upward exactly like the logo */}
      <group rotation={[Math.PI / 4, Math.PI / 6, -Math.PI / 8]}>
        {/* Main outer curve */}
        <mesh rotation={[0, 0, -Math.PI / 3]}>
          <torusGeometry args={[torusRadius, torusTube, 32, 100, arcSweep]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.15} />
        </mesh>
        
        {/* Secondary thinner inner curve to mimic the logo's shadow/double swoop */}
        <mesh rotation={[0, 0, -Math.PI / 3.5]} position={[0, 0, -0.15]}>
          <torusGeometry args={[torusRadius - 0.2, torusTube * 0.6, 16, 100, arcSweep * 0.8]} />
          <meshStandardMaterial color="#A1801E" metalness={1} roughness={0.3} />
        </mesh>

        {/* 3. The Arrowhead */}
        {/* We place it precisely at the end of the torus arc, then rotate to face forward tangentially */}
        <mesh 
          position={[endX, endY, 0]} 
          // Rotate around Z to match the terminal angle of the arc, plus pi/2 to point outward
          rotation={[0, 0, arcSweep + Math.PI / 2]} 
        >
          {/* We push it slightly along its local Y so the base sits on the tube */}
          <group position={[0, 0.3, 0]}>
            <coneGeometry args={[0.25, 0.6, 32]} />
            <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
          </group>
        </mesh>
      </group>

      {/* 4. Sparkles (Stars) */}
      {/* Scattered in the top right to match the logo image exactly */}
      <Sparkle position={[1.2, 1.8, 0]} scale={0.08} />
      <Sparkle position={[1.8, 1.2, -0.2]} scale={0.05} />
      <Sparkle position={[1.0, 1.3, 0.5]} scale={0.04} />

    </group>
  );
}

export function WitterCustomLogo3D() {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <fog attach="fog" args={["#0B1D3A", 5, 15]} />
        
        {/* Lighting setup optimized to reflect beautifully against the metallic gold */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -10, -5]} intensity={0.5} color="#4A90E2" />
        
        <Environment preset="city" />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <LogoGeometry />
        </Float>

        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />

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
