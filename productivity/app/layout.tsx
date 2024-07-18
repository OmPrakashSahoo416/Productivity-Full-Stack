import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigObject } from "@/config/config";
import { ClerkProvider } from "@clerk/nextjs";
ClerkProvider

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
      <body className={inter.className}><ClerkProvider>{children}</ClerkProvider></body>
    </html>
  );
}
