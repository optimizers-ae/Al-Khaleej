import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  TrendingUp,
  Globe2,
  ChevronLeft,
  ChevronRight,
  Hospital,
  Store,
  Building,
  Landmark,
  Search,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Stethoscope,
} from "lucide-react";
import wholesaleImg from "../assets/images/pharma_wholesale_vector.jpg";
import heroMapImg from "../assets/images/uae_distribution_map.jpg";
import logisticsImg from "../assets/images/pharma_logistics.jpg";

import supplier1 from "../assets/suppliers/supplier-1.png";
import supplier2 from "../assets/suppliers/supplier-2.png";
import supplier3 from "../assets/suppliers/supplier-3.png";
import supplier4 from "../assets/suppliers/supplier-4.png";
import supplier5 from "../assets/suppliers/supplier-5.png";
import supplier6 from "../assets/suppliers/supplier-6.png";
import supplier7 from "../assets/suppliers/supplier-7.png";
import supplier8 from "../assets/suppliers/supplier-8.png";
import supplier9 from "../assets/suppliers/supplier-9.png";
import supplier10 from "../assets/suppliers/supplier-10.png";
import supplier12 from "../assets/suppliers/supplier-12.png";
import supplier13 from "../assets/suppliers/supplier-13.png";
import supplier14 from "../assets/suppliers/supplier-14.png";

const suppliers = [
  supplier1, supplier2, supplier3, supplier4, supplier5,
  supplier6, supplier7, supplier8, supplier9, supplier10,
  supplier12 , supplier13 , supplier14
];

const customerCategories = [
  "All",
  "Hospitals & Medical Centers",
  "Pharmacy Chains",
  "Government & Institutional",
  "Specialized Clinics",
];

