import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, Award, MapPin, Settings, X } from "lucide-react";
import { SERVICES, COMPANY_INFO, KITCHEN_SITES, TROLLEY_TYPES } from "../constants";
import { useState } from "react";

const SiteGalleryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/90 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-6xl max-h-[90vh] glass-surface rounded-[3rem] overflow-hidden flex flex-col"
          >
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-stone-900/50">
               <div>
                  <h3 className="text-3xl font-bold text-brand-accent italic">Modular Kitchen Sites</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Industrial Execution Portfolio</p>
               </div>
               <button onClick={onClose} className="w-12 h-12 glass-surface rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-stone-950 transition-all">
                  <X size={20} />
               </button>
            </div>
            <div className="overflow-y-auto p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 custom-scrollbar">
               {KITCHEN_SITES.map((site, index) => (
                 <motion.div 
                   key={site.title}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   className="glass-surface p-4 rounded-[2rem] group"
                 >
                    <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                       <img 
                        src={site.image} 
                        alt={site.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                        referrerPolicy="no-referrer"
                       />
                       <div className="absolute top-4 left-4 glass-surface px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-brand-accent">
                          {site.location}
                       </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{site.title}</h4>
                    <p className="text-[10px] text-stone-500 leading-relaxed uppercase tracking-tighter">{site.description}</p>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const TrolleyGalleryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/90 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-6xl max-h-[90vh] glass-surface rounded-[3rem] overflow-hidden flex flex-col"
          >
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-stone-900/50">
               <div>
                  <h3 className="text-3xl font-bold text-brand-accent italic">Kitchen Trolley Variants</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">High-Efficiency Storage Solutions</p>
               </div>
               <button onClick={onClose} className="w-12 h-12 glass-surface rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-stone-950 transition-all">
                  <X size={20} />
               </button>
            </div>
            <div className="overflow-y-auto p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 custom-scrollbar">
               {TROLLEY_TYPES.map((trolley, index) => (
                 <motion.div 
                   key={trolley.title}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.05 }}
                   className="glass-surface p-4 rounded-[1.5rem] group"
                 >
                    <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
                       <img 
                        src={trolley.image} 
                        alt={trolley.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                        referrerPolicy="no-referrer"
                       />
                    </div>
                    <h4 className="text-lg font-bold mb-1 group-hover:text-brand-accent transition-colors">{trolley.title}</h4>
                    <p className="text-[9px] text-stone-500 leading-relaxed uppercase tracking-tighter">{trolley.description}</p>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden glass-surface p-4"
          >
             <img
              src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&q=80&w=1000"
              alt="Modular Kitchen Excellence"
              className="w-full h-full object-cover rounded-[2rem] opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 glass-surface p-8 rounded-[2rem] hidden lg:block max-w-xs shadow-2xl backdrop-blur-2xl">
            <h3 className="text-5xl font-bold text-brand-accent mb-2">20+</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Years Industrial Mastery</p>
            <div className="w-12 h-[1px] bg-brand-accent/30 my-6"></div>
            <p className="text-xs leading-relaxed italic text-white/70">
              "Providing elite manufacturing sites across India with surgical precision."
            </p>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">
            The {COMPANY_INFO.owner} Legacy
          </span>
          <h2 className="text-6xl md:text-8xl font-light mb-10 leading-[0.9]">
            Industrial <br />
            <span className="font-bold italic text-brand-accent">Excellence.</span>
          </h2>
          <p className="text-lg text-stone-400 mb-12 leading-relaxed font-light">
            Labdhi Kitchen has been the backbone of modular infrastructure since 2004. Our manufacturing philosophy combines heavy-duty durability with high-end aesthetics, serving modular kitchens, corporate offices, and luxury residences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
             <div className="glass-card !p-6 flex gap-5 items-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                   <Award className="text-brand-accent h-6 w-6" />
                </div>
                <div>
                   <h4 className="font-bold text-xs uppercase tracking-widest text-brand-accent">Elite Finish</h4>
                   <p className="text-[10px] opacity-40">Acrylic & Veneer specialists.</p>
                </div>
             </div>
             <div className="glass-card !p-6 flex gap-5 items-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                   <Settings className="text-brand-accent h-6 w-6" />
                </div>
                <div>
                   <h4 className="font-bold text-xs uppercase tracking-widest text-brand-accent">Bespoke Build</h4>
                   <p className="text-[10px] opacity-40">100% customized engineering.</p>
                </div>
             </div>
          </div>

          <button className="flex items-center gap-4 py-4 px-8 glass-surface rounded-full group hover:bg-brand-accent transition-all duration-500">
            <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-stone-950">
               Our Fabrication Process
            </span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform group-hover:text-stone-950" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export const Services = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [trolleyGalleryOpen, setTrolleyGalleryOpen] = useState(false);

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block"
            >
              Manufacturing Capabilities
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light leading-[0.9]">End-to-End <br/><span className="font-bold italic">Solutions.</span></h2>
          </div>
          <p className="text-stone-500 max-w-xs text-sm font-light leading-relaxed">
            Scalable modular systems designed for longevity and surgical organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isModularKitchen = service.id === 'modular-kitchens';
            const isKitchenTrolley = service.id === 'kitchen-trolleys';
            const isClickable = isModularKitchen || isKitchenTrolley;
            
            const handleClick = () => {
              if (isModularKitchen) {
                setGalleryOpen(true);
              } else if (isKitchenTrolley) {
                setTrolleyGalleryOpen(true);
              }
            };
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={handleClick}
                className={`group relative glass-surface rounded-[2rem] p-4 transition-all duration-500 ${isClickable ? 'cursor-pointer hover:bg-brand-accent' : 'hover:bg-white/10'}`}
              >
                <div className="h-60 overflow-hidden rounded-2xl mb-8 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100 ${isClickable && 'group-hover:opacity-40'}`}
                    referrerPolicy="no-referrer"
                  />
                  {isClickable && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                       <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-950 bg-white px-6 py-3 rounded-full">
                          {isModularKitchen ? 'View Site Gallery' : 'View Variants'}
                       </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 text-4xl font-bold opacity-10 text-white select-none">
                    0{index + 1}
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className={`text-2xl font-bold mb-4 flex items-center justify-between transition-colors ${isClickable ? 'group-hover:text-stone-900 text-brand-accent' : 'text-brand-accent'}`}>
                     {service.title}
                     <ChevronRight className={`w-5 h-5 transition-all opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${isClickable && 'group-hover:text-stone-900 text-stone-900'} `} />
                  </h3>
                  <p className={`text-xs mb-8 leading-relaxed font-medium transition-colors ${isClickable ? 'group-hover:text-stone-900 border-stone-900 text-stone-500' : 'text-stone-500'}`}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all ${isClickable ? 'bg-stone-900/10 border border-stone-900/20 text-stone-900 group-hover:bg-stone-900 group-hover:text-white' : 'bg-white/5 border border-white/10 text-white/50'}`}>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <SiteGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
      <TrolleyGalleryModal isOpen={trolleyGalleryOpen} onClose={() => setTrolleyGalleryOpen(false)} />
    </section>
  );
};
