"use client";
import { useCart } from "../context/CartContext";

export default function Home() {
  const handleShopNow = () => {
    fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: "FEATURED_001",
        amount_cents: 1000,
        currency: "INR",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sessionId) {
          window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
        }
      });
  };

  return (
    <div className="text-center py-12 bg-gradient-to-b from-white to-green-50">
      <h1 className="text-5xl font-bold text-green-700 mb-4 font-['Montserrat']">
        🌏 Eco Starter Pack
      </h1>
      <p className="mb-6 text-lg">Your first step to eco-living. Just ₹100.</p>
      <button
        onClick={handleShopNow}
        className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition"
      >
        Shop Now
      </button>
      <div className="mt-6">
        <a href="/products" className="text-blue-600 underline">
          Browse All Products →
        </a>
      </div>
    </div>
  );
}
