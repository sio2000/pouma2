import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import WhyItWorks from './components/WhyItWorks';
import Programs from './components/Programs';
import SuccessStories from './components/SuccessStories';
import Experience from './components/Experience';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <WhyItWorks />
      <div className="section-divider" />
      <Programs />
      <div className="section-divider" />
      <SuccessStories />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
