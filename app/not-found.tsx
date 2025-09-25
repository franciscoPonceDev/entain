import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50dvh] max-w-2xl flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-bold text-white">Página não encontrada</h1>
      <p className="text-slate-300">A página que você procura pode ter sido removida ou não existe.</p>
      <Link href="/" className="text-brand-gold underline-offset-4 hover:underline">Voltar para a página inicial</Link>
    </div>
  );
}
