import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header"; //  import the header

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <CartProvider>
          <Header /> {/* Show header on all pages */}
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
