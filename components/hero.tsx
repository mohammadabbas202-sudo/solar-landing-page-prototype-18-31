'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { RoiSandbox } from '@/components/roi-sandbox'
import { InlineCta } from '@/components/inline-cta'
import { HERO_VIDEO_SRC } from '@/lib/media'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 0.8

    const markReady = () => setVideoReady(true)

    video.addEventListener('loadeddata', markReady)
    if (video.readyState >= 2) markReady()

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — still show first frame once buffered
        video.muted = true
        void video.play()
      })
    }

    return () => video.removeEventListener('loadeddata', markReady)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={HERO_VIDEO_SRC}
          className={`absolute inset-0 size-full object-cover object-bottom transition-opacity duration-500 ${
            videoReady ? 'opacity-60' : 'opacity-0'
          }`}
        />
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

          <div className="mt-8 max-w-md">
            <InlineCta
              compact
              buttonLabel="Calculate My Savings"
              placeholder="Enter ZIP code"
              className="[&_button]:min-h-11 [&_input]:min-h-11"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-last lg:order-none"
        >
          <RoiSandbox />
        </motion.div>
      </div>
    </section>
  )
}
