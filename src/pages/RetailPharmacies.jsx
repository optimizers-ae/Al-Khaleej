import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Store, Play, Pause, ShieldCheck, Pill, Clock, HeartHandshake, ChevronLeft, ChevronRight } from "lucide-react";
import promoVideo from "../assets/video.mp4";
import imgOvaPure from "../assets/products/ova_pure.png";
import imgPregnaPure from "../assets/products/pregna_pure.png";
import imgPureBiotin from "../assets/products/pure_biotin.png";
import imgPureD3Drop from "../assets/products/pure_d3_drop.png";
import imgPureFert from "../assets/products/pure_fert.png";
import imgPureIron from "../assets/products/pure_iron.png";
import imgPureOmegaD3 from "../assets/products/pure_omega_d3.png";
import imgVoxrolD3 from "../assets/products/voxrol-d3.png";
import imgVoxC from "../assets/products/voxrol-c.png";
import imgOcalD3 from "../assets/products/ocal-d3.png";
import imgVoxB from "../assets/products/vox-b.png";
import imgUroCran from "../assets/products/uro_cran.png";
import imgLactoVox from "../assets/products/lacto_vox.png";
import logo from "../assets/logo.png";

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

const features = [
  {
    icon: ShieldCheck,
    title: "Expert Guidance",
    description: "Our certified pharmacists provide professional consultations and ensure you get the right medications."
  },
  {
    icon: Pill,
    title: "Extensive Inventory",
    description: "We stock a comprehensive range of prescription medicines, OTC drugs, and healthcare supplements."
  },
  {
    icon: Clock,
    title: "Always Accessible",
    description: "With multiple convenient locations across Ajman, your health needs are always covered."
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centric Care",
    description: "We prioritize your well-being with personalized services and a commitment to exceptional care."
  }
];

const pharmacies = [
  {
    name: "Dar Al Sai Pharmacy",
    address: "Rawdha 3, Ajman",
    phone: "+971 6 747 0590",
    mobile: "+971 58 535 2999"
  },
  {
    name: "Dar Al Shifa Pharmacy",
    address: "Bustan, Ajman",
    phone: "+971 6 740 0590",
    mobile: "+971 54 547 4694"
  },
  {
    name: "Royal Pharmacy",
    address: "Liwara, Ajman",
    phone: "+971 6 742 8119",
    mobile: "+971 50 246 1727"
  },
  {
    name: "Dar Al Mubarak Pharmacy",
    address: "Rashediya 2, Ajman",
    phone: "+971 6 747 7590",
    mobile: "+971 56 484 1909"
  },
  {
    name: "Meydan Pharmacy",
    address: "Hamediya, Ajman",
    phone: "+971 6 742 0590",
    mobile: "+971 56 581 6233"
  }
];

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
  { name: "Lacto Vox", img: imgLactoVox },
];

const RetailPharmacies = () => {
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  const prevSlide = () => sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="w-full bg-white overflow-x-hidden pt-32 pb-20">
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 text-center mb-16">
        <FadeIn>
          {/* <Eyebrow text="Our Retail Locations" /> */}
          <h1 className="text-4xl lg:text-6xl mb-6 leading-tight max-w-3xl mx-auto">
            Find Us Near You
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light mb-16">
            We operate multiple retail pharmacies across Ajman to ensure that premium healthcare and essential medicines are always within your reach.
          </p>
          
          <div className="relative w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgb(0,0,0,0.12)] group">
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto object-cover aspect-video"
            >
              <source src={promoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={togglePlay}
                className="bg-white/90 backdrop-blur text-medical-teal p-3 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all flex items-center justify-center"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
              </button>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {pharmacies.map((pharmacy, i) => (
            <FadeIn key={i} delay={0.1 * i} className="group min-w-[85%] sm:min-w-[400px] md:min-w-0 snap-center snap-always">
              <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:-rotate-12 duration-500">
                  <Store className="w-32 h-32" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-medical-teal/10 rounded-2xl flex items-center justify-center mb-6">
                    <Store className="w-6 h-6 text-medical-teal" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-charcoal">{pharmacy.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-medical-teal mr-3 shrink-0 mt-0.5" />
                      <p className="text-charcoal/70 font-light">{pharmacy.address}</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-medical-teal mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-charcoal/70 font-light mb-1">Landline: <a href={`tel:${pharmacy.phone.replace(/\s+/g, '')}`} className="hover:text-medical-teal transition-colors">{pharmacy.phone}</a></p>
                        <p className="text-charcoal/70 font-light">Mobile: <a href={`tel:${pharmacy.mobile.replace(/\s+/g, '')}`} className="hover:text-medical-teal transition-colors">{pharmacy.mobile}</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 mt-16">
        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-r from-[#2b6ba1] to-[#12d287] rounded-[32px] p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Shop Online From Home</h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 font-light">
                Can't make it to one of our locations? Discover our complete range of healthcare and wellness products online and enjoy convenient home delivery across the UAE.
              </p>
              <a 
                href="https://puremed.ae" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#2b6ba1] font-semibold rounded-full py-4 px-10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Visit puremed.ae
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* OUR COLLECTION CAROUSEL */}
      <section className="bg-off-white py-16 lg:py-24 mt-32 bg-gray-50 max-w-[1440px] mx-auto rounded-[40px]">
        <div className="px-4 lg:px-12">
          <div className="flex justify-between items-end mb-10">
            <FadeIn>
              <Eyebrow text="Our Offerings" />
              <h2 className="text-4xl lg:text-5xl capitalize">
                Our Collection
              </h2>
            </FadeIn>

            <FadeIn className="flex space-x-3 hidden md:flex">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-charcoal" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md transition-all bg-white shadow-sm"
              >
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
                <div
                  key={i}
                  className="min-w-[260px] lg:min-w-[300px] snap-start bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow flex flex-col items-center"
                >
                  <div className="h-48 w-full bg-gray-50/50 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={prod.img}
                      className="h-36 object-contain mix-blend-multiply hover:scale-110 transition-transform duration-500"
                      alt={prod.name}
                      onError={(e) => (e.target.src = logo)}
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-center w-full text-charcoal truncate">
                    {prod.name}
                  </h4>
                  <p className="text-xs text-medical-teal font-medium mt-2 capitalize tracking-wider">
                    Premium
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 mt-32">
        <div className="bg-medical-teal/[0.03] rounded-[40px] p-10 md:p-16 lg:p-24 border border-medical-teal/10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl lg:text-5xl mb-6 text-charcoal">Why Choose Us</h2>
              <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light">
                We are dedicated to providing the highest standard of pharmaceutical care and wellness products to our community.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={i} delay={0.1 * i} className="bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all">
                  <div className="w-14 h-14 bg-medical-teal/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-medical-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-charcoal">{feature.title}</h3>
                  <p className="text-charcoal/70 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RetailPharmacies;
