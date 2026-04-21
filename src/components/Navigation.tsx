import { motion } from "motion/react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { COMPANY_INFO } from "../constants";

export const Navbar = ({ onOpenAppointment }: { onOpenAppointment: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-stone-950/20 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter uppercase text-brand-accent">
            {COMPANY_INFO.name}
          </span>
          <span className="text-[9px] tracking-[0.4em] uppercase text-white/40 font-bold -mt-0.5">
            Premium Modular Manufacturing
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-widest font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/60 hover:text-brand-accent transition-colors border-b border-transparent hover:border-brand-accent pb-1"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenAppointment}
            className="px-6 py-2 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-stone-950 transition-all rounded-full cursor-pointer"
          >
            Consult
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white/60" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-surface border-t-0 p-8 flex flex-col gap-8 rounded-b-3xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-white/60"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenAppointment();
            }}
            className="bg-brand-accent text-stone-950 text-center py-4 rounded-2xl font-bold uppercase tracking-widest cursor-pointer"
          >
            Consultation
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40 mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Kitchen"
          className="w-full h-full object-cover rounded-3xl"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 glass-surface backdrop-blur-lg rounded-full text-[10px] tracking-[0.3em] font-bold uppercase text-brand-accent mb-10">
            Founded by {COMPANY_INFO.owner} — Elite Standards
          </div>
          <h1 className="text-7xl md:text-9xl font-light leading-[0.9] mb-12">
            Precision <br />
            <span className="font-bold italic text-brand-accent">Manufacturing.</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Elevating living spaces with modular mastery. From residential elegance to corporate efficiency, we engineer excellence across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <div className="glass-surface px-10 py-5 rounded-3xl text-left border-l-4 border-l-brand-accent">
                <div className="text-3xl font-bold text-brand-accent leading-none mb-1">20+</div>
                <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Years Experience</div>
             </div>
             <div className="glass-surface px-10 py-5 rounded-3xl text-left border-l-4 border-l-brand-accent">
                <div className="text-3xl font-bold text-brand-accent leading-none mb-1">Pan India</div>
                <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Service Presence</div>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative arrow down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
         <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Explore</span>
         <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </section>
  );
};
