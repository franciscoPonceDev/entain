import Image from "next/image";

const items = [
  "Acesse transmissões ao vivo",
  "Bônus e ofertas exclusivas",
  "Cashback semanal",
  "Atendimento prioritário",
  "Convites para eventos",
  "Experiências únicas no estádio",
  "Descontos em parceiros",
  "Melhor experiência no app",
];

export function Features() {
  return (
    <section 
      id="features" 
      aria-label="Recursos" 
      className="py-12 sm:py-16 lg:py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132241] to-[#0d172b] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl tracking-tighter">Vantagens que fazem a diferença</h2>
        </header>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((text) => (
            <li key={text} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
              <Image src="/Vector.svg" alt="check" width={18} height={18} className="mt-1" />
              <span className="text-slate-200">{text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm text-slate-200">
            <caption className="sr-only">Comparativo Sportingbet vs Sportingbet ONE</caption>
            <thead className="bg-slate-900/50 text-slate-300">
              <tr>
                <th className="px-4 py-3">Benefício</th>
                <th className="px-4 py-3">Sportingbet</th>
                <th className="px-4 py-3">Sportingbet ONE</th>
              </tr>
            </thead>
            <tbody>
              {items.map((text) => (
                <tr key={`row-${text}`} className="odd:bg-white/5 even:bg-white/10">
                  <td className="px-4 py-3">{text}</td>
                  <td className="px-4 py-3">—</td>
                  <td className="px-4 py-3">✔</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


