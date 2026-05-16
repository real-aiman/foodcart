import { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';

export default function SectionTitle({ title, subtitle, align = "center" }) {
  const { darkMode } = useContext(CartContext);
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-orange-500 font-mono tracking-widest text-sm uppercase">{subtitle}</motion.span>
      <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className={`text-4xl md:text-5xl font-black mt-2 bg-gradient-to-r ${darkMode ? 'from-white to-gray-500' : 'from-black to-gray-600'} bg-clip-text text-transparent`}>{title}</motion.h2>
    </div>
  );
}