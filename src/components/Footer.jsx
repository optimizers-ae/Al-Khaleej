import React from 'react';
import { Mail, Phone, Clock, MapPin, Smartphone } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-16 pb-8 mt-auto text-white/70">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <img src={logo} className="w-[220px] bg-white p-3 rounded-xl mb-6 object-contain" alt="Al Khaleej Store Logo" />
          <p className="text-sm leading-relaxed max-w-xs font-light">
            A leading distributor, retailer and complete healthcare provider, delivering trusted medicines, supplements and medical instruments across the UAE since 1997.
          </p>
        </div>

        <div>
          <h4 className="text-white font-display text-xl mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-medical-teal transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-medical-teal transition-colors">About Us</a></li>
            <li><a href="#products" className="hover:text-medical-teal transition-colors">Products</a></li>
            <li><a href="#distribution" className="hover:text-medical-teal transition-colors">Distribution</a></li>
            <li><a href="#retail-pharmacies" className="hover:text-medical-teal transition-colors">Retail Pharmacies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-xl mb-6 tracking-wide">Contact Info</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-medical-teal mr-3 shrink-0 mt-0.5" />
              <span>Al Muwaihat, Ajman, UAE</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-medical-teal mr-3 shrink-0" />
              <a href="mailto:info@khaleejdrugstore.ae" className="hover:text-white transition-colors">info@khaleejdrugstore.ae</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-medical-teal mr-3 shrink-0" />
              <span>+971 6 742 2087</span>
            </li>
            <li className="flex items-center">
              <Smartphone className="w-5 h-5 text-medical-teal mr-3 shrink-0" />
              <span>+971 58 982 4270</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-xl mb-6 tracking-wide">Working Hours</h4>
          <div className="flex items-start text-sm font-light">
            <Clock className="w-5 h-5 text-medical-teal mr-3 shrink-0 mt-0.5" />
            <div>
              <p className="mb-2">Monday - Saturday</p>
              <p className="text-white font-medium">9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs">
        <p>© {new Date().getFullYear()} Al Khaleej Store for Drugs and Medical Instruments. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;