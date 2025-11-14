import "./globals.css";

export const metadata = {
  title: "Baaz - Software Product Development",
  description:
    "Building world-class digital products since 2018. Expert team delivering innovative solutions in Product Strategy, UI/UX Design, Web Development, Mobile Apps, and AI Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
