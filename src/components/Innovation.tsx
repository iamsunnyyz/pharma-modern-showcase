import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Dna, FlaskConical, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import innovationBg from '@/assets/innovation-bg.jpg';

const Innovation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [counters, setCounters] = useState({
    patents: 0,
    research: 0,
    trials: 0,
    investment: 0,
  });

  const targetValues = {
    patents: 500,
    research: 15,
    trials: 85,
    investment: 2.8,
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const timer = setInterval(() => {
        setCounters(prev => ({
          patents: Math.min(prev.patents + targetValues.patents / steps, targetValues.patents),
          research: Math.min(prev.research + targetValues.research / steps, targetValues.research),
          trials: Math.min(prev.trials + targetValues.trials / steps, targetValues.trials),
          investment: Math.min(prev.investment + targetValues.investment / steps, targetValues.investment),
        }));
      }, interval);

      setTimeout(() => clearInterval(timer), duration);
    }
  }, [isInView]);

  const innovations = [
    {
      icon: Dna,
      title: 'Gene Therapy',
      description: 'Pioneering breakthrough treatments using advanced gene editing technologies to address rare genetic disorders.',
      color: 'bg-innovation',
    },
    {
      icon: FlaskConical,
      title: 'Drug Discovery',
      description: 'Leveraging AI and machine learning to accelerate the discovery of new molecular compounds.',
      color: 'bg-trust',
    },
    {
      icon: Zap,
      title: 'Precision Medicine',
      description: 'Developing personalized treatment approaches based on individual genetic profiles and biomarkers.',
      color: 'bg-primary',
    },
    {
      icon: TrendingUp,
      title: 'Clinical Excellence',
      description: 'Conducting world-class clinical trials with cutting-edge methodologies and patient-centric approaches.',
      color: 'bg-wellness',
    },
  ];

  return (
    <section id="innovation" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={innovationBg}
          alt="Research and Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            Innovation & <span className="text-yellow-300">Research</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our commitment to scientific excellence drives us to push the boundaries of what's possible 
            in pharmaceutical research and development.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          <div className="text-center text-white">
            <div className="text-4xl lg:text-5xl font-bold mb-2">
              {Math.round(counters.patents)}+
            </div>
            <div className="text-blue-100">Patents Filed</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl lg:text-5xl font-bold mb-2">
              {Math.round(counters.research)}
            </div>
            <div className="text-blue-100">R&D Centers</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl lg:text-5xl font-bold mb-2">
              {Math.round(counters.trials)}+
            </div>
            <div className="text-blue-100">Clinical Trials</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl lg:text-5xl font-bold mb-2">
              ${counters.investment.toFixed(1)}B
            </div>
            <div className="text-blue-100">Annual Investment</div>
          </div>
        </motion.div>

        {/* Innovation Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift h-full">
                <CardContent className="p-6 text-center text-white">
                  <div className={`w-16 h-16 ${innovation.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <innovation.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{innovation.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{innovation.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;