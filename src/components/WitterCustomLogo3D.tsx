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
   * Build the arrow as a helix that smoothly "lands" horizontally at
   * the top and finishes pointing straight outward.
   *
   * Uses a single continuous parameterization:
   *   y(t) = bottomY + (topY - bottomY) * g(t)
   *   θ(t) = totalTurns * 2π * g(t)
   *   r(t) = (globe surface radius at y) + offset + extension * h(t)
   *
   * Where:
   *   g(t) = t + t² - t³   — linear-ish but g'(1) = 0, so as t → 1
   *                          the spiral stops climbing AND stops rotating.
   *   h(t) = t⁵            — stays near 0 for most of the path so the
   *                          spiral hugs the globe, then grows rapidly
   *                          near t=1 with h'(1) = 5. Because this is
   *                          the ONLY velocity source at t=1, the final
   *                          tangent is pure radial-outward: horizontal
   *                          and straight out. No bend.
   */
  const { tubeGeometry, coneQuaternion, conePosition } = useMemo(() => {
    const points: THREE.Vector3[] = [];

    const spiralSegments = 160;
    const globeRadius = 1.2;
    const spiralOffset = 0.11;
    const bottomY = -1.15;
    const topY = 1.0;                // where the arrow lands flat
    const totalTurns = 1.5;
    const extensionAmount = 0.55;    // how far past the globe the flat exit reaches

    for (let i = 0; i <= spiralSegments; i++) {
      const t = i / spiralSegments;
      const g = t + t * t - t * t * t;       // g(0)=0, g(1)=1, g'(1)=0
      const h = t * t * t * t * t;           // h(0)=0, h(1)=1, h'(1)=5

      const y = bottomY + g * (topY - bottomY);
      const surfaceR = Math.sqrt(
        Math.max(0.0001, globeRadius * globeRadius - y * y)
      );
      const r = surfaceR + spiralOffset + extensionAmount * h;
      const angle = g * totalTurns * Math.PI * 2;

      points.push(
        new THREE.Vector3(r * Math.cos(angle), y, r * Math.sin(angle))
      );
    }

    const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);

    // Tube geometry — the arrow shaft wrapping around the globe
    const tubeGeometry = new THREE.TubeGeometry(curve, 400, 0.1, 20, false);

    // Cone (arrowhead) — placed at the natural end of the helix with
    // orientation taken from the curve's final tangent. Because of the
    // parameterization above, that tangent is horizontal radial-outward.
    const endTangent = curve.getTangentAt(1).normalize();
    const endPoint = curve.getPointAt(1);
    const up = new THREE.Vector3(0, 1, 0);
    const coneQuaternion = new THREE.Quaternion().setFromUnitVectors(
      up,
      endTangent
    );

    // Offset the cone so its BASE sits flush with the end of the tube
    const coneHeight = 0.55;
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

      {/* 3. Arrowhead — sits at the natural end of the helix */}
      <mesh position={conePosition} quaternion={coneQuaternion}>
        <coneGeometry args={[0.26, 0.55, 40]} />
        <meshPhysicalMaterial
          color="#D4AF37"
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>

      {/* 4. Sparkles near the globe's top */}
      <Sparkle position={[0.4, 1.55, 0.2]} scale={0.08} />
      <Sparkle position={[-0.3, 1.6, -0.2]} scale={0.05} />
      <Sparkle position={[0.1, 1.75, 0.1]} scale={0.04} />
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
