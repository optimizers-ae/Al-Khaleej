import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

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

import heroPharmacyImg from "../assets/images/hero_pharmacy.jpg";
import heroPharmacyMobileImg from "../assets/images/hero-pharmacy-mobile.webp";
import catPharmaImg from "../assets/images/cat_pharma.jpg";
import catSupplementsImg from "../assets/images/cat_supplements.jpg";
import catInstrumentsImg from "../assets/images/cat_instruments.jpg";
import catEssentialsImg from "../assets/images/cat_essentials.jpg";
import wholesaleImg from "../assets/images/pharma_wholesale_vector.jpg";
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
    { name: "Lacto Vox", img: imgLactoVox },
  ];

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
                className="w-full h-full object-cover object-center"
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
            <Eyebrow text="Product Categories" />
            <h2 className="text-4xl lg:text-5xl capitalize">What We Offer</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pharmaceuticals",
                sub: "Trusted medicines for a healthier tomorrow",
                img: catPharmaImg,
              },
              {
                title: "Supplements",
                sub: "Nutrition for a better, healthier life",
                img: catSupplementsImg,
              },
              {
                title: "Medical Instruments",
                sub: "Quality instruments for better care",
                img: catInstrumentsImg,
              },
              {
                title: "Healthcare Essentials",
                sub: "Everyday products for safer living",
                img: catEssentialsImg,
              },
            ].map((cat, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <Link to="/products" className="block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl capitalize mb-2 group-hover:text-medical-teal transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 font-light">
                      {cat.sub}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS CAROUSEL */}
      {/* <section className="bg-off-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-end mb-10">
            <FadeIn>
              <Eyebrow text="Featured Products" />
              <h2 className="text-4xl lg:text-5xl capitalize">
                Premium Supply
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
      </section> */}

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
