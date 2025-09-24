"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50dvh] max-w-2xl flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-bold text-white">Algo deu errado</h1>
      <p className="text-slate-300">Tente novamente. Se o problema persistir, entre em contato com o suporte.</p>
      <Button variant="gold" onClick={() => reset()}>Recarregar</Button>
    </div>
  );
}


