import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { Provider } from "jotai";

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
      <body className={``}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
