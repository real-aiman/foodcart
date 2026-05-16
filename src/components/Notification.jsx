import { useContext } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { CartContext } from '../context/CartContext';

export default function Notification() {
  const { notification } = useContext(CartContext);

  if (!notification) return null;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      className="fixed bottom-10 left-1/2 z-[100] px-8 py-4 rounded-full font-bold bg-orange-500 text-black shadow-2xl flex items-center gap-2"
    >
      <CheckCircle2 size={18} /> {notification.message}
    </motion.div>
  );
}