import { useContext } from 'react';
import { ShoppingBag, Sun, Moon } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import SafeImage from './SafeImage';

export default function Navbar() {
  const { cart, activePage, setActivePage, setIsCartOpen, darkMode, setDarkMode } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-[60] w-full max-w-[95%] sm:max-w-6xl px-4">
      <div className={`border rounded-full py-2 px-3 flex items-center justify-between shadow-2xl backdrop-blur-xl ${darkMode ? 'bg-[#121212]/80 border-white/10' : 'bg-white/80 border-black/10'}`}>

        <button onClick={() => setActivePage('home')} className="overflow-hidden w-11 h-11 rounded-full flex items-center justify-center shadow-lg bg-white border border-white/10 hover:scale-110 transition-transform">
          <SafeImage
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=100"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </button>

        <div className="hidden md:flex items-center gap-1">
          {["Home", "Menu", "About", "Offers", "Gallery", "Contact"].map((label) => (
            <button key={label} onClick={() => setActivePage(label.toLowerCase())} className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activePage === label.toLowerCase() ? 'bg-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'text-gray-400 hover:text-white'}`}>{label}</button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)} className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${darkMode ? 'bg-white/5 text-orange-500 hover:bg-white/10' : 'bg-black/5 text-orange-600 hover:bg-black/10'}`}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsCartOpen(true)} className="relative w-10 h-10 flex items-center justify-center text-gray-400">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="absolute top-1 right-1 w-4 h-4 bg-orange-500 text-black text-[10px] font-black rounded-full flex items-center justify-center animate-bounce">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}