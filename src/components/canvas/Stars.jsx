import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

/**
 * Stars component creates an animated starfield effect using Three.js points
 * The stars are positioned randomly in a sphere and slowly rotate
 */
const Stars = (props) => {
  // Reference to the Points mesh for rotation animations
  const ref = useRef();
  
  // Generate 5000 random points distributed within a sphere (radius 1.2)
  // Uses Float32Array for better performance with large point clouds
  // useState ensures the sphere positions are only generated once
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Animation loop - rotates the entire star field continuously
  // useFrame runs on every frame render (typically 60fps)
  useFrame((state, delta) => {
    // Slow rotation on X axis (vertical rotation)
    ref.current.rotation.x -= delta / 10;
    // Even slower rotation on Y axis (horizontal rotation)
    ref.current.rotation.y -= delta / 15;
  });

  return (
    // Group wrapper with initial 45-degree rotation for visual appeal
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Points mesh containing all star positions */}
      <Points 
        ref={ref} 
        positions={sphere}    // Array of 3D coordinates for each point
        stride={3}           // Each point uses 3 values (x, y, z)
        frustumCulled        // Performance: hide points outside camera view
        {...props}
      >
        {/* Material defining how each point/star appears */}
        <PointMaterial
          transparent          // Allow transparency effects
          color='#f272c8'     // Pink/magenta color for stars
          size={0.002}        // Very small point size for star effect
          sizeAttenuation={true}  // Points get smaller with distance (realistic)
          depthWrite={false}  // Don't write to depth buffer (prevents z-fighting)
        />
      </Points>
    </group>
  );
};

/**
 * StarsCanvas component wraps the Stars in a Three.js Canvas
 * Positioned as a background element behind other content
 */
const StarsCanvas = () => {
  return (
    // Container div positioned absolutely behind other content
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      {/* Three.js Canvas with camera positioned to view the stars */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Suspense handles loading states for 3D components */}
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        {/* Preload all assets for better performance */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;