import type { Metadata } from "next";
import { Poppins, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/cart-context";
import Navbar from "./components/ui/Navbar";
import CartWrapper from "./components/cart/CartWrapper";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zenaura",
  description:
    "earplugs for music lovers, concert-goers, and professionals. Experience superior sound quality and hearing protection with Zenaura's innovative earplug technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <CartProvider>
          {/* Navbar */}
          <Navbar />

          {/* Cart Sidebar + Overlay */}
          <CartWrapper />

          {/* Main content */}
          <main className="flex-1">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}