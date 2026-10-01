import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

const products = [
  { name: "Ova Pure", img: imgOvaPure, category: "Pure Cure" },
  { name: "Pregna Pure", img: imgPregnaPure, category: "Pure Cure" },
  { name: "Pure Biotin", img: imgPureBiotin, category: "Pure Cure" },
  { name: "Pure D3 Drop", img: imgPureD3Drop, category: "Pure Cure" },
  { name: "Pure Fert", img: imgPureFert, category: "Pure Cure" },
  { name: "Pure Iron", img: imgPureIron, category: "Pure Cure" },
  { name: "Pure Omega D3", img: imgPureOmegaD3, category: "Pure Cure" },
  { name: "Voxrol D3", img: imgVoxrolD3, category: "Vox Dei Labs" },
  { name: "Vox C", img: imgVoxC, category: "Vox Dei Labs" },
  { name: "Ocal D3", img: imgOcalD3, category: "Vox Dei Labs" },
  { name: "Vox B", img: imgVoxB, category: "Vox Dei Labs" },
  { name: "Uro Cran", img: imgUroCran, category: "Vox Dei Labs" },
  { name: "Lacto Vox", img: imgLactoVox, category: "Vox Dei Labs" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", ...new Set(products.map(p => p.category))];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="w-full bg-white overflow-x-hidden pt-32 pb-20">
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 text-center mb-16">
        <FadeIn>
          <Eyebrow text="Our Offerings" />
          <h1 className="text-4xl lg:text-6xl mb-6 leading-tight max-w-3xl mx-auto">
            Premium Healthcare Products
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light">
            Discover our comprehensive range of high-quality pharmaceuticals, supplements, and healthcare essentials designed for a better life.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-medical-blue text-white shadow-md"
                  : "bg-white text-charcoal/70 border border-gray-200 hover:border-medical-teal hover:text-medical-teal"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((prod, i) => (
            <FadeIn key={`${prod.name}-${activeCategory}`} delay={0.05 * (i % 4)} className="group">
              <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center h-full">
                <div className="h-48 w-full bg-off-white rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={prod.img}
                    className="h-36 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    alt={prod.name}
                  />
                </div>
                <h4 className="text-xl font-bold text-center w-full text-charcoal mb-2">
                  {prod.name}
                </h4>
                <span className="px-3 py-1 bg-medical-teal/10 text-medical-teal text-xs font-semibold rounded-full uppercase tracking-wider">
                  {prod.category}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
