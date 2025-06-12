import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOGO",
  description: "Shape your fashion and your personality with LOGO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/favicon.png" sizes="any" />
      </head>
      <body className={``}>{children}</body>
    </html>
  );
}
