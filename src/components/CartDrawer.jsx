import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { CartContext } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, executeOrder, darkMode } = useContext(CartContext);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className={`fixed inset-0 backdrop-blur-sm z-[70] ${darkMode ? 'bg-black/80' : 'bg-white/80'}`} />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className={`fixed right-0 top-0 h-screen w-full max-w-md border-l z-[80] p-8 flex flex-col ${darkMode ? 'bg-[#0a0a0a] border-white/10 text-white' : 'bg-white border-black/10 text-black'}`}>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-black italic tracking-tighter uppercase">MANIFEST</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:text-orange-500 transition-colors"><X /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
              {cart.map(item => (
                <div key={item.id} className={`p-4 rounded-3xl flex items-center gap-4 border ${darkMode ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'}`}>
                  <img src={item.img} className="w-16 h-16 rounded-xl object-cover" alt={item.name} />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide">{item.name}</h4>
                    <p className="text-xs text-orange-500 font-mono">${item.price} x {item.quantity}</p>
                  </div>
                </div>
              ))}
              {cart.length === 0 && <div className="text-center py-20 text-gray-600 font-mono text-sm tracking-widest">NO DATA DETECTED</div>}
            </div>
            {cart.length > 0 && (
              <button onClick={executeOrder} className={`w-full py-5 rounded-2xl font-black mt-8 hover:bg-orange-500 transition-colors ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                EXECUTE ORDER
              </button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}