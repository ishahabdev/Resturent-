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
📦 PEDIDO UFO BURGER

👤 Cliente: ${name.trim()}

🛍 Itens:
${itemList}

💰 Total dos Produtos: ${formatBRL(totals.subtotal)}
${totals.fee > 0 ? `🚚 Entrega: ${formatBRL(totals.fee)}` : ''}
🔢 Total Final: ${formatBRL(totals.total)}

🚚 Entrega ou Retirada: ${delivery}
🏠 Endereço: ${address.trim()}
📍 Ponto de referência: ${reference.trim()}
🏘 Bairro: ${bairro.trim()}
📞 Telefone: ${phone.trim()}

📝 Observações: ${comments.trim() || 'Nenhuma'}

🔗 Pedido enviado via site www.ufoburgermcp.com
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
        <h3>Finalizar Pedido</h3>
        <form id="checkout-form" onSubmit={handleSubmit}>
          <label>Seu Nome:</label>
          <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />

          <label>Número de Telefone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="(96) 99999-9999"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Forma de Entrega:</label>
          <select name="delivery" required value={delivery} onChange={handleDeliveryChange}>
            <option value="Retirada">Retirada</option>
            <option value="Entrega">Entrega</option>
          </select>

          <div id="address-fields" style={{ display: delivery === 'Entrega' ? 'block' : 'none' }}>
            <label>Endereço:</label>
            <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <label>Ponto de Referência:</label>
            <input type="text" name="reference" value={reference} onChange={(e) => setReference(e.target.value)} />
            <label>Bairro:</label>
            <input type="text" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
          </div>

          <label>Comentário (opcional):</label>
          <textarea name="comments" value={comments} onChange={(e) => setComments(e.target.value)} />

          <button type="submit" className="btn">
            Completar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(CheckoutModal);
