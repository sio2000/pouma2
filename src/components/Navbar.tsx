import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Μέθοδος', href: '#method' },
    { label: 'Προγράμματα', href: '#programs' },
    { label: 'Ιστορίες', href: '#stories' },
    { label: 'Η Ακαδημία', href: '#experience' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Zap size={18} className="text-white" fill="white" />
          </div>
          <span className="font-display font-800 text-xl tracking-tight text-white">
            Pouma<span className="text-brand-500">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200 hover:text-brand-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#cta" className="hidden md:inline-flex btn-primary text-sm py-3 px-6 shadow-none">
          Ξεκίνα τώρα
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 font-semibold text-base hover:text-brand-400 transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="btn-primary text-sm mt-2 justify-center">
            Ξεκίνα τώρα
          </a>
        </div>
      </div>
    </nav>
  );
}
