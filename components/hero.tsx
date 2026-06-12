'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { RoiSandbox } from '@/components/roi-sandbox'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-950">
        {/* Looping background video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 size-full object-cover object-bottom transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <source
            src="https://videos.pexels.com/video-files/15046856/15046856-hd_1366_720_24fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* High-contrast vignettes on top of video */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center rounded-full border border-border/50 bg-zinc-900/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
            Austin, Texas
          </span>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Stop renting your power.{' '}
            <span className="text-primary">Own it.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            See how homeowners in Austin are locking in fixed costs to save up
            to{' '}
            <span className="font-semibold text-foreground">$45,000</span> over
            20 years.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <RoiSandbox />
        </motion.div>
      </div>
    </section>
  )
}
