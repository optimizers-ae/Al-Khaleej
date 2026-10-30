import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import heroPharmacyImg from "../assets/images/hero_pharmacy.png";
import heroPharmacyMobileImg from "../assets/images/hero-pharmacy-mobile.webp";
import catPharmaImg from "../assets/images/cat_pharma.jpg";
import catSupplementsImg from "../assets/images/cat_supplements.jpg";
import catInstrumentsImg from "../assets/images/cat_instruments.jpg";
import catEssentialsImg from "../assets/images/cat_essentials.jpg";
import wholesaleImg from "../assets/images/pharma_wholesale_vector.jpg";
import logisticsImg from "../assets/images/pharma_logistics.jpg";
import uaeMapImg from "../assets/images/simple_uae_map.jpg";

import imgHyaluGel from "../assets/products/ubik_hyalugel.png";
import imgZBlock from "../assets/products/ubik_z_block.png";
import imgSebonia from "../assets/products/ubik_sebonia.png";
import imgHydraSun from "../assets/products/ubik_hydrasun.png";
import imgLipzlite from "../assets/products/ubik_lipzlite.png";
import imgOvaPure from "../assets/products/ova_pure.png";
import imgPregnaPure from "../assets/products/pregna_pure.png";
import imgPureOmegaD3 from "../assets/products/pure_omega_d3.png";
import imgPureBiotin from "../assets/products/pure_biotin.png";
import imgVoxC from "../assets/products/voxrol-c.png";
import imgVoxrolD3 from "../assets/products/voxrol-d3.png";
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
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, y: yOffset, x: xOffset }
      }
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
    <span className="text-xs font-bold tracking-[0.15em] capitalize text-charcoal/70">
      {text}
    </span>
  </div>
);

const featuredProducts = [
  { name: "HyaluGel 30g", brand: "UBiK", category: "Dermatology", img: imgHyaluGel, desc: "Aqueous Hyaluronic Acid Gel" },
  { name: "Z Block SPF 50+", brand: "UBiK", category: "Sun Protection", img: imgZBlock, desc: "100% Zinc Oxide Sunscreen Gel" },
  { name: "Sebonia Serum 20ml", brand: "UBiK", category: "Skincare", img: imgSebonia, desc: "Niacinamide Zinc Blemish Treatment" },
  { name: "HydraSun SPF 30", brand: "UBiK", category: "Sun Protection", img: imgHydraSun, desc: "Moisturising Sunscreen Cream 50g" },
  { name: "Lipzlite Cream 15g", brand: "UBiK", category: "Lip Care", img: imgLipzlite, desc: "Paraben-Free Lip Lightening Formula" },
  { name: "Pure Omega D3", brand: "Pure Cure", category: "Supplements", img: imgPureOmegaD3, desc: "Cardiovascular & Brain Health Softgels" },
  // { name: "Pregna Pure", brand: "Pure Cure", category: "Maternal Care", img: imgPregnaPure, desc: "Complete Maternal Nutritional Support" },
  { name: "Pure Biotin", brand: "Pure Cure", category: "Beauty & Wellness", img: imgPureBiotin, desc: "Hair, Skin & Nail Formula" },
  { name: "Vox C Chewable", brand: "Vox Dei Labs", category: "Immunity", img: imgVoxC, desc: "Vitamin C + Zinc + Vitamin D3" },
  { name: "Voxrol D3 1000 IU", brand: "Vox Dei Labs", category: "Bone Health", img: imgVoxrolD3, desc: "Clinical Vitamin D3 Tablets" },
  { name: "Lacto Vox", brand: "Vox Dei Labs", category: "Digestive Health", img: imgLactoVox, desc: "Probiotic Multi-Strain Capsules" },
];

