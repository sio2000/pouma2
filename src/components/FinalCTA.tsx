import { useState } from 'react';
import { ArrowRight, Phone, Mail, CheckCircle, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="cta" className="relative py-28 bg-[#080808] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/8 blur-[160px] rounded-full animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-accent-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <span className="tag-chip mb-6 inline-flex items-center gap-2 reveal">
              <Sparkles size={14} />
              Ξεκίνα σήμερα
            </span>
            <h2 className="font-display text-5xl sm:text-6xl xl:text-7xl font-800 text-white leading-[1.05] mb-8 reveal">
              Έτοιμος να{' '}
              <span className="text-gradient">σπάσεις</span>
              <br />
              τον φόβο;
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10 reveal">
              Το πρώτο βήμα είναι δωρεάν. Κάνε μια δοκιμαστική εγγραφή και δες μόνος σου τι σημαίνει να μαθαίνεις Αγγλικά με ενέργεια, νόημα και διασκέδαση.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Δωρεάν δοκιμαστικό μάθημα',
                'Χωρίς δέσμευση',
                'Απάντηση εντός 24 ωρών',
                'Εξατομικευμένος οδηγός επιπέδου',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CheckCircle size={18} className="text-brand-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 text-white/50 text-sm reveal">
              <a href="tel:+302101234567" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Phone size={16} />
                210 123 4567
              </a>
              <a href="mailto:info@poumaacademy.gr" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Mail size={16} />
                info@poumaacademy.gr
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            <div className="glass rounded-3xl p-8 sm:p-10 border border-brand-500/10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-accent-400 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <CheckCircle size={36} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-800 text-white mb-3">Λάβαμε το αίτημά σου!</h3>
                  <p className="text-white/50 text-base">
                    Θα επικοινωνήσουμε μαζί σου εντός 24 ωρών για να κλείσουμε το δοκιμαστικό σου μάθημα.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-display text-2xl font-800 text-white mb-1">
                      Δοκιμαστικό μάθημα
                    </h3>
                    <p className="text-white/40 text-sm">100% δωρεάν, χωρίς υποχρεώσεις</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">
                        Ονοματεπώνυμο
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-white/8 transition-all duration-200"
                        placeholder="π.χ. Μαρία Παπαδοπούλου"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-white/8 transition-all duration-200"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">
                        Τηλέφωνο
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-white/8 transition-all duration-200"
                        placeholder="693 xxx xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">
                        Με ενδιαφέρει
                      </label>
                      <select
                        required
                        value={form.program}
                        onChange={(e) => setForm({ ...form, program: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-brand-500/60 transition-all duration-200 appearance-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" disabled style={{ backgroundColor: '#111' }}>Επίλεξε πρόγραμμα…</option>
                        <option value="kids" style={{ backgroundColor: '#111' }}>Παιδικά Αγγλικά (5–12)</option>
                        <option value="teens" style={{ backgroundColor: '#111' }}>Εφηβικά Αγγλικά (13–18)</option>
                        <option value="adults" style={{ backgroundColor: '#111' }}>Ενηλίκων / Business</option>
                        <option value="cambridge" style={{ backgroundColor: '#111' }}>Cambridge / IELTS / TOEFL</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Αποστολή…
                        </span>
                      ) : (
                        <>
                          Κλείσε δωρεάν μάθημα
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
