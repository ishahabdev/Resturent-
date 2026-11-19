import { memo, useCallback, useState } from 'react';
import { formatBRL, useCartActions, useCartState } from '../context/CartContext';

const WHATSAPP_URL = 'https://wa.me/5596984164450';

function CheckoutModal() {
  const { items, totals, delivery, isCheckoutOpen } = useCartState();
  const { setDelivery, setCheckoutOpen, setCartOpen } = useCartActions();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [reference, setReference] = useState('');
  const [bairro, setBairro] = useState('');
  const [comments, setComments] = useState('');

  const handleClose = useCallback(() => setCheckoutOpen(false), [setCheckoutOpen]);

  const handleDeliveryChange = useCallback((event) => setDelivery(event.target.value), [setDelivery]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const itemList = items
        .map((item) => `- ${item.quantity}x ${item.name} (${formatBRL(item.price)})`)
        .join('\n');

      const message = `
📦 UFO BURGER ORDER

👤 Customer: ${name.trim()}

🛍 Items:
${itemList}

💰 Products Total: ${formatBRL(totals.subtotal)}
${totals.fee > 0 ? `🚚 Delivery: ${formatBRL(totals.fee)}` : ''}
🔢 Final Total: ${formatBRL(totals.total)}

🚚 Delivery or Pickup: ${delivery}
🏠 Address: ${address.trim()}
📍 Reference point: ${reference.trim()}
🏘 Neighborhood: ${bairro.trim()}
📞 Phone: ${phone.trim()}

📝 Notes: ${comments.trim() || 'None'}

🔗 Order sent via www.ufoburgermcp.com
  `;

      window.location.href = `${WHATSAPP_URL}?text=${encodeURIComponent(message.trim())}`;

      setCheckoutOpen(false);
      setCartOpen(false);
    },
    [items, name, phone, address, reference, bairro, comments, delivery, totals, setCheckoutOpen, setCartOpen]
  );

  return (
    <div id="checkout-modal" className={`checkout-modal${isCheckoutOpen ? ' show' : ''}`}>
      <div className="checkout-content">
        <span className="close-modal" onClick={handleClose}>
          &times;
        </span>
        <h3>Complete Order</h3>
        <form id="checkout-form" onSubmit={handleSubmit}>
          <label>Your Name:</label>
          <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="(96) 99999-9999"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Delivery Method:</label>
          <select name="delivery" required value={delivery} onChange={handleDeliveryChange}>
            <option value="Pickup">Pickup</option>
            <option value="Delivery">Delivery</option>
          </select>

          <div id="address-fields" style={{ display: delivery === 'Delivery' ? 'block' : 'none' }}>
            <label>Address:</label>
            <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <label>Reference Point:</label>
            <input type="text" name="reference" value={reference} onChange={(e) => setReference(e.target.value)} />
            <label>Neighborhood:</label>
            <input type="text" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
          </div>

          <label>Notes (optional):</label>
          <textarea name="comments" value={comments} onChange={(e) => setComments(e.target.value)} />

          <button type="submit" className="btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(CheckoutModal);
