import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const shapes = [];
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.DodecahedronGeometry(0.6, 0),
      new THREE.TorusKnotGeometry(0.6, 0.25, 64, 8),
    ];

    const positions = [
      { x: -4, y: 2, z: -2 },
      { x: 5, y: -1.5, z: -1 },
      { x: -2, y: -3, z: 0 },
      { x: 3.5, y: 3.5, z: -3 },
      { x: -5, y: -2, z: -4 },
      { x: 0, y: 4, z: -5 },
    ];

    for (let i = 0; i < 6; i++) {
      const geo = geometries[i % geometries.length];
      const edges = new THREE.EdgesGeometry(geo);
      const opacity = 0.12 + Math.random() * 0.18;
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color().setHSL(0.58, 0.05, 0.5 + Math.random() * 0.2),
        transparent: true,
        opacity,
      });
      const mesh = new THREE.LineSegments(edges, mat);
      mesh.position.set(positions[i].x, positions[i].y, positions[i].z);
      const scale = 0.8 + Math.random() * 0.6;
      mesh.scale.set(scale, scale, scale);
      mesh.userData = {
        speed: 0.1 + Math.random() * 0.2,
        rotSpeedX: (Math.random() - 0.5) * 0.01,
        rotSpeedY: (Math.random() - 0.5) * 0.01,
        rotSpeedZ: (Math.random() - 0.5) * 0.005,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.2 + Math.random() * 0.3,
        floatAmplitude: 0.15 + Math.random() * 0.2,
        origX: positions[i].x,
        origY: positions[i].y,
        baseOpacity: opacity,
      };
      scene.add(mesh);
      shapes.push(mesh);
    }

    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 400;
    const pPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      pPositions[i] = (Math.random() - 0.5) * 30;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x666680,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', onMouseMove);

    function animate() {
      const time = Date.now() * 0.001;
      shapes.forEach((m, i) => {
        m.rotation.x += m.userData.rotSpeedX;
        m.rotation.y += m.userData.rotSpeedY;
        m.rotation.z += m.userData.rotSpeedZ;
        m.position.y =
          m.userData.origY +
          Math.sin(time * m.userData.floatSpeed + m.userData.floatOffset) * m.userData.floatAmplitude;
        m.position.x =
          m.userData.origX +
          Math.sin(time * m.userData.floatSpeed * 0.5 + m.userData.floatOffset) *
            m.userData.floatAmplitude *
            0.3;
        m.position.x += mouseX * 0.08 * (i + 1) * 0.2;
        m.position.y += mouseY * 0.08 * (i + 1) * 0.2;
      });
      particles.rotation.y += 0.0002;

      const scrollOpacity = Math.max(0, 1 - (window.scrollY / window.innerHeight) * 1.2);
      shapes.forEach((m) => {
        m.material.opacity = m.userData.baseOpacity * scrollOpacity;
      });
      particlesMat.opacity = 0.5 * scrollOpacity;

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(animate);
    }

    let animFrameId = requestAnimationFrame(animate);

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 200);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id='three-canvas'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
