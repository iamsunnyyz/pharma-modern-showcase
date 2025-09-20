import { motion } from 'framer-motion';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Company': [
      { name: 'About Us', href: '#about' },
      { name: 'Leadership', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News & Media', href: '#' },
      { name: 'Investor Relations', href: '#' },
    ],
    'Our Business': [
      { name: 'Pharmaceuticals', href: '#divisions' },
      { name: 'Consumer Healthcare', href: '#divisions' },
      { name: 'Critical Care', href: '#divisions' },
      { name: 'Biologics', href: '#divisions' },
      { name: 'Animal Health', href: '#divisions' },
    ],
    'Innovation': [
      { name: 'Research & Development', href: '#innovation' },
      { name: 'Clinical Trials', href: '#' },
      { name: 'Partnerships', href: '#' },
      { name: 'Digital Health', href: '#' },
      { name: 'Sustainability', href: '#' },
    ],
    'Support': [
      { name: 'Patient Resources', href: '#' },
      { name: 'Healthcare Professionals', href: '#' },
      { name: 'Safety Information', href: '#' },
      { name: 'Product Information', href: '#' },
      { name: 'Contact Us', href: '#contact' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/brand.png"
                  alt="Zynera Life Sciences"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Pioneering healthcare solutions for over 70 years. Committed to improving lives
                through innovative medicines and global partnerships.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">info@zyneralifeSciences.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">123 Innovation Drive, Medical City</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-4 text-primary">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-6 mb-4 lg:mb-0"
          >
            <span className="text-gray-300">Follow Us:</span>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-gray-300 text-sm">
              <span>© {currentYear} ZyneraLife Sciences. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Compliance</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;