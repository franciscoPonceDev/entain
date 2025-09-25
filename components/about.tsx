import Image from "next/image";
import type { ReactNode } from "react";

const benefits = [
  "R$ 2.000 de bônus no mês do seu aniversário",
  "Cashback semanal",
  "Atendimento dedicado e exclusivo",
  "Bônus mais altos e personalizados",
  "Competições exclusivas ONE",
  "Torneios privados de Cassino",
  "Acesso antecipado a jogos e promoções",
  "Convites para eventos Sportingbet ONE",
  "Presentes exclusivos entregues na sua casa",
  "Camarote ONE no Maracanã",
  "Ingressos para jogos do Palmeiras",
  "Ingressos para jogos da Libertadores e Sul-Americana",
  "Ingressos para jogos da NBA nos Estados Unidos",
];

function CancelIcon() {
  return (
    <Image
      src="/Cancelled.svg"
      alt="Não incluído"
      width={24}
      height={24}
      className="inline-block min-w-6 min-h-6"
    />
  );
}

function WinIcon() {
  return (
    <Image
      src="/Win.svg"
      alt="Incluído"
      width={24}
      height={24}
      className="inline-block min-w-6 min-h-6"
    />
  );
}

function emphasizeOne(text: string): ReactNode {
  const parts = text.split(/(Sportingbet ONE|\bONE\b)/g);
  return parts.map((part, index) => {
    if (part === "ONE" || part === "Sportingbet ONE") return <strong key={index}>{part}</strong>;
    return <span key={index}>{part}</span>;
  });
}

export function About() {
  return (
    <section
      id="about"
      aria-label="Sobre o Sportingbet ONE"
      className="py-12 sm:py-16 lg:py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="mb-8 sm:mb-10 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tighter text-brand-gold">
            SOBRE O SPORTINGBET ONE
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-200">
            <strong>ONE</strong> não é pra todo mundo. É um <strong>clube exclusivo</strong>, feito pra quem não quer mais do mesmo.
            Pra quem valoriza o detalhe, o cuidado, a experiência feita sob medida. Aqui, o atendimento e as
            experiências são pensados pra você. Convites únicos, criados pra <strong>quem joga diferente</strong>.
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200">
            <strong>ONE</strong> é sobre reconhecer quem faz parte. Sobre estar mais perto. Sobre viver o inusitado sem medo,
            porque você sabe que <strong>a emoção não tem replay</strong>. O jogo além do jogo não é pra todos. <strong>É pra você.</strong>
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-gradient-to-b from-[#0c2546]/80 to-[#0a1d39]/80 backdrop-blur-sm">
          <table className="w-full text-left text-sm sm:text-base text-slate-200">
            <caption className="sr-only">Comparativo Sportingbet vs Sportingbet ONE</caption>
            <thead className="bg-transparent text-slate-300">
              <tr>
                <th scope="col" className="px-4 py-3">Benefício</th>
                <th scope="col" className="px-4 py-3 text-center">
                  <span className="sr-only">sportingbet</span>
                  <div className="flex justify-center">
                    <Image
                      src="/Logo container.svg"
                      alt="sportingbet"
                      width={110}
                      height={40}
                      className="hidden sm:block h-8 w-2/3"
                    />
                    <Image
                      src="/Sb.svg"
                      alt="sportingbet"
                      width={32}
                      height={16}
                      className="sm:hidden h-6 w-auto"
                    />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-center">
                  <span className="sr-only">sportingbet ONE</span>
                  <div className="flex justify-center">
                    <Image
                      src="/Logo One.svg"
                      alt="sportingbet ONE"
                      width={110}
                      height={40}
                      className="hidden sm:block h-8 w-2/3"
                    />
                    <Image
                      src="/SB ONE.svg"
                      alt="sportingbet ONE"
                      width={48}
                      height={16}
                      className="sm:hidden h-6 w-auto"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((text) => (
                <tr key={`row-${text}`} className="odd:bg-white/[0.06] even:bg-white/[0.03]">
                  <td className="px-4 py-4 align-top">{emphasizeOne(text)}</td>
                  <td className="px-4 py-4 text-center"><CancelIcon /></td>
                  <td className="px-4 py-4 text-center"><WinIcon /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
