import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Send, Download, ExternalLink, Menu, X, Mouse, Monitor, Wifi, Headphones, Usb, Flower2, Laptop } from "lucide-react";

import logo from "@assets/logo.png";
import spideyIcon from "@assets/Spidey-icon_1768817786150.png";
import presentationPdf from "@assets/Presentation_pdf_1768818813171.pdf";
import projectPdf from "@assets/Project_pdf_1768818861966.pdf";
import posterImg from "@assets/Advertisement_poster_1768818934313.png";
import pageDesignImg from "@assets/Page_design_1768819229178.png";
import businessCardPdf from "@assets/Business_card_1768819244398.pdf";
import presentationThumb from "@assets/Presentation_thumbnail_1768819455698.png";
import projectThumb from "@assets/Project_file_thumbnail_1768819465084.png";
import businessCardThumb from "@assets/Business_card_thumbnail_1768819480776.png";

// Icon components mapping
const FloatingIcon = ({ Icon, className, delay }: { Icon: any, className?: string, delay: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute text-purple-300/60 hidden lg:block ${className}`}
  >
    <Icon size={48} strokeWidth={1.5} />
  </motion.div>
);

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Projex" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-lg animate-in slide-in-from-top-5">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Services Data
const services = [
  {
    title: "Presentations",
    description: "Professional and engaging slides that captivate your audience",
    icon: Monitor,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Project Files",
    description: "Comprehensive academic and professional project documentation",
    icon: Download,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Advertisement Posters",
    description: "Eye-catching posters that grab attention and drive results",
    icon: Mouse,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Page Designs",
    description: "Beautiful layouts for documents, brochures, and more",
    icon: Laptop,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Business Cards",
    description: "Professional cards that make lasting first impressions",
    icon: Wifi,
    color: "bg-pink-50 text-pink-600",
  },
];

// Portfolio Data
const portfolioData = [
  {
    title: "Academic Presentation",
    category: "Presentation",
    tool: "Canva",
    previewImage: presentationThumb,
    viewType: "pdf",
    viewLink: presentationPdf
  },
  {
    title: "Academic Project File",
    category: "Project File",
    tool: "Canva",
    previewImage: projectThumb,
    viewType: "pdf",
    viewLink: projectPdf
  },
  {
    title: "Advertisement poster",
    category: "Poster",
    tool: "Canva",
    previewImage: posterImg,
    viewType: "image",
    viewLink: posterImg
  },
  {
    title: "Custom Page Designs",
    category: "Page Design",
    tool: "Canva",
    previewImage: pageDesignImg,
    viewType: "image",
    viewLink: pageDesignImg
  },
  {
    title: "Modern Business Card",
    category: "Business Card",
    tool: "Canva",
    previewImage: businessCardThumb,
    viewType: "pdf",
    viewLink: businessCardPdf
  }
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center justify-center text-center">
        {/* Floating Background Icons */}
        <FloatingIcon Icon={Usb} className="top-32 left-[10%] rotate-[-15deg]" delay={0} />
        <FloatingIcon Icon={Monitor} className="top-40 right-[15%] rotate-[10deg]" delay={1.5} />
        <FloatingIcon Icon={Wifi} className="bottom-20 left-[15%] text-purple-200" delay={2} />
        <FloatingIcon Icon={Headphones} className="top-[60%] right-[10%] rotate-[-10deg]" delay={0.5} />
        <FloatingIcon Icon={Flower2} className="top-24 right-[5%] text-pink-200" delay={1} />
        <FloatingIcon Icon={Flower2} className="bottom-32 left-[5%] text-pink-200 rotate-45" delay={2.5} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [-1, 1, -1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img src={logo} alt="Projex Logo" className="h-32 md:h-44 w-auto drop-shadow-xl" style={{ filter: 'drop-shadow(0 15px 25px rgba(139, 92, 246, 0.18))' }} />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
            Designs Made to Stand Out
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Clean, professional Canva designs tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-900/10 hover:shadow-xl hover:-translate-y-1">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1">
              Send a Request <Send size={18} />
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500 font-medium">
            Paid custom design services · Prices start at ₹50.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Create</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional designs tailored to your unique needs</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/60 backdrop-blur-sm border border-white/50 p-8 rounded-3xl hover:shadow-lg transition-all hover:bg-white group text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] min-w-[280px] max-w-[400px]"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A selection of recent work showcasing clean, professional Canva designs</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {portfolioData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all bg-white w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] min-w-[280px] max-w-[400px] flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.previewImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-600 shadow-sm">
                    {item.tool}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold tracking-wider text-purple-600 uppercase mb-2 block">{item.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 line-clamp-2">{item.title}</h3>
                  <div className="mt-auto">
                    <a 
                      href={item.viewLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group/link hover:text-purple-600 transition-colors"
                    >
                      {item.viewType === 'pdf' ? (
                        <>View PDF <Download size={16} className="transition-transform group-hover/link:translate-y-0.5" /></>
                      ) : (
                        <>View Full Image <ExternalLink size={16} className="transition-transform group-hover/link:translate-x-0.5" /></>
                      )}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10 border-t-2 border-dashed border-gray-300"></div>

            {[
              { step: 1, title: "Send request", desc: "Share your project details and requirements with me." },
              { step: 2, title: "Design in Canva", desc: "I create a custom design tailored to your vision." },
              { step: 3, title: "Receive files", desc: "Get your polished, ready-to-use files promptly." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border-4 border-purple-50 text-2xl font-bold text-purple-600">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-purple-900 text-white rounded-[3rem] mx-4 lg:mx-8 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-8 p-1 overflow-hidden">
            <img src={spideyIcon} alt="Spidey" className="w-full h-full rounded-full object-cover" /> 
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Spidey</h2>
          <p className="text-purple-200 text-lg mb-8 uppercase tracking-widest font-semibold">Founder & Designer</p>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12 text-purple-100">
            "I design custom Canva projects for creators and professionals. With a passion for clean design and reliable delivery, I help bring your vision to life."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-lg mb-2">Specialization</h4>
              <p className="text-purple-200 text-sm">Presentations, posters, business cards, and documents.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-lg mb-2">Why Me</h4>
              <p className="text-purple-200 text-sm">Fast turnaround, attention to detail, and stress-free collaboration.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-lg mb-2">Approach</h4>
              <p className="text-purple-200 text-sm">Clean, reliable work that respects your deadlines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to bring your ideas to life? Projects usually completed within 24-48 hours.
          </p>
          
          <a 
            href="https://wa.me/918882668267" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-[#1ebc57] transition-all shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1"
          >
            <Send size={20} />
            Send Request on WhatsApp
          </a>
          
          <p className="mt-8 text-gray-500">
            Available Monday - Saturday, 9 AM - 9 PM<br/>
            Prices start at ₹50
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Projex. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
             <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
