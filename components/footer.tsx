import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const links = [
  { href: "#suporte", label: "Suporte" },
  { href: "#privacidade", label: "Política de Privacidade" },
  { href: "#termos", label: "Termos de Uso" },
];

export function Footer() {
  return (
    <footer aria-label="Rodapé" className="mt-16 border-t border-white/10 bg-slate-900/40 py-10 pb-24 md:pb-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} sportingbet ONE</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200" aria-label="Links do rodapé">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:underline" aria-label={l.label} tabIndex={0}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-start gap-4 md:justify-end">
          <a href="#" aria-label="Facebook" tabIndex={0} className="text-slate-300 hover:text-white">
            <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" tabIndex={0} className="text-slate-300 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
          </a>
          <a href="#" aria-label="X" tabIndex={0} className="text-slate-300 hover:text-white">
            <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
          </a>
          <a href="#" aria-label="YouTube" tabIndex={0} className="text-slate-300 hover:text-white">
            <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}


