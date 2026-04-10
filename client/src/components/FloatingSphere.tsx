import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './FloatingSphere.css';

export default function FloatingSphere() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sphereRef.current) return;
      
      const rect = sphereRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      setMouseX(x * 30);
      setMouseY(y * 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      setRotX(prev => (prev + 0.5) % 360);
      setRotY(prev => (prev + 0.8) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="floating-sphere-section">
      {/* Animated background */}
      <div className="sphere-bg-glow">
        <div className="sphere-glow-1" />
        <div className="sphere-glow-2" />
      </div>

      <div className="sphere-container">
        <motion.h2
          className="sphere-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tecnología en Movimiento
        </motion.h2>
        
        <motion.p
          className="sphere-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Explora cómo mis habilidades se integran en armonía
        </motion.p>

        <div className="sphere-viewport" ref={sphereRef}>
          {/* Main Sphere */}
          <div
            className="sphere-wrapper"
            style={{
              transform: `rotateX(${rotX + mouseY}deg) rotateY(${rotY + mouseX}deg)`,
            }}
          >
            <div className="sphere-core">
              {/* Sphere faces */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="sphere-face"
                  style={{
                    transform: `rotateX(${i * 45}deg) rotateY(${i * 45}deg) translateZ(120px)`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Orbiting particles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x = Math.cos(angle) * 180;
            const z = Math.sin(angle) * 180;
            
            return (
              <motion.div
                key={`particle-${i}`}
                className="sphere-particle"
                animate={{
                  rotateY: 360,
                  rotateX: [0, 360, 0],
                }}
                transition={{
                  rotateY: {
                    duration: 20 + i,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  rotateX: {
                    duration: 15 + i,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
                style={{
                  '--particle-x': `${x}px`,
                  '--particle-z': `${z}px`,
                } as React.CSSProperties}
              />
            );
          })}

          {/* Center glow */}
          <div className="sphere-center-glow" />
        </div>

        {/* Interactive hint */}
        <motion.p
          className="sphere-hint"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Mueve tu mouse para interactuar
        </motion.p>
      </div>
    </section>
  );
}
