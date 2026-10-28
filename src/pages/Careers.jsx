import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Upload,
  CheckCircle2,
  FileText,
  X,
  Send,
  Building,
  GraduationCap,
  Award,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import contactBannerImg from "../assets/images/contact_banner.jpg";

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

const perks = [
  {
    icon: Award,
    title: "Career Growth",
    desc: "Continuous training, professional development programs, and leadership opportunities.",
  },
  {
    icon: Building,
    title: "Established Heritage",
    desc: "Over 26 years of healthcare excellence, trusted across all 7 Emirates.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    desc: "A collaborative, multinational team dedicated to patient care and community wellness.",
  },
  {
    icon: ShieldCheck,
    title: "Competitive Rewards",
    desc: "Attractive compensation packages, medical insurance, and performance incentives.",
  },
];

const Careers = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Community Pharmacist",
    experience: "1-3 Years",
    qualification: "Bachelor of Pharmacy (B.Pharm)",
    visaStatus: "Employment Visa (Transferable)",
    linkedin: "",
    coverLetter: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Max 10MB
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit. Please upload a smaller file.");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit. Please upload a smaller file.");
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please attach your CV / Resume before submitting.");
      return;
    }
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "Community Pharmacist",
      experience: "1-3 Years",
      qualification: "Bachelor of Pharmacy (B.Pharm)",
      visaStatus: "Employment Visa (Transferable)",
      linkedin: "",
      coverLetter: "",
    });
    setSelectedFile(null);
    setIsSubmitted(false);
  };

  return (
    <main className="w-full bg-white overflow-x-hidden pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[55vh] flex items-center bg-medical-blue overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactBannerImg}
            alt="Al Khaleej Careers"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-medical-blue via-[#184878] to-[#0cb5a9]/60" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-12 w-full py-20">
          <FadeIn>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-[2px] w-6 bg-white rounded-full" />
              <span className="text-xs lg:text-sm font-bold tracking-[0.2em] text-white/90 capitalize">
                Careers & Talent
              </span>
            </div>
            <h1 className="text-white text-4xl lg:text-6xl mb-6 leading-tight max-w-3xl font-display font-bold">
              Join the Al Khaleej Family
            </h1>
            <p className="text-white/85 text-lg max-w-2xl font-light leading-relaxed">
              Build an impactful career in the UAE healthcare industry. We are constantly seeking passionate pharmacists, medical representatives, distribution experts, and healthcare administrators.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-16 max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <FadeIn key={i} delay={0.1 * i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-medical-teal/10 flex items-center justify-center mb-5 text-medical-teal">
                <perk.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-2">{perk.title}</h4>
              <p className="text-xs text-charcoal/60 font-light leading-relaxed">{perk.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section id="apply-form" className="py-12 max-w-[1100px] mx-auto px-4 lg:px-12">
        <FadeIn>
          <div className="bg-white rounded-[32px] p-8 lg:p-14 shadow-[0_12px_50px_rgb(0,0,0,0.08)] border border-gray-100 relative">
            <div className="text-center max-w-2xl mx-auto mb-10">
              {/* <Eyebrow text="Apply Now" /> */}
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Submit Your CV
              </h2>
              <p className="text-charcoal/60 text-sm md:text-base font-light">
                Fill out the application below and upload your resume. Our recruitment team will review your profile for suitable openings across our retail pharmacies and wholesale distribution network.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-medical-teal/5 border border-medical-teal/30 rounded-2xl p-10 text-center max-w-xl mx-auto my-8"
              >
                <div className="w-16 h-16 bg-medical-teal text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-medical-teal/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">Application Received!</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-6 font-light">
                  Thank you for submitting your CV to Al Khaleej. Our HR recruitment specialist will review your credentials and contact you if your qualifications match our current requirements.
                </p>
                <button
                  onClick={resetForm}
                  className="inline-flex items-center px-6 py-3 bg-medical-blue text-white rounded-full text-xs font-semibold hover:bg-medical-teal transition-colors"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Dr. Ahmed Al Mansoori"
                      className="w-full px-5 py-4 bg-off-white rounded-xl text-sm focus:ring-2 focus:ring-medical-teal/50 outline-none transition-shadow"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. ahmed@example.com"
                      className="w-full px-5 py-4 bg-off-white rounded-xl text-sm focus:ring-2 focus:ring-medical-teal/50 outline-none transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  {/* <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+971 50 123 4567"
                      className="w-full px-5 py-4 bg-off-white rounded-xl text-sm focus:ring-2 focus:ring-medical-teal/50 outline-none transition-shadow"
                    />
                  </div> */}

                
                </div>

              

                {/* CV File Upload */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                    Upload CV / Resume (PDF, DOC, DOCX up to 10MB) *
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cv-file-upload"
                  />

                  {selectedFile ? (
                    <div className="flex items-center justify-between p-5 bg-medical-teal/5 border border-medical-teal/30 rounded-2xl">
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-medical-teal/10 flex items-center justify-center shrink-0 text-medical-teal">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm font-semibold text-charcoal truncate">
                            {selectedFile.name}
                          </p>
                          <p className="text-xs text-charcoal/50">
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-2 text-charcoal/40 hover:text-red-500 transition-colors"
                        title="Remove file"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleFileDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-gray-200 hover:border-medical-teal/60 rounded-2xl p-8 text-center cursor-pointer transition-colors bg-off-white/50 hover:bg-off-white"
                    >
                      <div className="w-12 h-12 rounded-full bg-medical-teal/10 text-medical-teal flex items-center justify-center mx-auto mb-3">
                        <Upload className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-semibold text-charcoal mb-1">
                        Click to browse or drag and drop your CV here
                      </p>
                      <p className="text-xs text-charcoal/50">
                        Supports PDF, Word Documents (.doc, .docx) up to 10MB
                      </p>
                    </div>
                  )}
                </div>

              

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-medical-blue hover:bg-medical-teal text-white py-4 px-8 rounded-full font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit My CV</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </section>
    </main>
  );
};

export default Careers;
