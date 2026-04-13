"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import {
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

const techItems = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#68A063" },
  { name: "Python", color: "#F7CD3E" },
  { name: "MongoDB", color: "#47A248" },
  { name: "NestJS", color: "#E0234E" },
  { name: "Tailwind", color: "#38BDF8" },
  { name: "FastAPI", color: "#009688" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Flutter", color: "#54C5F8" },
  { name: "Firebase", color: "#FFCA28" },
];

const techIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  MongoDB: SiMongodb,
  NestJS: SiNestjs,
  Tailwind: SiTailwindcss,
  FastAPI: SiFastapi,
  Supabase: SiSupabase,
  Flutter: SiFlutter,
  Firebase: SiFirebase,
};

function TechLabel({
  name,
  color,
  position,
}: {
  name: string;
  color: string;
  position: [number, number, number];
}) {
  const groupRef = useRef<THREE.Group>(null);
  const Icon = techIcons[name] ?? SiReact;

  useFrame(({ camera }) => {
    if (groupRef.current) {
      // Always face the active camera so text is never mirrored from the back.
      groupRef.current.lookAt(camera.position);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        <Html transform sprite position={[0, 0, 0.01]} distanceFactor={7} occlude={false}>
          <div className="pointer-events-none select-none">
            <Icon size={34} color={color} title={name} />
          </div>
        </Html>
      </group>
    </Float>
  );
}

function OrbitingTech() {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    return techItems.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / techItems.length);
      const theta = Math.sqrt(techItems.length * Math.PI) * phi;
      const radius = 2.8;
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ] as [number, number, number];
    });
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {techItems.map((tech, i) => (
        <TechLabel key={tech.name} name={tech.name} color={tech.color} position={positions[i]} />
      ))}
    </group>
  );
}

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.1, 64, 64]} />
      <MeshDistortMaterial
        color="#a855f7"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.15}
        wireframe={false}
      />
    </mesh>
  );
}

function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = -clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.85, 32, 32]} />
      <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.05} />
    </mesh>
  );
}

function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ec4899" size={0.03} transparent opacity={0.6} />
    </points>
  );
}

export default function TechSphere() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#a855f7" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ec4899" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        <CoreSphere />
        <WireframeSphere />
        <OrbitingTech />
        <Particles />
      </Canvas>
    </div>
  );
}
