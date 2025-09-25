import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

interface FooterColumn {
  title: string;
  items: string[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Esportes",
    items: [
      "Apostas Esportivas",
      "Apostas ao Vivo",
      "Futebol",
      "Basquete",
      "Tênis",
    ],
  },
  {
    title: "Jogos Online",
    items: [
      "Cassino Online",
      "Cassino ao Vivo",
      "Slots Caça-Niqueis",
      "Poker Online",
      "Bingo Online",
    ],
  },
  {
    title: "Promoções",
    items: [
      "Promoções Apostas Esportivas",
      "Promoções Cassino",
      "Promoções Bingo",
      "Promoções Poker",
    ],
  },
  {
    title: "Links Úteis",
    items: [
      "Blog",
      "Baixar APP sportingbet",
      "Contato",
      "Sitemap",
      "Definições de cookies",
      "Política de Uso",
      "Equidade do Sistema",
    ],
  },
  {
    title: "Quem Somos",
    items: [
      "Sobre Nós",
      "Investidores",
      "Carreiras",
      "Termos e Condições Gerais",
      "Jogo Responsável",
    ],
  },
];

function Column({ title, items }: FooterColumn) {
  return (
    <section aria-labelledby={`footer-${title}`}>
      <h3 id={`footer-${title}`} className="mb-3 text-base font-semibold text-white">
        {title}
      </h3>
      <ul role="list" className="space-y-2 text-sm text-slate-200">
        {items.map((text) => (
          <li key={`${title}-${text}`} className="leading-6">
            <a className="cursor-default focus:outline-none decoration-none hover:underline" aria-label={text} tabIndex={0}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Rodapé"
      className="mt-16 border-t border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50"
    >
      {/* Top: columns */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((c) => (
            <Column key={c.title} title={c.title} items={c.items} />
          ))}
        </div>
      </div>

      {/* Middle: sponsor + social over glass/darker row matching About's lighter rows */}
      <div className="border-t border-white/10 bg-white/[0.04] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6">
          <p className="text-base font-semibold text-white">Patrocinador Oficial</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8 sm:gap-10">
            <Image
              src="/libertadores.png"
              alt="CONMEBOL Libertadores"
              width={103}
              height={80}
              className="h-14 w-auto sm:h-16"
              loading="lazy"
            />
            <Image
              src="/sudamerica.png"
              alt="CONMEBOL Sudamericana"
              width={102}
              height={80}
              className="h-14 w-auto sm:h-16"
              loading="lazy"
            />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-10">
            <Image
              src="/18+.png"
              alt="18+"
              width={40}
              height={40}
              className="h-10 w-auto"
              loading="lazy"
            />
            <Image
              src="/Responsible Gaming.png"
              alt="Responsible Gaming"
              width={40}
              height={40}
              className="h-10 w-auto"
              loading="lazy"
            />
            
          </div>

          <p className="mt-8 text-base font-semibold text-white">Social Media</p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <button type="button" aria-label="Facebook" tabIndex={0} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-slate-300 hover:border-white/40 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Instagram" tabIndex={0} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-slate-300 hover:border-white/40 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
            </button>
            <button type="button" aria-label="X" tabIndex={0} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-slate-300 hover:border-white/40 hover:text-white">
              <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
            </button>
            <button type="button" aria-label="YouTube" tabIndex={0} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-slate-300 hover:border-white/40 hover:text-white">
              <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom: legal + meta */}
      <div className="mx-auto max-w-7xl px-4 py-8 text-center text-xs text-slate-300 sm:px-6">
        <p className="mx-auto max-w-5xl leading-6">
          Sportingbet tem operação por ElectraWorks Limited (Suite 6, Atlantic Suites, Gibraltar), empresa licenciada pelo Governo
          de Gibraltar com números de Licença 050 and 051
        </p>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-slate-400 sm:flex-row">
          <p className="order-2 sm:order-1">Copyright © {currentYear}</p>
          <p className="order-1 sm:order-2">Hora local: 00:00</p>
        </div>
      </div>
    </footer>
  );
}

