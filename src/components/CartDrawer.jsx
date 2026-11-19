import { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    totals,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    deliveryType,
    setDeliveryType,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();

    if (items.length === 0) return;

    const itemListText = items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name}${
            item.selectedOption ? ` (${item.selectedOption})` : ''
          } - Rs. ${item.price * item.quantity}`
      )
      .join('\n');

    const message = `🍕 *NEW CHEEZORA ORDER* 🍕
--------------------------------
👤 *Customer:* ${customerName.trim() || 'Valued Guest'}
📞 *Phone:* ${customerPhone.trim() || 'Not specified'}
🛵 *Type:* ${deliveryType === 'delivery' ? 'Home Delivery' : 'Self Pickup'}
${deliveryType === 'delivery' ? `📍 *Address:* ${deliveryAddress.trim() || 'Standard Delivery'}\n` : ''}
📝 *Order Notes:* ${orderNotes.trim() || 'None'}
--------------------------------
🛒 *ITEMS ORDERED:*
${itemListText}
--------------------------------
💰 *Subtotal:* Rs. ${totals.subtotal}
${totals.fee > 0 ? `🚚 *Delivery Fee:* Rs. ${totals.fee}\n` : ''}🔥 *FINAL TOTAL:* Rs. ${totals.finalTotal}
--------------------------------
Order placed via Cheezora Website!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923134706110?text=${encoded}`, '_blank');
    
    // Reset and close
    clearCart();
    closeCart();
    setIsCheckingOut(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-amber-200">
          
          {/* Header */}
          <div className="p-5 bg-[#180E09] text-white flex items-center justify-between border-b border-cheezYellow/20">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-cheezRed rounded-xl text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold tracking-wide">Your Cheezora Cart</h2>
                <p className="text-xs text-cheezYellow font-medium">
                  {totals.count} {totals.count === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-cheezCream/40">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-cheezYellow/20 flex items-center justify-center text-4xl animate-pulse">
                  🍕
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cheezBrown">Your cart is feeling lonely!</h3>
                  <p className="text-xs text-zinc-500 mt-1 max-w-xs">
                    Explore our 2-Foot Train Pizza, cheese-injected broast, or breakfast specials to get started.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="px-6 py-2.5 rounded-xl bg-cheezRed text-white text-xs font-bold shadow-cheezRed hover:bg-cheezRed-hover transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-amber-200">
                  <span className="font-bold text-cheezBrown uppercase tracking-wider">Order Items</span>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Cart</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="bg-white p-3.5 rounded-2xl border border-amber-100 shadow-sm flex items-center gap-3.5"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-cheezBrown truncate">
                          {item.name}
                        </h4>
                        {item.selectedOption && (
                          <span className="text-[11px] font-semibold text-cheezRed block">
                            {item.selectedOption}
                          </span>
                        )}
                        <span className="text-xs font-black text-cheezYellow-dark">
                          Rs. {item.price * item.quantity}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 bg-cheezCream rounded-xl p-1 border border-amber-200">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded-lg bg-white text-cheezBrown hover:bg-cheezRed hover:text-white transition-colors shadow-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-cheezBrown">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-lg bg-white text-cheezBrown hover:bg-cheezYellow hover:text-cheezBrown transition-colors shadow-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="p-1.5 text-zinc-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Checkout Fields Modal/Section */}
                {isCheckingOut && (
                  <form onSubmit={handleWhatsAppOrder} className="mt-4 p-4 bg-white rounded-2xl border-2 border-cheezYellow space-y-3 animate-fadeIn">
                    <h4 className="text-xs font-black uppercase tracking-wider text-cheezRed border-b pb-1.5">
                      Delivery Details
                    </h4>

                    <div>
                      <label className="block text-[11px] font-bold text-cheezBrown mb-1">Your Full Name:</label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Ali Khan"
                        className="w-full text-xs p-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-cheezYellow"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-cheezBrown mb-1">Phone Number (WhatsApp):</label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="e.g. 0313-XXXXXXX"
                        className="w-full text-xs p-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-cheezYellow"
                      />
                    </div>

                    {deliveryType === 'delivery' && (
                      <div>
                        <label className="block text-[11px] font-bold text-cheezBrown mb-1">Full Delivery Address:</label>
                        <textarea
                          rows={2}
                          required
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          placeholder="House/Street/Area details..."
                          className="w-full text-xs p-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-cheezYellow"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-bold text-cheezBrown mb-1">Special Instructions (optional):</label>
                      <input
                        type="text"
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        placeholder="Extra dip, spicy, less ice..."
                        className="w-full text-xs p-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-cheezYellow"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send to WhatsApp (0313-470-6110)
                    </button>
                  </form>
                )}
              </>
            )}
          </div>

          {/* Footer & Totals */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-amber-200 space-y-3">
              
              {/* Delivery / Pickup Tab */}
              <div className="grid grid-cols-2 p-1 bg-cheezCream rounded-xl border border-amber-200 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`py-2 rounded-lg transition-all ${
                    deliveryType === 'delivery'
                      ? 'bg-cheezRed text-white shadow-xs'
                      : 'text-cheezBrown hover:text-cheezRed'
                  }`}
                >
                  🛵 Home Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`py-2 rounded-lg transition-all ${
                    deliveryType === 'pickup'
                      ? 'bg-cheezYellow text-cheezBrown shadow-xs'
                      : 'text-cheezBrown hover:text-cheezYellow-dark'
                  }`}
                >
                  🏬 Takeaway / Pickup
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-cheezBrown">Rs. {totals.subtotal}</span>
                </div>
                {deliveryType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-bold text-cheezBrown">Rs. {totals.fee}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black text-cheezBrown border-t pt-2 border-dashed">
                  <span>Total Payable</span>
                  <span className="text-cheezRed">Rs. {totals.finalTotal}</span>
                </div>
              </div>

              {/* Checkout Action */}
              {!isCheckingOut ? (
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-3.5 rounded-2xl bg-cheezRed hover:bg-cheezRed-hover text-white font-extrabold text-sm uppercase tracking-wider shadow-cheezRed flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <span>Proceed to Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="w-full py-2 text-xs font-semibold text-zinc-500 hover:text-cheezBrown text-center"
                >
                  Back to item review
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