const customers = [
  {
    name: "Thumbay Hospital & University Medical Centers",
    category: "Hospitals & Medical Centers",
    location: "Ajman, Dubai & Sharjah",
    type: "Tertiary Hospital Network",
    icon: Hospital,
  },
  {
    name: "Sheikh Khalifa Medical City & Hospitals",
    category: "Government & Institutional",
    location: "Ajman & Northern Emirates",
    type: "Government Healthcare Institution",
    icon: Landmark,
  },
  {
    name: "Ministry of Health & Prevention (MOHAP) Entities",
    category: "Government & Institutional",
    location: "All 7 Emirates, UAE",
    type: "Federal Healthcare Network",
    icon: Landmark,
  },
  {
    name: "Emirates Health Services (EHS) Network",
    category: "Government & Institutional",
    location: "Northern Emirates, UAE",
    type: "Public Health System",
    icon: Landmark,
  },
  {
    name: "Amina Hospital & Medical Centers",
    category: "Hospitals & Medical Centers",
    location: "Ajman & Northern Emirates",
    type: "Multi-Specialty Hospital",
    icon: Hospital,
  },
  {
    name: "Prime Hospital & Prime Medical Centers",
    category: "Hospitals & Medical Centers",
    location: "Dubai & Northern Emirates",
    type: "Tertiary Multi-Specialty Hospital",
    icon: Hospital,
  },
  {
    name: "Aster DM Healthcare & Aster Hospitals",
    category: "Hospitals & Medical Centers",
    location: "Across UAE",
    type: "Integrated Healthcare Network",
    icon: Hospital,
  },
  {
    name: "NMC Healthcare & Specialty Hospitals",
    category: "Hospitals & Medical Centers",
    location: "Across UAE",
    type: "Multi-facility Healthcare Provider",
    icon: Hospital,
  },
  {
    name: "Saudi German Hospital & Clinics",
    category: "Hospitals & Medical Centers",
    location: "Dubai, Sharjah & Ajman",
    type: "Academic & Tertiary Hospital",
    icon: Hospital,
  },
  {
    name: "Zulekha Hospital & Diagnostic Centers",
    category: "Hospitals & Medical Centers",
    location: "Sharjah & Dubai",
    type: "Comprehensive Hospital Group",
    icon: Hospital,
  },
  {
    name: "Life Pharmacy Group",
    category: "Pharmacy Chains",
    location: "Across UAE (400+ Outlets)",
    type: "Premier Retail Pharmacy Chain",
    icon: Store,
  },
  {
    name: "Aster Pharmacy Network",
    category: "Pharmacy Chains",
    location: "Across UAE",
    type: "Community Pharmacy Chain",
    icon: Store,
  },
  {
    name: "Boots Pharmacy Group",
    category: "Pharmacy Chains",
    location: "All 7 Emirates, UAE",
    type: "International Pharmacy Retailer",
    icon: Store,
  },
  {
    name: "Supercare Pharmacy Chain",
    category: "Pharmacy Chains",
    location: "Dubai & Northern Emirates",
    type: "Premium Health & Wellness Pharmacy",
    icon: Store,
  },
  {
    name: "BinSina Pharmacy Group",
    category: "Pharmacy Chains",
    location: "Across UAE",
    type: "Heritage Pharmacy Chain",
    icon: Store,
  },
  {
    name: "Thumbay Pharmacy Group",
    category: "Pharmacy Chains",
    location: "Ajman, Sharjah & Dubai",
    type: "Hospital & Community Pharmacies",
    icon: Store,
  },
  {
    name: "Medcom Pharmacy Chain",
    category: "Pharmacy Chains",
    location: "Dubai & Northern Emirates",
    type: "Retail & Clinical Pharmacies",
    icon: Store,
  },
  {
    name: "Al Manara Pharmacy Group",
    category: "Pharmacy Chains",
    location: "Across UAE",
    type: "Community Retail Pharmacy Chain",
    icon: Store,
  },
  {
    name: "Dar Al Shifa Pharmacy Chain",
    category: "Pharmacy Chains",
    location: "Ajman & Northern Emirates",
    type: "Retail Community Pharmacy Network",
    icon: Store,
  },
  {
    name: "Fakeeh University Hospital & Clinics",
    category: "Hospitals & Medical Centers",
    location: "Dubai, UAE",
    type: "Academic Medical Center",
    icon: Hospital,
  },
  {
    name: "Medcare Hospitals & Medical Centres",
    category: "Specialized Clinics",
    location: "Dubai & Sharjah",
    type: "Specialized Care Clinics",
    icon: Stethoscope,
  },
  {
    name: "Al Ahli Specialized Medical Clinics",
    category: "Specialized Clinics",
    location: "Ajman & Northern Emirates",
    type: "Multi-Specialty Polyclinic",
    icon: Stethoscope,
  },
  {
    name: "Universal Medical Centres & Day Surgeries",
    category: "Specialized Clinics",
    location: "Ajman & Sharjah",
    type: "Ambulatory & Day Surgery Care",
    icon: Stethoscope,
  },
  {
    name: "Derma & Aesthetic Healthcare Centers",
    category: "Specialized Clinics",
    location: "Dubai, Sharjah & Ajman",
    type: "Clinical Dermatology & Aesthetics",
    icon: Stethoscope,
  },
];

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

const Eyebrow = ({ text }) => (
  <div className="flex items-center space-x-3 mb-6">
    <div className="h-[2px] w-6 bg-medical-teal rounded-full" />
    <span className="text-xs font-bold tracking-[0.15em] capitalize text-charcoal/70">{text}</span>
  </div>
);

