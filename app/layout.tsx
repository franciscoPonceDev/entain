import type { Metadata, Viewport } from "next";
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
  title: {
    default: "Sportingbet ONE",
    template: "%s | Sportingbet ONE",
  },
  description: "O jogo além do jogo — Experiências, promoções e benefícios.",
  applicationName: "Sportingbet ONE",
  metadataBase: new URL("https://www.sportingbet.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sportingbet ONE",
    description: "O jogo além do jogo — Experiências, promoções e benefícios.",
    url: "/",
    siteName: "Sportingbet ONE",
    images: [{ url: "/Logo One.svg", width: 1200, height: 630, alt: "Sportingbet ONE" }],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sportingbet ONE",
    description: "O jogo além do jogo — Experiências, promoções e benefícios.",
    images: ["/Logo One.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000E1C",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
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
