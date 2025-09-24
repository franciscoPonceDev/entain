"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faCakeCandles,
  faBullhorn,
  faGifts,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon?: string;
  button: { text: string; variant: "primary" | "outline" } | null;
  size: "small" | "large";
}

const benefits: Benefit[] = [
  {
    id: "bonus",
    title: "Bônus de aniversário",
    description: "R$2.000 de presente para você jogar no mês do seu aniversário.",
    button: null,
    size: "small",
  },
  {
    id: "promocoes",
    title: "Promoções personalizadas",
    description:
      "Bônus maiores e ofertas criadas com base no seu perfil de jogo.",
    icon: "/golden-present.png",
    button: {
      text: "Ver minhas Promoções",
      variant: "outline",
    },
    size: "large",
  },
  {
    id: "competicoes",
    title: "Competições privadas",
    description: "Torneios e prêmios criados só para membros Sportingbet ONE.",
    button: {
      text: "Falar com meu Gerente",
      variant: "outline",
    },
    size: "small",
  },
  {
    id: "cashback",
    title: "Cashback semanal",
    description: "Jogue mais. Ganhe mais. Parte do valor volta pra você.",
    icon: "/golden-coin.png",
    button: {
      text: "Ver meu Cashback",
      variant: "primary",
    },
    size: "large",
  },
  {
    id: "atendimento",
    title: "Atendimento dedicado",
    description:
      "Um gerente de conta exclusivo para te acompanhar sempre que precisar.",
    icon: "/golden-headset.png",
    button: {
      text: "Falar com meu Gerente",
      variant: "outline",
    },
    size: "large",
  },
  {
    id: "eventos",
    title: "Eventos e presentes exclusivos",
    description:
      "De viagens internacionais a surpresas entregues na sua casa.",
    icon: "/golden-bag.png",
    button: {
      text: "Falar com meu Gerente",
      variant: "outline",
    },
    size: "large",
  },
  {
    id: "viva",
    title: "Viva os grandes jogos ao vivo",
    description:
      "Camarote Sportingbet ONE no Maracanã e convites para curtir Palmeiras, Libertadores, Sul-Americana e NBA.",
    icon: "/golden-ball.png",
    button: {
      text: "Falar com meu Gerente",
      variant: "outline",
    },
    size: "large",
  },
];

// Explicit orders to match pixel-perfect prototypes
const MOBILE_ORDER: Benefit["id"][] = [
  "atendimento",
  "bonus",
  "cashback",
  "competicoes",
  "viva",
  "eventos",
  "promocoes",
];

const DESKTOP_LAYOUT: { left: Benefit["id"][]; middle: Benefit["id"][]; right: Benefit["id"][] } = {
  left: ["bonus", "promocoes", "competicoes"],
  middle: ["cashback", "eventos"],
  right: ["atendimento", "viva"],
};

function getBenefitById(id: Benefit["id"]): Benefit {
  const found = benefits.find((b) => b.id === id);
  if (!found) {
    return {
      id,
      title: "",
      description: "",
      icon: "",
      button: null,
      size: "small",
    };
  }
  return found;
}

const allBenefits: { text: string; icon?: string | IconDefinition }[] = [
    { text: "Atendimento dedicado e exclusivo", icon: faHeadset },
    { text: "Bônus mais altos e personalizados", icon: "/badge.svg" },
    { text: "Camarote ONE no Maracanã", icon: "/VIP Cabin.svg" },
    { text: "R$ 2.000 de bônus no mês do seu aniversário", icon: faCakeCandles },
    { text: "Competições exclusivas ONE", icon: "/Tournaments.svg" },
    { text: "Ingressos para jogos do Palmeiras no Allianz Parque", icon: "/Soccer.svg" },
    { text: "Cashback semanal", icon: "/Processing Payment.svg" },
    { text: "Torneios privados de Cassino", icon: "/Roulette.svg" },
    { text: "Ingressos para Libertadores e Sul-Americana em toda a América do Sul", icon: "/CONMEBOL.svg" },
    { text: "Acesso antecipado a jogos e promoções", icon: faBullhorn },
    { text: "Convites para eventos Sportingbet ONE", icon: "/invite.svg" },
    { text: "Ingressos para jogos da NBA nos Estados Unidos", icon: "/Basketball.svg" },
    { text: "Presentes exclusivos entregues na sua casa", icon: faGifts },
];

