import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MenuCard({ item }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(item, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      
      {/* Food Image */}
      <div className="relative h-44 w-full overflow-hidden bg-zinc-100 p-2">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Card Body */}
      <div className="p-4 pt-1 flex flex-col flex-grow justify-between space-y-3">
        
        <div>
          <h3 className="font-bold text-sm text-zinc-900 group-hover:text-cheezRed transition-colors truncate">
            {item.name}
          </h3>
        </div>

        {/* Price & Outlined Add to Cart Button exactly like UI */}
        <div className="pt-2 flex items-center justify-between gap-2">
          <div>
            <span className="text-xs sm:text-sm font-bold text-cheezRed">
              {item.priceLabel || `Rs. ${item.price}`}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1 active:scale-95 ${
              added
                ? 'bg-emerald-600 text-white border border-emerald-600'
                : 'border border-red-500 text-red-600 hover:bg-red-600 hover:text-white'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3 h-3 stroke-[3]" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3 h-3" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
