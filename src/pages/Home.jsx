import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Clock, 
  Star,
  CheckCircle2,
  UtensilsCrossed
} from 'lucide-react';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';

export default function Home() {
  const [activeGalleryTab, setActiveGalleryTab] = useState('All');

  // Crowd Favorites 4 items matching the exact UI
  const crowdFavorites = [
    {
      id: 'pizza-train',
      name: 'Cheezora 2-Foot Train Pizza',
      price: 3499,
      priceLabel: 'Rs. 3,499',
      image: '/assets/fav-1.jpg',
    },
    {
      id: 'pizza-crown-crust',
      name: 'Crown Crust Pizza',
      price: 1549,
      priceLabel: 'From Rs. 1,549',
      image: '/assets/fav-2.jpg',
    },
    {
      id: 'pizza-chicken-tikka',
      name: 'Classic Chicken Tikka Pizza',
      price: 750,
      priceLabel: 'From Rs. 750',
      image: '/assets/fav-3.jpg',
    },
    {
      id: 'bf-cheezora-special',
      name: 'Cheezora Special Omelette',
      price: 699,
      priceLabel: 'Rs. 699',
      image: '/assets/fav-4.jpg',
    },
  ];

  // Gallery items matching UI with pure food images
  const galleryItems = [
    { id: 1, category: 'Pizzas', image: '/assets/gal-1.jpg' },
    { id: 2, category: 'Burgers', image: '/assets/gal-2.jpg' },
    { id: 3, category: 'Pizzas', image: '/assets/gal-3.jpg' },
    { id: 4, category: 'Drinks', image: '/assets/gal-4.jpg' },
    { id: 5, category: 'Pizzas', image: '/assets/gal-5.jpg' },
  ];

  const filteredGallery = activeGalleryTab === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeGalleryTab);

  // Testimonials with crisp, readable contrast
  const testimonials = [
    {
      name: 'Hamza Malik',
      role: 'Food Blogger',
      comment: 'Cheezora pizza is simply amazing! Best taste in town.',
      avatar: '/assets/avatar-1.jpg',
    },
    {
      name: 'Ayesha Khan',
      role: 'Regular Customer',
      comment: 'Fresh, cheesy and always on time. Highly recommended!',
      avatar: '/assets/avatar-2.jpg',
    },
    {
      name: 'Daniyal Ahmed',
      role: 'Happy Customer',
      comment: 'A perfect place for pizza lovers. Truly delicious!',
      avatar: '/assets/avatar-3.jpg',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 bg-white text-zinc-800 pb-20">
      
      {/* 1. Hero Section (Kept intact with dark contrast) */}
      <Hero />

      {/* 2. Crowd Favorites & Hot Picks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-left">
          <div>
            <span className="text-xs font-bold text-amber-500 tracking-wider flex items-center gap-1.5 uppercase">
              <span className="w-5 h-[2px] bg-amber-500 inline-block" /> Our Menu
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 mt-1">
              Crowd Favorites & <span className="text-cheezRed">Hot Picks</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Hand-crafted pizzas made with the finest ingredients.
            </p>
          </div>

          <Link
            to="/menu"
            className="text-xs sm:text-sm font-bold text-cheezRed hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View Full Menu</span>
            <span>→</span>
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {crowdFavorites.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 3. The Cheezora Promise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <span className="text-xs font-bold text-cheezRed tracking-wider flex items-center gap-1.5 uppercase">
              <span className="w-5 h-[2px] bg-cheezRed inline-block" /> Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 leading-tight">
              The Cheezora <span className="text-cheezRed">Promise</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              We don't just serve pizza, we serve happiness! With premium ingredients, rich taste, and unmatched quality, Cheezora is your perfect food partner.
            </p>
            <div className="pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cheezRed hover:bg-cheezRed-hover text-white text-xs font-bold shadow-cheezRed transition-all active:scale-95"
              >
                <span>Explore Menu</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Center 4 Cards Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
            <div className="bg-white rounded-2xl p-4 text-center border border-zinc-100 shadow-xs space-y-2 flex flex-col items-center justify-center min-h-[115px] hover:shadow-md transition-shadow">
              <span className="text-2xl leading-none">🧀</span>
              <h4 className="text-xs font-bold text-zinc-900 leading-snug">100% Genuine Mozzarella</h4>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center border border-zinc-100 shadow-xs space-y-2 flex flex-col items-center justify-center min-h-[115px] hover:shadow-md transition-shadow">
              <span className="text-2xl leading-none">👨‍🍳</span>
              <h4 className="text-xs font-bold text-zinc-900 leading-snug">Freshly Baked Always</h4>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center border border-zinc-100 shadow-xs space-y-2 flex flex-col items-center justify-center min-h-[115px] hover:shadow-md transition-shadow">
              <span className="text-2xl leading-none">🛵</span>
              <h4 className="text-xs font-bold text-zinc-900 leading-snug">Fast & Reliable Delivery</h4>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center border border-zinc-100 shadow-xs space-y-2 flex flex-col items-center justify-center min-h-[115px] hover:shadow-md transition-shadow">
              <span className="text-2xl leading-none">❤️</span>
              <h4 className="text-xs font-bold text-zinc-900 leading-snug">Loved by Thousands</h4>
            </div>
          </div>

          {/* Right Pizza Picture on board - Clean, no top black bar */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md bg-white border border-zinc-100">
              <img
                src="/assets/promise-pizza.jpg"
                alt="Cheezora Artisan Fresh Pizza"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Inside the Cheezora Kitchen (Gallery) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <div>
          <span className="text-xs font-bold text-amber-500 tracking-wider inline-flex items-center gap-1.5 uppercase">
            <span className="w-5 h-[2px] bg-amber-500 inline-block" /> Our Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 mt-1">
            Inside the <span className="text-cheezRed">Cheezora Kitchen</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            A glimpse of our delicious pizzas and fresh ingredients.
          </p>

          {/* Clean Single-Row Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
            {['All', 'Pizzas', 'Burgers', 'Desserts', 'Drinks'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveGalleryTab(tab)}
                className={}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Images in a row - Pure food photography with zero artifacts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mt-8">
          {filteredGallery.map((img) => (
            <div key={img.id} className="h-40 rounded-2xl overflow-hidden shadow-xs border border-zinc-100 bg-zinc-100 group">
              <img
                src={img.image}
                alt="Kitchen preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials (Loved by Cheese Addicts) - High Contrast & Crisp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#0B0908] rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden border border-white/5 shadow-xl">
          
          {/* Top-right red curve accent */}
          <div className="absolute top-0 right-0 w-36 h-36 sm:w-52 sm:h-52 rounded-bl-full bg-cheezRed pointer-events-none opacity-90" />

          <div className="relative z-10 text-left">
            <span className="text-xs font-bold text-amber-500 tracking-wider flex items-center gap-1.5 uppercase">
              <span className="w-5 h-[2px] bg-amber-500 inline-block" /> Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Loved by Cheese <span className="text-[#FFB000]">Addicts</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Real feedback from our happy customers.
            </p>

            {/* 3 Review Cards with clear, high-contrast text */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-7">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#161413] rounded-2xl p-5 border border-white/10 space-y-4 flex flex-col justify-between shadow-xs hover:border-white/20 transition-all"
                >
                  <p className="text-xs sm:text-sm text-zinc-100 italic leading-relaxed">
                    "{t.comment}"
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-9 h-9 rounded-full object-cover border border-white/15"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white leading-tight">{t.name}</h4>
                        <p className="text-[11px] text-zinc-400">{t.role}</p>
                      </div>
                    </div>

                    <div className="flex text-amber-400 font-bold text-xs tracking-wider">
                      ★★★★★
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center items-center gap-1.5 mt-6">
              <span className="w-2 h-2 rounded-full bg-cheezRed" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>

          </div>
        </div>
      </section>

      {/* 6. Dine With Us or Take Away (Location & Contact) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <span className="text-xs font-bold text-cheezRed tracking-wider flex items-center gap-1.5 uppercase">
              <span className="w-5 h-[2px] bg-cheezRed inline-block" /> Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 leading-tight">
              Dine With Us or <span className="text-cheezRed">Take Away</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Craving Cheezora? Order online or visit our restaurant for a delightful dining experience.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/menu"
                className="px-6 py-2.5 rounded-full bg-cheezRed hover:bg-cheezRed-hover text-white text-xs font-bold shadow-cheezRed transition-all active:scale-95"
              >
                Order Now →
              </Link>
              <a
                href="https://maps.google.com/?q=Peshawar,Pakistan"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full border border-zinc-300 hover:border-zinc-500 text-zinc-800 text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-cheezRed" />
                <span>Find Location</span>
              </a>
            </div>
          </div>

          {/* Center Column: 3 Contact Rows */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 text-cheezRed flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <a href="tel:03134706110" className="text-xs sm:text-sm font-bold text-zinc-900 hover:text-cheezRed">
                  0313-470-6110
                </a>
                <p className="text-[11px] text-zinc-400">Call Us Anytime</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 text-cheezRed flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-zinc-900">
                  Peshawar, Pakistan
                </p>
                <p className="text-[11px] text-zinc-400">Our Restaurant</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 text-cheezRed flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-zinc-900">
                  Mon – Sun
                </p>
                <p className="text-[11px] text-zinc-400">10:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Column: Map Card preview */}
          <div className="lg:col-span-4">
            <a
              href="https://maps.google.com/?q=Peshawar,Pakistan"
              target="_blank"
              rel="noreferrer"
              className="block relative rounded-2xl overflow-hidden border border-zinc-200 shadow-sm h-48 bg-zinc-100 group cursor-pointer"
            >
              <img
                src="/assets/map-preview.jpg"
                alt="Cheezora Location Map"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
