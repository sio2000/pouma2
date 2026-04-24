import { MessageCircle, Brain, Zap, Target } from 'lucide-react';

const steps = [
  {
    icon: Brain,
    color: 'from-brand-500 to-accent-400',
    tag: '01',
    title: 'Μαθαίνεις με νόημα',
    desc: 'Δεν απομνημονεύεις κανόνες. Καταλαβαίνεις γιατί η γλώσσα λειτουργεί έτσι. Ο εγκέφαλός σου κρατά ό,τι έχει νόημα.',
  },
  {
    icon: MessageCircle,
    color: 'from-teal-500 to-sky-400',
    tag: '02',
    title: 'Μιλάς από την πρώτη μέρα',
    desc: 'Κανένα "πρώτα τελειώνω τη γραμματική". Μπαίνεις κατευθείαν στη συνομιλία — ζωντανά, δυνατά, χωρίς φόβο.',
  },
  {
    icon: Zap,
    color: 'from-accent-400 to-brand-400',
    tag: '03',
    title: 'Ενέργεια που σε κρατά',
    desc: 'Τα μαθήματά μας έχουν ρυθμό. Δεν πέφτεις στον ύπνο. Κάθε session είναι διαφορετικό, γρήγορο, γεμάτο.',
  },
  {
    icon: Target,
    color: 'from-sky-500 to-teal-400',
    tag: '04',
    title: 'Αποτέλεσμα που φαίνεται',
    desc: 'Εξετάσεις Cambridge, TOEFL, συνεντεύξεις, ταξίδια. Βγαίνεις με δεξιότητες που χρησιμοποιείς αύριο κιόλας.',
  },
];

export default function WhyItWorks() {
  return (
    <section id="method" className="relative py-28 bg-[#080808] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="tag-chip mb-4 inline-block reveal">Η Μέθοδος</span>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-800 text-white leading-tight mb-6 reveal">
            Γιατί αυτό{' '}
            <span className="text-gradient">λειτουργεί</span>
            <br />
            ενώ τα άλλα... όχι
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto reveal">
            Η μέθοδος Pouma δεν αντιγράφει παλιά φροντιστήρια. Σχεδιάστηκε από την αρχή για να σε κάνει να μιλάς Αγγλικά — γρήγορα, σωστά, με αυτοπεποίθηση.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal card-glow glass rounded-2xl p-7 flex flex-col gap-5 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={22} className="text-white" />
                </div>
                <span className="font-display font-800 text-5xl text-white/5 group-hover:text-white/10 transition-colors">
                  {step.tag}
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2 leading-snug">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual storytelling block */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal-left">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&dpr=1"
                alt="Δυναμικό μάθημα Αγγλικών"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="glass rounded-xl px-4 py-2.5">
                  <p className="text-white font-bold text-sm">Live Conversation Class</p>
                  <p className="text-white/60 text-xs">Κάθε Τρίτη & Πέμπτη</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right space-y-6">
            <span className="tag-chip">Αποδεδειγμένο</span>
            <h3 className="font-display text-3xl sm:text-4xl font-800 text-white leading-snug">
              Το μυστικό μας; <br />
              <span className="text-gradient">Δεν υπάρχει μυστικό.</span>
            </h3>
            <p className="text-white/55 text-base leading-relaxed">
              Απλά δουλεύουμε σωστά. Μικρές ομάδες, έμπειροι καθηγητές, υλικό που αντανακλά την πραγματική ζωή. Και μαθητές που θέλουν αλλαγή.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '8', label: 'μαθητές ανά ομάδα' },
                { val: '12+', label: 'χρόνια εμπειρίας' },
                { val: '97%', label: 'επιτυχία στις εξετάσεις' },
                { val: '500+', label: 'ενεργοί μαθητές' },
              ].map((s, i) => (
                <div key={i} className="glass-warm rounded-xl p-4 text-center">
                  <p className="stat-number !text-3xl">{s.val}</p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
