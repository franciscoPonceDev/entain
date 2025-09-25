"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faGift, faUserTie, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

const quickLinks = [
  { href: "#beneficios", label: "Benefícios ONE", icon: faTrophy, sectionId: "beneficios" },
  { href: "#promocoes", label: "Promoções Exclusivas", icon: faGift, sectionId: "promocoes" },
  { href: "#meu-gerente", label: "Meu Gerente", icon: faUserTie, sectionId: "meu-gerente" },
  { href: "#about", label: "Sobre o Clube", icon: faCircleInfo, sectionId: "about" },
];

export function QuickLinksNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      const anchorY = (navRef.current?.getBoundingClientRect().bottom ?? 65) + 1;
      let currentSection: string | null = null;
      for (const link of quickLinks) {
        const element = document.getElementById(link.sectionId);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= anchorY && rect.bottom >= anchorY) {
          currentSection = link.sectionId;
          break;
        }
      }
      if (!currentSection) {
        const atPageBottom =
          Math.ceil(window.innerHeight + window.scrollY) >=
          document.documentElement.scrollHeight;
        if (atPageBottom) {
          const last = quickLinks[quickLinks.length - 1];
          if (last) currentSection = last.sectionId;
        }
      }
      setActiveSection(currentSection);
    }

    // Use IntersectionObserver only to trigger recalculation quickly on layout/visibility changes
    const observer = new IntersectionObserver(
      () => {
        handleScroll();
      },
      {
        root: null,
        rootMargin: "-65px 0px 0px 0px",
        threshold: [0, 0.01, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    const observed: HTMLElement[] = [];
    for (const link of quickLinks) {
      const el = document.getElementById(link.sectionId);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    }

    // Scroll listener remains as a fallback and for initial sync
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      for (const el of observed) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  function handleLinkClick(event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
    event.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const targetTop = sectionElement.getBoundingClientRect().top + window.scrollY;
      const navBottom = navRef.current?.getBoundingClientRect().bottom ?? 65;
      const top = targetTop - navBottom + 12; // small extra offset so heading is visible

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }

  return (
    <nav
      ref={navRef}
      aria-label="Atalhos do Clube ONE"
      className="sticky top-16 z-30 py-2" // top-16 = 64px
    >
      <LayoutGroup id="quick-links">
        <ul className="mx-auto flex w-fit max-w-4xl items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-2 py-2 text-sm text-slate-100 shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/50">
          {quickLinks.map((item) => (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.sectionId)}
                className={cn(
                  "group relative inline-flex items-center gap-2 rounded-full px-3 py-2 outline-none transition-colors duration-150 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand-gold/50 md:px-4 overflow-hidden"
                )}
                aria-label={item.label}
                tabIndex={0}
              >
                {activeSection === item.sectionId && (
                  <motion.div
                    layoutId="active-quick-link"
                    className="absolute inset-0 rounded-full bg-white/10 pointer-events-none"
                    transition={{ type: "spring", stiffness: 700, damping: 28, mass: 0.4 }}
                  />
                )}
                {item.sectionId === "beneficios" || item.sectionId === "meu-gerente" ? (
                  <span
                    className={cn(
                      "relative z-10 h-4 w-4 transition-colors group-hover:bg-white",
                      activeSection === item.sectionId ? "bg-brand-gold" : "bg-white"
                    )}
                    style={{
                      WebkitMaskImage:
                        item.sectionId === "beneficios"
                          ? "url(/trophy-icon.svg)"
                          : "url(/headset-icon.svg)",
                      maskImage:
                        item.sectionId === "beneficios"
                          ? "url(/trophy-icon.svg)"
                          : "url(/headset-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      display: "inline-block",
                    }}
                    aria-hidden
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={cn(
                      "relative z-10 h-4 w-4 text-slate-300 transition-colors group-hover:text-white",
                      activeSection === item.sectionId ? "text-brand-gold" : "text-white"
                    )}
                  />
                )}
                {/* Mobile-only animated label reveal when active */}
                <div
                  className={cn(
                    "relative z-10 grid overflow-hidden transition-[grid-template-columns,opacity,margin-left] duration-200 ease-out md:hidden",
                    activeSection === item.sectionId
                      ? "grid-cols-[1fr] opacity-100 ml-2"
                      : "grid-cols-[0fr] opacity-0 ml-0"
                  )}
                  aria-hidden={activeSection !== item.sectionId}
                >
                  <span className="min-w-0 whitespace-nowrap text-xs">{item.label}</span>
                </div>
                {/* Desktop label always visible */}
                <span className="relative z-10 hidden whitespace-nowrap md:inline">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </LayoutGroup>
    </nav>
  );
}
