import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baaz - Product Engineering & Design Agency",
  description: "We build scalable digital products with cutting-edge technology. Product strategy, UI/UX design, web development, mobile apps, and AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
