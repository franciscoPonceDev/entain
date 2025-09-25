'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { YouTubeEmbed } from './youtube-embed'

const desktopImages = [
  {
    src: '/Pic Frame (5).png',
    alt: 'People at a sporting event bar',
    caption: '',
    className: 'absolute rounded-lg aspect-[166/281] w-[11.53vw] top-[-10.42vw] left-[-7.64vw] min-[1440px]:w-[166px] min-[1440px]:h-[281px] min-[1440px]:top-[-150px] min-[1440px]:left-[-110px]'
  },
  {
    src: '/Pic Frame (1).png',
    alt: 'Final Libertadores 2024',
    caption: 'Final Libertadores • 2024',
    className: 'absolute rounded-lg aspect-[216/284] w-[15vw] top-[-4.86vw] left-[5.21vw] min-[1440px]:w-[216px] min-[1440px]:h-[284px] min-[1440px]:top-[-70px] min-[1440px]:left-[75px]'
  },
  {
    src: '/Pic Frame.png',
    alt: 'Sportingbet Party',
    caption: 'Sportingbet Party • Guests Only',
    className: 'absolute rounded-lg aspect-[353/265] w-[24.51vw] top-[16.67vw] left-[-3.47vw] min-[1440px]:w-[353px] min-[1440px]:h-[265px] min-[1440px]:top-[240px] min-[1440px]:left-[-50px]'
  },
  {
    src: '/Pic Frame (3).png',
    alt: 'NBA House',
    caption: 'NBA House',
    className: 'absolute rounded-lg aspect-[245/252] w-[17.01vw] top-[-13.19vw] right-[-4.17vw] min-[1440px]:w-[245px] min-[1440px]:h-[252px] min-[1440px]:top[ -190px] min-[1440px]:right-[-60px]'
  },
  {
    src: '/Pic Frame (2).png',
    alt: 'Libertadores Buenos Aires',
    caption: 'Libertadores Buenos Aires • 2024',
    className: 'absolute rounded-lg aspect-[220/259] w-[15.28vw] top-[4.86vw] right-[5.21vw] min-[1440px]:w-[220px] min-[1440px]:h-[259px] min-[1440px]:top-[70px] min-[1440px]:right-[75px]'
  },
  {
    src: '/Pic Frame (4).png',
    alt: 'Man celebrating at a stadium',
    caption: '',
    className: 'absolute rounded-lg aspect-[195/268] w-[13.54vw] top-[12.85vw] right-[-9.03vw] min-[1440px]:w-[195px] min-[1440px]:h-[268px] min-[1440px]:top-[185px] min-[1440px]:right-[-130px]'
  }
]


function ImageCard({ src, alt, className }: { src: string, alt: string, className: string }) {
    return (
        <div className={cn("relative", className)}>
             <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    )
}

function VideoPlayer({ isPlaying, onPlay, variant = 'desktop' }: { isPlaying: boolean, onPlay: () => void, variant?: 'desktop' | 'mobile' }) {
    const thumbShadow = variant === 'desktop' ? 'shadow-2xl shadow-yellow-400/20' : '';
    const playIconSize = variant === 'desktop' ? 'w-20 h-20 lg:w-24 lg:h-24' : 'w-16 h-16';

    if (!isPlaying) {
        return (
            <div className="relative group cursor-pointer w-full h-full" onClick={onPlay}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                    <PlayCircle className={cn("text-white opacity-90 group-hover:opacity-100 transition-opacity", playIconSize)} />
                </div>
            </div>
        )
    }

    return (
        <div className="relative aspect-video w-full">
            <YouTubeEmbed videoId="d1zfAphCohc" className={cn("w-full h-full")} />
        </div>
    )
}

function MobileCarousel({ images }: { images: { src: string, alt: string }[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const isUserInteractingRef = useRef(false)
  const rafIdRef = useRef<number | null>(null)
  // no resume timer: resume immediately after hover/interaction ends

  const startAutoScroll = () => {
    isUserInteractingRef.current = false
    if (rafIdRef.current) return
    const step = () => {
      const container = containerRef.current
      const track = trackRef.current
      if (container && track && !isUserInteractingRef.current) {
        const loopWidth = track.scrollWidth / 2
        if (loopWidth > 0) {
          container.scrollLeft += 0.25
          if (container.scrollLeft >= loopWidth) container.scrollLeft -= loopWidth
        }
      }
      rafIdRef.current = window.requestAnimationFrame(step)
    }
    rafIdRef.current = window.requestAnimationFrame(step)
  }

  const stopAutoScroll = () => {
    if (!rafIdRef.current) return
    window.cancelAnimationFrame(rafIdRef.current)
    rafIdRef.current = null
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Always auto slide; pause only on hover/interaction
    startAutoScroll()
    return () => stopAutoScroll()
  }, [])

  const handleInteractionStart = () => {
    isUserInteractingRef.current = true
  }

  const handleInteractionEnd = () => {
    startAutoScroll()
  }

  const handleScroll = () => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return
    const loopWidth = track.scrollWidth / 2
    if (loopWidth <= 0) return
    if (container.scrollLeft >= loopWidth) container.scrollLeft -= loopWidth
    if (container.scrollLeft <= 0) container.scrollLeft += loopWidth
  }

  const duplicated = [...images, ...images]

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Featured experiences carousel"
      className="relative mt-4 w-full overflow-x-auto"
      onPointerDown={handleInteractionStart}
      onPointerUp={handleInteractionEnd}
      onPointerCancel={handleInteractionEnd}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onScroll={handleScroll}
    >
      <div ref={trackRef} className="flex w-max">
        {duplicated.map((image, index) => (
          <div key={`${image.src}-${index}`} className="flex-shrink-0 mx-1 w-[108px] h-[108px]" role="listitem">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Featured() {
    const [isPlaying, setIsPlaying] = useState(true)

    return (
        <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132241] to-[#0d172b] text-white py-8 md:pt-22">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-gold tracking-tighter">EXPERIÊNCIAS ONE</h2>
                    <p className="md:text-xl">Veja tudo que rolou até agora</p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="relative h-[50vw] max-h-[800px] w-full">
                        <div className="absolute top-1/2 md:top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] z-10 md:w-[620px] h-[385px]">
                            <VideoPlayer isPlaying={isPlaying} onPlay={() => setIsPlaying(true)} />
                        </div>

                        {desktopImages.map(({ caption, ...imageProps }) => (
                            <ImageCard key={imageProps.src} {...imageProps} />
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    <div className="relative mb-2">
                         <VideoPlayer isPlaying={isPlaying} onPlay={() => setIsPlaying(true)} variant="mobile"/>
                    </div>
                    
                    <MobileCarousel images={desktopImages.map(({ src, alt }) => ({ src, alt }))} />
                </div>
            </div>
        </section>
    )
}
