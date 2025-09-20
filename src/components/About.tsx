import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Microscope, Shield, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: Heart,
      title: 'Patient First',
      description: 'Every decision we make is guided by our commitment to improving patient outcomes and quality of life.',
    },
    {
      icon: Microscope,
      title: 'Scientific Excellence',
      description: 'We leverage cutting-edge research and innovative technologies to develop breakthrough treatments.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Our rigorous quality standards ensure the safety and efficacy of every product we develop.',
    },
    {
      icon: Target,
      title: 'Global Impact',
      description: 'We strive to make healthcare accessible and affordable for communities worldwide.',
    },
  ];

  const timeline = [
    { year: '1952', event: 'Founded with a vision to transform healthcare' },
    { year: '1985', event: 'Expanded into international markets' },
    { year: '2000', event: 'Established world-class R&D facilities' },
    { year: '2010', event: 'Launched groundbreaking oncology division' },
    { year: '2020', event: 'Pioneered COVID-19 treatment solutions' },
    { year: '2024', event: 'Leading innovation in personalized medicine' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            About <span className="text-primary">Zynera Life Sciences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over seven decades, we have been at the forefront of pharmaceutical innovation, 
            developing life-changing treatments and building a legacy of trust and excellence in healthcare.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To discover, develop, and deliver innovative medicines that address the most challenging 
                health conditions, making a meaningful difference in patients' lives worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the world's most trusted pharmaceutical company, recognized for our scientific 
                excellence, ethical practices, and unwavering commitment to improving human health.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Journey</h3>
            <div className="space-y-6">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 medical-gradient rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="pt-3">
                    <div className="text-sm text-primary font-semibold mb-1">{milestone.year}</div>
                    <div className="text-foreground">{milestone.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="medical-card hover-lift h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;