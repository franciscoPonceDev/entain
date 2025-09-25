import * as React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFutbol,
  faTicket,
  faGift,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  { href: "#home", label: "Início", icon: faHouse },
  { href: "#esportes", label: "Esportes", icon: faFutbol },
  { href: "#apostas", label: "Apostas", icon: faTicket },
  { href: "#promocoes", label: "Promoções", icon: faGift },
  { href: "#minha-conta", label: "Conta", icon: faUser },
];

export function BottomNav() {
  return (
    <nav
      aria-label="Navegação inferior"
      className="fixed bottom-0 left-0 right-0 z-40 mx-auto w-full border-t border-white/10 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-3 py-2">
        {items.map((item) => (
          <li key={item.href} className="flex-1">
            <Link
              href={item.href}
              className="group flex flex-col items-center gap-1 rounded-md px-2 py-1.5 text-center text-[11px] font-medium text-slate-300 outline-none ring-brand-gold/50 focus-visible:ring-2"
              aria-label={item.label}
              tabIndex={0}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="h-5 w-5 text-brand-gold transition-colors group-hover:text-amber-200"
              />
              <span className="leading-tight">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


