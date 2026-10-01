import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Store } from "lucide-react";

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

const RetailPharmacies = () => {
  return (
    <main className="w-full bg-white overflow-x-hidden pt-32 pb-20">
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 text-center mb-16">
        <FadeIn>
          <Eyebrow text="Our Retail Locations" />
          <h1 className="text-4xl lg:text-6xl mb-6 leading-tight max-w-3xl mx-auto">
            Find Us Near You
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light">
            We operate multiple retail pharmacies across Ajman to ensure that premium healthcare and essential medicines are always within your reach.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pharmacies.map((pharmacy, i) => (
            <FadeIn key={i} delay={0.1 * i} className="group">
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
    </main>
  );
};

export default RetailPharmacies;
