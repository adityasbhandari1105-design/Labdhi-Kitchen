import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { PRODUCTS, COMPANY_INFO } from "../constants";
import { useState, FormEvent } from "react";

export const ProductShowcase = () => {
  return (
    <section id="products" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-white/5 pb-10">
          <div>
            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-6xl md:text-8xl font-light leading-[0.9]">Masterpiece <br /> <span className="font-bold italic">Gallery.</span></h2>
          </div>
          <button className="px-10 py-4 glass-surface rounded-full hover:bg-brand-accent hover:text-stone-950 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest">
            View Full Catalog
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer glass-surface p-4 rounded-[2rem] hover:bg-white/10 transition-all"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                 <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 glass-surface text-brand-accent px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest backdrop-blur-2xl">
                  {product.priceRange}
                </div>
              </div>
              <div className="px-2">
                <p className="text-brand-accent text-[9px] uppercase font-bold tracking-[0.2em] mb-2 opacity-60">
                  {product.category} • {product.material}
                </p>
                <h4 className="text-xl font-bold group-hover:text-brand-accent transition-colors leading-tight">
                  {product.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    category: "Modular Kitchen Elite",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `*Labdhi Kitchen - New Inquiry*%0A%0A*Name:* ${formState.name}%0A*Phone:* ${formState.phone}%0A*Category:* ${formState.category}%0A*Requirements:* ${formState.message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/917058382363?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Clear form
    setFormState({ name: "", phone: "", category: "Modular Kitchen Elite", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Inquiry Channel</span>
            <h2 className="text-6xl md:text-8xl font-light mb-12 leading-[0.9]">Discuss <br /> <span className="font-bold italic text-brand-accent">Presence.</span></h2>
            <p className="text-stone-400 text-lg mb-16 leading-relaxed max-w-md font-light">
              Engineering bespoke modular solutions since 2004. Contact {COMPANY_INFO.owner}'s consultation direct.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-16">
               <div className="glass-surface p-8 rounded-3xl flex gap-8 items-center border-l-4 border-l-brand-accent">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                     <Phone className="text-brand-accent h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Direct Line</p>
                    <p className="text-xl font-bold">{COMPANY_INFO.phone}</p>
                  </div>
               </div>
               <div className="glass-surface p-8 rounded-3xl flex gap-8 items-center border-l-4 border-l-brand-accent">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                     <Mail className="text-brand-accent h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Digital Desk</p>
                    <p className="text-xl font-bold">{COMPANY_INFO.email}</p>
                  </div>
               </div>

               {/* New Image Block in Contact Section */}
               <div className="glass-surface rounded-3xl overflow-hidden mt-4 aspect-video relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" 
                    alt="Corporate Office" 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Headquarters Presence</p>
                    <h4 className="text-lg font-bold">Industrial Hub India</h4>
                  </div>
               </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl glass-surface flex items-center justify-center hover:bg-brand-accent hover:text-stone-950 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass-surface flex items-center justify-center hover:bg-brand-accent hover:text-stone-950 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass-surface p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-8xl font-bold opacity-[0.03] select-none pointer-events-none">
              INQUIRY
            </div>
            <h3 className="text-3xl font-bold mb-10 text-brand-accent italic">Consultation Form</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:ring-1 focus:ring-brand-accent outline-none text-white transition-all" 
                    placeholder="Enter name" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Contact Phone</label>
                  <input 
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:ring-1 focus:ring-brand-accent outline-none text-white transition-all" 
                    placeholder="+91" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Project Category</label>
                <select 
                  value={formState.category}
                  onChange={(e) => setFormState({...formState, category: e.target.value})}
                  className="w-full bg-stone-900 border border-white/10 rounded-2xl p-5 text-sm focus:ring-1 focus:ring-brand-accent outline-none text-white transition-all appearance-none"
                >
                  <option value="Modular Kitchen Elite" className="bg-stone-900">Modular Kitchen Elite</option>
                  <option value="Residential Complex" className="bg-stone-900">Residential Complex</option>
                  <option value="Executive Office" className="bg-stone-900">Executive Office</option>
                  <option value="SS Architectural Railings" className="bg-stone-900">SS Architectural Railings</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Detailed Requirements</label>
                <textarea 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:ring-1 focus:ring-brand-accent outline-none text-white transition-all resize-none" 
                  placeholder="Dimensions, material preference, location..." 
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-accent text-stone-950 py-6 rounded-2xl font-bold uppercase tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-4 text-xs"
              >
                Transmit Inquiry <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="relative bg-stone-950/50 backdrop-blur-2xl py-16 px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div className="flex flex-col items-center md:items-start">
           <span className="text-3xl font-bold tracking-tighter uppercase text-brand-accent">{COMPANY_INFO.name}</span>
           <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mt-1">Lead by Sanjay Bhandari since 2004</p>
        </div>
        <div className="flex items-center gap-6">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Manufacturing Facility Active — Pan India</span>
        </div>
        <div className="text-center md:text-right">
           <p className="text-[10px] font-medium opacity-30 uppercase tracking-widest">© 2024 Labdhi Kitchen Manufacturing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
