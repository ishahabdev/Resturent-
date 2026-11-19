import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, X } from 'lucide-react';

export default function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden flex items-center min-h-[380px] sm:min-h-[420px] lg:min-h-[460px]">
      
      {/* Background with Cheezora Storefront and smooth, natural dark glow on left */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="/assets/cheezora-storefront-hero.jpg"
          alt="Cheezora Restaurant Storefront"
          className="w-full h-full object-cover object-right md:object-center select-none"
        />
        {/* Smooth, natural dark glow on the left - seamlessly feathering across with zero harsh lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Hero Content overlaid on the left side with refined typography */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="max-w-lg lg:max-w-xl space-y-3.5 sm:space-y-4 text-left font-body">
          
          {/* 1. Small Badge: FRESHLY BAKED • EXTRA CHEESY */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB000]/30 bg-[#12100E] text-[#FFB000] text-[11px] font-bold tracking-widest uppercase shadow-xs">
            <span className="text-sm leading-none">🔥</span>
            <span>Freshly Baked • Extra Cheesy</span>
          </div>

          {/* 2. Main Heading: Compact, balanced, elegant with signature #FFB000 */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-white tracking-tight leading-[1.14]">
            <span className="block text-zinc-100 font-bold text-2xl sm:text-3xl lg:text-[34px] mb-0.5">
              Experience the
            </span>
            <span className="text-white">
              <span className="relative inline-block text-[#FFB000] font-black">
                Perfect Taste
                {/* Subtle, elegant red smile curve accent */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-cheezRed"
                  viewBox="0 0 160 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C38 13 118 13 158 4"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-zinc-100 font-extrabold"> of Pure Cheese</span>
            </span>
          </h1>

          {/* 3. Subtitle: Clean, readable, balanced line-height */}
          <p className="text-xs sm:text-sm text-zinc-300 max-w-md font-normal leading-relaxed">
            Indulge in hand-crafted artisan pizzas loaded with 100% authentic cheese, baked fresh to golden perfection every single day.
          </p>

          {/* 4. Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
            <Link
              to="/menu"
              className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-cheezRed hover:bg-cheezRed-hover text-white text-xs sm:text-sm font-bold shadow-cheezRed flex items-center gap-2 transition-transform active:scale-95"
            >
              <span>Order Now</span>
              <span className="text-base font-black">→</span>
            </Link>

            <button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="flex items-center gap-2.5 text-white hover:text-[#FFB000] text-xs sm:text-sm font-bold transition-colors group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full border-2 border-white/70 group-hover:border-[#FFB000] flex items-center justify-center bg-black/60 shadow-xs transition-colors">
                <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5 group-hover:fill-[#FFB000] group-hover:text-[#FFB000] transition-colors" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>

          {/* 5. Subtle Trust Micro-Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5 text-[11px] font-semibold text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400">★</span>
              <span className="text-zinc-200 font-bold">4.9/5</span>
              <span>Top Rated</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <div className="flex items-center gap-1.5">
              <span>🧀</span>
              <span>100% Genuine Mozzarella</span>
            </div>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-zinc-600" />
            <div className="hidden sm:flex items-center gap-1.5">
              <span>⚡</span>
              <span>Hot & Fast Delivery</span>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#180E09] rounded-3xl max-w-2xl w-full p-6 border-2 border-[#FFB000] relative shadow-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-white/10"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-[#FFB000] mb-3">
              The Cheezora Pizza Experience
            </h3>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <iframe
                title="Cheezora Crafting"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/1-SJGQ2HLp8?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
