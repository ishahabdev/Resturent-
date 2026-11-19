import { useState, useMemo } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Play, 
  X, 
  Check, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';

export default function Menu() {
  const { addToCart, openCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyCheesy, setOnlyCheesy] = useState(false);
  const [sortOption, setSortOption] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [addedItems, setAddedItems] = useState({});
  const [showAllItems, setShowAllItems] = useState(false);

  // The 8 Primary Showcase Items exactly matching the UI mockup
  const showcaseItems = [
    {
      id: 'menu-1',
      name: 'Cheezora 2-Foot Train Pizza',
      originalPrice: 'Rs. 5,499',
      price: 3499,
      priceLabel: 'Rs. 3,499',
      image: '/assets/menu-item-1.jpg',
      category: 'Pizzas',
      isCheesy: true,
      isSpecial: true,
    },
    {
      id: 'menu-2',
      name: 'Crown Crust Pizza',
      originalPrice: 'Rs. 1,999',
      price: 1549,
      priceLabel: 'Rs. 1,549',
      image: '/assets/menu-item-2.jpg',
      category: 'Pizzas',
      isCheesy: true,
      isSpecial: false,
    },
    {
      id: 'menu-3',
      name: 'Chicago Deep Dish Pizza',
      originalPrice: 'Rs. 1,999',
      price: 1549,
      priceLabel: 'Rs. 1,549',
      image: '/assets/menu-item-3.jpg',
      category: 'Pizzas',
      isCheesy: true,
      isSpecial: true,
    },
    {
      id: 'menu-4',
      name: 'Classic Chicken Tikka Pizza',
      originalPrice: 'Rs. 999',
      price: 750,
      priceLabel: 'Rs. 750',
      image: '/assets/menu-item-4.jpg',
      category: 'Pizzas',
      isCheesy: true,
      isSpecial: false,
    },
    {
      id: 'menu-5',
      name: 'Supreme Mix Pizza',
      originalPrice: 'Rs. 1,099',
      price: 750,
      priceLabel: 'Rs. 750',
      image: '/assets/menu-item-5.jpg',
      category: 'Pizzas',
      isCheesy: true,
      isSpecial: false,
    },
    {
      id: 'menu-6',
      name: 'Extreme Cheese Melt Pizza',
      originalPrice: 'Rs. 1,099',
      price: 750,
      priceLabel: 'Rs. 750',
      image: '/assets/menu-item-6.jpg',
      category: 'Pizzas',
      isCheesy: true,
      isSpecial: true,
    },
    {
      id: 'menu-7',
      name: 'Cheezora Special Omelette',
      originalPrice: 'Rs. 999',
      price: 699,
      priceLabel: 'Rs. 699',
      image: '/assets/menu-item-7.jpg',
      category: 'Breakfast',
      isCheesy: true,
      isSpecial: false,
    },
    {
      id: 'menu-8',
      name: 'Royal Eggs Benedict',
      originalPrice: 'Rs. 1,599',
      price: 1299,
      priceLabel: 'Rs. 1,299',
      image: '/assets/menu-item-8.jpg',
      category: 'Breakfast',
      isCheesy: true,
      isSpecial: true,
    },
  ];

  // Category list exactly matching the mockup tabs
  const categoryTabs = [
    { id: 'All', label: 'All Menu', emoji: '🍕' },
    { id: 'Pizzas', label: 'Pizzas', emoji: '🍕' },
    { id: 'Burgers', label: 'Burgers', emoji: '🍔' },
    { id: 'Breakfast', label: 'Breakfast', emoji: '🍳' },
    { id: 'Drinks', label: 'Drinks', emoji: '🍹' },
    { id: 'Desserts', label: 'Desserts', emoji: '🍰' },
    { id: 'Snacks', label: 'Snacks', emoji: '🍟' },
    { id: 'Specials', label: 'Specials', emoji: '⭐' },
  ];

  // Additional items from database when user searches or switches to other categories
  const extendedItems = useMemo(() => {
    // Map MENU_ITEMS to fit same structure
    return MENU_ITEMS.map((item, idx) => ({
      id: item.id || `ext-${idx}`,
      name: item.name,
      originalPrice: `Rs. ${Math.round(item.price * 1.3)}`,
      price: item.price,
      priceLabel: `Rs. ${item.price.toLocaleString()}`,
      image: item.image,
      category: 
        item.category === 'pizzas' ? 'Pizzas' :
        item.category === 'burgers' ? 'Burgers' :
        item.category === 'breakfast' ? 'Breakfast' :
        item.category === 'shakes' || item.category === 'beverages' ? 'Drinks' :
        item.category === 'sweet' ? 'Desserts' :
        item.category === 'broast' ? 'Snacks' : 'Specials',
      isCheesy: item.isCheesy ?? false,
      isSpecial: item.tag === 'Best Seller' || item.tag === 'Chef Special',
    }));
  }, []);

  // Filter logic
  const displayedItems = useMemo(() => {
    // If on All and not showing full catalog, show the 8 exact items first unless query exists
    let itemsToFilter = showcaseItems;
    if (showAllItems || searchQuery || selectedCategory !== 'All' && selectedCategory !== 'Pizzas' && selectedCategory !== 'Breakfast' && selectedCategory !== 'Specials') {
      // Merge unique
      const existingNames = new Set(showcaseItems.map(i => i.name));
      const complement = extendedItems.filter(i => !existingNames.has(i.name));
      itemsToFilter = [...showcaseItems, ...complement];
    }

    return itemsToFilter.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Specials') {
          if (!item.isSpecial) return false;
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }

      // Cheesy filter
      if (onlyCheesy && !item.isCheesy) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
      }

      // Sort / Filter dropdown
      if (sortOption === 'under1000') {
        return item.price < 1000;
      }
      if (sortOption === 'specials') {
        return item.isSpecial;
      }

      return true;
    });
  }, [showcaseItems, extendedItems, selectedCategory, onlyCheesy, searchQuery, sortOption, showAllItems]);

  const handleAddToCart = (item) => {
    addToCart(item, 1);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <div className="space-y-8 pb-20 bg-white text-zinc-900">
      
      {/* 1. Menu Hero Section - 100% Matching Mockup */}
      <section className="relative w-full bg-[#080808] text-white overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center">
        
        {/* Background Banner with Pizza, Cheese-pull & Steam */}
        <div className="absolute inset-0 z-0 bg-[#080808]">
          <img
            src="/assets/cheezora-pizza-hero-clean.jpg"
            alt="Cheezora Artisan Pizza"
            className="w-full h-full object-cover object-right md:object-center select-none"
          />
        </div>

        {/* Content on Left */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10 py-10 sm:py-14">
          <div className="max-w-lg lg:max-w-xl space-y-4 text-left">
            
            {/* 3 Yellow Radiating Sparkles */}
            <div className="flex items-center gap-1 text-cheezYellow">
              <Sparkles className="w-5 h-5 fill-cheezYellow" />
              <span className="w-1.5 h-1.5 rounded-full bg-cheezYellow inline-block" />
              <span className="w-1 h-1 rounded-full bg-cheezYellow inline-block" />
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.1] text-white">
              <span>Our Delicious</span>
              <span className="block mt-1">
                <span className="text-cheezYellow">Cheezora</span> Menu
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-zinc-300 font-normal">
              Freshly baked. Extra cheesy. Always delicious!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <button
                type="button"
                onClick={openCart}
                className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-cheezRed hover:bg-cheezRed-hover text-white text-xs sm:text-sm font-bold shadow-cheezRed flex items-center gap-2 transition-transform active:scale-95"
              >
                <span>Order Now</span>
                <span className="text-base font-black">→</span>
              </button>

              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="flex items-center gap-2.5 text-white hover:text-cheezYellow text-xs sm:text-sm font-bold transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white/80 group-hover:border-cheezYellow flex items-center justify-center bg-black/50">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5 group-hover:fill-cheezYellow group-hover:text-cheezYellow transition-colors" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Main Body Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6 sm:space-y-8">
        
        {/* 2. Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md bg-white border border-zinc-200 rounded-full px-4 py-2.5 shadow-xs flex items-center gap-2">
            <Search className="w-4 h-4 text-zinc-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your favorite food..."
              className="w-full text-xs sm:text-sm bg-transparent outline-none text-zinc-800 placeholder-zinc-400 font-medium"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-zinc-400 hover:text-zinc-700">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            
            {/* Extra Cheesy Only Toggle */}
            <button
              type="button"
              onClick={() => setOnlyCheesy(!onlyCheesy)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs ${
                onlyCheesy
                  ? 'bg-cheezYellow text-black font-extrabold ring-2 ring-cheezYellow'
                  : 'bg-amber-100/70 hover:bg-amber-100 text-amber-900'
              }`}
            >
              <span>🧀</span>
              <span>Extra Cheesy Only</span>
            </button>

            {/* Showing All Items Dropdown */}
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-white border border-zinc-200 text-zinc-700 text-xs font-bold rounded-full pl-4 pr-8 py-2 cursor-pointer shadow-xs outline-none hover:border-zinc-300"
              >
                <option value="all">Showing All Items</option>
                <option value="specials">Chef Specials Only</option>
                <option value="under1000">Under Rs. 1,000</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>
        </div>

        {/* 3. Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setShowAllItems(true);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cheezRed text-white shadow-sm shadow-red-200 scale-102'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                }`}
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 5. 8-Card Menu Grid - 100% Matching Mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-2">
          {displayedItems.map((item) => {
            const isAdded = !!addedItems[item.id];
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Dish Image */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-100 p-2.5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-4 pt-1 flex flex-col flex-grow justify-between space-y-3 text-left">
                  
                  {/* Dish Title */}
                  <div>
                    <h3 className="font-bold text-sm text-zinc-900 group-hover:text-cheezRed transition-colors truncate">
                      {item.name}
                    </h3>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-zinc-50">
                    <div>
                      {item.originalPrice && (
                        <span className="text-[11px] text-zinc-400 line-through block leading-none font-medium">
                          {item.originalPrice}
                        </span>
                      )}
                      <span className="text-sm font-bold text-cheezRed block leading-tight mt-0.5">
                        {item.priceLabel}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 active:scale-95 shadow-xs ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-cheezRed hover:bg-cheezRed-hover text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 6. View All Menu Button */}
        <div className="flex justify-center pt-6">
          <button
            type="button"
            onClick={() => {
              setShowAllItems(!showAllItems);
              setSelectedCategory('All');
            }}
            className="px-6 py-2.5 rounded-full border border-cheezRed text-cheezRed hover:bg-cheezRed hover:text-white text-xs font-bold transition-colors shadow-xs"
          >
            {showAllItems ? 'Show Less Menu ↑' : 'View All Menu →'}
          </button>
        </div>

      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#180E09] rounded-3xl max-w-2xl w-full p-6 border-2 border-cheezYellow relative shadow-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-white/10"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-cheezYellow mb-3">
              Our Delicious Cheezora Menu Story
            </h3>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <iframe
                title="Cheezora Crafting"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}