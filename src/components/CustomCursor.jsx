import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handlePointer = () => {
      const hovered = document.querySelectorAll(':hover');
      const isClickable = Array.from(hovered).some(el => window.getComputedStyle(el).cursor === 'pointer');
      setIsPointer(isClickable);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handlePointer);
    return () => { window.removeEventListener('mousemove', handleMove); window.removeEventListener('mouseover', handlePointer); };
  }, []);

  return (
    <>
      <motion.div animate={{ x: position.x - 4, y: position.y - 4, scale: isPointer ? 1.5 : 1 }} transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }} className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full z-[9999] pointer-events-none mix-blend-difference hidden md:block" />
      <motion.div animate={{ x: position.x - 16, y: position.y - 16, scale: isPointer ? 2.5 : 1 }} transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.8 }} className="fixed top-0 left-0 w-8 h-8 border border-orange-500/50 rounded-full z-[9998] pointer-events-none mix-blend-screen bg-orange-500/5 backdrop-blur-[1px] hidden md:block" />
    </>
  );
}