import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, CheckCircle2, TrendingUp, Globe2 } from "lucide-react";
import wholesaleImg from "../assets/images/pharma_wholesale_vector.jpg";

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
  return (
    <main className="w-full bg-white overflow-x-hidden pt-32 pb-20">
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 text-center mb-20">
        <FadeIn>
          <Eyebrow text="Distribution Network" />
          <h1 className="text-4xl lg:text-6xl mb-6 leading-tight max-w-4xl mx-auto">
            Extensive Reach, Unmatched Reliability
          </h1>
          <p className="text-charcoal/60 text-lg max-w-3xl mx-auto font-light">
            With a robust distribution network spanning the entire UAE, we ensure seamless, timely delivery of top-tier medical supplies to healthcare institutions, pharmacies, and clinics.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="rounded-[32px] overflow-hidden shadow-2xl h-[500px]">
            <img src={wholesaleImg} alt="Wholesale Logistics" className="w-full h-full object-cover" />
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
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl mb-6">Our Distribution Partners</h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light mb-16">
              We exclusively distribute products from world-renowned brands and our trusted in-house labels like Pure Cure and Vox Dei Labs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Pure Cure', 'Vox Dei Labs', 'Amina Hospital', 'Al Sharq Hospital', 'Makkah Pharmaceuticals', 'Thumbay Pharmacy', 'Right Health'].map((brand, i) => (
                <div key={i} className="px-8 py-4 bg-white rounded-full shadow-sm text-lg font-medium text-charcoal/80 border border-gray-100 hover:border-medical-teal hover:text-medical-teal transition-colors">
                  {brand}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Distribution;
