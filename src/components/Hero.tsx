import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-400/8 blur-[100px] pointer-events-none animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 glass-warm rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-brand-400 text-sm font-semibold tracking-wide">
                Πάνω από 500 μαθητές το αγαπάνε
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-800 leading-[1.05] tracking-tight text-white mb-6">
              Μαθαίνεις{' '}
              <span className="text-gradient">Αγγλικά</span>
              <br />
              και το{' '}
              <span className="relative inline-block">
                απολαμβάνεις
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path
                    d="M2 10 C50 4, 100 2, 150 6 C200 10, 250 8, 298 4"
                    stroke="#f97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-[dash_1.5s_ease-out_0.5s_forwards]"
                    style={{ strokeDasharray: 310, strokeDashoffset: 0 }}
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
              Δεν είναι ακόμα ένα φροντιστήριο. Είναι η εμπειρία που κάνει τα Αγγλικά μέρος της ζωής σου — με μέθοδο, ενέργεια και αποτελέσματα.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#cta" className="btn-primary text-base">
                Ξεκίνα τώρα
                <ArrowRight size={18} className="ml-1" />
              </a>
              <a href="#method" className="btn-secondary text-base">
                Πώς λειτουργεί
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex -space-x-3">
                {[
                  'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
                  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
                  'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
                  'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="student"
                    className="w-10 h-10 rounded-full border-2 border-[#080808] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <p className="text-white/50 text-xs font-medium">
                  <span className="text-white font-bold">4.9/5</span> από +200 κριτικές
                </p>
              </div>
            </div>
          </div>

          {/* Right: image collage */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative z-10 rounded-3xl overflow-hidden animate-float" style={{ animationDelay: '0s' }}>
              <img
                src="https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&dpr=1"
                alt="Μαθητής στην Pouma Academy"
                className="w-full object-cover h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -left-12 top-20 glass-warm rounded-2xl p-4 z-20 animate-float-fast shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 flex items-center justify-center">
                  <Users size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl leading-none">500+</p>
                  <p className="text-white/50 text-xs mt-0.5">ενεργοί μαθητές</p>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -right-8 bottom-24 glass-warm rounded-2xl p-4 z-20 animate-float shadow-2xl" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center">
                  <Award size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl leading-none">97%</p>
                  <p className="text-white/50 text-xs mt-0.5">επιτυχία εξετάσεων</p>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full border border-brand-500/20 animate-spin-slow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full border border-accent-400/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-500/60 to-transparent animate-bounce-sm" />
      </div>
    </section>
  );
}
