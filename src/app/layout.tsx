import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "websocket.dev⚡️",
  description: "Experience unparalleled speed and efficiency with our cutting-edge websocket technology. Revolutionize your real-time applications with websocket.dev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(spaceGrotesk.className, "bg-black text-white antialiased")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
