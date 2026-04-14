"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const gridGroupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
    if (gridGroupRef.current) {
      gridGroupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  const latLines = useMemo(() => {
    const lines = [];
    for (let lat = -80; lat <= 80; lat += 20) {
      const points: THREE.Vector3[] = [];
      const latRad = (lat * Math.PI) / 180;
      for (let lng = 0; lng <= 360; lng += 5) {
        const lngRad = (lng * Math.PI) / 180;
        const r = 1.51;
        points.push(
          new THREE.Vector3(
            r * Math.cos(latRad) * Math.cos(lngRad),
            r * Math.sin(latRad),
            r * Math.cos(latRad) * Math.sin(lngRad)
          )
        );
      }
      lines.push(points);
    }
    return lines;
  }, []);

  const lngLines = useMemo(() => {
    const lines = [];
    for (let lng = 0; lng < 360; lng += 20) {
      const points: THREE.Vector3[] = [];
      const lngRad = (lng * Math.PI) / 180;
      for (let lat = -90; lat <= 90; lat += 5) {
        const latRad = (lat * Math.PI) / 180;
        const r = 1.51;
        points.push(
          new THREE.Vector3(
            r * Math.cos(latRad) * Math.cos(lngRad),
            r * Math.sin(latRad),
            r * Math.cos(latRad) * Math.sin(lngRad)
          )
        );
      }
      lines.push(points);
    }
    return lines;
  }, []);

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.3} roughness={0.7} transparent opacity={0.9} />
      </mesh>
      <group ref={gridGroupRef}>
        {latLines.map((points, i) => (
          <Line key={`lat-${i}`} points={points} color="#a855f7" lineWidth={0.3} transparent opacity={0.25} />
        ))}
        {lngLines.map((points, i) => (
          <Line key={`lng-${i}`} points={points} color="#ec4899" lineWidth={0.3} transparent opacity={0.15} />
        ))}
      </group>
      <mesh>
        <sphereGeometry args={[1.65, 32, 32]} />
        <meshStandardMaterial color="#a855f7" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshStandardMaterial color="#a855f7" transparent opacity={0.02} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function ConnectionLines() {
  const groupRef = useRef<THREE.Group>(null);

  const connections = useMemo(() => {
    const pts = [
      { lat: 33.9, lng: 35.5 },
      { lat: 51.5, lng: -0.1 },
      { lat: 40.7, lng: -74 },
      { lat: 35.7, lng: 139.7 },
      { lat: -33.9, lng: 18.4 },
      { lat: 48.8, lng: 2.3 },
      { lat: 37.8, lng: -122.4 },
      { lat: 1.3, lng: 103.8 },
    ];
    return pts.map(({ lat, lng }) => {
      const phi = ((90 - lat) * Math.PI) / 180;
      const theta = ((lng + 180) * Math.PI) / 180;
      const r = 1.55;
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    });
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <group ref={groupRef}>
      {connections.map((point, i) => {
        const next = connections[(i + 1) % connections.length];
        const mid = new THREE.Vector3().addVectors(point, next).normalize().multiplyScalar(2.1);
        const pts: THREE.Vector3[] = [];
        for (let t = 0; t <= 1; t += 0.05) {
          pts.push(
            new THREE.Vector3(
              (1 - t) * (1 - t) * point.x + 2 * (1 - t) * t * mid.x + t * t * next.x,
              (1 - t) * (1 - t) * point.y + 2 * (1 - t) * t * mid.y + t * t * next.y,
              (1 - t) * (1 - t) * point.z + 2 * (1 - t) * t * mid.z + t * t * next.z
            )
          );
        }
        return (
          <group key={i}>
            <Line points={pts} color="#f59e0b" lineWidth={0.5} transparent opacity={0.4} />
            <mesh position={point}>
              <sphereGeometry args={[0.025, 8, 8]} />
              <meshBasicMaterial color="#f59e0b" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function Particles() {
  const count = 120;
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#a855f7" size={0.015} transparent opacity={0.5} />
    </points>
  );
}

export default function GlobeScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 5.2 : 4.5], fov: isMobile ? 52 : 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 3, 5]} intensity={1.5} color="#a855f7" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#ec4899" />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#f59e0b" />
        <Globe />
        <ConnectionLines />
        <Particles />
      </Canvas>
    </div>
  );
}
