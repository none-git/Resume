import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    // ---- Wireframe shapes with neon-tinted glow ----
    const shapes = [];
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.DodecahedronGeometry(0.6, 0),
      new THREE.TorusKnotGeometry(0.6, 0.22, 64, 8),
    ];

    const positions = [
      { x: -4.5, y: 2, z: -2 },
      { x: 5, y: -1.5, z: -1 },
      { x: -2, y: -3, z: 0 },
      { x: 3.5, y: 3.5, z: -3 },
      { x: -5.5, y: -2, z: -4 },
      { x: 0.5, y: 4, z: -5 },
    ];

    for (let i = 0; i < 6; i++) {
      const geo = geometries[i % geometries.length];
      const edges = new THREE.EdgesGeometry(geo);
      const opacity = 0.15 + Math.random() * 0.15;
      // Neon-tinted: mostly desaturated with a slight green-yellow hue
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color().setHSL(0.22, 0.35, 0.55 + Math.random() * 0.15),
        transparent: true,
        opacity,
      });
      const mesh = new THREE.LineSegments(edges, mat);
      mesh.position.set(positions[i].x, positions[i].y, positions[i].z);
      const scale = 0.8 + Math.random() * 0.6;
      mesh.scale.set(scale, scale, scale);
      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        rotSpeedZ: (Math.random() - 0.5) * 0.004,
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

    // ---- Constellation: particles connected by neon lines when close ----
    const PARTICLE_COUNT = 90;
    const CONNECT_DIST = 2.2;
    const pPositions = new Float32Array(PARTICLE_COUNT * 3);
    const pVelocities = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 22;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      pVelocities[i * 3] = (Math.random() - 0.5) * 0.008;
      pVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
      pVelocities[i * 3 + 2] = 0;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0xc2f73e,
      size: 0.06,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // Pre-allocate line segments buffer for connections (max pairs)
    const MAX_LINES = 300;
    const linePositions = new Float32Array(MAX_LINES * 6);
    const lineColors = new Float32Array(MAX_LINES * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const connectionLines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(connectionLines);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    const onMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', onMouseMove);

    let animFrameId;

    function animate() {
      const time = Date.now() * 0.001;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Shapes: rotate + float + parallax
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
        m.position.x += mouseX * 0.15 * (i + 1) * 0.15;
        m.position.y += -mouseY * 0.1 * (i + 1) * 0.15;
      });

      // Particles: drift + wrap
      const posAttr = particlesGeo.attributes.position;
      const arr = posAttr.array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        arr[i * 3] += pVelocities[i * 3];
        arr[i * 3 + 1] += pVelocities[i * 3 + 1];
        // Wrap around bounds
        if (arr[i * 3] > 11) arr[i * 3] = -11;
        if (arr[i * 3] < -11) arr[i * 3] = 11;
        if (arr[i * 3 + 1] > 7) arr[i * 3 + 1] = -7;
        if (arr[i * 3 + 1] < -7) arr[i * 3 + 1] = 7;
      }
      posAttr.needsUpdate = true;

      // Parallax on whole particle field
      particles.position.x = mouseX * 0.3;
      particles.position.y = -mouseY * 0.2;

      // Build connection lines between close particles
      let lineIdx = 0;
      const linePosArr = lineGeo.attributes.position.array;
      const lineColArr = lineGeo.attributes.color.array;
      for (let i = 0; i < PARTICLE_COUNT && lineIdx < MAX_LINES; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < MAX_LINES; j++) {
          const dx = arr[i * 3] - arr[j * 3];
          const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
          const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < CONNECT_DIST) {
            const alpha = 1 - dist / CONNECT_DIST;
            const o = lineIdx * 6;
            linePosArr[o] = arr[i * 3];
            linePosArr[o + 1] = arr[i * 3 + 1];
            linePosArr[o + 2] = arr[i * 3 + 2];
            linePosArr[o + 3] = arr[j * 3];
            linePosArr[o + 4] = arr[j * 3 + 1];
            linePosArr[o + 5] = arr[j * 3 + 2];
            // Neon green color scaled by proximity
            lineColArr[o] = 0.76 * alpha;
            lineColArr[o + 1] = 0.97 * alpha;
            lineColArr[o + 2] = 0.24 * alpha;
            lineColArr[o + 3] = 0.76 * alpha;
            lineColArr[o + 4] = 0.97 * alpha;
            lineColArr[o + 5] = 0.24 * alpha;
            lineIdx++;
          }
        }
      }
      // Zero out unused tail
      for (let k = lineIdx; k < MAX_LINES; k++) {
        const o = k * 6;
        linePosArr[o] = linePosArr[o + 1] = linePosArr[o + 2] = 0;
        linePosArr[o + 3] = linePosArr[o + 4] = linePosArr[o + 5] = 0;
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIdx * 2);

      // Fade everything out as user scrolls past hero
      const scrollOpacity = Math.max(0, 1 - (window.scrollY / window.innerHeight) * 1.1);
      shapes.forEach((m) => {
        m.material.opacity = m.userData.baseOpacity * scrollOpacity;
      });
      particlesMat.opacity = 0.7 * scrollOpacity;
      lineMat.opacity = 0.35 * scrollOpacity;

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(animate);
    }

    if (prefersReducedMotion) {
      // Render a single static frame
      renderer.render(scene, camera);
    } else {
      animFrameId = requestAnimationFrame(animate);
    }

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
      geometries.forEach((g) => g.dispose());
      shapes.forEach((m) => {
        m.geometry.dispose();
        m.material.dispose();
      });
      particlesGeo.dispose();
      particlesMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
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
