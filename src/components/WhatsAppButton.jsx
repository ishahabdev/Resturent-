import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Quick WhatsApp Ordering"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:block bg-[#180E09] text-white text-xs py-1.5 px-3 rounded-xl shadow-xl border border-cheezYellow/30 transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="font-bold text-cheezYellow">Fast Order:</span> 0313-470-6110
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/923134706110?text=Hi%20Cheezora!%20I%20would%20like%20to%20place%20an%20order."
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group relative"
        aria-label="Chat with Cheezora on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10 group-hover:opacity-100" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </aside>
  );
}
