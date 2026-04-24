import { Quote, Star } from 'lucide-react';

const stories = [
  {
    name: 'Μαρία Κ.',
    age: '34 ετών',
    program: 'Adults',
    result: 'Προήχθη σε διεθνή εταιρεία',
    quote: 'Σε 6 μήνες έκανα αυτό που δεν κατάφερα σε χρόνια. Τώρα κάνω meetings στα Αγγλικά και το απολαμβάνω.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    stars: 5,
    tag: 'Business English',
    color: 'from-sky-500 to-teal-400',
  },
  {
    name: 'Νίκος Π.',
    age: '17 ετών',
    program: 'Teens',
    result: 'Cambridge C2 Proficiency',
    quote: 'Περίμενα ότι θα είναι σαν το σχολείο. Αντίθετα — κάθε μάθημα ήταν σαν να κάνω πράγμα που μου αρέσει.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    stars: 5,
    tag: 'Cambridge C2',
    color: 'from-brand-500 to-accent-400',
  },
  {
    name: 'Ελένη Σ.',
    age: '9 ετών',
    program: 'Kids',
    result: 'Μιλά Αγγλικά σαν παιχνίδι',
    quote: 'Η κόρη μου ανυπομονεί να πάει στο μάθημα. Αυτό από μόνο του λέει τα πάντα.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    stars: 5,
    tag: 'Kids English',
    color: 'from-teal-500 to-sky-400',
    parentNote: '— Μαμά της Ελένης',
  },
  {
    name: 'Δημήτρης Α.',
    age: '28 ετών',
    program: 'Adults',
    result: 'IELTS 8.0 για μεταπτυχιακό',
    quote: 'Είχα αγχωθεί πολύ για το IELTS. Ο καθηγητής μου έφτιαξε ακριβώς αυτό που χρειαζόμουν. Πήρα 8.0.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    stars: 5,
    tag: 'IELTS Prep',
    color: 'from-brand-600 to-brand-400',
  },
];

export default function SuccessStories() {
  return (
    <section id="stories" className="relative py-28 bg-[#080808] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag-chip mb-4 inline-block reveal">Ιστορίες Επιτυχίας</span>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-800 text-white leading-tight reveal">
            Δεν λέμε εμείς ότι{' '}
            <span className="text-gradient">δουλεύει.</span>
            <br />
            Το λένε αυτοί.
          </h2>
        </div>

        {/* Stories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <div
              key={i}
              className="reveal card-glow glass rounded-3xl p-8 flex flex-col gap-5 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-14 h-14 rounded-2xl object-cover"
                    />
                    <div className={`absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-br ${s.color} border-2 border-[#080808]`} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-none">{s.name}</p>
                    <p className="text-white/40 text-xs mt-1">{s.age} · {s.program}</p>
                  </div>
                </div>
                <Quote size={28} className="text-brand-500/30 group-hover:text-brand-500/50 transition-colors flex-shrink-0" fill="currentColor" />
              </div>

              <blockquote className="text-white/70 text-base leading-relaxed italic flex-1">
                "{s.quote}"
                {s.parentNote && (
                  <span className="block text-white/40 text-sm mt-2 not-italic">{s.parentNote}</span>
                )}
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-1">
                  {[...Array(s.stars)].map((_, j) => (
                    <Star key={j} size={14} className="text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <div className={`tag-chip bg-gradient-to-br ${s.color} text-white border-transparent text-xs`}>
                  {s.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom photo strip */}
        <div className="mt-16 grid grid-cols-3 sm:grid-cols-6 gap-3 reveal">
          {[
            'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
            'https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
            'https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
            'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
            'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
            'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
          ].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-square group cursor-pointer">
              <img
                src={src}
                alt={`Μαθητής ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-white/30 text-sm mt-4">Οι μαθητές μας σε δράση</p>
      </div>
    </section>
  );
}
