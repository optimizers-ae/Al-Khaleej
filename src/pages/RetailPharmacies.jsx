import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const googleMapsMarkerHtml = `
  <svg viewBox="0 0 32 42" width="28" height="38" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" stroke="#C5221F" stroke-width="1" d="M16 0C7.16 0 0 7.16 0 16c0 10.4 16 26 16 26s16-15.6 16-26C32 7.16 24.84 0 16 0zm0 21.6c-3.09 0-5.6-2.51-5.6-5.6s2.51-5.6 5.6-5.6 5.6 2.51 5.6 5.6-2.51 5.6-5.6 5.6z"/>
  </svg>
`;

const redIcon = new L.divIcon({
  html: googleMapsMarkerHtml,
  className: 'custom-google-marker',
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [0, -38],
});
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Store,
  Play,
  Pause,
  ShieldCheck,
  Pill,
  Clock,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Navigation,
} from "lucide-react";
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

const features = [
  {
    icon: ShieldCheck,
    title: "Expert Guidance",
    description:
      "Our certified pharmacists provide professional consultations and ensure you get the right medications.",
  },
  {
    icon: Pill,
    title: "Extensive Inventory",
    description:
      "We stock a comprehensive range of prescription medicines, OTC drugs, and healthcare supplements.",
  },
  {
    icon: Clock,
    title: "Always Accessible",
    description:
      "With multiple convenient locations across Ajman, your health needs are always covered.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centric Care",
    description:
      "We prioritize your well-being with personalized services and a commitment to exceptional care.",
  },
];

const pharmacies = [
  {
    name: "Dar Al Shifa Pharmacy",
    address: "Liwara 2, 6355, Ajman, AE",
    phone: "+971 6 742 8119",
    mobile: "+971 50 246 1727",
  },
  {
    name: "Dar Al Sai Pharmacy",
    address: "Al Khartoum St, Rawdha 3, Ajman",
    phone: "+971 6 747 0590",
    mobile: "+971 58 535 2999",
  },
  {
    name: "Dar Al Mubarak Pharmacy",
    address: "Falcon Towers, Rashediya 2, Ajman",
    phone: "+971 6 747 7590",
    mobile: "+971 56 484 1909",
  },
  {
    name: "Al Ittehad Pharmacy",
    address: "Al Owan, Al Nakhil 1, Ajman",
    phone: "+971 6 742 8119",
    mobile: "+971 50 246 1727",
  },
  {
    name: "Al Meydan Pharmacy",
    address: "Garden City, Al Hamidiya 1, Ajman",
    phone: "+971 6 742 0590",
    mobile: "+971 56 581 6233",
  },
  {
    name: "Dar Al Shifa Pharmacy (Br. 1)",
    address: "Al Bustan - Liwara 1, Ajman",
    phone: "+971 6 740 0590",
    mobile: "+971 54 547 4694",
  },
];

const mapLocations = [
  {
    name: "Dar Al Shifa Pharmacy (Liwara 2)",
    address: "Liwara 2, عجمان, 6355, إمارة عجمان, AE",
    url: "https://www.google.com/maps/search/Dar%20Al%20Shifa%20Pharmacy/@25.40896987915039,55.44704818725586,17z?hl=en",
    coords: [25.408970, 55.447048],
    phone: "+971 6 742 8119",
    hours: "8:00 AM - 12:00 AM"
  },
  {
    name: "Dar Al Sai Pharmacy (Puremed)",
    address: "Al Khartoum St, Al Rawda 3, Ajman, UAE",
    url: "https://share.google/ViFTqGvpm2PkEsJza",
    coords: [25.389800, 55.500300],
    phone: "+971 6 747 0590",
    hours: "8:00 AM - 12:00 AM"
  },
  {
    name: "Dar Al Mubarak Pharmacy",
    address: "Falcon Towers - A5 - B1 1st Floor, Al Rashidiya 2, Ajman, UAE",
    url: "https://maps.app.goo.gl/eKZsYJJN2NhjELZeA?g_st=iw",
    coords: [25.398695, 55.448563],
    phone: "+971 6 747 7590",
    hours: "8:30 AM - 11:30 PM"
  },
  {
    name: "Al Ittehad Pharmacy",
    address: "Al Owan - Al Nakhil 1, Ajman, UAE",
    url: "https://maps.app.goo.gl/81Uuz8smvCgiEAcY8?g_st=iwb",
    coords: [25.410670, 55.440930],
    phone: "+971 6 742 8119",
    hours: "8:00 AM - 12:00 AM"
  },
  {
    name: "Al Meydan Pharmacy",
    address: "J2 Building, Garden City, Al Jerf Gardens Area, Al Hamidiya 1, Ajman, UAE",
    url: "https://maps.app.goo.gl/Vek5rNGoqDHRmPKm8?g_st=awb",
    coords: [25.412600, 55.473000],
    phone: "+971 6 742 0590",
    hours: "8:00 AM - 11:00 PM"
  },
  {
    name: "Dar Al Shifa Pharmacy (Br. 1)",
    address: "Al Bustan - Liwara 1, Ajman, UAE",
    url: "https://maps.app.goo.gl/cMyh3yYZejXJpuTBA",
    coords: [25.415900, 55.449900],
    phone: "+971 6 740 0590",
    hours: "Open 24 Hours"
  }
];

