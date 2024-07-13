import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigObject } from "@/config/config";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: ConfigObject.name,
    template: `%s | ${ConfigObject.name}`
  },
  description: ConfigObject.description,
  icons: [
    
    {
      url:"/logo.png",

      href:"/logo.png",
      
      
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
