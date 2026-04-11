"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ─── Decorative sparkle ─── */
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

/* ─── Globe + Gold Arrow wrapping around the globe finishing upward ─── */
function LogoGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle auto-rotate + sway
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
    }
  });

  /**
   * Build the arrow as a true helix wrapping the globe, finishing at
   * an upward-outward angle (not straight vertical).
   *
   * Phase 1: helix that clings to the globe from bottom to upper region.
   *          Radius varies with latitude so it actually hugs the sphere.
   * Phase 2: short straight-ish extension that carries the path outward
   *          and upward at an angle, where the arrowhead sits.
   */
  const { tubeGeometry, coneQuaternion, conePosition } = useMemo(() => {
    const points: THREE.Vector3[] = [];

    // Helix parameters (tuned shorter than before)
    const spiralSegments = 64;
    const effectiveRadius = 1.42;   // spiral sphere radius (just outside the 1.2 globe)
    const bottomY = -1.25;          // spiral starts just below the globe's bottom
    const spiralTopY = 0.85;        // spiral exits the globe around the upper third
    const totalTurns = 2;           // full revolutions around the globe

    // 1) Spiral portion — hugs the globe surface from bottom to upper region
    for (let i = 0; i <= spiralSegments; i++) {
      const t = i / spiralSegments;
      const y = bottomY + t * (spiralTopY - bottomY);
      const r = Math.sqrt(
        Math.max(0.01, effectiveRadius * effectiveRadius - y * y)
      );
      const angle = t * totalTurns * Math.PI * 2;
      points.push(
        new THREE.Vector3(r * Math.cos(angle), y, r * Math.sin(angle))
      );
    }

    // 2) Angled exit — continues outward (+x) and upward (+y) at roughly
    //    40° from vertical. The final tangent is NOT vertical, so the
    //    arrowhead points up-and-out.
    points.push(new THREE.Vector3(1.25, 1.05, 0.18));
    points.push(new THREE.Vector3(1.48, 1.3, 0.08));
    points.push(new THREE.Vector3(1.75, 1.58, 0.02));
    points.push(new THREE.Vector3(2.0, 1.85, -0.02));

    // "chordal" parameterization handles the spacing change between the
    // dense spiral segments and the wider exit waypoints smoothly.
    const curve = new THREE.CatmullRomCurve3(points, false, "chordal", 0.5);

    // Tube geometry — the main arrow shaft wrapping around the globe
    const tubeGeometry = new THREE.TubeGeometry(curve, 320, 0.12, 20, false);

    // Cone (arrowhead) — align with the curve's tangent at the end
    const endTangent = curve.getTangentAt(1).normalize();
    const endPoint = curve.getPointAt(1);
    const up = new THREE.Vector3(0, 1, 0);
    const coneQuaternion = new THREE.Quaternion().setFromUnitVectors(
      up,
      endTangent
    );

    // Offset the cone so its BASE sits at the end of the tube
    const coneHeight = 0.7;
    const coneOffset = endTangent.clone().multiplyScalar(coneHeight / 2);
    const conePosition = endPoint.clone().add(coneOffset);

    return { tubeGeometry, coneQuaternion, conePosition };
  }, []);

  return (
    <group ref={groupRef}>
      {/* 1. Central Globe */}
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

      {/* Subtle wireframe lat/long shimmer */}
      <mesh>
        <sphereGeometry args={[1.205, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe={true}
          transparent={true}
          opacity={0.06}
        />
      </mesh>

      {/* 2. Gold Arrow Shaft — wraps around the globe */}
      <mesh geometry={tubeGeometry}>
        <meshPhysicalMaterial
          color="#D4AF37"
          metalness={1}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>

      {/* 3. Arrowhead — sits at the end of the curve, angled up-and-out */}
      <mesh position={conePosition} quaternion={coneQuaternion}>
        <coneGeometry args={[0.3, 0.7, 40]} />
        <meshPhysicalMaterial
          color="#D4AF37"
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>

      {/* 4. Sparkles near the arrow tip */}
      <Sparkle position={[2.3, 2.2, 0.1]} scale={0.08} />
      <Sparkle position={[2.6, 1.8, -0.2]} scale={0.05} />
      <Sparkle position={[1.9, 2.5, 0.3]} scale={0.04} />
    </group>
  );
}

export function WitterCustomLogo3D() {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0.6, 7.5], fov: 45 }}>
        <fog attach="fog" args={["#0B1D3A", 7, 20]} />

        {/* Lighting optimized for metallic gold */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-5, -10, -5]} intensity={0.5} color="#4A90E2" />
        <pointLight position={[0, 4, 3]} intensity={0.8} color="#F2E8D1" />

        <Environment preset="city" />

        <Float speed={2} rotationIntensity={0.15} floatIntensity={0.45}>
          <LogoGeometry />
        </Float>

        <ContactShadows
          position={[0, -1.8, 0]}
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
