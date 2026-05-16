import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import SectionTitle from '../components/SectionTitle';
import { OFFERS_DATA } from '../data/data';

export default function Offers() {
  const { darkMode } = useContext(CartContext);
  return (
    <div className="pt-40 px-6 max-w-7xl mx-auto pb-32 space-y-12">
      <SectionTitle title="Promo Protocols" subtitle="Active Access Codes" />
      <div className="grid md:grid-cols-3 gap-6">
        {OFFERS_DATA.map((offer) => (
          <div key={offer.id} className={`p-8 rounded-[2rem] border border-white/10 bg-gradient-to-br ${offer.color} h-64 flex flex-col justify-between ${darkMode ? 'text-white' : 'text-black'}`}>
            <div>
              <h4 className="text-xl font-bold">{offer.title}</h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-2`}>{offer.description}</p>
            </div>
            <div className="text-2xl font-black">{offer.discount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}