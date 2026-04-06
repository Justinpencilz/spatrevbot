import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function useCountdown() {
  const [time, setTime] = useState({ hours: 4, minutes: 59, seconds: 32 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          return { hours: 0, minutes: 0, seconds: 0 }
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return time
}

function LandingPage() {
  const { hours, minutes, seconds } = useCountdown()
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 py-16 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest text-[#00f0ff] uppercase mb-10">
        Opportunity Ends In
      </h1>

      {/* Countdown */}
      <div className="flex gap-4 md:gap-6 mb-10">
        {[
          { value: pad(hours), label: 'HOURS' },
          { value: pad(minutes), label: 'MINUTES' },
          { value: pad(seconds), label: 'SECONDS' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center border border-[#00f0ff]/30 rounded-xl bg-[#111] px-6 py-4 md:px-8 md:py-5 min-w-[80px] md:min-w-[100px]"
          >
            <span className="text-4xl md:text-5xl font-extrabold text-[#00f0ff] tabular-nums">
              {item.value}
            </span>
            <span className="text-xs md:text-sm text-gray-400 mt-1 tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Subtitle */}
      <p className="text-lg md:text-xl font-bold text-white mb-10">
        In Few Hours You Could <span className="text-red-500">Lose</span> This Opportunity
      </p>

      {/* Exclusive card */}
      <div className="w-full max-w-xl border border-[#00f0ff]/20 rounded-2xl bg-[#111] px-8 py-8 mb-10">
        <p className="text-2xl md:text-3xl font-extrabold tracking-widest text-[#00f0ff] uppercase mb-3">
          🔥 Exclusive
        </p>
        <p className="text-white text-lg font-semibold mb-2">Unlock our AI!</p>
        <p className="text-[#00f0ff] text-sm font-semibold">⚡ Limited spots!</p>
      </div>

      {/* CTA Button */}
      <a
        href="#"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-black font-bold text-lg px-10 py-4 rounded-full transition-all"
      >
        👋 Join Telegram to Get Started
      </a>
      <span className="text-3xl mt-2">👉</span>
    </div>
  )
}
