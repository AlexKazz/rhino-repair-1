import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function ThreeScene({ modelUrl }) {
  const containerRef = useRef();

  useEffect(() => {
    // Set up a basic scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Lighting
    const light = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(light);

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => console.error(error)
    );

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // Clean up on unmount
    return () => {
      renderer.dispose();
      scene.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, [modelUrl]); // Re-run effect if modelUrl changes

  return <div ref={containerRef} />;
}
