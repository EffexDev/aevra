import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Build With Aevra"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body
        className={`${interSans.className} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
