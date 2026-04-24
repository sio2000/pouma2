import { useState } from 'react';
import { ArrowRight, Shield, Flame, Briefcase } from 'lucide-react';

const programs = [
  {
    id: 'kids',
    icon: Shield,
    color: 'from-teal-500 to-sky-400',
    glowColor: 'rgba(20,184,166,0.15)',
    tag: 'Kids · 5–12 χρονών',
    title: 'Παιδικά Αγγλικά',
    subtitle: 'Ασφαλές, διασκεδαστικό, αποτελεσματικό.',
    description:
      'Τα παιδιά μαθαίνουν καλύτερα όταν παίζουν. Τα μαθήματά μας συνδυάζουν δραστηριότητες, τραγούδια, ιστορίες και ρόλους που αναπτύσσουν φυσικά τη γλώσσα.',
    features: ['Μικρές ομάδες 6–8 παιδιών', 'Certified παιδαγωγοί', 'Progress reports κάθε μήνα', 'Online & δια ζώσης'],
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
  {
    id: 'teens',
    icon: Flame,
    color: 'from-brand-500 to-accent-400',
    glowColor: 'rgba(249,115,22,0.15)',
    tag: 'Teens · 13–18 χρονών',
    title: 'Αγγλικά για Εφήβους',
    subtitle: 'Εμπιστοσύνη, επιτυχία, έκφραση.',
    description:
      'Οι έφηβοι χρειάζονται κάτι πέρα από βιβλία. Cambridge, TOEFL, debates, presentations — τους δίνουμε τα εργαλεία για να αστράψουν στις εξετάσεις και στη ζωή.',
    features: ['Cambridge & TOEFL prep', 'Speaking clubs', 'Study skills coaching', 'Exam simulation τεστ'],
    image: 'https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
  {
    id: 'adults',
    icon: Briefcase,
    color: 'from-sky-500 to-teal-400',
    glowColor: 'rgba(14,165,233,0.15)',
    tag: 'Adults · 18+',
    title: 'Αγγλικά για Ενήλικες',
    subtitle: 'Πρακτικά αποτελέσματα, άμεσα.',
    description:
      'Είτε θες να προαχθείς, να ταξιδέψεις ή απλά να επικοινωνείς με αυτοπεποίθηση — σχεδιάζουμε το πρόγραμμα γύρω από τους στόχους σου, όχι γύρω από ένα generic βιβλίο.',
    features: ['Business & Professional English', 'Flexible scheduling', '1-on-1 & small groups', 'Real-world scenarios'],
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
];

export default function Programs() {
  const [active, setActive] = useState('teens');
  const program = programs.find((p) => p.id === active)!;

  return (
    <section id="programs" className="relative py-28 bg-[#060606] overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="tag-chip mb-4 inline-block reveal">Προγράμματα</span>
            <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-800 text-white leading-tight reveal">
              Ένα πρόγραμμα
              <br />
              <span className="text-gradient">για κάθε στόχο</span>
            </h2>
          </div>
          <p className="text-white/50 text-base max-w-sm lg:text-right reveal">
            Βρες αυτό που σου ταιριάζει — από το πρώτο γεια μέχρι τη διεθνή πιστοποίηση.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {programs.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                active === p.id
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                  : 'glass text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <p.icon size={16} />
              {p.title}
            </button>
          ))}
        </div>

        {/* Program detail */}
        <div
          key={program.id}
          className="grid lg:grid-cols-2 gap-8 items-stretch"
          style={{ animation: 'fadeIn 0.4s ease-out' }}
        >
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden min-h-72">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="tag-chip">{program.tag}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-display text-3xl font-800 text-white leading-tight">{program.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div
            className="glass rounded-3xl p-8 flex flex-col justify-between"
            style={{ boxShadow: `0 30px 80px ${program.glowColor}` }}
          >
            <div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 shadow-lg`}>
                <program.icon size={26} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-800 text-white mb-3">{program.title}</h3>
              <p className="text-white/55 text-base leading-relaxed mb-8">{program.description}</p>

              <ul className="space-y-3">
                {program.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a href="#cta" className="btn-primary mt-8 justify-center">
              Δες αυτό το πρόγραμμα
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
