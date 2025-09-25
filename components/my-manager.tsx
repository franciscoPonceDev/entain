"use client";

import { ManagerCard } from "@/components/my-manager-card";

export function MyManager() {
  return (
    <section
      id="meu-gerente"
      aria-label="Meu Gerente"
      className="relative py-12 sm:py-16 lg:py-24 text-white"
    >
      <div className="relative z-10 mx-auto max-w-[900px] px-4 md:px-0">
        <ManagerCard />
      </div>
    </section>
  );
}


