"use client";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price_cents * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-700 font-['Montserrat']">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                <img src={item.image} className="w-24 h-24 rounded object-contain bg-gray-50 p-2" />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Qty: {item.quantity}</p>
                  <p>₹{(item.price_cents * item.quantity).toFixed(0)}</p>
                </div>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xl">
            <strong>Total: ₹{total.toFixed(0)}</strong>
          </div>
          <a
            href="/"
            className="mt-4 inline-block border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition"
          >
            Proceed to Checkout
          </a>
        </>
      )}
    </div>
  );
}
