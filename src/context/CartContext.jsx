import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const DELIVERY_FEE = 19;

const CartStateContext = createContext(null);
const CartActionsContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [delivery, setDelivery] = useState('Retirada');
  const [isCartOpen, setCartOpen] = useState(false);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const addItem = useCallback((name, price) => {
    setItems((prev) => {
      const index = prev.findIndex((item) => item.name === name);
      if (index === -1) return [...prev, { name, price, quantity: 1 }];
      const next = prev.slice();
      next[index] = { ...next[index], quantity: next[index].quantity + 1 };
      return next;
    });
  }, []);

  const changeQuantity = useCallback((name, delta) => {
    setItems((prev) =>
      prev.flatMap((item) => {
        if (item.name !== name) return [item];
        const quantity = item.quantity + delta;
        return quantity <= 0 ? [] : [{ ...item, quantity }];
      })
    );
  }, []);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const fee = delivery === 'Entrega' ? DELIVERY_FEE : 0;
    return { subtotal, count, fee, total: subtotal + fee };
  }, [items, delivery]);

  const state = useMemo(
    () => ({ items, totals, delivery, isCartOpen, isCheckoutOpen }),
    [items, totals, delivery, isCartOpen, isCheckoutOpen]
  );

  const actions = useMemo(
    () => ({ addItem, changeQuantity, setDelivery, setCartOpen, setCheckoutOpen }),
    [addItem, changeQuantity]
  );

  return (
    <CartStateContext.Provider value={state}>
      <CartActionsContext.Provider value={actions}>{children}</CartActionsContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const ctx = useContext(CartStateContext);
  if (!ctx) throw new Error('useCartState must be used within CartProvider');
  return ctx;
}

export function useCartActions() {
  const ctx = useContext(CartActionsContext);
  if (!ctx) throw new Error('useCartActions must be used within CartProvider');
  return ctx;
}

export function formatBRL(value) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}
