import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Pill, Baby, HeartHandshake, Microscope, UserCheck, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import manufacturingImage from '@/assets/manufacturing.jpg';

const BusinessDivisions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const divisions = [
    {
      icon: Pill,
      title: 'Pharmaceuticals',
      description: 'Comprehensive range of prescription medicines across therapeutic areas including cardiovascular, diabetes, and respiratory care.',
      highlights: ['500+ Products', '40+ Countries', 'WHO-GMP Certified'],
      color: 'bg-primary',
    },
    {
      icon: Baby,
      title: 'Consumer Healthcare',
      description: 'Trusted over-the-counter products and wellness solutions for everyday health needs and preventive care.',
      highlights: ['Leading Brands', 'OTC Excellence', 'Consumer Trust'],
      color: 'bg-wellness',
    },
    {
      icon: HeartHandshake,
      title: 'Critical Care',
      description: 'Specialized medicines for intensive care units, emergency departments, and life-threatening conditions.',
      highlights: ['ICU Solutions', 'Emergency Care', 'Life-Saving Drugs'],
      color: 'bg-destructive',
    },
    {
      icon: Microscope,
      title: 'Biologics',
      description: 'Advanced biologic therapies including monoclonal antibodies, vaccines, and cell-based treatments.',
      highlights: ['Cutting-edge R&D', 'Biosimilars', 'Vaccine Development'],
      color: 'bg-innovation',
    },
    {
      icon: UserCheck,
      title: 'Wellness',
      description: 'Nutritional supplements, vitamins, and wellness products promoting preventive healthcare and healthy living.',
      highlights: ['Nutritional Science', 'Preventive Care', 'Lifestyle Products'],
      color: 'bg-accent',
    },
    {
      icon: Building2,
      title: 'Animal Health',
      description: 'Comprehensive veterinary medicines and healthcare solutions for companion animals and livestock.',
      highlights: ['Veterinary Care', 'Animal Nutrition', 'Farm Solutions'],
      color: 'bg-trust',
    },
  ];

  return (
    <section id="divisions" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Our Business <span className="text-primary">Divisions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We operate across multiple healthcare segments, delivering comprehensive solutions 
            that address diverse medical needs and improve patient outcomes globally.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={manufacturingImage}
              alt="Manufacturing Excellence"
              className="w-full h-96 object-cover rounded-2xl shadow-card"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Manufacturing Excellence
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our state-of-the-art manufacturing facilities adhere to the highest international 
              quality standards, ensuring the safety, efficacy, and consistency of every product we produce.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Manufacturing Sites</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">WHO-GMP Compliant</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divisions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="medical-card hover-lift h-full">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${division.color} rounded-full flex items-center justify-center mb-4`}>
                    <division.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{division.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{division.description}</p>
                  <div className="space-y-2">
                    {division.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDivisions;