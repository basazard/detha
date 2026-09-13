import "../globals.css";

export const metadata = {
  title: "For You ❤️",
  description: "A little something made with love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
