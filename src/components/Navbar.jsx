import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100"
          : "bg-white border-b border-gray-100 lg:bg-transparent lg:border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className={`flex-shrink-0 cursor-pointer flex items-center transition-all duration-300 ${
            !isScrolled 
              ? "lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:shadow-none" 
              : ""
          }`}
        >
          <img
            src={logo}
            alt="Al Khaleej Store for Drugs and Medical Instruments"
            className="w-[200px] lg:w-[280px] h-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {[
            "Home",
            "About",
            "Products",
            "Distribution",
            "Retail Pharmacies",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-charcoal hover:text-medical-teal"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-medical-blue to-medical-teal text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button - simplified */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none text-charcoal lg:text-white"
          >
            {isMobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg z-50"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {[
                "Home",
                "About",
                "Products",
                "Distribution",
                "Retail Pharmacies",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal hover:text-medical-teal transition-colors py-2 border-b border-gray-50 last:border-0"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-medical-blue to-medical-teal text-white rounded-full text-center font-medium shadow-md"
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
