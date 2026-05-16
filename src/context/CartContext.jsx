import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [activePage, setActivePage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isSiteLoading, setIsSiteLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSiteLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
    setNotification({ message: `${product.name} Sync Complete` });
    setTimeout(() => setNotification(null), 3000);
  };

  const executeOrder = () => {
    setCart([]);
    setIsCartOpen(false);
    setNotification({ message: "Manifest Dispatched!" });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, activePage, setActivePage, isCartOpen, setIsCartOpen, notification, executeOrder, isSiteLoading, darkMode, setDarkMode }}>
      {children}
    </CartContext.Provider>
  );
}