export function Benefits() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="beneficios"
      aria-label="Benefícios"
      className="py-12 sm:py-16 lg:py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132241] to-[#0d172b] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-brand-gold sm:text-4xl lg:text-5xl">
            BENEFÍCIOS SPORTINGBET ONE
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-300">
            <strong>ONE</strong> é sobre enxergar valor na experiência, não apenas no resultado.
            Aqui, cada detalhe importa. Cada convite fala por si. Cada
            benefício é <strong>reconhecimento</strong>.
          </p>
        </header>

        {/* Desktop layout (3 columns) matches prototype placement */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          <div className="flex flex-col space-y-6">
            {DESKTOP_LAYOUT.left.map((id) => (
              <BenefitCard key={id} item={getBenefitById(id)} />
            ))}
          </div>
          <div className="flex flex-col space-y-6">
            {DESKTOP_LAYOUT.middle.map((id) => (
              <BenefitCard key={id} item={getBenefitById(id)} />
            ))}
          </div>
          <div className="flex flex-col space-y-6">
            {DESKTOP_LAYOUT.right.map((id) => (
              <BenefitCard key={id} item={getBenefitById(id)} />
            ))}
          </div>
        </div>

        {/* Mobile layout (stacked) in specific order */}
        <div className="lg:hidden flex flex-col space-y-6">
          {MOBILE_ORDER.map((id) => (
            <BenefitCard key={id} item={getBenefitById(id)} align="left" />
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-slate-200 transition-colors"
                aria-expanded={isExpanded}
            >
                Conferir todos os benefícios ONE
                <ChevronDown className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
        </div>

        {isExpanded && (
            <div className="mt-10 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {allBenefits.map((item) => (
                        <div key={item.text} className="flex items-center ml-3 md:ml-0 gap-4">
                            <div className="relative h-10 w-10 shrink-0 border-brand-gold border rounded-full flex items-center justify-center">
                                {item.icon && (typeof item.icon === 'string' 
                                    ? <Image src={item.icon} alt="" sizes="16px" width={16} height={16} className="object-contain" />
                                    : <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-brand-gold" />
                                )}
                            </div>
                            <span className="text-slate-200">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </section>
  );
}

function BenefitCard({ item, align = "center" }: { item: Benefit; align?: "left" | "center" }) {
  const isLeft = align === "left";
  return (
    <div
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 flex md:flex-col items-center ${
        isLeft ? "text-left" : "text-center"
      } h-full shadow-xl`}
    >
      {item.icon && <div className={`relative ${item.size === 'small' ? 'h-16 w-16' : 'min-w-[58px] min-h-[58px] self-start mt-2'}`}>
        <Image src={item.icon} alt="" fill sizes={item.size === 'small' ? '64px' : '80px'} className="object-contain min-w-[58px] min-h-[58px] " />
      </div>}
      <div className={`flex flex-col ${isLeft ? 'items-start ml-3 md:ml-0' : 'items-center'}`}>
        <h3 className={cn("text-2xl font-bold text-brand-gold", item.icon && "mt-2")}>{item.title}</h3>
        <p className="mt-2 font-medium text-slate-300 flex-grow">{item.description}</p>
        {item.button && (
          <Button
            variant={item.button.variant === 'primary' ? 'gold' : 'ghost'}
            className={`mt-6 ${isLeft ? 'w-full' : 'w-full max-w-xs'} ${
              item.button.variant === 'primary'
                ? 'bg-brand-gold   hover:bg-brand-gold/90 text-shadow-gray-950 font-bold'
                : 'border border-white text-white hover:bg-white/10 font-bold'
            }`}
          >
            {item.button.text}
          </Button>
        )}
      </div>
    </div>
  )
}


