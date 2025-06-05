import "./globals.css";
import { Roboto, Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "EcoWorldBuy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white text-gray-800`}>
        <main className="font-sans">{children}</main>
      </body>
    </html>
  );
}
