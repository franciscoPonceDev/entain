export function BackgroundCircles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <span
        className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-[linear-gradient(135deg,#0D3A6B_0%,#002041_100%)] opacity-40 blur-3xl mix-blend-screen"
      />
      <span
        className="absolute right-[-18%] top-[25%] h-[600px] w-[600px] rounded-full bg-[linear-gradient(135deg,#0D3A6B_0%,#002041_100%)] opacity-35 blur-3xl mix-blend-screen"
      />
      <span
        className="absolute bottom-[-20%] left-[15%] h-[700px] w-[700px] rounded-full bg-[linear-gradient(135deg,#0D3A6B_0%,#002041_100%)] opacity-30 blur-3xl mix-blend-screen"
      />
    </div>
  );
}


