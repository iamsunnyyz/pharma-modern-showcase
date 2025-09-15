import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Building, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GlobalPresence = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const regions = [
    {
      name: 'North America',
      countries: 5,
      facilities: 8,
      employees: '2,500+',
      color: 'bg-primary',
    },
    {
      name: 'Europe',
      countries: 15,
      facilities: 12,
      employees: '4,200+',
      color: 'bg-accent',
    },
    {
      name: 'Asia Pacific',
      countries: 18,
      facilities: 20,
      employees: '8,900+',
      color: 'bg-innovation',
    },
    {
      name: 'Latin America',
      countries: 8,
      facilities: 6,
      employees: '1,800+',
      color: 'bg-wellness',
    },
  ];

  const globalStats = [
    {
      icon: MapPin,
      number: '40+',
      label: 'Countries',
      description: 'Global market presence',
    },
    {
      icon: Users,
      number: '17,000+',
      label: 'Employees',
      description: 'Diverse global workforce',
    },
    {
      icon: Building,
      number: '46',
      label: 'Facilities',
      description: 'Manufacturing & R&D centers',
    },
    {
      icon: Truck,
      number: '500M+',
      label: 'Patients',
      description: 'Lives touched annually',
    },
  ];

  return (
    <section id="global" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Global <span className="text-primary">Presence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our worldwide network of facilities, partnerships, and dedicated teams enables us to 
            deliver life-changing medicines to patients across the globe.
          </p>
        </motion.div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {globalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-primary mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regional Presence */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="medical-card hover-lift h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${region.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{region.name}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Countries:</span>
                      <span className="font-semibold text-foreground">{region.countries}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Facilities:</span>
                      <span className="font-semibold text-foreground">{region.facilities}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Employees:</span>
                      <span className="font-semibold text-foreground">{region.employees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card className="medical-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Global Network</h3>
              <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌍</div>
                  <p className="text-lg text-muted-foreground">
                    Interactive world map visualization showcasing our global presence, 
                    manufacturing facilities, and distribution network across continents.
                  </p>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Headquarters</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span>Manufacturing</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-innovation rounded-full"></div>
                      <span>R&D Centers</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-wellness rounded-full"></div>
                      <span>Distribution</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence;