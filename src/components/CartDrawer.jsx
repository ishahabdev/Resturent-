import { memo, useCallback } from 'react';
import { formatBRL, useCartActions, useCartState } from '../context/CartContext';

function CartDrawer() {
  const { items, totals, isCartOpen } = useCartState();
  const { changeQuantity, setCartOpen, setCheckoutOpen } = useCartActions();

  const handleClose = useCallback(() => setCartOpen(false), [setCartOpen]);

  const handleCheckout = useCallback(() => {
    if (items.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    setCheckoutOpen(true);
  }, [items.length, setCheckoutOpen]);

  return (
    <div id="cart-drawer" className={`cart-drawer${isCartOpen ? ' open' : ''}`}>
      <div className="cart-header">
        <h3>Seu Carrinho</h3>
        <span className="close-cart" onClick={handleClose}>
          &times;
        </span>
      </div>

      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.name}>
            <div>
              <strong>{item.name}</strong>
              <br />
              <small>{formatBRL(item.price)}</small>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <button className="qty-btn" onClick={() => changeQuantity(item.name, -1)}>
                −
              </button>
              <span>{item.quantity}</span>
              <button className="qty-btn" onClick={() => changeQuantity(item.name, 1)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <p>
          Total dos Produtos: <span id="product-total">{formatBRL(totals.subtotal)}</span>
        </p>
        <p id="delivery-line" style={{ display: totals.fee > 0 ? 'block' : 'none' }}>
          Entrega: <span id="delivery-fee">{formatBRL(totals.fee)}</span>
        </p>
        <p>
          <strong>
            Total Final: <span id="final-total">{formatBRL(totals.total)}</span>
          </strong>
        </p>

        <button className="btn checkout-btn" onClick={handleCheckout}>
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default memo(CartDrawer);
