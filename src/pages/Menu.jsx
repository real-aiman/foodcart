import { useState, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import SectionTitle from '../components/SectionTitle';
import SafeImage from '../components/SafeImage';
import { FOOD_DATA } from '../data/data';

export default function Menu() {
  const { addToCart, darkMode } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(FOOD_DATA.map(item => item.category))];
    return cats;
  }, []);

  const filteredItems = useMemo(() => {
    return FOOD_DATA.filter(item => {
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch = item.name.toLowerCase().includes(lowerSearch) ||
        item.desc.toLowerCase().includes(lowerSearch) ||
        item.category.toLowerCase().includes(lowerSearch);
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-40 px-6 max-w-7xl mx-auto pb-32">
      <SectionTitle title="The Neural Vault" subtitle="Menu Selection" />
      <div className="mb-16 space-y-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="text-orange-500" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search flavor profile..."
            className={`w-full border rounded-full py-5 pl-16 pr-8 text-lg outline-none focus:border-orange-500/50 transition-all backdrop-blur-xl ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${selectedCategory === cat ? 'bg-orange-500 text-black border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]' : (darkMode ? 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white' : 'bg-black/5 text-gray-600 border-black/10 hover:border-black/30 hover:text-black')}`}>{cat}</button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -10 }} className={`border rounded-[2.5rem] overflow-hidden group backdrop-blur-md flex flex-col ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
              <div className="relative overflow-hidden h-60">
                <SafeImage src={item.img} alt={item.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black">{item.name}</h3>
                  <span className="text-orange-400 font-mono font-bold">${item.price}</span>
                </div>
                <p className={`text-sm mb-8 font-light flex-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                <button onClick={() => addToCart(item)} className={`w-full py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>Add to Cart <Plus size={18} /></button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}