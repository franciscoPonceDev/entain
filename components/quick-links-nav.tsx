"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faGift, faUserTie, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const quickLinks = [
  { href: "#apostas", label: "Benefícios ONE", icon: faTrophy, sectionId: "apostas" },
  { href: "#promocoes", label: "Promoções Exclusivas", icon: faGift, sectionId: "promocoes" },
  { href: "#meu-gerente", label: "Meu Gerente", icon: faUserTie, sectionId: "meu-gerente" },
  { href: "#sobre-o-clube", label: "Sobre o Clube", icon: faCircleInfo, sectionId: "features" },
];

export function QuickLinksNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    function handleScroll() {
      let currentSection: string | null = null;

      for (const link of quickLinks) {
        const element = document.getElementById(link.sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 65px offset to account for the sticky header + nav bar height
          if (rect.top <= 65 && rect.bottom >= 65) {
            currentSection = link.sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLinkClick(event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
    event.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const offset = 65;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = sectionElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <nav
      aria-label="Atalhos do Clube ONE"
      className="sticky top-16 z-30 py-2" // top-16 = 64px
    >
      <ul className="mx-auto flex w-fit max-w-4xl items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-2 py-2 text-sm text-slate-100 shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/50">
        {quickLinks.map((item) => (
          <li key={item.href} className="relative">
            <Link
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.sectionId)}
              className={cn(
                "group relative z-10 inline-flex items-center gap-2 rounded-full px-3 py-2 outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand-gold/50 md:px-4"
              )}
              aria-label={item.label}
              tabIndex={0}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={cn(
                  "h-4 w-4 text-slate-300 transition-colors group-hover:text-white",
                  activeSection === item.sectionId ? "text-brand-gold" : "text-white"
                )}
              />
              <span className="hidden whitespace-nowrap md:inline">{item.label}</span>
            </Link>
            {activeSection === item.sectionId && (
              <motion.div
                layoutId="active-quick-link"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
