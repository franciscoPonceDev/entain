export default function Loading() {
  return (
    <div className="mx-auto grid min-h-[50dvh] max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-40 animate-pulse rounded-xl bg-white/5" />
      ))}
    </div>
  );
}


