/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero } from "./components/Navigation";
import { About, Services } from "./components/Services";
import { ProductShowcase, Contact, Footer } from "./components/Showcase";
import { AppointmentModal } from "./components/AppointmentModal";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-accent/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar onOpenAppointment={() => setIsModalOpen(true)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        
        {/* Customization Highlight Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-serif mb-12 max-w-4xl border-b border-brand-border pb-12"
            >
              A blend of <span className="italic font-light">Precision</span> and <span className="text-brand-accent font-semibold italic">Imagination.</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
              <div className="glass-card group overflow-hidden">
                <div className="h-40 rounded-2xl overflow-hidden mb-6">
                   <img 
                    src="/assets/plywood.jpeg" 
                    alt="Plywood" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                   />
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-brand-accent">Plywood Shutters</h4>
                <p className="text-sm text-brand-primary/60">Durable, water-resistant, and structural integrity for life. Guaranteed stability.</p>
              </div>
              <div className="glass-card group overflow-hidden">
                <div className="h-40 rounded-2xl overflow-hidden mb-6">
                   <img 
                    src="/assets/acrylic.jpeg" 
                    alt="Acrylic" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                   />
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-brand-accent">Acrylic Finishes</h4>
                <p className="text-sm text-brand-primary/60">Mirror-like high gloss aesthetics for the ultra-modern home. Scratch resistant.</p>
              </div>
              <div className="glass-card group overflow-hidden">
                <div className="h-40 rounded-2xl overflow-hidden mb-6">
                   <img 
                    src="/assets/mdf_image.jpeg" 
                    alt="MDF" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                   />
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-brand-accent">MDF Core</h4>
                <p className="text-sm text-brand-primary/60">Versatile, smooth surfaces perfect for contemporary designs and rich textures.</p>
              </div>
            </div>
          </div>
        </section>

        <ProductShowcase />
        <Contact />
      </main>
      <Footer />

      {/* Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
