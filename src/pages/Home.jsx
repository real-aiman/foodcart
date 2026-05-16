import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Zap, Cpu, Flame, Shield, Star, ArrowRight, Sparkles } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import SafeImage from '../components/SafeImage';
import { HERO_IMAGES } from '../data/data';

export default function Home() {
  const { setActivePage, darkMode } = useContext(CartContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.25, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={HERO_IMAGES[currentSlide]}
                alt="BG"
                className={`w-full h-full object-cover grayscale ${darkMode ? 'brightness-50' : 'brightness-110'}`}
              />
            </motion.div>
          </AnimatePresence>
          <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-black via-transparent to-black' : 'from-white via-transparent to-white'}`} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full animate-pulse" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative z-10 max-w-5xl mt-40">
          <h1 className={`text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 select-none ${darkMode ? 'text-white' : 'text-black'}`}>
            ULTRA DINING <br /> <span className="bg-gradient-to-b from-orange-500 via-red-600 to-orange-800 bg-clip-text text-transparent italic">REDEFINED.</span>
          </h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-tight`}>
            The next evolution of culinary arts is here. <br /><span className={darkMode ? 'text-white/60' : 'text-black/60'}>Crafted by algorithms, perfected for humans.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePage('menu')}
              className={`px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 group transition-all ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
            >
              EXPLORE MENU <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}
              onClick={() => setActivePage('about')}
              className={`border px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-md ${darkMode ? 'border-white/10 text-white' : 'border-black/10 text-black'}`}
            >
              OUR VISION
            </motion.button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 flex flex-col items-center gap-4">
          <span className={`text-[10px] font-mono tracking-widest uppercase ${darkMode ? 'text-white/20' : 'text-black/20'}`}>Initiate Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-orange-500 to-transparent" />
        </motion.div>
      </section>

      {/* Marquee */}
      <div className={`py-20 overflow-hidden whitespace-nowrap border-y ${darkMode ? 'bg-black border-white/5' : 'bg-white border-black/5'}`}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`flex items-center gap-8 text-4xl md:text-6xl font-black italic ${darkMode ? 'text-white/5' : 'text-black/5'}`}>
              <span>CYBER-DINING</span>
              <Sparkles className="text-orange-500/20" size={40} />
              <span>NEURAL-SYNC</span>
              <Zap className="text-orange-500/20" size={40} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="py-40 relative px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Sync Points', value: '800k+', icon: <Cpu size={24} /> },
            { label: 'Flavor Units', value: '4.5B', icon: <Flame size={24} /> },
            { label: 'Uptime', value: '99.9%', icon: <Shield size={24} /> },
            { label: 'Diners', value: '1.5M', icon: <Star size={24} /> }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] border backdrop-blur-xl hover:border-orange-500/50 transition-colors group ${darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <h3 className={`text-3xl md:text-4xl font-black mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{stat.value}</h3>
              <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-40 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-orange-500 font-mono text-xs uppercase tracking-widest">
              <div className="w-10 h-[1px] bg-orange-500" /> Current Prototype
            </div>
            <h2 className={`text-5xl md:text-7xl font-black leading-tight tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              THE NEON <br /> <span className="text-orange-500">STEAK 2.0</span>
            </h2>
            <div className={`space-y-6 text-lg font-light leading-relaxed max-w-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>Matured in a vacuum-sealed quantum chamber for 42 days to achieve molecular perfection.</p>
              <p className={darkMode ? 'text-white/60' : 'text-black/60'}>Infused with rare minerals from the asteroid belt and served with a side of digital umami.</p>
            </div>
            <motion.button
              whileHover={{ gap: "1.5rem" }}
              onClick={() => setActivePage('menu')}
              className={`flex items-center gap-4 font-black text-xl tracking-tighter transition-all group ${darkMode ? 'text-white' : 'text-black'}`}
            >
              INITIALIZE RESERVATION <ArrowRight className="text-orange-500 group-hover:scale-125 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div style={{ y: y1 }} className="relative">
            <div className="absolute -inset-4 bg-orange-500/20 blur-[100px] rounded-full animate-pulse" />
            <SafeImage
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000"
              className={`rounded-[3rem] aspect-[4/5] object-cover shadow-2xl relative z-10 border ${darkMode ? 'border-white/10' : 'border-black/10'}`}
              alt="Signature Dish"
            />
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-60 px-6 text-center relative overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent to-transparent ${darkMode ? 'via-white/20' : 'via-black/20'}`} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <h2 className={`text-4xl md:text-6xl font-black italic tracking-tighter leading-tight ${darkMode ? 'text-white' : 'text-black'}`}>READY FOR <br /> THE UPLINK?</h2>
          <p className="text-gray-500 text-lg font-light">Join the thousands who have already upgraded their dining experience to the next tier of reality.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActivePage('menu')}
            className="px-14 py-6 bg-orange-500 text-black rounded-3xl font-black text-xl shadow-[0_0_50px_rgba(249,115,22,0.3)]"
          >
            ORDER NOW
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}