import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Promotions() {
  return (
    <section 
      id="promocoes" 
      aria-label="Promoções" 
      className="relative group overflow-hidden text-white py-24 sm:py-32 lg:py-40 lg:min-h-[700px] flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/Promo 3 mobile.png"
          alt="Pessoas em um estádio de futebol."
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 md:hidden"
          loading="lazy"
          quality={80}
        />
        <Image
          src="/Promo 3.png"
          alt="Pessoas em um estádio de futebol."
          fill
          sizes="100vw"
          className="hidden object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 md:block"
          loading="lazy"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center justify-center h-full mb-10">
          <h2 className="text-3xl font-bold tracking-tighter text-brand-gold sm:text-4xl lg:text-5xl">
            PROMOÇÕES EXCLUSIVAS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            Bônus personalizados, ofertas especiais e competições que valem experiências únicas — incluindo prêmios internacionais e acesso a momentos inesquecíveis.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg" aria-label="Ver Promoções ONE" tabIndex={0}>
              Ver Promoções ONE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


