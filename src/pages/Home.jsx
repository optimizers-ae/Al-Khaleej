import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

import imgOvaPure from '../assets/products/ova_pure.png';
import imgPregnaPure from '../assets/products/pregna_pure.png';
import imgPureBiotin from '../assets/products/pure_biotin.png';
import imgPureD3Drop from '../assets/products/pure_d3_drop.png';
import imgPureFert from '../assets/products/pure_fert.png';
import imgPureIron from '../assets/products/pure_iron.png';
import imgPureOmegaD3 from '../assets/products/pure_omega_d3.png';
import imgVoxrolD3 from '../assets/products/voxrol-d3.png';
import imgVoxC from '../assets/products/voxrol-c.png';
import imgOcalD3 from '../assets/products/ocal-d3.png';
import imgVoxB from '../assets/products/vox-b.png';
import imgUroCran from '../assets/products/uro_cran.png';
import imgLactoVox from '../assets/products/lacto_vox.png';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const yOffset = direction === 'up' ? 40 : direction === 'down' ? -40 : 0;
  const xOffset = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;

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

const Eyebrow = ({ text }) => (
  <div className="flex items-center space-x-3 mb-6">
    <div className="h-[2px] w-6 bg-medical-teal rounded-full" />
    <span className="text-xs font-bold tracking-[0.15em] uppercase text-charcoal/70">
      {text}
    </span>
  </div>
);

