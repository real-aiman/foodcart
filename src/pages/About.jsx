import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import SectionTitle from '../components/SectionTitle';
import SafeImage from '../components/SafeImage';

export default function About() {
  const { darkMode } = useContext(CartContext);
  return (
    <div className="pt-40 px-6 max-w-7xl mx-auto pb-32 space-y-24">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <SectionTitle title="The Neural Kitchen" subtitle="Our Origins" align="left" />
          <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Founded in 2142, Foodie bridges imagination and nutrition through molecular engineering. Every bite is a calculated experience.
          </p>
        </div>
        <SafeImage
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
          className={`rounded-[3rem] aspect-square object-cover border ${darkMode ? 'border-white/10' : 'border-black/10'}`}
          alt="Kitchen"
        />
      </div>
    </div>
  );
}