import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
        <div className="w-full min-h-screen bg-gray-300 bg-[url(/topography.svg)] bg-repeat bg-[size:9%]">
          <div className="flex flex-col min-h-screen">
            <nav className="bg-linear-to-b from-gray-100 to-gray-400 flex gap-10 py-3 px-30 text-gray-700 items-center">
              <div>
                <Image src="/apple.svg" width={30} height={30} alt="icon1" />
              </div>
              <div>Finder</div>
              <div>File</div>
              <div>Edit</div>
              <div>Go</div>
            </nav>
            {children}
            <footer className="flex">
              <div className="absolute bottom-0 mb-15 px-30 w-full">
                <div className="flex border-1 py-5 justify-between w-full px-20 bg-gray-500/50 rounded-lg">
                  <div>
                    <Image src="/icon-1.png" width={50} height={50} alt="icon1" />
                  </div>
                  <div>
                    <Image src="/icon-2.png" width={50} height={50} alt="icon" />
                  </div>
                  <div>
                    <Image src="/icon-3.png" width={50} height={50} alt="icon" />
                  </div>
                  <div>
                    <Image src="/icon-4.png" width={50} height={50} alt="icon" />
                  </div>
                  <div>
                    <Image src="/icon-5.png" width={50} height={50} alt="icon" />
                  </div>
                  <div>
                    <Image src="/icon-6.png" width={50} height={50} alt="icon" />
                  </div>
                  <div>
                    <Image src="/icon-7.png" width={50} height={50} alt="icon" />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
