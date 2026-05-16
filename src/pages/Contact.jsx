import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const { setActivePage, darkMode } = useContext(CartContext);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 2000);
  };

  if (isSent) {
    return (
      <div className="pt-40 px-6 max-w-7xl mx-auto min-h-[80vh] flex items-center justify-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`text-center space-y-10 max-w-2xl border p-12 md:p-20 rounded-[4rem] backdrop-blur-2xl ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
          <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(249,115,22,0.4)]">
            <CheckCircle2 size={48} className="text-black" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase">TRANSMISSION SUCCESSFUL</h2>
          <button onClick={() => setActivePage('home')} className={`px-10 py-4 rounded-2xl font-black hover:bg-orange-500 transition-all flex items-center justify-center gap-2 mx-auto ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <ArrowLeft size={20} /> Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 px-6 max-w-7xl mx-auto pb-32 space-y-32">
      <SectionTitle title="Uplink Station" subtitle="Neural Feedback Loops" />
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className={`border rounded-[3rem] p-8 md:p-12 space-y-8 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <input type="text" required placeholder="Your Name" className={`w-full rounded-2xl p-4 focus:border-orange-500 outline-none ${darkMode ? 'bg-black/40 border-white/10 text-white' : 'bg-white/40 border-black/10 text-black'}`} value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
            <input type="email" required placeholder="email@example.com" className={`w-full rounded-2xl p-4 focus:border-orange-500 outline-none ${darkMode ? 'bg-black/40 border-white/10 text-white' : 'bg-white/40 border-black/10 text-black'}`} value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
          </div>
          <textarea rows="5" required placeholder="Describe your request..." className={`w-full rounded-3xl p-4 focus:border-orange-500 outline-none resize-none ${darkMode ? 'bg-black/40 border-white/10 text-white' : 'bg-white/40 border-black/10 text-black'}`} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
          <button type="submit" disabled={isSubmitting} className={`w-full py-5 rounded-2xl font-black text-lg hover:bg-orange-500 transition-all flex items-center justify-center gap-3 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
            {isSubmitting ? <Loader2 className="animate-spin" /> : "SEND TRANSMISSION"}
          </button>
        </form>
      </div>
    </div>
  );
}