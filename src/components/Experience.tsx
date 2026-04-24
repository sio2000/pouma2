import { CheckCircle, MapPin, Clock, Users, Award, BookOpen } from 'lucide-react';

const perks = [
  { icon: Users, label: 'Μέγιστο 8 άτομα ανά τμήμα', desc: 'Πραγματική προσωπική προσοχή' },
  { icon: Award, label: 'Cambridge Exam Centre', desc: 'Εξουσιοδοτημένο εξεταστικό κέντρο' },
  { icon: Clock, label: 'Ευέλικτα ωράρια', desc: 'Πρωί, απόγευμα & βράδυ' },
  { icon: BookOpen, label: 'Δωρεάν υλικό', desc: 'Workbooks, apps & online resources' },
  { icon: MapPin, label: 'Δια ζώσης & Online', desc: 'Μάθε από παντού' },
  { icon: CheckCircle, label: '100% Εγγύηση προόδου', desc: 'Αν δεν βλέπεις πρόοδο, επιστρέφουμε τα λεφτά' },
];

const teachers = [
  {
    name: 'Σοφία Παπαδοπούλου',
    role: 'Senior English Instructor',
    certs: 'Cambridge CELTA · DELTA · 10 χρόνια εμπειρία',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
  },
  {
    name: 'James Thornton',
    role: 'Native Speaker Instructor',
    certs: 'MA in Applied Linguistics · London, UK',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
  },
  {
    name: 'Αλέξης Νικολάου',
    role: 'Youth & Teens Specialist',
    certs: 'B.Ed · Child Psychology · 7 χρόνια',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-[#060606] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="tag-chip mb-4 inline-block reveal">Η Ακαδημία</span>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-800 text-white leading-tight reveal">
            12+ χρόνια εμπειρία.
            <br />
            <span className="text-gradient">Μηδέν συμβιβασμοί.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mt-6 reveal">
            Η Pouma Academy ξεκίνησε με μια απλή ιδέα: τα Αγγλικά δεν πρέπει να είναι βαρετά. Σήμερα, είμαστε μία από τις πιο αγαπημένες γλωσσικές σχολές στη χώρα.
          </p>
        </div>

        {/* Academy image + stats */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20 items-center">
          <div className="lg:col-span-3 reveal-left">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
                alt="Pouma Academy χώρος"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <div className="glass rounded-2xl px-5 py-3">
                  <p className="text-white font-bold text-sm">Pouma Academy</p>
                  <p className="text-white/50 text-xs">Ανοιχτά Δευτ.–Σάββ.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4 reveal-right">
            {[
              { val: '500+', label: 'Μαθητές' },
              { val: '12+', label: 'Χρόνια' },
              { val: '97%', label: 'Επιτυχίες' },
              { val: '4.9', label: 'Βαθμολογία' },
            ].map((s, i) => (
              <div key={i} className="glass-warm rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                <p className="stat-number !text-4xl mb-1">{s.val}</p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Perks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {perks.map((p, i) => (
            <div
              key={i}
              className="reveal glass rounded-2xl p-5 flex items-start gap-4 group hover:border-brand-500/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/25 transition-colors">
                <p.icon size={18} className="text-brand-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{p.label}</p>
                <p className="text-white/40 text-xs mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Teachers */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl sm:text-4xl font-800 text-white reveal">
            Οι άνθρωποι που σε μαθαίνουν
          </h3>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {teachers.map((t, i) => (
            <div
              key={i}
              className="reveal card-glow glass rounded-3xl overflow-hidden group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-white font-bold text-lg">{t.name}</p>
                <p className="text-brand-400 text-sm font-medium mt-0.5">{t.role}</p>
                <p className="text-white/40 text-xs mt-2 leading-relaxed">{t.certs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
