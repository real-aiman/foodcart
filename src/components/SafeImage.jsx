import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function SafeImage({ src, alt, className }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {loading && <div className="absolute inset-0 flex items-center justify-center bg-white/5"><Loader2 className="animate-spin text-orange-500/20" /></div>}
      <img src={src} alt={alt} className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} onLoad={() => setLoading(false)} />
    </div>
  );
}