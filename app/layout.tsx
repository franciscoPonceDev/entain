import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { BackgroundCircles } from "@/components/background-circles";
import "./globals.css";
import { ManagerModalProvider } from "@/components/manager-modal-provider";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sportingbet ONE",
  description: "O jogo além do jogo — Experiências, promoções e benefícios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${openSans.variable} antialiased bg-[linear-gradient(90deg,#000E1C_0%,#002041_100%)] min-h-dvh text-slate-100 overflow-x-hidden`}
      >
        <BackgroundCircles />
        <ManagerModalProvider>
          {children}
        </ManagerModalProvider>
      </body>
    </html>
  );
}
