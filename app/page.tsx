import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { QuickLinksNav } from "@/components/quick-links-nav";
import { Footer } from "@/components/footer";
import { BottomNav } from "@/components/bottom-nav";

const Featured = dynamic(() => import("@/components/featured").then(m => m.Featured), {
  loading: () => <section className="mx-auto max-w-7xl px-4 py-12 text-slate-200">Carregando…</section>,
  ssr: true,
});

const Benefits = dynamic(() => import("@/components/benefits").then(m => m.Benefits), {
  loading: () => <section className="mx-auto max-w-7xl px-4 py-12 text-slate-200">Carregando benefícios…</section>,
  ssr: true,
});

const Promotions = dynamic(() => import("@/components/promotions").then(m => m.Promotions), {
  loading: () => <section className="mx-auto max-w-7xl px-4 py-12 text-slate-200">Carregando promoções…</section>,
  ssr: true,
});

const MyManager = dynamic(() => import("@/components/my-manager").then(m => m.MyManager), {
  loading: () => <section className="mx-auto max-w-7xl px-4 py-12 text-slate-200">Carregando…</section>,
  ssr: true,
});

const About = dynamic(() => import("@/components/about").then(m => m.About), {
  loading: () => <section className="mx-auto max-w-7xl px-4 py-12 text-slate-200">Carregando…</section>,
  ssr: true,
});

const Faq = dynamic(() => import("@/components/faq").then(m => m.Faq), {
  loading: () => <section className="mx-auto max-w-7xl px-4 py-12 text-slate-200">Carregando FAQ…</section>,
  ssr: true,
});

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="mx-auto min-h-dvh max-w-none pt-14">
        <Hero />
        <QuickLinksNav />
        <Featured />
        <Benefits />
        <Promotions />
        <MyManager />
        <About />
        <Faq />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
