'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const desktopImages = [
    { src: '/Pic Frame (4).png', alt: 'People at a bar', caption: 'Final Libertadores • 2024', className: 'absolute w-[20%] top-[2%] left-[8%]' },
    { src: '/Pic Frame (5).png', alt: 'Two men smiling', caption: '', className: 'absolute w-[16%] top-[45%] left-[2%]' },
    { src: '/Pic Frame (3).png', alt: 'Crowd at an event', caption: 'NBA House', className: 'absolute w-[22%] top-0 right-[5%]' },
    { src: '/Pic Frame (1).png', alt: 'People having dinner', caption: 'Libertadores Buenos Aires • 2024', className: 'absolute w-[18%] top-[42%] right-[10%]', key: 'dinner' },
    { src: '/Pic Frame (2).png', alt: 'Man with a scarf celebrating', caption: '', className: 'absolute w-[14%] top-[68%] right-[2%]' },
    { src: '/Pic Frame (1).png', alt: 'People at a party', caption: 'Sportingbet Party • Guests Only', className: 'absolute w-[25%] bottom-0 left-[18%]', key: 'party' },
];

const mobileImages = [
    { src: '/Pic Frame.png', alt: 'Featured experience 1' },
    { src: '/Pic Frame (4).png', alt: 'Featured experience 2' },
    { src: '/Pic Frame (3).png', alt: 'Featured experience 3' },
];

function ImageCard({ src, alt, className, caption }: { src: string, alt: string, className: string, caption: string }) {
    return (
        <div className={cn("relative p-1 rounded-xl bg-black/20 border border-white/10 shadow-lg", className)}>
             <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
                {caption && (
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
                        <p className="text-xs font-semibold">{caption}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

function VideoPlayer({ isPlaying, onPlay, variant = 'desktop' }: { isPlaying: boolean, onPlay: () => void, variant?: 'desktop' | 'mobile' }) {
    const thumbShadow = variant === 'desktop' ? 'shadow-2xl shadow-yellow-400/20' : '';
    const playIconSize = variant === 'desktop' ? 'w-20 h-20 lg:w-24 lg:h-24' : 'w-16 h-16';

    if (!isPlaying) {
        return (
            <div className="relative group cursor-pointer" onClick={onPlay}>
                <Image
                    src="/Pic Frame.png"
                    alt="Featured video thumbnail"
                    width={800}
                    height={450}
                    className={cn("w-full h-auto rounded-lg", thumbShadow)}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                    <PlayCircle className={cn("text-white opacity-90 group-hover:opacity-100 transition-opacity", playIconSize)} />
                </div>
            </div>
        )
    }

    return (
        <div className="relative aspect-video w-full">
            <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/d1zfAphCohc?autoplay=1&rel=0&showinfo=0&controls=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export function Featured() {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132241] to-[#0d172b] text-white py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-gold tracking-tighter">EXPERIÊNCIAS ONE</h2>
                    <p className="md:text-xl">Veja tudo que rolou até agora</p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block relative h-[50vw] max-h-[800px] w-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] z-10">
                        <VideoPlayer isPlaying={isPlaying} onPlay={() => setIsPlaying(true)} />
                    </div>

                    {desktopImages.map(({ key, ...imageProps }) => (
                        <ImageCard key={key || imageProps.src} {...imageProps} />
                    ))}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    <div className="relative mb-2">
                         <VideoPlayer isPlaying={isPlaying} onPlay={() => setIsPlaying(true)} variant="mobile"/>
                    </div>
                    
                    <div className="flex justify-center gap-2">
                        {mobileImages.map((image, index) => (
                            <div key={index} className="relative w-[108px] h-[108px] rounded-[8px] overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className={cn(
                                        "object-cover",
                                        index === 0 && "scale-125"
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
