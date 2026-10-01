import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Smartphone, Clock } from "lucide-react";
import logo from "../assets/logo.png";
import mapImage from "../assets/images/dotted_map.png";

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-1.1 0-2 .9-2 2v1h3l-1 3h-2v6.8C18.56 20.87 22 16.84 22 12z"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.16-3.8c-1.06 0-1.84.52-2.16 1.14v-1h-2.14v9.64h2.15v-5.06c0-.82.16-1.62 1.15-1.62 1 0 1 1 1 1.62v5.06h2.16M7 20.5H4.86V9.4H7v11.1M5.9 8.25c-.76 0-1.37-.6-1.37-1.35 0-.74.6-1.35 1.37-1.35.75 0 1.36.6 1.36 1.35 0 .75-.6 1.35-1.36 1.35z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.36.88.4.4.66.8.88 1.36.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.88 1.36-.4.4-.8.66-1.36.88-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.36-.88-.4-.4-.66-.8-.88-1.36-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.88-1.36.4-.4.8-.66 1.36-.88.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63c-.8.3-1.47.73-2.14 1.4-.67.67-1.1 1.34-1.4 2.14-.3.76-.5 1.63-.56 2.91C0.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.8.73 1.47 1.4 2.14.67.67 1.34 1.1 2.14 1.4.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.8-.3 1.47-.73 2.14-1.4.67-.67 1.1-1.34 1.4-2.14.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.3-.8-.73-1.47-1.4-2.14-.67-.67-1.34-1.1-2.14-1.4-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4.56c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.58 2.17-2.73-.95.56-2 1-3.1 1.23-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.13 1.12-4.09-.2-7.7-2.16-10.14-5.14-.42.72-.66 1.56-.66 2.47 0 1.7.87 3.2 2.18 4.08-.8-.03-1.56-.25-2.22-.61v.06c0 2.38 1.69 4.36 3.93 4.81-.41.11-.85.17-1.3.17-.32 0-.62-.03-.92-.09.63 1.95 2.44 3.37 4.58 3.41-1.68 1.32-3.8 2.1-6.1 2.1-.4 0-.79-.02-1.18-.07 2.17 1.39 4.75 2.2 7.51 2.2 9.02 0 13.95-7.47 13.95-13.95 0-.21 0-.42-.02-.63.96-.69 1.8-1.55 2.46-2.53z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative w-full text-white font-sans bg-[#1c2833] overflow-hidden mt-20 ">
      {/* Top Gradient Area */}
      <div 
        className="relative bg-gradient-to-br from-[#0231aa] via-[#0295ce] to-[#12d287] pt-24 pb-64 px-6 lg:px-24"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%)' }}
      >
        {/* Map Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[70%] h-[120%] pointer-events-none flex items-center justify-end"
        >
           <img src={mapImage} alt="Map" className="h-full object-contain object-right mix-blend-screen opacity-70" />
        </motion.div>

        <div className="relative z-10 max-w-[1200px] mx-auto text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-white/60"></div>
            <p className="text-sm font-semibold tracking-[0.2em] text-white/90 capitalize">
              Established in 1997
            </p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl font-bold leading-tight font-display drop-shadow-lg"
          >
            Al Khaleej <br />
            <span className="text-[#32f2f1] drop-shadow-[0_0_15px_rgba(50,242,241,0.4)]">Drug Store</span>
          </motion.h2>
        </div>
      </div>

      {/* Main Bottom Section Wrapper */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 lg:px-24 -mt-40 md:-mt-48">
        
        {/* Newsletter Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2b6ba1] via-[#4096a6] to-[#55b18b] rounded-2xl md:rounded-[2rem] p-8 md:p-14 shadow-2xl backdrop-blur-md mb-20 relative overflow-hidden border border-white/10"
        >
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light mb-4 text-white capitalize">
              Sign Up <span className="font-bold">For Newsletter</span>
            </h3>
            <p className="text-sm md:text-base text-white/90 mb-8 font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida.
            </p>
            
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="relative w-full sm:flex-1 group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#0f092d] transition-colors" />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white text-gray-800 rounded-full py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#170f3b] shadow-inner transition-shadow text-center sm:text-left"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-[#1c2833] hover:bg-[#121a22] text-white font-semibold rounded-full py-4 px-8 transition-all duration-300 text-sm tracking-wider whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </motion.div>

        {/* Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 pt-8 text-center md:text-left">
          
          {/* Column 1: Brand & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <img 
              src={logo} 
              alt="Al Khaleej Logo" 
              className="w-40 mb-6 brightness-0 invert opacity-90" 
            />
            <p className="text-sm text-white/80 mb-8 leading-relaxed font-light max-w-[280px]">
              A leading distributor, retailer and complete healthcare provider, delivering trusted medicines and supplements across the UAE since 1997.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all hover:bg-white/10 hover:scale-110">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all hover:bg-white/10 hover:scale-110">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all hover:bg-white/10 hover:scale-110">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all hover:bg-white/10 hover:scale-110">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-display text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/80 font-light flex flex-col items-center md:items-start">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Home</Link></li>
              <li><Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition-transform">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Products</Link></li>
              <li><Link to="/distribution" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Distribution</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-display text-white mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/80 font-light flex flex-col items-center md:items-start">
              {/* <li className="flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-[#32f2f1] mr-3 shrink-0" />
                <span>Serving all 7 Emirates across the UAE</span>
              </li> */}
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 text-[#32f2f1] mr-3 shrink-0" />
                <a href="mailto:info@khaleejdrugstore.ae" className="hover:text-white transition-colors">
                  info@khaleejdrugstore.ae
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 text-[#32f2f1] mr-3 shrink-0" />
                <span>+971 6 742 2087</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Smartphone className="w-5 h-5 text-[#32f2f1] mr-3 shrink-0" />
                <span>+971 58 982 4270</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-display text-white mb-6">Working Hours</h4>
            <div className="flex items-center justify-center md:justify-start text-sm font-light text-white/80 text-center md:text-left">
              <Clock className="w-5 h-5 text-[#32f2f1] mr-3 shrink-0" />
              <div>
                <p className="mb-2">Monday - Saturday</p>
                <p className="text-white font-medium">9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Bottom copyright row */}
        <div className="border-t border-white/10 pt-8 my-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 text-center md:text-left gap-4 md:gap-0">
          <p>© {new Date().getFullYear()} Al Khaleej Store for Drugs and Medical Instruments.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
