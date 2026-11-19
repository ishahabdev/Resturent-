import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0908] text-zinc-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-left">
          
          {/* Col 1: Logo & Socials */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/assets/cheezora-logo.png"
                alt="Cheezora"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-1.5 text-2xl font-black">
                <span className="text-white">Cheez</span>
                <span className="text-cheezYellow">ora</span>
              </div>
            </Link>

            <p className="text-xs text-cheezYellow font-medium tracking-wide">
              Taste the Pure Cheese!
            </p>

            {/* Social Icons matching UI */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-cheezRed text-white flex items-center justify-center transition-colors text-xs"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-cheezRed text-white flex items-center justify-center transition-colors text-xs"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-cheezRed text-white flex items-center justify-center transition-colors text-xs"
                aria-label="YouTube"
              >
                yt
              </a>
              <a
                href="https://wa.me/923134706110"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-600/40 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors text-xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-cheezYellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-cheezYellow transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cheezYellow transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white transition-colors">Dine-in</li>
              <li className="hover:text-white transition-colors">Takeaway</li>
              <li className="hover:text-white transition-colors">Home Delivery</li>
              <li className="hover:text-white transition-colors">Party Orders</li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cheezRed shrink-0" />
                <a href="tel:03134706110" className="hover:text-white transition-colors">
                  0313-470-6110
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cheezRed shrink-0" />
                <a href="mailto:info@cheezora.com" className="hover:text-white transition-colors">
                  info@cheezora.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cheezRed shrink-0 mt-0.5" />
                <span>Peshawar, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Stay Connected */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Stay Connected
            </h4>
            <p className="text-[11px] text-zinc-400">
              Get the latest news & updates.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }} className="flex items-center">
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full text-xs bg-white/10 text-white placeholder:text-zinc-500 px-3 py-2 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-cheezYellow"
              />
              <button
                type="submit"
                className="bg-cheezYellow hover:bg-amber-500 text-cheezBrown p-2 rounded-r-xl transition-colors shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-3">
          <p>© 2024 Cheezora. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-cheezRed fill-cheezRed" /> for pizza lovers
          </p>
        </div>

      </div>
    </footer>
  );
}
