import { motion } from 'framer-motion';

export default function BurgerLoader() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-48 h-64 flex flex-col items-center justify-center">
        <motion.div initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, type: 'spring', stiffness: 100 }} className="w-32 h-10 bg-[#D97706] rounded-t-full border-b-4 border-[#B45309] relative shadow-lg z-50">
          {[...Array(6)].map((_, i) => (<div key={i} className="absolute w-1 h-2 bg-[#FDE68A] rounded-full rotate-45" style={{ top: '20%', left: `${20 + (i * 12)}%` }} />))}
        </motion.div>
        <motion.div initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.0, type: 'spring', stiffness: 100 }} className="w-36 h-3 bg-[#22C55E] rounded-full -mt-1 z-40" />
        <motion.div initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, type: 'spring', stiffness: 100 }} className="w-34 h-4 bg-[#EF4444] rounded-full -mt-1 z-30" />
        <motion.div initial={{ y: -500, opacity: 0, skewX: -10 }} animate={{ y: 0, opacity: 1, skewX: 0 }} transition={{ delay: 2.0, type: 'spring', stiffness: 100 }} className="w-36 h-3 bg-[#FACC15] rounded-sm -mt-1 z-20" />
        <motion.div initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5, type: 'spring', stiffness: 100 }} className="w-34 h-8 bg-[#451A03] rounded-full -mt-1 border-b-4 border-[#271001] z-10" />
        <motion.div initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 3.0, type: 'spring', stiffness: 100 }} className="w-32 h-8 bg-[#D97706] rounded-b-2xl border-t-2 border-[#B45309] -mt-1" />
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 3.2 }} className="absolute bottom-16 w-48 h-4 bg-orange-500/20 blur-xl rounded-full" />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="mt-8 text-center px-6">
        <p className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase animate-pulse">Assembling Flavors...</p>
        <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 4, ease: "linear" }} className="h-full bg-orange-500" />
        </div>
      </motion.div>
    </motion.div>
  );
}