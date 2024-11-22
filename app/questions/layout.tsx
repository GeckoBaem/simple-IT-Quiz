import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "MAKE@Quiz start!",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) { 
  return (
      <div className="delay-1000 animate-bg-white-to-purple w-screen h-screen overflow-y-hidden relative">
        {children}
      </div>
  );
}
