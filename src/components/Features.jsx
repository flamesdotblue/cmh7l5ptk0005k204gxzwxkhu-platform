import React from 'react';
import { Shield, BarChart3, Wallet, Rocket } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Unified Money Hub',
    desc: 'Track income, expenses, subscriptions, and goals in one clean dashboard built for students, employees, and teams.'
  },
  {
    icon: BarChart3,
    title: 'Insights & Reports',
    desc: 'AI-assisted summaries, anomaly detection, and month-over-month trends to help you act with clarity.'
  },
  {
    icon: Shield,
    title: 'Security-first Architecture',
    desc: 'End-to-end encryption in transit, robust auth, and role-based access. Ready for enterprise-grade compliance.'
  },
  {
    icon: Rocket,
    title: 'Built to Scale',
    desc: 'Modular API layer for future integrations (FIVU & other financial APIs) and event-driven data pipelines.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Designed for clarity and performance</h2>
          <p className="mt-3 text-slate-300">A modern, glassmorphic aesthetic with practical UX patterns. Every interaction is deliberate, fast, and accessible.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 hover:bg-white/10 transition">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-cyan-400/20 to-indigo-500/20 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
              </div>
              <p className="relative mt-3 text-sm text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="security" className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Scalable Architecture</h3>
            <p className="mt-2 text-sm text-slate-300">The backend is designed around a service-oriented, API-first approach. Easily integrate external data sources and financial providers. Event streams enable real-time analytics and notifications.</p>
            <ul className="mt-4 text-sm text-slate-300 list-disc list-inside space-y-2">
              <li>Clean domain boundaries (Accounts, Transactions, Budgets, Goals)</li>
              <li>Background jobs for enrichment, categorization, and alerts</li>
              <li>Role-based access for personal, team, and enterprise users</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Experience that delights</h3>
            <p className="mt-2 text-sm text-slate-300">Fast, accessible, and beautiful. Thoughtful motion, keyboard-friendly nav, and a glassmorphic 3D aesthetic that stays practical.</p>
            <ul className="mt-4 text-sm text-slate-300 list-disc list-inside space-y-2">
              <li>Clear onboarding for students, employees, and companies</li>
              <li>Smart recommendations to hit savings and budget goals</li>
              <li>Shareable reports for teams and leadership</li>
            </ul>
          </div>
        </div>

        <div id="pricing" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/10 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold">Early Access</h3>
              <p className="mt-2 text-sm text-slate-300">Lock in founder pricing and help shape the roadmap. Web first, Android rolling out next.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-900 bg-gradient-to-tr from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 transition shadow-lg shadow-indigo-600/20">
                Get Started
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-100 bg-white/5 border border-white/10 hover:bg-white/10 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
