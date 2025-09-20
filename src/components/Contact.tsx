import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import communityImage from '@/assets/community.jpg';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@zyneralifeSciences.com',
      subtitle: 'General Inquiries',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: '24/7 Support Available',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Innovation Drive, Medical City',
      subtitle: 'Our Global Headquarters',
    },
  ];

  const offices = [
    {
      city: 'Boston, USA',
      address: '123 Innovation Drive, Medical City, MA 02101',
      phone: '+1 (555) 123-4567',
      type: 'Global Headquarters',
    },
    {
      city: 'London, UK',
      address: '456 Science Park Road, Cambridge, CB4 0WS',
      phone: '+44 20 7123 4567',
      type: 'European Operations',
    },
    {
      city: 'Singapore',
      address: '789 Biomedical Grove, Biopolis, 138673',
      phone: '+65 6123 4567',
      type: 'Asia Pacific Hub',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a healthcare professional, researcher, or patient, we're here to help. 
            Reach out to learn more about our innovative solutions and global partnerships.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="medical-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company/Organization
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you today?"
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full medical-gradient text-white hover:shadow-medical"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={communityImage}
                alt="Healthcare Community"
                className="w-full h-64 object-cover rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="medical-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 medical-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-primary font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Info */}
            <Card className="medical-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-foreground">Response Time</h4>
                </div>
                <p className="text-muted-foreground mb-3">We typically respond within 24 hours during business days.</p>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-accent" />
                  <span className="text-foreground">Global support team available</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Global Offices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Global Offices</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="medical-card hover-lift h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{office.city}</h4>
                    <p className="text-sm text-primary font-medium mb-3">{office.type}</p>
                    <p className="text-muted-foreground text-sm mb-2">{office.address}</p>
                    <p className="text-foreground font-medium">{office.phone}</p>
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

export default Contact;