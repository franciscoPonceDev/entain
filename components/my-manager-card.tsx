"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface ManagerCardProps {
  className?: string;
  titleId?: string;
}

export function ManagerCard({ className = "", titleId }: ManagerCardProps) {
  return (
    <div className={`overflow-hidden rounded-[14px] ring-1 ring-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.55)] w-full md:w-[846px] md:h-[241px] mx-auto ${className}`}>
      <div className="relative bg-[linear-gradient(90deg,#002041_0%,#000E1C_100%)]">
        <div className="h-full md:flex">
          <div className="relative h-[200px] md:h-[241px] md:basis-1/4 md:flex-none">
            <Image
              src="/Dot.png"
              alt=""
              width={700}
              height={1200}
              className="hidden md:block absolute -left-28 -top-72 rotate-[-28deg] opacity-60"
            />
            <Image
              src="/big-golden-headset.png"
              alt="Headset dourado"
              fill
              sizes="(min-width:768px) 274px, 60vw"
              priority
              className="object-contain p-6 md:px-6 md:py-6"
            />
          </div>

          <div className="flex flex-col justify-center p-6 md:p-2 md:basis-3/4">
            <p className="text-slate-200 text-[13px] leading-relaxed">
              Atendimento pessoal, com quem entende do seu jogo.<br/> Suporte exclusivo para membros <strong>Sportingbet ONE</strong>.
            </p>

            <h3 id={titleId} className="mt-3 md:mt-2 text-[19px] tracking-tighter font-extrabold uppercase text-brand-gold">
              {"{NOME DO GERENTE}"} está pronto para falar com você!
            </h3>

            <ul className="mt-6 md:mt-3 space-y-3 text-[13px]">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-brand-gold" aria-hidden />
                <span className="text-slate-100">email@email.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 text-brand-gold" aria-hidden />
                <span className="text-slate-100">XX XXXX-XXXX</span>
              </li>
            </ul>

            <p className="mt-4 text-[11px] text-slate-400">Atendimento: Xxh - Xxh</p>
          </div>
        </div>

        <div aria-hidden className="md:hidden absolute bottom-20 right-0">
          <Image src="/Dot.png" alt="" width={320} height={64} className="opacity-60" />
        </div>
      </div>
    </div>
  );
}


