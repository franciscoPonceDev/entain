interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export function YouTubeEmbed({ videoId, title = "Vídeo" }: YouTubeEmbedProps) {
  const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black pt-[56.25%]">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={src}
        title={title}
        aria-label={title}
        tabIndex={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}


