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
   * Build the curved path for the arrow.
   *
   * The arrow starts low on the front-right of the globe, sweeps down
   * and under, wraps around the BACK of the globe, cresting over the
   * top and straightening into a vertical finish so the arrowhead
   * points straight up at the sky.
   */
  const { tubeGeometry, coneQuaternion, conePosition } = useMemo(() => {
    // Control points traced in order along the path
    const points: THREE.Vector3[] = [
      new THREE.Vector3(1.4, -0.9, 0.9),   // start: front-right, below equator
      new THREE.Vector3(0.6, -1.5, 0.3),   // dips under-right
      new THREE.Vector3(-0.6, -1.4, -0.4), // under-back
      new THREE.Vector3(-1.5, -0.4, -0.8), // back-left, rising
      new THREE.Vector3(-1.4, 0.7, -1.0),  // upper-back-left
      new THREE.Vector3(-0.4, 1.4, -1.1),  // cresting top-back
      new THREE.Vector3(0.7, 1.6, -0.6),   // top-back-right
      new THREE.Vector3(1.2, 1.8, 0.1),    // swinging forward
      new THREE.Vector3(1.1, 2.2, 0.4),    // straightening
      new THREE.Vector3(1.0, 2.6, 0.5),    // nearly vertical
      new THREE.Vector3(1.0, 3.0, 0.5),    // final — tangent points straight up
    ];

    const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);

    // Tube geometry — the main arrow shaft wrapping around the globe
    const tubeGeometry = new THREE.TubeGeometry(curve, 220, 0.12, 20, false);

    // Cone (arrowhead) — align it with the curve's tangent at the end
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

      {/* 3. Arrowhead — sits at the end of the curve, pointing up */}
      <mesh position={conePosition} quaternion={coneQuaternion}>
        <coneGeometry args={[0.32, 0.7, 40]} />
        <meshPhysicalMaterial
          color="#D4AF37"
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>

      {/* 4. Sparkles near the arrow tip */}
      <Sparkle position={[1.6, 3.1, 0.6]} scale={0.08} />
      <Sparkle position={[0.5, 3.3, 0.2]} scale={0.05} />
      <Sparkle position={[1.9, 2.5, 0.4]} scale={0.04} />
    </group>
  );
}

export function WitterCustomLogo3D() {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0.3, 0.8, 7], fov: 45 }}>
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
