import { useRef, useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';

export default function BlobCursor({
  children,
  size = 40,
  fillColor = '#ABE7B2',
  hoverColor = '#93BFC7',
  hoverScale = 1.5,
  trailCount = 1,
  opacities = [1],
  fastDuration = 0.3,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 9999
}) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback(
    e => {
      const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      setMousePos({ x, y });

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x,
          y: y,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [fastDuration, slowDuration, fastEase, slowEase]
  );

  const handleMouseEnter = useCallback((e) => {
    const target = e.target;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
      setIsHovering(true);
      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          scale: isLead ? hoverScale : hoverScale * 0.8,
          backgroundColor: hoverColor,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }
  }, [hoverScale, hoverColor]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    blobsRef.current.forEach((el) => {
      if (!el) return;
      gsap.to(el, {
        scale: 1,
        backgroundColor: fillColor,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }, [fillColor]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseover', handleMouseEnter);
      container.addEventListener('mouseout', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseover', handleMouseEnter);
        container.removeEventListener('mouseout', handleMouseLeave);
      }
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative w-full h-full"
    >
      {/* Render children */}
      {children}

      {/* Cursor overlay - Fixed positioning with no filters for clear visibility */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{ zIndex }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => (blobsRef.current[i] = el)}
            className="absolute will-change-transform"
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: fillColor,
              opacity: opacities[i],
              transform: 'translate(-50%, -50%)',
              left: 0,
              top: 0,
              border: i === 0 ? `2px solid ${fillColor}` : 'none',
              boxShadow: i === 0 ? `0 0 20px ${fillColor}40` : 'none',
              transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}