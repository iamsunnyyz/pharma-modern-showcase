import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Innovation from '@/components/Innovation';
import BusinessDivisions from '@/components/BusinessDivisions';
import GlobalPresence from '@/components/GlobalPresence';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Innovation />
      <BusinessDivisions />
      <GlobalPresence />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;