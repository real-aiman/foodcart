import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CartProvider, { CartContext } from './context/CartContext';

// Components
import BurgerLoader from './components/BurgerLoader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Notification from './components/Notification';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Offers from './pages/Offers';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function AppContent() {
  const { activePage, isSiteLoading, darkMode } = useContext(CartContext);

  return (
    <div className={`min-h-screen font-sans selection:bg-orange-500 selection:text-black cursor-none transition-colors duration-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <AnimatePresence>{isSiteLoading && <BurgerLoader />}</AnimatePresence>
      {!isSiteLoading && (
        <>
          <CustomCursor />
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main key={activePage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {activePage === 'home' && <Home />}
              {activePage === 'menu' && <Menu />}
              {activePage === 'about' && <About />}
              {activePage === 'offers' && <Offers />}
              {activePage === 'gallery' && <Gallery />}
              {activePage === 'contact' && <Contact />}
            </motion.main>
          </AnimatePresence>
          <CartDrawer />
          <Notification />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}