"use client";

import Image from "next/image";

export function MyManager() {
  return (
    <section
      id="meu-gerente"
      aria-label="Meu Gerente"
      className="relative py-12 sm:py-16 lg:py-24 text-white"
    >
      {/* background flourish line using Dot.png */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* desktop angled line */}
        <Image
          src="/Dot.png"
          alt=""
          fill
          sizes="100vw"
          className="hidden md:block object-contain [transform:translateY(-12%)] opacity-60"
          priority={false}
        />
        {/* mobile curved line (reuse same asset; positioned differently) */}
        <Image
          src="/Dot.png"
          alt=""
          fill
          sizes="100vw"
          className="md:hidden object-contain [transform:translateY(-8%)] opacity-60"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] w-full md:w-[846px] md:h-[241px] mx-auto">
          {/* gradient: left 0% #002041 to right 100% #000E1C */}
          <div className="relative bg-[linear-gradient(90deg,#002041_0%,#000E1C_100%)]">
            {/* content grid */}
            <div className="grid grid-cols-1 md:grid-cols-[220px,1fr] h-full">
              {/* headset image */}
              <div className="relative aspect-[1/1] md:aspect-auto md:h-full">
                <Image
                  src="/big-golden-headset.png"
                  alt="Headset dourado"
                  fill
                  sizes="(min-width:768px) 200px, 50vw"
                  className="object-contain p-6 md:p-8"
                />
              </div>

              <div className="p-6 md:p-8">
                <p className="text-slate-200 text-sm">
                  Atendimento pessoal, com quem entende do seu jogo. Suporte exclusivo para membros <strong>Sportingbet ONE</strong>.
                </p>

                <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-brand-gold tracking-tight">
                  {"{NOME DO GERENTE}"} ESTÁ PRONTO PARA FALAR COM VOCÊ!
                </h3>

                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Image src="/present-icon.svg" alt="email" width={18} height={18} />
                    <span className="text-slate-100">email@email.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image src="/headset-icon.svg" alt="telefone" width={18} height={18} />
                    <span className="text-slate-100">XX XXXX-XXXX</span>
                  </li>
                </ul>

                <p className="mt-4 text-xs text-slate-400">Atendimento: Xxh - Xxh</p>
              </div>
            </div>

            {/* decorative golden curve inside card for mobile like reference */}
            <div aria-hidden className="absolute bottom-20 right-0 md:-bottom-2">
              <Image src="/Dot.png" alt="" width={320} height={64} className="opacity-60 md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


