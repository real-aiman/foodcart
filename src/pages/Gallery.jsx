import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import SectionTitle from '../components/SectionTitle';

export default function Gallery() {
  const { darkMode } = useContext(CartContext);
  const galleryItems = [
    { id: 1, title: 'Molecular Prep', tag: 'LAB', img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Digital Dining', tag: 'EXPERIENCE', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Quantum Roast', tag: 'TECH', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Neural Plate', tag: 'ART', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Fusion Core', tag: 'CUISINE', img: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Neon Bar', tag: 'LIQUID', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="pt-40 pb-40 px-6 max-w-7xl mx-auto">
      <SectionTitle title="Visual Stream" subtitle="Neural Captures" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map(item => (
          <div key={item.id} className={`group relative overflow-hidden rounded-[2rem] border p-4 ${darkMode ? 'border-white/10 bg-white/5 text-white' : 'border-black/10 bg-black/5 text-black'}`}>
            <img src={item.img} className="aspect-square object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" alt={item.title} />
            <div className="mt-4">
              <span className="text-[10px] text-orange-500 font-mono">{item.tag}</span>
              <h4 className="font-bold text-lg uppercase tracking-tight">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}