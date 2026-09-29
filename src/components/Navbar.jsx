import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer flex items-center">
          <img 
            src={logo} 
            alt="Al Khaleej Store for Drugs and Medical Instruments" 
            className="w-[200px] lg:w-[280px] h-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {["Home", "About", "Products", "Distribution", "Retail Pharmacies", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-charcoal hover:text-medical-teal transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-medical-blue to-medical-teal text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5">
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button - simplified */}
        <div className="lg:hidden">
          <button className="text-charcoal p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;