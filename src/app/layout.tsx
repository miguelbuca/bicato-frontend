import { Header } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Biscato",
  },
  description:
    "Discover a world of on-demand services at your fingertips. Our innovative handyman app provides a unique platform, connecting you to the most skilled professionals in the region. Easily browse through services, explore intuitive maps to find nearby providers, and enjoy integrated chat for efficient communication. Simplify your life, accomplish tasks with confidence, and experience exceptional results. Download now and embrace the convenience and excellence of the future of on-demand services!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
