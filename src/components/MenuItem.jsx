import { memo, useCallback } from 'react';
import { useCartActions } from '../context/CartContext';

function MenuItem({ item }) {
  const { addItem } = useCartActions();
  const handleAdd = useCallback(() => addItem(item.cartName || item.name, item.price), [addItem, item]);

  return (
    <div className="menu-item menu-with-image">
      <img
        src={item.image}
        alt={item.name}
        className="menu-img"
        loading="lazy"
        decoding="async"
        style={item.imageStyle}
      />
      <div className="menu-text">
        <strong>{item.name}</strong>
        <p>{item.description || ''}</p>
        <span className="price">{item.priceText}</span>
        <button className="btn add-to-cart-btn" onClick={handleAdd}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default memo(MenuItem);
