"use client";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  const handleCheckout = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({
        productId: "FEATURED_001",
        amount_cents: 1000,
        currency: "EUR",
      }),
    });

    const data = await res.json();
    window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-neutral-100 text-center p-4">
      <h1 className="text-4xl font-heading mb-4">🌿 Eco Starter Pack</h1>
      <p className="text-lg font-body mb-6 max-w-xl">Support sustainability. Shop now and start making a difference.</p>
      <button
        onClick={handleCheckout}
        className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition"
      >
        Shop Now (€10)
      </button>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
