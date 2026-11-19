import { Link } from 'react-router-dom';
import { Pizza, Heart, Award, Users, ShieldCheck, Sparkles, ArrowRight, Clock } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: '🧀',
      title: 'Zero Compromise on Cheese',
      desc: 'We use 100% pure whole-milk mozzarella and authentic aged cheddar. No hydrogenated oils, no synthetic melts.',
    },
    {
      icon: '🌾',
      title: '24-Hour Cold Fermented Dough',
      desc: 'Our pizza dough ferments slowly over 24 hours, making every crust light, crispy, and easy on the stomach.',
    },
    {
      icon: '🔥',
      title: 'Secret Spice Injections',
      desc: 'Our Arabian Injected Broast was engineered by our chefs to lock in juicy molten cheese straight into the meat.',
    },
    {
      icon: '🍳',
      title: 'Morning Breakfast Rituals',
      desc: 'From 8 AM daily, our griddles sizzle with herb omelettes, sweet brioche French toasts, and freshly brewed coffees.',
    },
  ];

  const stats = [
    { number: '120K+', label: 'Pizzas Baked' },
    { number: '100%', label: 'Real Dairy Cheese' },
    { number: '4.9★', label: 'Average Customer Rating' },
    { number: '30 Min', label: 'Average Delivery Time' },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* Page Header */}
      <section className="bg-[#180E09] text-white py-16 lg:py-24 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cheezYellow/20 text-cheezYellow text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Origin & Passion</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            The Story Behind <span className="cheezora-logo-text block sm:inline">Cheezora</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Born out of a simple belief: pizza shouldn’t just be fast food — it should be an unforgettable, gooey, soul-warming experience.
          </p>
        </div>
      </section>

      {/* Main Brand Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
                alt="Cheezora Artisan Kitchen"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-cheezYellow uppercase tracking-wider">Handmade With Care</span>
                <p className="text-lg font-extrabold mt-1">"Every pizza is crafted as if it's meant for our own family dinner table."</p>
              </div>
            </div>

            {/* Floating pill */}
            <div className="absolute -bottom-5 -right-5 bg-cheezYellow text-cheezBrown px-5 py-3 rounded-2xl shadow-xl font-black text-xs sm:text-sm flex items-center gap-2 border-2 border-white">
              <span>🍕 Stone Ovens Since Day 1</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-cheezRed uppercase tracking-wider">
              How It All Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-cheezBrown leading-tight">
              From a Passionate Kitchen Experiment to a Cheesy Revolution
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Cheezora was founded with an unyielding mission: to rescue pizza and comfort food from bland, rubbery imitations. We traveled, experimented with dough hydration, studied Chicago deep-dish techniques, and developed our signature 2-Foot Train Pizza for celebratory gatherings.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Over the years, we expanded beyond pizza to introduce the morning community to authentic English Breakfasts — featuring farm-fresh omelettes, herb grilled tomatoes, and Belgian chocolate French toasts. In the afternoon and late night, our kitchen roars with sizzling steaks and our proprietary Arabian Cheese-Injected Broast!
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-cheezBrown">100% Halal Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-cheezRed" />
                <span className="text-xs font-bold text-cheezBrown">Freshly Sourced Ingredients</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="bg-cheezBrown text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl font-black text-cheezYellow">{s.number}</p>
                <p className="text-xs sm:text-sm text-zinc-400 font-semibold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us: 4 Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-cheezRed uppercase tracking-wider block mb-1">
            Our Standard
          </span>
          <h2 className="text-3xl font-extrabold text-cheezBrown">
            The 4 Cheesy Pillars
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            The foundational culinary principles behind everything that leaves our kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-card-hover transition-all duration-300 space-y-3"
            >
              <span className="text-3xl block">{v.icon}</span>
              <h3 className="text-base font-extrabold text-cheezBrown">{v.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-cheezRed rounded-3xl p-8 sm:p-12 text-white shadow-cheezRed text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-black">
            Ready to Taste the Difference?
          </h2>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto leading-relaxed">
            Whether it's breakfast with hot cappuccino at 8 AM, or a late-night Chicago Deep Dish at midnight, Cheezora is here to serve you happiness.
          </p>
          <div className="pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-cheezRed font-black text-sm shadow-xl hover:bg-cheezCream transition-all hover:scale-105"
            >
              <span>Explore The Menu Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
