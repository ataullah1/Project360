import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/Components/nav/page";
import Footer from "@/Components/footer/page";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import QueryProvider from "./Providers/queryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopyfy Themes",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NextUIProvider>
          <QueryProvider>
            <Navigation />
            {children}
            <Footer />
            <ReactQueryDevtools />
          </QueryProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
