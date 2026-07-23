import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  const numeric = String(price).replace(/[^0-9]/g, '');
  return Number(numeric) || 0;
};

const Order = ({ cartItems = [], cartCount = 0, onContinueShopping, onRemoveItem, onOpenProduct }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 150 : 0;
  const total = subtotal + shipping;

  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    note: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleOrderSubmit = async (event) => {
    event.preventDefault();

    if (!cartItems.length) return;

    setIsSending(true);
    setFeedback('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS is not configured yet. Please add your service ID, template ID, and public key to the project env file.');
      }

      const orderItems = cartItems
        .map((item) => `• ${item.name} × ${item.quantity} — ${item.price}`)
        .join('\n');

      const templateParams = {
        to_name: 'Arvin',
        to_email: 'arvynwinters@gmail.com',
        from_name: customer.name || 'Guest Customer',
        from_email: customer.email || 'No email provided',
        phone: customer.phone || 'Not provided',
        address: customer.address || 'Not provided',
        note: customer.note || 'No note',
        order_items: orderItems || 'No items selected',
        subtotal: `€${subtotal.toLocaleString()}`,
        shipping: `€${shipping.toLocaleString()}`,
        total: `€${total.toLocaleString()}`
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setFeedback('Order notification sent successfully.');
      setCustomer({ name: '', email: '', phone: '', address: '', note: '' });
    } catch (error) {
      setFeedback(error.message || 'Unable to send order notification right now.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC] px-4 py-8 text-[#0C2620] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-[rgba(12,38,32,0.08)] bg-white/90 px-5 py-4 shadow-[0_12px_32px_rgba(12,38,32,0.06)] backdrop-blur">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8B5E3C]">Your basket</p>
            <h1 className="font-serif text-[28px] font-semibold">Cart</h1>
          </div>
          <button
            type="button"
            onClick={onContinueShopping}
            className="cursor-pointer rounded-full border border-[rgba(12,38,32,0.14)] bg-[#0C2620] px-4 py-2 text-sm font-semibold text-[#F7F2E8] transition hover:bg-[#153d34]"
          >
            Continue shopping
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-[rgba(12,38,32,0.18)] bg-white/80 p-10 text-center shadow-[0_12px_32px_rgba(12,38,32,0.04)]">
            <p className="font-serif text-[24px] font-semibold">Your cart is empty</p>
            <p className="mt-2 text-[14px] text-[#6B6963]">Add a few pieces from the collection and they will appear here instantly.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.7fr]">
            <div className="space-y-4">
              <div className="rounded-3xl border border-[rgba(12,38,32,0.08)] bg-white p-4 shadow-[0_12px_32px_rgba(12,38,32,0.05)] sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8B5E3C]">Items selected</p>
                    <p className="text-[16px] text-[#4A4944]">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your order</p>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id}  onClick={() => onOpenProduct?.(item)} className="flex flex-col cursor-pointer gap-4 border-t border-[rgba(12,38,32,0.08)] py-4 first:border-t-0 first:pt-0">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <button type="button" onClick={() => onOpenProduct?.(item)} className="w-full text-left sm:w-auto">
                        <img src={item.image} alt={item.name} className="h-24 w-full rounded-2xl object-cover sm:w-24" />
                      </button>
                      <div className="flex-1">
                        <button type="button" onClick={() => onOpenProduct?.(item)} className="text-left">
                          <p className="font-serif text-[18px] font-semibold text-[#0C2620]">{item.name}</p>
                        </button>
                        <p className="mt-1 text-[13px] text-[#6B6963]">{item.material}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#F4F1EC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2F5D4E]">
                            {item.category}
                          </span>
                          <span className="rounded-full bg-[#FFF8E8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C9A05C]">
                            Qty {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-2 text-left sm:items-end sm:text-right">
                        <div>
                          <p className="text-[16px] font-semibold text-[#0C2620]">{item.price}</p>
                          <p className="text-[13px] text-[#6B6963]">{item.quantity} × {item.price}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem?.(item.id)}
                          className="cursor-pointer rounded-full border border-[rgba(12,38,32,0.12)] px-3 py-1.5 text-[12px] font-semibold text-[#8B2E2E] transition hover:bg-[#FFF3F3]"
                        >
                          Remove item
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[rgba(12,38,32,0.08)] bg-[#0C2620] p-6 text-[#F7F2E8] shadow-[0_18px_40px_rgba(12,38,32,0.14)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9A05C]">Order summary</p>
              <h2 className="mt-2 font-serif text-[24px] font-semibold">Ready to checkout</h2>

              <div className="mt-6 space-y-3 border-b border-white/15 pb-4 text-[14px]">
                <div className="flex items-center justify-between">
                  <span>Items subtotal</span>
                  <span>€{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span>€{shipping.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[18px] font-semibold">
                <span>Total</span>
                <span>€{total.toLocaleString()}</span>
              </div>

              <form onSubmit={handleOrderSubmit} className="mt-6 space-y-3">
                <input
                  type="text"
                  value={customer.name}
                  onChange={(event) => setCustomer((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="Your name"
                  className="w-full rounded-full border border-white/20 bg-[#F7F2E8] px-4 py-2.5 text-[13px] text-[#0C2620] outline-none"
                  required
                />
                <input
                  type="email"
                  value={customer.email}
                  onChange={(event) => setCustomer((prev) => ({ ...prev, email: event.target.value }))}
                  placeholder="Your email"
                  className="w-full rounded-full border border-white/20 bg-[#F7F2E8] px-4 py-2.5 text-[13px] text-[#0C2620] outline-none"
                  required
                />
                <input
                  type="tel"
                  value={customer.phone}
                  onChange={(event) => setCustomer((prev) => ({ ...prev, phone: event.target.value }))}
                  placeholder="Phone number"
                  className="w-full rounded-full border border-white/20 bg-[#F7F2E8] px-4 py-2.5 text-[13px] text-[#0C2620] outline-none"
                />
                <input
                  type="text"
                  value={customer.address}
                  onChange={(event) => setCustomer((prev) => ({ ...prev, address: event.target.value }))}
                  placeholder="Delivery address"
                  className="w-full rounded-full border border-white/20 bg-[#F7F2E8] px-4 py-2.5 text-[13px] text-[#0C2620] outline-none"
                />
                <textarea
                  value={customer.note}
                  onChange={(event) => setCustomer((prev) => ({ ...prev, note: event.target.value }))}
                  placeholder="Order notes"
                  rows="3"
                  className="w-full rounded-2xl border border-white/20 bg-[#F7F2E8] px-4 py-2.5 text-[13px] text-[#0C2620] outline-none"
                />
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full rounded-full cursor-pointer bg-[#C9A05C] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#0C2620] transition hover:bg-[#DBB670] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? 'Sending order...' : 'Place order'}
                </button>
              </form>
              {feedback && (
                <p className={`mt-3 text-[12px] ${feedback.includes('successfully') ? 'text-[#A8F0C0]' : 'text-[#FFD6D6]'}`}>
                  {feedback}
                </p>
              )}
              <p className="mt-3 text-[12px] text-[#D7CFC0]">Free returns on all signature pieces within 30 days.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
