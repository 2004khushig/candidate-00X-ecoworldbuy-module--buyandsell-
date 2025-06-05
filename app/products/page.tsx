"use client";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

interface Product {
  id: string;
  title: string;
  image: string;
  price_cents: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/api/printful-products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-700 font-['Montserrat']">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl p-4 shadow bg-white transition hover:scale-[1.02]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain bg-gray-50 rounded-lg p-4"
            />
            <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
            <p className="text-lg font-medium text-green-700">₹{(product.price_cents).toFixed(0)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 px-4 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
