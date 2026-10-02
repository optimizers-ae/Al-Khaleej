import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, ShieldCheck, HeartPulse } from "lucide-react";
import aboutBannerImg from "../assets/images/new_about_banner.jpg";
import pharmacyAboutImg from "../assets/images/pharmacy_about_us.jpg";

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

const About = () => {
  return (
    <main className="w-full bg-white overflow-x-hidden pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center bg-medical-blue overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutBannerImg} alt="Corporate Headquarters" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-medical-blue to-[#0cb5a9]/50" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-12 w-full py-20">
          <FadeIn>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-[2px] w-6 bg-white rounded-full" />
              <span className="text-xs lg:text-sm font-bold tracking-[0.2em] text-white/90 capitalize">
                Est. 1997
              </span>
            </div>
            <h1 className="text-white text-4xl lg:text-6xl mb-6 leading-tight max-w-3xl">
              A Legacy of Healthcare <br/> Excellence in UAE
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start relative">
          <FadeIn direction="right">
            <Eyebrow text="Our Story" />
            <h2 className="text-3xl lg:text-4xl mb-6 text-charcoal leading-[1.2]">
              Driven by Experience,<br /> Guided by Care
            </h2>
            <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed font-light">
              <p>
                Al Khaleej Drug Store was established in 1997 as a wholesale drugstore. The firm was founded and is currently managed by Mr. Kanagasabai Samiaiah, who brings over 33 years of extensive experience in the UAE healthcare sector.
              </p>
              <p>
                Over the years, we have integrated our operations to become a highly successful distributor. To further add value for our customers, we branched out into several retail stores, enhancing our reach and service capabilities.
              </p>
              <p>
                Known for the extensive support and services provided to our customers over the past 26+ years, we are heading towards a larger goal: to become a complete healthcare provider.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="relative h-[500px] w-full rounded-[32px] overflow-hidden shadow-2xl lg:sticky lg:top-32">
            <img src={pharmacyAboutImg} alt="Pharmacy showcase" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl flex justify-between items-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-medical-teal mb-1">26+</p>
                <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-widest">Years</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-medical-teal mb-1">500+</p>
                <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-widest">Customers</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-medical-teal mb-1">19+</p>
                <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-widest">Gov. Entities</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-off-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 lg:p-12 rounded-[32px] shadow-sm border border-gray-100 h-full hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-medical-blue/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8 text-medical-teal" />
                </div>
                <h3 className="text-3xl mb-6">Our Mission</h3>
                <p className="text-charcoal/70 text-lg leading-relaxed font-light">
                  To serve our clients with utmost efficiency and provide them with our extensive business relationship and support guidance, making our client's operations more convenient and profitable.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-10 lg:p-12 rounded-[32px] shadow-sm border border-gray-100 h-full hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-medical-blue/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-8 h-8 text-medical-teal" />
                </div>
                <h3 className="text-3xl mb-6">Our Vision</h3>
                <p className="text-charcoal/70 text-lg leading-relaxed font-light">
                  To be a successful distributor & retailer for the complete health sector and to be recognized as a valued agent to our customers. Moreover, to be a successful and complete healthcare provider in the UAE.
                </p>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
             <div className="flex items-center space-x-3">
              <div className="h-[2px] w-6 bg-medical-teal rounded-full" />
              <span className="text-xs font-bold tracking-[0.15em] capitalize text-charcoal/70">Core Values</span>
              <div className="h-[2px] w-6 bg-medical-teal rounded-full" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">What We Stand For</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
             { icon: ShieldCheck, title: "Quality & Trust", desc: "Providing premium, genuine products maintaining the highest standards of safety." },
             { icon: HeartPulse, title: "Customer Care", desc: "Placing patient and customer well-being at the heart of our operations." },
             { icon: Target, title: "Efficiency", desc: "Streamlined distribution networks ensuring prompt and reliable delivery." }
          ].map((val, i) => (
             <FadeIn key={i} delay={0.1 * i} className="text-center p-8">
                <div className="mx-auto w-20 h-20 bg-medical-blue rounded-full flex items-center justify-center mb-6 text-white shadow-lg">
                  <val.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">{val.title}</h4>
                <p className="text-charcoal/70 font-light">{val.desc}</p>
             </FadeIn>
          ))}
        </div>
      </section>

    </main>
  );
};

export default About;