const MapUpdater = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 15, { animate: true, duration: 1.5 });
  }, [center, map]);
  return null;
};

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
  const [activeLocation, setActiveLocation] = useState(0);

  const nextSlide = () =>
    sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  const prevSlide = () =>
    sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });

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
          <h1 className="text-4xl lg:text-5xl mb-6 leading-tight max-w-4xl mx-auto text-charcoal font-bold">
            As the UAE's fastest-growing pharmacy chain, we don't just provide medicines
          </h1>
          <p className="text-charcoal/70 text-lg max-w-3xl mx-auto font-light mb-16">
            We deliver instant health solutions. With our ultra-fast 25-minute delivery and easy in-store pickup, your wellness is always within reach.
          </p>

          <div className="relative w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgb(0,0,0,0.12)] group">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
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
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-current" />
                ) : (
                  <Play className="w-6 h-6 fill-current" />
                )}
              </button>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {pharmacies.map((pharmacy, i) => (
            <FadeIn
              key={i}
              delay={0.1 * i}
              className="group min-w-[85%] sm:min-w-[400px] md:min-w-0 snap-center snap-always"
            >
              <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:-rotate-12 duration-500">
                  <Store className="w-32 h-32" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-medical-teal/10 rounded-2xl flex items-center justify-center mb-6">
                    <Store className="w-6 h-6 text-medical-teal" />
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-charcoal">
                    {pharmacy.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-medical-teal mr-3 shrink-0 mt-0.5" />
                      <p className="text-charcoal/70 font-light">
                        {pharmacy.address}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-medical-teal mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-charcoal/70 font-light mb-1">
                          Landline:{" "}
                          <a
                            href={`tel:${pharmacy.phone.replace(/\s+/g, "")}`}
                            className="hover:text-medical-teal transition-colors"
                          >
                            {pharmacy.phone}
                          </a>
                        </p>
                        <p className="text-charcoal/70 font-light">
                          Mobile:{" "}
                          <a
                            href={`tel:${pharmacy.mobile.replace(/\s+/g, "")}`}
                            className="hover:text-medical-teal transition-colors"
                          >
                            {pharmacy.mobile}
                          </a>
                        </p>
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
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                Shop Online From Home
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 font-light">
                Can't make it to one of our locations? Discover our complete
                range of healthcare and wellness products online and enjoy
                convenient home delivery across the UAE.
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

      {/* Map Section */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 mt-32">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-charcoal">
              Our Locations
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light">
              Find an Al Khaleej pharmacy branch near you
            </p>
          </div>
          
          <div className="w-full h-[650px] flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-gray-100 z-0 relative">
            
            {/* List side */}
            <div className="w-full md:w-1/3 lg:w-[400px] h-[400px] md:h-full overflow-y-auto border-r border-gray-100 p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {mapLocations.map((loc, i) => (
                <div 
                  key={i} 
                  className={`p-6 mb-4 rounded-xl cursor-pointer transition-all border ${activeLocation === i ? 'border-medical-blue bg-medical-blue/5 shadow-sm' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}
                  onClick={() => setActiveLocation(i)}
                >
                  <div className="flex justify-between items-start">
                    <div className="pr-4">
                      <h4 className="font-bold text-[15px] text-[#1b3b5c] mb-1.5 uppercase leading-tight">{loc.name}</h4>
                      <p className="text-xs text-gray-500 mb-4">{loc.address}</p>
                      
                      <div className="flex flex-col space-y-2 mb-6">
                        <div className="flex items-center text-xs text-gray-500">
                          <Phone className="w-4 h-4 mr-2.5 text-medical-teal" />
                          <span>{loc.phone}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-4 h-4 mr-2.5 text-medical-teal" />
                          <span className={loc.hours === "Open 24 Hours" ? "text-green-600 font-medium" : ""}>{loc.hours}</span>
                        </div>
                      </div>

                      <a href={loc.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 border border-gray-200 rounded-full text-xs text-medical-blue font-bold hover:border-medical-blue hover:bg-medical-blue/5 transition-colors" onClick={(e) => e.stopPropagation()}>
                        View details
                      </a>
                    </div>
                    <div className="text-medical-blue shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
                        <Navigation className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map side */}
            <div className="w-full md:w-2/3 lg:flex-1 h-[300px] md:h-full z-0 relative bg-gray-100">
              <MapContainer center={[25.40, 55.45]} zoom={12} scrollWheelZoom={false} className="w-full h-full z-0 relative">
                <TileLayer
                  attribution='&copy; Google Maps'
                  url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                />
                <MapUpdater center={mapLocations[activeLocation].coords} />
                {mapLocations.map((loc, i) => (
                  <Marker key={i} position={loc.coords} icon={redIcon}>
                    <Popup>
                      <div className="font-sans">
                        <strong className="block mb-1 text-charcoal">{loc.name}</strong>
                        <span className="block text-xs text-gray-500 mb-2">{loc.address}</span>
                        <a 
                          href={loc.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-medical-teal hover:underline text-sm font-medium"
                        >
                          Open in Google Maps
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 mt-32">
        <div className="bg-medical-teal/[0.03] rounded-[40px] p-10 md:p-16 lg:p-24 border border-medical-teal/10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl lg:text-5xl mb-6 text-charcoal">
                Why Choose Us
              </h2>
              <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light">
                We are dedicated to providing the highest standard of
                pharmaceutical care and wellness products to our community.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <FadeIn
                  key={i}
                  delay={0.1 * i}
                  className="bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all"
                >
                  <div className="w-14 h-14 bg-medical-teal/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-medical-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-charcoal">
                    {feature.title}
                  </h3>
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
