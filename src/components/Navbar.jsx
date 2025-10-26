import React from 'react';
import { Wallet, Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
            <Wallet className="w-5 h-5" />
          </div>
          <span className="text-base sm:text-lg font-semibold tracking-tight">FlowFin</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#security" className="hover:text-white transition">Security</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-100 bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Rocket className="w-4 h-4" />
            Launch Web
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-900 bg-gradient-to-tr from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 transition shadow-lg shadow-indigo-600/20">
            Get Android
          </button>
        </div>
      </div>
    </header>
  );
}
