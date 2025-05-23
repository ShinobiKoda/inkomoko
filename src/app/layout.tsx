import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const ubuntuFont = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights
});

export const metadata: Metadata = {
  title: "InkoMoko",
  description: "InkoMoko | Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntuFont.variable} antialiased`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
