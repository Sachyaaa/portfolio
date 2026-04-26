import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard({ className = '', children }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 10;
    const rotateX = (0.5 - (y / bounds.height)) * 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handlePointerMove}
      onMouseLeave={resetRotation}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
