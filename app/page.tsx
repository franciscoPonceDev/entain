import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { Hero } from "@/components/hero";
import { QuickLinksNav } from "@/components/quick-links-nav";
import { Benefits } from "@/components/benefits";
import { Promotions } from "@/components/promotions";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Featured } from "@/components/featured";
import { MyManager } from "@/components/my-manager";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="mx-auto min-h-dvh max-w-none">
        <Hero />
        <QuickLinksNav />
        <Featured />
        <Benefits />
        <Promotions />
        <MyManager />
        <Features />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