const Distribution = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCustomerCategory, setActiveCustomerCategory] = useState("All");
  const [customerSearch, setCustomerSearch] = useState("");

  const filteredCustomers = customers.filter((cust) => {
    const matchesCategory =
      activeCustomerCategory === "All" || cust.category === activeCustomerCategory;
    const matchesSearch =
      cust.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
      cust.location.toLowerCase().includes(customerSearch.toLowerCase()) ||
      cust.type.toLowerCase().includes(customerSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (isHovered) return;
    let animationFrameId;
    const scroll = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const nextSlide = () => sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  const prevSlide = () => sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });

  return (
    <main className="w-full bg-white overflow-x-hidden pb-20">
      <section className="relative w-full h-[65vh] min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden mb-20 bg-[#121212]">
        {/* Background Image (Right) */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="w-full lg:w-[60%] h-full">
            <img 
              src={heroMapImg} 
              alt="Distribution Network" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        
        {/* Solid Color Overlay (Left) - Tablet & Desktop */}
        <div 
          className="absolute inset-0 z-10 bg-medical-teal w-full md:w-[75%] lg:w-[65%] h-full hidden md:block"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
        ></div>
        
        {/* Mobile Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-medical-teal via-medical-teal/80 to-transparent md:hidden"></div>
        {/* Desktop Overlay  */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-medical-teal from-50% via-medical-teal/80 via-60% to-transparent hidden md:block"></div>


        {/* Content */}
        <div className="relative z-30 max-w-[1440px] mx-auto px-6 lg:px-12 w-full mt-16 lg:mt-0">
          <div className="max-w-xl text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold mb-6 font-display text-white"
            >
              Distribution
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl font-light leading-relaxed"
            >
              All divisions strive to deliver the best healthcare products and services from around the world into the dynamic and fast-growing UAE healthcare ecosystem.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="rounded-[32px] overflow-hidden shadow-2xl h-[500px]">
            <img src={logisticsImg} alt="Pharmaceutical Logistics Center" className="w-full h-full object-cover" />
          </FadeIn>
          
          <FadeIn direction="left">
            <h2 className="text-3xl lg:text-4xl mb-8">Empowering Healthcare Providers</h2>
            <div className="space-y-6">
              {[
                { title: "Nationwide Coverage", desc: "Serving all 7 Emirates with an efficient, fast-acting logistical network.", icon: Globe2 },
                { title: "Trusted by Government", desc: "Proudly supplying to 19+ Government institutions and hospitals.", icon: Building2 },
                { title: "Assured Quality", desc: "Strict adherence to storage and transportation guidelines maintaining product integrity.", icon: CheckCircle2 },
                { title: "Scalable Operations", desc: "Fully equipped to handle wholesale distributions of any scale with precision.", icon: TrendingUp },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-medical-teal/10 flex items-center justify-center shrink-0 mr-5 mt-1">
                    <item.icon className="w-6 h-6 text-medical-teal" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-charcoal/60 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      
      <section className="bg-off-white py-24">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl lg:text-5xl mb-6">Our Suppliers</h2>
              <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light">
                We exclusively distribute products from world-renowned brands and our trusted in-house labels.
              </p>
            </FadeIn>
            {/* <FadeIn className="flex space-x-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md transition-all bg-white"
              >
                <ChevronLeft className="w-5 h-5 text-charcoal" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md transition-all bg-white"
              >
                <ChevronRight className="w-5 h-5 text-charcoal" />
              </button>
            </FadeIn> */}
          </div>

          <FadeIn>
            <div className="relative -mx-4 px-4 lg:mx-0 lg:px-0">
              <div
                ref={sliderRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex space-x-6 overflow-x-auto pb-8 pt-4 items-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {[...suppliers, ...suppliers].map((logo, i) => (
                  <div 
                    key={i} 
                    className={`w-[184px] min-w-[184px] md:w-[253px] md:min-w-[253px] h-32 md:h-40 bg-white rounded-2xl border transition-all flex items-center justify-center p-6 shrink-0 ${
                      i % suppliers.length === 4 || i % suppliers.length === 5 
                        ? 'border-medical-teal shadow-[0_8px_30px_rgba(18,210,135,0.25)] ring-2 ring-medical-teal/20 scale-105 z-10 relative' 
                        : 'border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-medical-teal hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1'
                    }`}
                  >
                    <img src={logo} alt={`Supplier ${(i % suppliers.length) + 1}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OUR CUSTOMERS SECTION */}
      <section className="py-24 max-w-[1440px] mx-auto px-4 lg:px-12 bg-white">
        <FadeIn className="text-center mb-16">
          <Eyebrow text="Our Valued Clients" />
          <h2 className="text-3xl lg:text-5xl font-bold mb-5 text-charcoal">
            Our Healthcare Customers
          </h2>
          <p className="text-charcoal/60 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            From premier hospital networks and government healthcare entities to community pharmacy chains and specialized clinics, Al Khaleej is proud to supply over 500+ organizations across the United Arab Emirates.
          </p>
        </FadeIn>

        {/* Customer Stats Row */}
        <FadeIn delay={0.1} className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { stat: "500+", label: "Healthcare Clients", desc: "Active across the UAE" },
              { stat: "19+", label: "Government Entities", desc: "Hospitals & health centers" },
              { stat: "100%", label: "Emirates Coverage", desc: "Delivering to all 7 Emirates" },
              { stat: "26+", label: "Years in Wholesale", desc: "Consistent supply since 1997" },
            ].map((item, i) => (
              <div key={i} className="bg-medical-teal/[0.04] border border-medical-teal/15 rounded-2xl p-6 text-center">
                <span className="text-3xl lg:text-4xl font-bold text-medical-blue mb-1 block">
                  {item.stat}
                </span>
                <span className="text-sm font-semibold text-charcoal block mb-0.5">
                  {item.label}
                </span>
                <span className="text-xs text-charcoal/50 font-light block">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Search and Category Filter Toolbar */}
        <FadeIn delay={0.2} className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
              {customerCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCustomerCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeCustomerCategory === cat
                      ? "bg-medical-blue text-white shadow-md scale-105"
                      : "bg-off-white text-charcoal/70 border border-gray-200 hover:border-medical-teal hover:text-medical-teal"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-charcoal/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search customers or locations..."
                value={customerSearch}
                onChange={(e) => setCustomerSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-off-white border border-gray-200 rounded-full text-xs focus:ring-2 focus:ring-medical-teal/50 outline-none transition-shadow"
              />
              {customerSearch && (
                <button
                  onClick={() => setCustomerSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Customer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((cust, i) => {
              const Icon = cust.icon;
              return (
                <FadeIn key={i} delay={0.03 * (i % 6)}>
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-medical-teal/10 flex items-center justify-center text-medical-teal group-hover:scale-110 group-hover:bg-medical-teal group-hover:text-white transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-[11px] font-semibold text-charcoal/60 rounded-full">
                          {cust.category}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-charcoal mb-2 group-hover:text-medical-teal transition-colors leading-snug">
                        {cust.name}
                      </h4>
                      <p className="text-xs text-charcoal/60 font-light mb-4">
                        {cust.type}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal/70">
                      <div className="flex items-center text-charcoal/60">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-medical-teal shrink-0" />
                        <span className="font-light">{cust.location}</span>
                      </div>
                      <div className="flex items-center text-medical-teal font-semibold text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                        <span>Partner</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 bg-off-white/50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-charcoal/60 text-sm mb-3">No customers match your search criteria.</p>
              <button
                onClick={() => {
                  setActiveCustomerCategory("All");
                  setCustomerSearch("");
                }}
                className="text-xs font-semibold text-medical-teal hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Partnership Call to Action */}
        <FadeIn>
          <div className="rounded-[32px] p-8 md:p-12 bg-gradient-to-r from-medical-blue via-[#1d5282] to-medical-teal text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 text-white/90">
                Institutional & Wholesale Partnership
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Become an Al Khaleej Supply Partner
              </h3>
              <p className="text-white/85 text-sm md:text-base font-light leading-relaxed">
                Source genuine medicines, clinical supplements, UBiK derma care, and hospital consumables with guaranteed cold-chain compliance and reliable delivery across all Emirates.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-white text-medical-blue font-bold px-8 py-4 rounded-full hover:bg-off-white hover:shadow-lg transition-all shrink-0 text-sm"
            >
              Request Supply Account <ArrowRight className="inline ml-2 w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
};

export default Distribution;
