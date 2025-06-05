"use client";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/printful-products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-heading mb-6 text-primary">EcoWorld Products</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="bg-neutral-100 rounded-card p-4 shadow-sm hover:shadow-md transition">
            <img src={product.image} alt={product.title} className="rounded-card w-full h-48 object-cover" />
            <h2 className="mt-4 text-lg font-heading">{product.title}</h2>
            <p className="text-body mt-1">€{(product.price_cents / 100).toFixed(2)}</p>
            <button className="mt-3 border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
