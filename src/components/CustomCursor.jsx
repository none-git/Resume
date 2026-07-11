import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable on precise-pointer (desktop) devices
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer) return;

    document.body.classList.add('custom-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let raf;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onDown = () => ring.classList.add('hovering');
    const onUp = () => {
      // Keep hovering state only if still over a clickable
    };

    // Grow ring over interactive elements
    const onMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, [data-cursor="hover"]')) {
        ring.classList.add('hovering');
      }
    };
    const onMouseOut = (e) => {
      if (e.target.closest('a, button, input, textarea, [data-cursor="hover"]')) {
        ring.classList.remove('hovering');
      }
    };

    const animate = () => {
      // Dot follows instantly
      dotX += (targetX - dotX) * 0.6;
      dotY += (targetY - dotY) * 0.6;
      // Ring follows with lag
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    raf = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('custom-cursor');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className='cursor-dot' />
      <div ref={ringRef} className='cursor-ring' />
    </>
  );
}
