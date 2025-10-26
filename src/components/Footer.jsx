import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-slate-200">FlowFin</h4>
            <p className="mt-2 text-sm text-slate-400">Your digital finance companion — insights, automation, and confidence for every money decision.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-200">Product</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#security" className="hover:text-white transition">Security</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-200">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Email: hello@flowfin.app</li>
              <li>Support: support@flowfin.app</li>
              <li>Careers: jobs@flowfin.app</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} FlowFin. All rights reserved.</p>
          <div className="text-xs text-slate-500 space-x-4">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
