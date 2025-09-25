import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGift, faTrophy, faFutbol, faTicket } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const tabs = [
  { href: "#esportes", label: "Esportes", icon: faFutbol },
  { href: "#apostas", label: "Apostas", icon: faTicket },
  { href: "#promocoes", label: "Promoções", icon: faTrophy },
  { href: "#minha-conta", label: "Minha Conta", icon: faUser },
];

export function Header() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="#" aria-label="Sportingbet ONE home" tabIndex={0}>
            <Image src="/Logo.svg" alt="Sportingbet ONE" width={120} height={13} priority />
          </Link>
          <nav aria-label="Principal" className="hidden gap-1 md:flex">
            {tabs.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group" aria-label={t.label} tabIndex={0}
              >
                <Button variant="ghost" className="gap-2 rounded-full px-4 py-2 text-sm font-medium hover:text-white">
                  <FontAwesomeIcon icon={t.icon} className="h-4 w-4 text-brand-gold" />
                  <span>{t.label}</span>
                </Button>
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button variant="gold" size="sm" aria-label="Ver mais promoções" tabIndex={0}>
              Ver promoções
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