export default function Home() {
  const sliderRef = useRef(null);

  const nextSlide = () =>
    sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  const prevSlide = () =>
    sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  return (
    <main className="w-full bg-white overflow-x-hidden pb-20">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full">
          <div className="w-full h-full overflow-hidden">
            <picture>
              {/* Mobile image */}
              <source
                media="(max-width: 767px)"
                srcSet={heroPharmacyMobileImg}
              />

              {/* Desktop image */}
              <img
                src={heroPharmacyImg}
                alt="Premium Pharmacy Showcase"
                className="w-full h-full object-cove"
              />
            </picture>
          </div>
        </div>

        {/* Mobile readability gradient */}
        {/* <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/10 to-black/50 md:hidden" /> */}

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-12 w-full pt-10 pb-20 lg:pt-20 lg:pb-40 -mt-24 lg:mt-0">
          <FadeIn delay={0.1}>
            <div className="flex items-center space-x-3 mb-5 lg:mb-6">
              <div className="h-[2px] w-6 bg-medical-teal rounded-full" />

              <span className="text-xs lg:text-sm font-bold tracking-[0.2em] text-white/90 capitalize">
                Since 1997
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-[70px] mb-5 lg:mb-6 leading-[1.05] lg:leading-[1.1] max-w-4xl">
              Trusted Healthcare
              <br />
              Distribution
              <br />
              Across the UAE
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-white/90 text-sm lg:text-lg max-w-lg mb-8 lg:mb-10 leading-relaxed">
              A leading distributor, retailer and complete healthcare provider,
              delivering trusted medicines, supplements and medical instruments
              across the UAE.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="lg:pb-10">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-medical-blue px-7 py-4 rounded-full font-bold hover:bg-off-white transition-colors"
              >
                Enquire Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="relative z-10 bg-white w-full py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <FadeIn className="mb-10">
            <Eyebrow text="Core Services & Product Lines" />
            <h2 className="text-4xl lg:text-5xl capitalize">What We Offer</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Pharmaceuticals",
                sub: "Certified therapeutic formulations & essential medicines for pharmacies and clinics",
                img: catPharmaImg,
                link: "/products",
              },
              {
                title: "Dietary Supplements",
                sub: "Clinically formulated daily vitamins, omegas & minerals including Pure Cure range",
                img: catSupplementsImg,
                link: "/products",
              },
              {
                title: "Derma & Skincare",
                sub: "Advanced sunscreens, hyaluronic hydration & targeted serums including UBiK range",
                img: catEssentialsImg,
                link: "/products",
              },
              {
                title: "Medical Instruments",
                sub: "Precision diagnostic instruments, hospital essentials & surgical supplies",
                img: catInstrumentsImg,
                link: "/products",
              },
              {
                title: "Distribution & Marketing",
                sub: "Nationwide cold-chain distribution, regulatory compliance & strategic healthcare marketing",
                img: logisticsImg,
                link: "/distribution",
              },
            ].map((cat, i) => (
              <FadeIn key={i} delay={0.08 * i} className="group">
                <Link to={cat.link} className="block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="h-56 w-full overflow-hidden bg-gray-50">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold capitalize mb-2 group-hover:text-medical-teal transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-charcoal/60 font-light leading-relaxed">
                        {cat.sub}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-medical-teal group-hover:text-medical-blue transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRIBUTION SECTION */}
      <section className="bg-medical-teal/[0.03] w-full py-20 lg:py-32 border-y border-medical-teal/10">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <FadeIn>
                <Eyebrow text="Our Network" />
                <h2 className="text-4xl lg:text-5xl capitalize mb-6 leading-tight text-charcoal">
                  Comprehensive Distribution Across the UAE
                </h2>
                <p className="text-charcoal/70 text-lg mb-8 leading-relaxed font-light">
                  With a robust supply chain and deep industry expertise, Al Khaleej ensures that pharmacies, hospitals, and clinics across all seven Emirates have consistent access to premium healthcare products.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-medical-blue mb-2">100%</span>
                    <span className="text-sm font-medium text-charcoal/60 uppercase tracking-wider">Coverage in UAE</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-medical-teal mb-2">25+</span>
                    <span className="text-sm font-medium text-charcoal/60 uppercase tracking-wider">Years of Trust</span>
                  </div>
                </div>
                <Link
                  to="/distribution"
                  className="inline-flex items-center text-medical-teal font-semibold hover:text-medical-blue transition-colors group text-lg"
                >
                  Learn about our distribution
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <FadeIn delay={0.2} direction="left">
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-white p-2">
                  <div className="rounded-[24px] overflow-hidden relative h-[400px] bg-[#f8fafb]">
                    <img 
                      src={uaeMapImg} 
                      alt="UAE Distribution Network Map" 
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/60 to-transparent flex items-end p-8">
                      <p className="text-white text-xl font-medium drop-shadow-md">Reliable logistics for a healthier tomorrow.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS CAROUSEL */}
      <section className="bg-off-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-end mb-10">
            <FadeIn>
              <Eyebrow text="Product Portfolio" />
              <h2 className="text-4xl lg:text-5xl capitalize">
                Featured Formulations
              </h2>
            </FadeIn>

            <FadeIn className="flex space-x-3 hidden md:flex">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md transition-all"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5 text-charcoal" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md transition-all bg-white shadow-sm"
                aria-label="Next products"
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
              {featuredProducts.map((prod, i) => (
                <div
                  key={i}
                  className="min-w-[270px] lg:min-w-[310px] snap-start bg-white rounded-2xl p-6 lg:p-7 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center group"
                >
                  <div className="h-48 w-full bg-gray-50/70 rounded-xl mb-5 flex items-center justify-center overflow-hidden p-4">
                    <img
                      src={prod.img}
                      className="h-36 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                      alt={prod.name}
                      onError={(e) => (e.target.src = logo)}
                    />
                  </div>
                  <div className="w-full text-center">
                    <span className="inline-block px-2.5 py-0.5 bg-medical-teal/10 text-medical-teal text-[11px] font-bold rounded-full mb-2 uppercase tracking-wider">
                      {prod.brand}
                    </span>
                    <h4 className="text-base font-bold text-charcoal truncate group-hover:text-medical-teal transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-charcoal/60 font-light mt-1 mb-4 truncate">
                      {prod.desc}
                    </p>
                    <Link
                      to="/products"
                      className="inline-flex items-center text-xs font-semibold text-medical-blue hover:text-medical-teal transition-colors"
                    >
                      View Details <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA BANNER */}
      <section
        id="contact"
        className="max-w-[1440px] mx-auto px-4 lg:px-12 pb-12"
      >
        <FadeIn>
          <div className="rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative bg-medical-blue">
            <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center relative z-10 bg-gradient-to-b lg:bg-gradient-to-r from-medical-blue to-[#0cb5a9]">
              <p className="text-white/70 text-sm font-bold capitalize tracking-widest mb-2">
                Get in Touch
              </p>
              <h2 className="text-4xl lg:text-5xl text-white capitalize mb-2 leading-[1.1]">
                Let’s Work Together <br /> For A Healthier Tomorrow
              </h2>
              <p className="text-white/80 font-light text-lg mb-6 max-w-xl">
                For product enquiries, partnership opportunities or pharmacy
                support, our team is here to assist you.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-medical-blue px-8 py-3 rounded-full font-bold hover:bg-off-white transition-colors"
                >
                  Enquire Now <ArrowRight className="inline ml-2 w-4 h-4" />
                </Link>
                <div className="flex items-center text-white/90">
                  <MapPin className="w-5 h-5 mr-3 text-medical-green" />
                  <div>
                    <p className="font-semibold text-sm">Our Coverage</p>
                    <p className="text-xs text-white/70">
                      Serving all 7 Emirates across the UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[45%] min-h-[200px] h-[500px] relative bg-white">
              <img
                src={wholesaleImg}
                className="w-full h-full object-cover absolute inset-0"
                alt="Wholesale Distribution Center"
              />
              <div className="absolute top-0 left-0 w-full h-32 lg:w-40 lg:h-full bg-gradient-to-b lg:bg-gradient-to-r from-[#0cb5a9]  to-transparent" />
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
