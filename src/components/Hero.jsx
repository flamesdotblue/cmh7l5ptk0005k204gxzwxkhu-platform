import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[72vh] md:h-[80vh] lg:h-[88vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950" />

        <div className="relative z-10 h-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Next‑gen finance companion
              </span>

              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Manage, track, and grow your money with confidence
              </h1>

              <p className="mt-4 text-slate-300 text-base sm:text-lg">
                FlowFin helps students, employees, and companies understand cash flow, automate budgets, and unlock insights. Clean UI, secure by design, built to scale.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-900 bg-gradient-to-tr from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 transition shadow-lg shadow-indigo-600/20">
                  Try the Web Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-100 bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  Join Android Waitlist
                </button>
              </div>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-300">
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Secure by default (encryption, role-based access)</li>
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Scalable API-first backend</li>
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Smart budgets & goals</li>
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Insights, reports & recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
