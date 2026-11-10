import "./globals.css";

export const metadata = {
  title: "Card Collection",
  description: "Week 7 — More React + Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
