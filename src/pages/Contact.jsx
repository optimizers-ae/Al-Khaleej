import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import contactBannerImg from "../assets/images/contact_banner.jpg";

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yOffset, x: xOffset }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="w-full bg-white overflow-x-hidden pt-20 pb-20">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center bg-medical-blue overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={contactBannerImg} alt="Contact Customer Service" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-medical-blue to-[#0cb5a9]/50" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-12 w-full py-20">
          <FadeIn>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-[2px] w-6 bg-white rounded-full" />
              <span className="text-xs lg:text-sm font-bold tracking-[0.2em] text-white/90 capitalize">
                Get In Touch
              </span>
            </div>
            <h1 className="text-white text-4xl lg:text-6xl mb-6 leading-tight max-w-3xl">
              We're Here to Help You
            </h1>
            <p className="text-white/80 text-lg max-w-2xl font-light">
              Reach out to us for product inquiries, distribution partnerships, or general support. Our dedicated team will get back to you promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <FadeIn direction="right" className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl mb-10">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-medical-teal/10 rounded-2xl flex items-center justify-center shrink-0 mr-6">
                  <MapPin className="w-6 h-6 text-medical-teal" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Our Location</h4>
                  <p className="text-charcoal/70 font-light leading-relaxed">
                    Al Muwaihat<br/>
                    Ajman, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-medical-teal/10 rounded-2xl flex items-center justify-center shrink-0 mr-6">
                  <Phone className="w-6 h-6 text-medical-teal" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Phone</h4>
                  <p className="text-charcoal/70 font-light mb-1">Mobile: <a href="tel:+971589824270" className="hover:text-medical-teal">+971 58 982 4270</a></p>
                  <p className="text-charcoal/70 font-light">Landline: <a href="tel:+97167422087" className="hover:text-medical-teal">+971 6 742 2087</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-medical-teal/10 rounded-2xl flex items-center justify-center shrink-0 mr-6">
                  <Mail className="w-6 h-6 text-medical-teal" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <p className="text-charcoal/70 font-light">
                    <a href="mailto:info@khaleejdrugstore.ae" className="hover:text-medical-teal">info@khaleejdrugstore.ae</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-medical-teal/10 rounded-2xl flex items-center justify-center shrink-0 mr-6">
                  <Clock className="w-6 h-6 text-medical-teal" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Working Hours</h4>
                  <p className="text-charcoal/70 font-light">
                    Monday - Saturday<br/>
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-gray-100">
              <h3 className="text-2xl lg:text-3xl mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-off-white border-none rounded-xl focus:ring-2 focus:ring-medical-teal/50 outline-none transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-off-white border-none rounded-xl focus:ring-2 focus:ring-medical-teal/50 outline-none transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-off-white border-none rounded-xl focus:ring-2 focus:ring-medical-teal/50 outline-none transition-shadow"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-5 py-4 bg-off-white border-none rounded-xl focus:ring-2 focus:ring-medical-teal/50 outline-none transition-shadow resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center bg-medical-blue text-white py-4 px-8 rounded-xl font-bold hover:bg-medical-teal transition-colors duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] lg:h-[600px] w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14416.334073566033!2d55.4412699!3d25.4020148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98f1a2b852ec4200!2sAL%20KHALEEJ%20STORE%20FOR%20DRUGS!5e0!3m2!1sen!2sae!4v1656319455476!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Al Khaleej Drug Store Location"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
