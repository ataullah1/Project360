import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/Components/nav/page";
import Footer from "@/Components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopyfy Themes",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <NextUIProvider>
          <Navigation></Navigation>
          {children}
          <Footer></Footer>
        </NextUIProvider>
      </body>
    </html>
  );
}
