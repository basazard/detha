import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Docks from "../../../components/Docks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Detha Birthday's",
  description: "20250420 by basazard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="w-full min-h-screen bg-gray-500 bg-[url(/topography.svg)] bg-repeat bg-[size:9%]">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <Docks />
          </div>
        </div>
      </body>
    </html>
  );
}
