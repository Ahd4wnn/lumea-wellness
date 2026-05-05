/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight, Wind, Thermometer, Sun, CheckCircle2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PRODUCTS, type Product } from './constants';

const Navbar = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-2 sm:mx-6 my-2 sm:my-4 rounded-xl px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between border-brand-cyan/20">
      <div className="flex items-center gap-3 sm:gap-4 cursor-pointer group" onClick={() => setPage('home')}>
        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-brand-cyan flex items-center justify-center transition-transform group-hover:scale-105">
          <span className="font-display font-bold text-lg sm:text-xl text-brand-cyan">L</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display font-bold text-sm sm:text-lg tracking-[0.2em] leading-none">LUMEA</span>
          <span className="font-display text-[8px] sm:text-[10px] tracking-[0.4em] text-brand-cyan opacity-80 mt-1">WELLNESS</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        {['Home', 'Science', 'Shop'].map((item) => (
          <button
            key={item}
            onClick={() => setPage(item.toLowerCase())}
            className={`text-[10px] lg:text-xs uppercase tracking-widest font-bold transition-colors hover:text-brand-cyan ${
              activePage === item.toLowerCase() ? 'text-brand-cyan' : 'text-white/60'
            }`}
          >
            {item}
          </button>
        ))}
        <button 
          onClick={() => setPage('shop')}
          className="border border-brand-cyan text-brand-cyan px-4 lg:px-6 py-2 rounded-sm text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:bg-brand-cyan hover:text-brand-bg transition-all"
        >
          Catalog
        </button>
      </div>

      <button className="md:hidden text-brand-cyan p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-brand-surface border border-brand-cyan/20 shadow-2xl rounded-xl p-6 flex flex-col gap-6 md:hidden z-50"
        >
          {['Home', 'Science', 'Shop'].map((item) => (
            <button
              key={item}
              onClick={() => { setPage(item.toLowerCase()); setIsOpen(false); }}
              className={`text-sm uppercase tracking-[0.3em] font-bold text-left pb-2 border-b border-white/5 ${
                activePage === item.toLowerCase() ? 'text-brand-cyan' : 'text-white/60'
              }`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => { setPage('shop'); setIsOpen(false); }}
            className="w-full bg-brand-cyan text-brand-bg py-4 font-bold uppercase tracking-widest text-xs rounded-sm"
          >
            Access Catalog
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ onExplore }: { onExplore: () => void }) => (
  <section className="relative min-h-[90vh] md:h-screen flex items-center overflow-hidden bg-brand-bg pt-24 md:pt-32">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-20 md:opacity-30 scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-brand-bg via-brand-bg/60 md:via-brand-bg/60 to-transparent" />
    </div>

    <div className="brochure-line-v ml-4 sm:ml-8 md:ml-20 !top-24 hidden sm:block" />

    <div className="relative z-10 w-full max-w-5xl px-6 sm:px-12 md:px-32">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <span className="diamond-bullet uppercase text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] font-medium opacity-90 mb-4 sm:mb-6 block">
          Premium Recovery Solutions
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-[80px] lg:text-[100px] font-display font-bold text-white mb-4 leading-[1.1] md:leading-[0.9]">
          Performance <br className="hidden sm:block" />
          <span className="text-brand-cyan tracking-tight">Optimized.</span>
        </h1>
        
        <div className="brochure-line-h max-w-xs sm:max-w-sm mb-6 sm:mb-8 mx-auto md:mx-0" />

        <p className="text-sm sm:text-base md:text-xl text-white/70 mb-10 md:mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
          Engineered for peak performance, Lumea delivers precisely controlled therapeutic ecosystems for athletes, clinics and wellness centers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
          <button 
            onClick={onExplore}
            className="w-full sm:w-auto bg-brand-cyan text-brand-bg px-8 sm:px-12 py-3 sm:py-4 font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-white transition-all scale-100 hover:scale-105"
          >
            Explore Ecosystem
          </button>
          <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 font-bold uppercase tracking-widest text-[10px] sm:text-xs border border-white/20 hover:border-brand-cyan transition-colors">
            Our Science
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const PillarCard = ({ product, index }: { product: Product, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-[1px] sm:w-[2px] bg-brand-cyan/20 group-hover:bg-brand-cyan transition-colors" />
      
      <div className="relative h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden rounded-none mb-6 sm:mb-8 grayscale hover:grayscale-0 transition-all duration-1000">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
        <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12">
          <span className="diamond-bullet uppercase text-[8px] sm:text-xs tracking-[0.3em] text-brand-cyan mb-2 sm:mb-4 block">Professional Series</span>
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-2 sm:mb-4 text-white leading-none">{product.name}</h3>
          <div className="brochure-line-h max-w-[60px] sm:max-w-[100px] mb-4 sm:mb-6" />
          <p className="text-white/60 max-w-md text-xs sm:text-sm md:text-lg leading-relaxed uppercase tracking-widest">{product.tagline}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 px-2 sm:px-8">
        <div className="lg:col-span-2">
          <h4 className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-4 sm:mb-6">Physiological Outcomes</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
            {product.benefits.map((b, i) => (
              <div key={i} className="flex flex-col gap-1 sm:gap-2">
                <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider diamond-bullet">{b.title}</span>
                <span className="text-white/40 text-[9px] sm:text-[10px] leading-relaxed uppercase tracking-widest">{b.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-start md:justify-end mt-4 sm:mt-0">
          <button className="border-b-2 border-brand-cyan py-1 sm:py-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:text-brand-cyan transition-all">
            Engineering Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const handleInquiry = () => {
    const modelText = selectedModel ? ` model: *${selectedModel}*` : "";
    const message = `Hello Lumea Wellness, I am interested in the *${product.name}*${modelText}. Can you provide more technical details and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918086459127?text=${encodedMessage}`, '_blank');
  };

  return (
    <div key={product.id} className="bg-brand-surface border border-white/5 p-6 sm:p-10 flex flex-col h-full relative group hover:border-brand-cyan/40 transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-brand-cyan transition-opacity font-display font-bold uppercase tracking-widest text-[7px] pointer-events-none">
        Tech Spec V.1
      </div>
      
      <div className="flex-1">
        <span className="text-[8px] sm:text-[10px] font-bold text-brand-cyan uppercase tracking-[0.3em] diamond-bullet">{product.category} therapy</span>
        <h3 className="text-2xl sm:text-3xl font-display font-bold mt-3 sm:mt-4 mb-2 text-white">{product.name}</h3>
        <p className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest mb-6 sm:mb-8 leading-relaxed line-clamp-2 md:h-10">{product.tagline}</p>
        
        <div className="brochure-line-h mb-6 sm:mb-8 opacity-30" />

        <div className="mb-8 sm:mb-10">
          <h4 className="text-[8px] sm:text-[10px] font-bold text-brand-cyan mb-3 sm:mb-4 uppercase tracking-[0.2em] border-l-2 border-brand-cyan pl-2 sm:pl-3">Select Model</h4>
          <div className="space-y-2">
            {product.models.map((m, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedModel(m)}
                className={`w-full text-left text-[9px] sm:text-[10px] uppercase tracking-wider p-2 sm:p-3 font-medium transition-all border ${
                  selectedModel === m 
                    ? 'bg-brand-cyan text-brand-bg border-brand-cyan' 
                    : 'bg-white/5 text-white/70 border-transparent hover:border-white/20'
                }`}
              >
                ✦ {m}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <h4 className="text-[8px] sm:text-[10px] font-bold text-brand-cyan mb-3 sm:mb-4 uppercase tracking-[0.2em] border-l-2 border-brand-cyan pl-2 sm:pl-3">Engineering Specs</h4>
          <ul className="grid grid-cols-1 gap-3 sm:gap-4">
            {product.specs.map((s, i) => (
              <li key={i} className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/50 border-b border-white/5 pb-1 sm:pb-2">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <button 
        onClick={handleInquiry}
        className="w-full py-3 sm:py-4 bg-transparent border-2 border-brand-cyan text-brand-cyan font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs hover:bg-brand-cyan hover:text-brand-bg transition-all flex items-center justify-center gap-2 group"
      >
        <span>Inquire Details</span>
        <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

const ProductListing = ({ onBack }: { onBack: () => void }) => (
  <div className="section-padding pt-24 sm:pt-40 min-h-screen bg-brand-bg">
    <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 sm:mb-24 gap-6 sm:gap-8">
      <div className="relative pl-8 sm:pl-12 text-center md:text-left">
        <div className="brochure-line-v" />
        <span className="diamond-bullet uppercase text-[10px] sm:text-xs tracking-[0.3em] text-brand-cyan mb-2 sm:mb-4 block">Inventory</span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-2 leading-none uppercase">Technical <br className="hidden sm:block" /> Ecosystem</h2>
      </div>
      <button 
        onClick={onBack}
        className="text-[10px] sm:text-xs uppercase tracking-widest font-bold border-b border-brand-cyan pb-1 sm:pb-2 hover:text-brand-cyan transition-colors"
      >
        Return Home
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-brand-bg text-white border-t border-white/5 section-padding mt-12 sm:mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 mb-16 sm:mb-20 relative">
      <div className="brochure-line-v opacity-20 hidden md:block" />
      <div className="col-span-1 md:col-span-2 md:pl-12">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-8 h-8 border-2 border-brand-cyan flex items-center justify-center">
            <span className="font-display font-bold text-sm text-brand-cyan">L</span>
          </div>
          <span className="font-display font-bold text-lg sm:text-xl tracking-[0.2em]">LUMEA</span>
        </div>
        <p className="text-white/40 max-w-sm text-xs uppercase tracking-widest leading-relaxed">
          The intersection of performance optimization and holistic well-being. Built for those who demand excellence from their recovery.
        </p>
      </div>
      
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan mb-6 sm:mb-8">Contact</h4>
        <div className="space-y-3 sm:space-y-4 text-white/60 text-[10px] uppercase tracking-widest">
          <p>Lumea Wellness</p>
          <div className="flex flex-col gap-1">
            <p className="hover:text-brand-cyan transition-colors cursor-pointer">+91 9539000041</p>
            <p className="hover:text-brand-cyan transition-colors cursor-pointer">+91 7907047468</p>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan mb-6 sm:mb-8">Ecosystem</h4>
        <div className="space-y-3 sm:space-y-4 text-white/60 text-[10px] uppercase tracking-widest">
          <p className="hover:text-brand-cyan transition-colors cursor-pointer">Cold Therapy</p>
          <p className="hover:text-brand-cyan transition-colors cursor-pointer">Heat Therapy</p>
          <p className="hover:text-brand-cyan transition-colors cursor-pointer">Light Therapy</p>
        </div>
      </div>
    </div>
    
    <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] text-white/20">
      <p className="text-center md:text-left">© 2024 Lumea Wellness | Precision Recovery Systems</p>
      <div className="flex gap-4 sm:gap-8">
        <a href="#" className="hover:text-brand-cyan transition-colors">Privacy</a>
        <a href="#" className="hover:text-brand-cyan transition-colors">Specifications</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-brand-bg overflow-x-hidden">
      <Navbar activePage={page} setPage={setPage} />
      
      <main>
        {page === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Hero onExplore={() => setPage('shop')} />
            
            <section id="pillars" className="section-padding bg-brand-bg">
              <div className="max-w-7xl mx-auto">
                <div className="relative pl-6 sm:pl-12 mb-16 sm:mb-32">
                  <div className="brochure-line-v" />
                  <span className="diamond-bullet uppercase text-[10px] sm:text-xs tracking-[0.3em] text-brand-cyan mb-3 sm:mb-4 block">Ecosystem</span>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold text-white mb-4 sm:mb-6 uppercase leading-tight">Total <br /> Recovery.</h2>
                  <p className="text-sm sm:text-lg text-white/40 max-w-2xl font-light leading-relaxed uppercase tracking-[0.1em] sm:tracking-widest">
                    Integrated science-backed modalities engineered to enhance physical resilience and biological potential.
                  </p>
                </div>
                
                <div className="flex flex-col gap-32 sm:gap-48">
                  {PRODUCTS.map((product, i) => (
                    <PillarCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>
            </section>

            <section className="section-padding bg-brand-bg relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-cyan/5 -skew-y-3 translate-y-32" />
              <div className="relative z-10 glass-card rounded-none p-8 sm:p-16 md:p-32 text-center max-w-6xl mx-auto border-brand-cyan/30">
                <span className="diamond-bullet uppercase text-[10px] sm:text-xs tracking-[0.3em] text-brand-cyan mb-6 sm:mb-8 block">Inquiry</span>
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 sm:mb-8 uppercase leading-tight">Elevate Your <br className="sm:hidden" /> Environment.</h2>
                <p className="text-xs sm:text-xl text-white/40 mb-10 sm:mb-12 max-w-2xl mx-auto font-light uppercase tracking-widest">
                  Professional Series equipment for commercial clinics, elite performance centers and private estates.
                </p>
                <button 
                  onClick={() => setPage('shop')}
                  className="w-full sm:w-auto bg-brand-cyan text-brand-bg px-8 sm:px-16 py-4 sm:py-6 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-sm hover:bg-white transition-all hover:scale-105"
                >
                  Access Catalog
                </button>
              </div>
            </section>
          </motion.div>
        )}

        {page === 'shop' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ProductListing onBack={() => setPage('home')} />
          </motion.div>
        )}

        {page === 'science' && (
          <div className="section-padding pt-32 sm:pt-40 text-center min-h-screen bg-brand-bg flex flex-col items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="diamond-bullet uppercase text-[10px] sm:text-xs tracking-[0.3em] text-brand-cyan mb-6 block">Our Foundation</span>
              <h2 className="text-4xl sm:text-6xl font-display font-bold mb-8 text-white uppercase tracking-tight">The Science of <br /> Optimized Recovery.</h2>
              <div className="brochure-line-h mx-auto mb-8 sm:mb-12 opacity-40" />
              <p className="text-white/40 text-sm sm:text-xl font-light uppercase tracking-widest leading-relaxed">
                Every Lumea product is engineered using principles of photobiomodulation, thermodynamics, and cellular metabolic pathways to ensure measurable physiological results. We translate clinical data into professional-grade equipment.
              </p>
              <button 
                onClick={() => setPage('home')}
                className="mt-12 text-xs uppercase tracking-widest font-bold text-brand-cyan border-b border-brand-cyan pb-2"
              >
                Return to Surface
              </button>
            </motion.div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
