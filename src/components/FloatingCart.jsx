import { memo } from 'react';
import { useCartActions, useCartState } from '../context/CartContext';

function FloatingCart() {
  const { totals } = useCartState();
  const { setCartOpen } = useCartActions();

  return (
    <div id="floating-cart-btn" title="View Cart" onClick={() => setCartOpen(true)}>
      🛒 <span id="floating-cart-count">{totals.count}</span>
    </div>
  );
}

export default memo(FloatingCart);
