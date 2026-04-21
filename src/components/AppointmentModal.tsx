import { motion, AnimatePresence } from "motion/react";
import { X, Send, Calendar } from "lucide-react";
import { useState, FormEvent } from "react";
import { COMPANY_INFO } from "../constants";

export const AppointmentModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `*Labdhi Kitchen - New Enquiry*%0A%0A*Name:* ${formState.name}%0A*Phone:* ${formState.phone}%0A*Email:* ${formState.email || 'N/A'}%0A*Comment:* ${formState.comment || 'N/A'}`;
    const whatsappUrl = `https://wa.me/917058382363?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Simulate submission state
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormState({ name: "", phone: "", email: "", comment: "" });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass-surface rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Modal Image Header */}
            <div className="h-32 w-full relative overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Consultation Space" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-stone-950/40"></div>
            </div>

            <div className="p-8 md:p-10 pt-4 relative">
               {/* Success State */}
               {isSubmitted && (
                <div className="flex flex-col items-center text-center py-12">
                   <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6">
                      <Send className="text-brand-accent h-10 w-10 animate-pulse" />
                   </div>
                   <h2 className="text-3xl font-bold text-brand-accent italic mb-2">Request Transmitted</h2>
                   <p className="text-stone-400 text-sm">We'll contact you within 24 hours.</p>
                </div>
            )}

            {/* Form State */}
            {!isSubmitted && (
              <>
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-stone-500 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center">
                      <Calendar className="text-brand-accent" />
                   </div>
                   <div>
                      <h2 className="text-2xl font-bold text-white">Book Appointment</h2>
                      <p className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">Consult with {COMPANY_INFO.owner}</p>
                   </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Your Name *</label>
                    <input
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:ring-1 focus:ring-brand-accent outline-none text-white transition-all"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Phone Number *</label>
                    <input
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:ring-1 focus:ring-brand-accent outline-none text-white transition-all"
                      placeholder="+91"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Email <span className="opacity-30">(Optional)</span></label>
                    <input
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:ring-1 focus:ring-brand-accent outline-none text-white transition-all"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Comments <span className="opacity-30">(Optional)</span></label>
                    <textarea
                      value={formState.comment}
                      onChange={(e) => setFormState({...formState, comment: e.target.value})}
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:ring-1 focus:ring-brand-accent outline-none text-white transition-all resize-none"
                      placeholder="Describe your requirement..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-accent text-stone-950 py-5 rounded-2xl font-bold uppercase tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-4 text-xs mt-4"
                  >
                    Transmit Enquiry <Send size={14} />
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
  );
};
