import { Star } from 'lucide-react';

const items = [
  'Speaking & Listening',
  'Cambridge Exams',
  'TOEFL Prep',
  'Business English',
  'Kids English',
  'Teen Courses',
  'Online & In-Person',
  'Small Groups',
  'Native-level Fluency',
  'Real Conversations',
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-brand-500 py-4 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-6 whitespace-nowrap">
            <Star size={14} className="text-white/60 fill-white/60 flex-shrink-0" />
            <span className="text-white font-semibold text-sm tracking-wide uppercase">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
