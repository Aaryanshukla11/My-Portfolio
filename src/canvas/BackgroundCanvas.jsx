import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const StarField = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        // Rotate 
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        // Parallax move based on scroll
        // We can read scroll from DOM since this is a background canvas
        const scrollY = window.scrollY;
        // Move slightly on Z axis based on scroll to simulate depth travel
        ref.current.position.z = scrollY * 0.0005;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3B82F6"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2}
                />
            </Points>
        </group>
    );
};

const BackgroundCanvas = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarField />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default BackgroundCanvas;
