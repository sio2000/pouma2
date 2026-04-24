import { Zap, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040404] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-400 flex items-center justify-center">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="font-display font-800 text-lg text-white">
                Pouma<span className="text-brand-500">.</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Μαθαίνεις Αγγλικά και το απολαμβάνεις. Η ακαδημία που αλλάζει τον τρόπο που μαθαίνεις.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Προγράμματα',
              links: ['Παιδικά Αγγλικά', 'Εφηβικά Αγγλικά', 'Ενηλίκων', 'Cambridge / IELTS', 'Business English'],
            },
            {
              title: 'Η Ακαδημία',
              links: ['Μέθοδος', 'Καθηγητές', 'Αποτελέσματα', 'Εξεταστικό Κέντρο', 'Επικοινωνία'],
            },
            {
              title: 'Πληροφορίες',
              links: ['Δοκιμαστικό Μάθημα', 'FAQ', 'Blog', 'Πολιτική Απορρήτου', 'Όροι Χρήσης'],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-white font-semibold text-sm mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-brand-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2024 Pouma Academy. Όλα τα δικαιώματα διατηρούνται.
          </p>
          <p className="text-white/20 text-xs">
            Σχεδιάστηκε με πάθος για τη γλωσσική εκπαίδευση
          </p>
        </div>
      </div>
    </footer>
  );
}
