import Image from "next/image";

export function Hero() {
  return (
    <section 
      id="home" 
      aria-label="Hero" 
      className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132241] to-[#0d172b] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-2 sm:px-6 sm:pb-16 lg:pt-12">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="space-y-4 text-left sm:space-y-6 lg:text-left lg:translate-x-36">
            <Image
              src="/Logo.svg"
              alt="Sportingbet ONE"
              width={140}
              height={15}
              className="hidden md:inline-block mx-auto lg:mx-0"
            />
            <h1 className="text-[44px] w-11/12 font-extrabold leading-none text-brand-gold drop-shadow-sm sm:text-5xl lg:text-7xl tracking-tighter">
              O JOGO ALÉM <br/>DO JOGO.
            </h1>
            <p className="max-w-xl w-11/12 text-slate-200/90  sm:text-xl">
              Você agora é parte do <span className="font-semibold text-white">Sportingbet ONE</span>:<br/> o clube feito para
              quem sabe que <br/><span className="font-semibold text-white">experiências valem tanto quanto resultado</span>.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-2xl lg:-translate-y-16 lg:translate-x-8 lg:scale-95">
            <div className="relative aspect-[16/12] w-full top-1">
              <Image
                src="/ball-cards+dot.png"
                alt="Bola dourada e cartas representando o clube ONE"
                fill
                sizes="(max-width: 1024px) 90vw, 44vw"
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


