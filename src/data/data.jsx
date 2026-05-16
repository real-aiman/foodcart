import { Clock, Cpu, LayoutGrid } from 'lucide-react';

export const FOOD_DATA = [
  { id: 1, name: 'Cyber Pizza', category: 'Pizza', price: 24, rating: 4.9, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', desc: 'Neo-Tokyo style with artisanal pepperoni and glowing basil oil.' },
  { id: 2, name: 'Quantum Burger', category: 'Burger', price: 18, rating: 4.8, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', desc: 'Double-stack wagyu with caramelized onions and truffle mayo.' },
  { id: 3, name: 'Neon Shawarma', category: 'Shawarma', price: 15, rating: 4.7, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=800', desc: 'Plasma-roasted chicken with garlic toum and pickled chillies.' },
  { id: 4, name: 'Plasma Pasta', category: 'Pasta', price: 22, rating: 4.6, img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800', desc: 'Molecular linguine infused with squid ink and lemon zest.' },
  { id: 5, name: 'Biryani Core', category: 'Biryani', price: 28, rating: 5.0, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800', desc: 'Long-grain basmati with 22 spices and saffron infusion.' },
  { id: 6, name: 'Titan Steak', category: 'Steaks', price: 45, rating: 4.9, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', desc: 'Dry-aged synthetic prime rib served with volcanic salt.' },
  { id: 7, name: 'Zen Sushi', category: 'Seafood', price: 32, rating: 4.8, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800', desc: 'Precision-sliced tuna rolls with a ginger-glitch finish.' },
  { id: 8, name: 'Glow Tacos', category: 'Mexican', price: 16, rating: 4.7, img: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?auto=format&fit=crop&q=80&w=800', desc: 'Al-pastor style with fluorescent pineapple salsa.' },
  { id: 9, name: 'Aurora Smoothie', category: 'Drinks', price: 12, rating: 4.5, img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=800', desc: 'Ionized fruit blend that shifts colors in the sunlight.' }
];

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1400',
  'https://images.unsplash.com/photo-1550966841-3ee5ad40fd3e?auto=format&fit=crop&q=80&w=1400',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1400',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1400'
];

export const OFFERS_DATA = [
  { id: 'off-1', title: 'Midnight Protocol', code: 'DARK20', discount: '20% OFF', description: 'Valid for all orders between 00:00 and 04:00 neural time.', icon: <Clock className="text-purple-500" />, color: 'from-purple-600/20 to-blue-600/20' },
  { id: 'off-2', title: 'Neural First Contact', code: 'NEWBRAIN', discount: '50% OFF', description: 'Available for your very first neural-linked dining session.', icon: <Cpu className="text-orange-500" />, color: 'from-orange-600/20 to-red-600/20' },
  { id: 'off-3', title: 'Quantum Group Sync', code: 'SYNCUP', discount: '$15 FLAT', description: 'Order with 3+ neural links to unlock collective savings.', icon: <LayoutGrid className="text-green-500" />, color: 'from-green-600/20 to-emerald-600/20' }
];