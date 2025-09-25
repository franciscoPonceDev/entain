"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useManagerModal } from "@/components/manager-modal-provider";
import { memo, useCallback, useId, useMemo, useState, useLayoutEffect, useEffect, useRef, type ReactNode } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string | ReactNode;
}

const PlusMinus = memo(function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className="relative inline-flex h-5 w-5 items-center justify-center"
    >
      <span className="absolute h-0.5 w-4 rounded bg-brand-gold"></span>
      <span
        className={cn(
          "absolute h-4 w-0.5 rounded bg-brand-gold transition-transform",
          open ? "scale-0" : "scale-100"
        )}
      ></span>
    </span>
  );
});

const FaqRow = memo(function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  const contentId = `${item.id}-content`;
  const handleClick = useCallback(() => onToggle(item.id), [item.id, onToggle]);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (isOpen) {
      setMeasuredHeight(el.scrollHeight);
      return;
    }
    setMeasuredHeight(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !contentRef.current) return;
    const el = contentRef.current;
    const observer = new ResizeObserver(() => {
      setMeasuredHeight(el.scrollHeight);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div className="py-4">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          id={item.id}
          onClick={handleClick}
          className="flex w-full items-center justify-between gap-6 py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
        >
          <span className="text-base sm:text-lg font-semibold leading-snug">
            {item.question}
          </span>
          <PlusMinus open={isOpen} />
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={item.id}
        aria-hidden={!isOpen}
        className="overflow-hidden transition-[height,opacity] duration-300 ease-out [will-change:height,opacity]"
        style={{ height: measuredHeight, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={contentRef}>
          <p className="pt-2 text-sm sm:text-base text-slate-200">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
});

export function Faq() {
  const baseId = useId();
  const { open } = useManagerModal();
  const items: FaqItem[] = useMemo(() => [
    {
      id: `${baseId}-q1`,
      question: "Como mantenho meu status de Sportingbet ONE?",
      answer:
        "Mantenha-se ativo, com conta verificada e histórico de jogo consistente. Benefícios e elegibilidade são revisados periodicamente.",
    },
    {
      id: `${baseId}-q2`,
      question: "Como falar com meu Gerente Sportingbet ONE?",
      answer: (
        <>
          As informações de contato do seu gerente estão disponíveis {""}
          <Link
            href="#meu-gerente"
            onClick={(e) => { e.preventDefault(); open(); }}
            className="text-brand-gold underline-offset-4 hover:underline"
          >
            aqui
          </Link>.
        </>
      ),
    },
    {
      id: `${baseId}-q3`,
      question:
        "Onde posso solicitar ingressos para jogos do Palmeiras, CONMEBOL, NBA ou camarote do Maracanã?",
      answer:
        "As solicitações são feitas diretamente com o seu Gerente ONE, com antecedência e sujeitas à disponibilidade e critérios de elegibilidade.",
    },
    {
      id: `${baseId}-q4`,
      question: "Como funciona o bônus de aniversário?",
      answer:
        "Membros ativos recebem um bônus especial no mês do aniversário. O valor é personalizado e pode chegar a R$ 2.000, conforme regras vigentes.",
    },
    {
      id: `${baseId}-q5`,
      question: "Como posso me tornar Sportingbet ONE?",
      answer:
        "O programa é por convite. A participação considera histórico de atividade, relacionamento e análise de compliance.",
    },
    {
      id: `${baseId}-q6`,
      question: "Existe algum custo adicional para ser Sportingbet ONE?",
      answer:
        "Não há taxa de adesão. Benefícios e convites são concedidos sem custo adicional, observando termos e condições.",
    },
    {
      id: `${baseId}-q7`,
      question: "Posso convidar amigos para serem Sportingbet ONE?",
      answer:
        "Envie a indicação ao seu Gerente ONE. A equipe avaliará o perfil e poderá entrar em contato se houver elegibilidade.",
    },
  ], [baseId, open]);

  const [openId, setOpenId] = useState<string | null>(() => `${baseId}-q2`);

  const handleToggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <section
      id="faq"
      aria-label="Perguntas frequentes"
      className="relative py-12 sm:py-16 lg:py-24 text-white"
    >
      

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <header className="mb-6 sm:mb-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tighter text-brand-gold">
            PERGUNTAS FREQUENTES
          </h2>
        </header>

        <div className="divide-y divide-white/20">
          {items.map((item) => (
            <FaqRow key={item.id} item={item} isOpen={openId === item.id} onToggle={handleToggle} />
          ))}
        </div>

        <div className="mt-8 border-t border-white/20 pt-6">
          <div className="flex flex-col items-start gap-3">
			<div className="flex gap-3">
				      <Image src="/How to play.svg" alt="how to play" width={24} height={24} />
              <p className="font-bold text-brand-gold">Ainda tem dúvidas?</p>
            </div>
              <p className="mt-1 max-w-3xl text-sm text-slate-300">
                Entre em contato com o seu gerente, que está pronto para ajudar você a aproveitar ao máximo seus benefícios.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}


