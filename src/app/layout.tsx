import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ExEdu | Hybrid AI Digital Marketing Institute",
  description:
    "Empowering the next generation of marketing leaders with AI-driven performance marketing, autonomous campaigns, and data dominance.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/exedu-favicon.jpg.jpeg" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#07050f] text-slate-100 selection:bg-purple-600 selection:text-white overflow-x-hidden">
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