export default function Home() {
  const sliderRef = useRef(null);
  const products = [
    { name: "Ova Pure", img: imgOvaPure },
    { name: "Pregna Pure", img: imgPregnaPure },
    { name: "Pure Biotin", img: imgPureBiotin },
    { name: "Pure D3 Drop", img: imgPureD3Drop },
    { name: "Pure Fert", img: imgPureFert },
    { name: "Pure Iron", img: imgPureIron },
    { name: "Pure Omega D3", img: imgPureOmegaD3 },
    { name: "Voxrol D3", img: imgVoxrolD3 },
    { name: "Vox C", img: imgVoxC },
    { name: "Ocal D3", img: imgOcalD3 },
    { name: "Vox B", img: imgVoxB },
    { name: "Uro Cran", img: imgUroCran },
    { name: "Lacto Vox", img: imgLactoVox }
  ];

  const nextSlide = () => sliderRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  const prevSlide = () => sliderRef.current?.scrollBy({ left: -320, behavior: 'smooth' });

  return (
    <main className="w-full bg-white overflow-hidden pb-20">
      
      {/* HERO SECTION */}
      <section className="max-w-[1880px] mx-auto px-4 lg:px-12 pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="relative rounded-[24px] lg:rounded-[32px] overflow-hidden bg-[#F8FAFC] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 min-h-[600px] flex items-center">
          
          {/* Background Image & Gradient */}
          <div className="absolute inset-0 z-0">
            {/* The image is pushed to the right on desktop, covering full width on mobile but with gradient over it */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full">
              <img 
                src="/generated/hero_pharmacy.jpg" 
                alt="Premium Pharmacy Showcase" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Gradient mask to blend the image seamlessly into the solid left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] from-40% md:from-50% via-[#F8FAFC]/95 to-transparent lg:w-[70%] z-10"></div>
          </div>

          <div className="relative z-20 p-8 lg:p-16 flex flex-col justify-center w-full lg:w-[65%]">
            <FadeIn delay={0.1}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-[2px] w-6 bg-medical-teal rounded-full" />
                <span className="text-sm font-bold tracking-[0.2em] text-medical-teal/80">
                  SINCE 1997
                </span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-[84px] leading-[1.1] lg:leading-[0.95] mb-6 text-charcoal font-medium">
                Trusted Healthcare <br/> 
                Distribution <br/>
                <span className="text-medical-blue">Across the UAE</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-sm sm:text-lg text-charcoal/80 max-w-lg mb-10 leading-relaxed font-light">
                A leading distributor, retailer and complete healthcare provider, delivering trusted medicines, supplements and medical instruments across the UAE.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <a href="#products" className="inline-flex items-center bg-gradient-to-r from-medical-blue to-medical-teal text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all w-max">
                Explore Products <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </FadeIn>

            <FadeIn delay={0.5} className="mt-12 lg:mt-16">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold tracking-widest text-medical-blue/70">
                <span>PHARMACEUTICALS</span>
                <span className="text-gray-300">|</span>
                <span>SUPPLEMENTS</span>
                <span className="text-gray-300">|</span>
                <span>MEDICAL INSTRUMENTS</span>
                <span className="text-gray-300">|</span>
                <span>HEALTHCARE ESSENTIALS</span>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-[1440px] mx-auto px-4 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeIn direction="right">
              <Eyebrow text="ABOUT US" />
              <h2 className="text-4xl lg:text-6xl uppercase mb-8 leading-[1.1]">
                HEALTHCARE SUPPLY <br/> THAT KEEPS CARE MOVING
              </h2>
              <p className="text-lg text-charcoal/70 mb-10 leading-relaxed font-light">
                Established in 1997 as a wholesale drugstore, Al Khaleej Store for Drugs and Medical Instruments has grown into a trusted distributor, retailer and complete healthcare provider in the UAE. We partner with leading brands to ensure the continuous supply of high quality medicines, supplements and medical instruments.
              </p>
              <a href="#distribution" className="inline-flex items-center text-medical-blue font-semibold hover:text-medical-teal transition-colors group">
                Learn More About Us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <FadeIn delay={0.1} className="bg-off-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-center aspect-square">
              <span className="text-5xl lg:text-6xl font-display text-medical-blue mb-2">25+</span>
              <span className="text-sm font-medium text-charcoal/70">Years of trusted healthcare service</span>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-medical-teal text-white p-8 rounded-2xl flex flex-col justify-center aspect-square shadow-lg">
              <span className="text-5xl lg:text-6xl font-display mb-2">340+</span>
              <span className="text-sm font-medium text-white/90">Customers across the UAE</span>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center aspect-square">
              <span className="text-5xl lg:text-6xl font-display text-charcoal mb-2">19+</span>
              <span className="text-sm font-medium text-charcoal/70">Government Institutions & Hospitals</span>
            </FadeIn>
            <FadeIn delay={0.4} className="bg-off-white p-6 rounded-2xl border border-gray-100 flex flex-col justify-center aspect-square">
              <span className="text-lg font-bold uppercase tracking-wider mb-2 text-charcoal">UAE-WIDE DISTRIBUTION</span>
              <span className="text-sm text-charcoal/70">Ensuring medicines and medical products reach every corner of the UAE</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="products" className="max-w-[1440px] mx-auto px-4 lg:px-12 py-16 lg:py-24">
        <FadeIn>
          <Eyebrow text="PRODUCT CATEGORIES" />
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Pharmaceuticals", sub: "Trusted medicines for a healthier tomorrow", img: "/generated/cat_pharma.jpg" },
            { title: "Supplements", sub: "Nutrition for a better, healthier life", img: "/generated/cat_supplements.jpg" },
            { title: "Medical Instruments", sub: "Quality instruments for better care", img: "/generated/cat_instruments.jpg" },
            { title: "Healthcare Essentials", sub: "Everyday products for safer living", img: "/generated/cat_essentials.jpg" },
          ].map((cat, i) => (
            <FadeIn key={i} delay={0.1 * i} className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="h-64 w-full overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl uppercase mb-2 group-hover:text-medical-teal transition-colors">{cat.title}</h3>
                  <p className="text-sm text-charcoal/60 font-light">{cat.sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS CAROUSEL */}
      <section className="bg-off-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-end mb-10">
            <FadeIn>
              <Eyebrow text="FEATURED PRODUCTS" />
              <h2 className="text-4xl lg:text-5xl uppercase">Premium Supply</h2>
            </FadeIn>
            
            <FadeIn className="flex space-x-3 hidden md:flex">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md transition-all">
                <ChevronLeft className="w-5 h-5 text-charcoal" />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md transition-all bg-white shadow-sm">
                <ChevronRight className="w-5 h-5 text-charcoal" />
              </button>
            </FadeIn>
          </div>

          <div className="relative -mx-4 px-4 lg:mx-0 lg:px-0">
            <div 
              ref={sliderRef}
              className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {products.map((prod, i) => (
                <div key={i} className="min-w-[260px] lg:min-w-[300px] snap-start bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow flex flex-col items-center">
                  <div className="h-48 w-full bg-gray-50/50 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                    <img src={prod.img} className="h-36 object-contain mix-blend-multiply hover:scale-110 transition-transform duration-500" alt={prod.name} onError={(e) => e.target.src='/images/mainlogo.png'} />
                  </div>
                  <h4 className="text-lg font-semibold text-center w-full text-charcoal truncate">{prod.name}</h4>
                  <p className="text-xs text-medical-teal font-medium mt-2 uppercase tracking-wider">Premium</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISTRIBUTION SECTION */}
      <section id="distribution" className="max-w-[1440px] mx-auto px-4 lg:px-12 py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="relative rounded-[24px] overflow-hidden shadow-xl border border-gray-100">
              <img src="/generated/warehouse_logistics.jpg" alt="Distribution Logistics" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </FadeIn>
          
          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <Eyebrow text="DISTRIBUTION & PARTNERS" />
              <h2 className="text-4xl lg:text-6xl uppercase mb-8 leading-[1.1]">
                RELIABLE SUPPLY.<br/>
                PROFESSIONAL SUPPORT.
              </h2>
              <p className="text-lg text-charcoal/70 mb-10 leading-relaxed font-light">
                We work with leading international and regional brands to ensure a consistent supply of high quality pharmaceuticals, supplements and medical instruments across the UAE.
              </p>
              <a href="#contact" className="inline-flex items-center bg-charcoal text-white px-8 py-4 rounded-full font-medium hover:bg-medical-blue transition-colors">
                Our Distribution Network <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn direction="right">
            <div className="bg-off-white rounded-3xl p-8 lg:p-12 border border-gray-100 flex flex-col h-full group hover:shadow-lg transition-shadow">
              <Eyebrow text="OUR MISSION" />
              <h2 className="text-3xl lg:text-5xl uppercase mb-6 leading-[1.1] group-hover:text-medical-teal transition-colors">
                BETTER HEALTH.<br/>BRIGHTER COMMUNITIES.
              </h2>
              <p className="text-charcoal/70 font-light leading-relaxed mb-10 flex-grow">
                To improve lives by ensuring the reliable supply of high quality medicines, supplements and medical instruments, while building long term partnerships with our customers and healthcare institutions.
              </p>
              <div className="h-64 rounded-2xl overflow-hidden mt-auto">
                <img src="/generated/mission_hands.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Our Mission" />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-off-white rounded-3xl p-8 lg:p-12 border border-gray-100 flex flex-col h-full group hover:shadow-lg transition-shadow">
              <Eyebrow text="OUR VISION" />
              <h2 className="text-3xl lg:text-5xl uppercase mb-6 leading-[1.1] group-hover:text-medical-teal transition-colors">
                A HEALTHIER UAE,<br/>TOGETHER.
              </h2>
              <p className=" text-charcoal/70 font-light leading-relaxed mb-10 flex-grow">
                To be a leading and trusted healthcare partner in the UAE, known for our commitment to quality, accessibility and exceptional service across distribution and retail.
              </p>
              <div className="h-64 rounded-2xl overflow-hidden mt-auto">
                <img src="/generated/vision_skyline.jpg" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" alt="Our Vision" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER CTA BANNER */}
      <section id="contact" className="max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
        <FadeIn>
          <div className="bg-medical-blue rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
            <div className="p-10 lg:p-16 flex-1 flex flex-col justify-center relative z-10">
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4">Get in Touch</p>
              <h2 className="text-4xl lg:text-5xl text-white uppercase mb-6 leading-[1.1]">
                LET’S WORK TOGETHER <br/> FOR A HEALTHIER TOMORROW
              </h2>
              <p className="text-white/80 font-light text-lg mb-10 max-w-xl">
                For product enquiries, partnership opportunities or pharmacy support, our team is here to assist you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button className="bg-white text-medical-blue px-8 py-4 rounded-full font-bold hover:bg-off-white transition-colors">
                  Enquire Now <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
                <div className="flex items-center text-white/90">
                  <MapPin className="w-5 h-5 mr-3 text-medical-green" />
                  <div>
                    <p className="font-semibold text-sm">Our Head Office Location</p>
                    <p className="text-xs text-white/70">Al Muwaihat, Ajman, UAE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[45%] min-h-[300px] relative">
              <img src="/generated/pharmacy_exterior.jpg" className="w-full h-full object-cover" alt="Al Khaleej Store Office" />
              <div className="absolute inset-0 bg-gradient-to-r from-medical-blue via-medical-blue/80 to-transparent lg:w-32 left-0" />
            </div>
          </div>
        </FadeIn>
      </section>
      
    </main>
  );
}