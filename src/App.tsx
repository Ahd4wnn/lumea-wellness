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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-6 my-4 rounded-xl px-8 py-4 flex items-center justify-between border-brand-cyan/20">
      <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setPage('home')}>
        <div className="w-10 h-10 border-2 border-brand-cyan flex items-center justify-center transition-transform group-hover:scale-105">
          <span className="font-display font-bold text-xl text-brand-cyan">L</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg tracking-[0.2em] leading-none">LUMEA</span>
          <span className="font-display text-[10px] tracking-[0.4em] text-brand-cyan opacity-80 mt-1">WELLNESS</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {['Home', 'Science', 'Shop'].map((item) => (
          <button
            key={item}
            onClick={() => setPage(item.toLowerCase())}
            className={`text-xs uppercase tracking-widest font-bold transition-colors hover:text-brand-cyan ${
              activePage === item.toLowerCase() ? 'text-brand-cyan' : 'text-white/60'
            }`}
          >
            {item}
          </button>
        ))}
        <button 
          onClick={() => setPage('shop')}
          className="border border-brand-cyan text-brand-cyan px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-cyan hover:text-brand-bg transition-all"
        >
          Catalog
        </button>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 md:hidden"
        >
          {['Home', 'Science', 'Shop'].map((item) => (
            <button
              key={item}
              onClick={() => { setPage(item.toLowerCase()); setIsOpen(false); }}
              className="text-left py-2 border-b border-gray-100 last:border-0"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ onExplore }: { onExplore: () => void }) => (
  <section className="relative h-screen flex items-center overflow-hidden bg-brand-bg">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-30 scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/60 to-transparent" />
    </div>

    <div className="brochure-line-v ml-8 md:ml-20" />

    <div className="relative z-10 max-w-5xl px-12 md:px-32">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="diamond-bullet uppercase text-sm tracking-[0.3em] font-medium opacity-90 mb-6 block">
          Premium Recovery Solutions
        </span>
        <h1 className="text-6xl md:text-[100px] font-display font-bold text-white mb-4 leading-[0.9]">
          Performance <br />
          <span className="text-brand-cyan tracking-tight">Optimized.</span>
        </h1>
        
        <div className="brochure-line-h max-w-sm mb-8" />

        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl leading-relaxed font-light">
          Engineered for peak performance, Lumea delivers precisely controlled therapeutic ecosystems for athletes, clinics and wellness centers.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button 
            onClick={onExplore}
            className="w-full sm:w-auto bg-brand-cyan text-brand-bg px-12 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all scale-100 hover:scale-105"
          >
            Explore Ecosystem
          </button>
          <button className="w-full sm:w-auto px-12 py-4 font-bold uppercase tracking-widest border border-white/20 hover:border-brand-cyan transition-colors">
            Our Science
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const PillarCard = ({ product, index }: { product: Product, index: number }) => {
  const Icon = product.category === 'cold' ? Thermometer : product.category === 'heat' ? Wind : Sun;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative"
    >
      <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-brand-cyan/20 group-hover:bg-brand-cyan transition-colors" />
      
      <div className="relative h-[600px] overflow-hidden rounded-none mb-8 grayscale hover:grayscale-0 transition-all duration-1000">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-80" />
        <div className="absolute bottom-12 left-12 right-12">
          <span className="diamond-bullet uppercase text-xs tracking-[0.3em] text-brand-cyan mb-4 block">Professional Series</span>
          <h3 className="text-5xl md:text-7xl font-display font-bold mb-4 text-white leading-none">{product.name}</h3>
          <div className="brochure-line-h max-w-[100px] mb-6" />
          <p className="text-white/60 max-w-md text-lg leading-relaxed">{product.tagline}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-6">Physiological Outcomes</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {product.benefits.map((b, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="font-display text-sm font-bold uppercase tracking-wider diamond-bullet">{b.title}</span>
                <span className="text-white/40 text-xs leading-relaxed uppercase tracking-widest">{b.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-end">
          <button className="border-b-2 border-brand-cyan py-2 text-xs font-bold uppercase tracking-[0.3em] hover:text-brand-cyan transition-all">
            Technical Specs
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductListing = ({ onBack }: { onBack: () => void }) => (
  <div className="section-padding pt-40 min-h-screen bg-brand-bg">
    <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
      <div className="relative pl-12">
        <div className="brochure-line-v" />
        <span className="diamond-bullet uppercase text-xs tracking-[0.3em] text-brand-cyan mb-4 block">Inventory</span>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-2 leading-none">Technical <br/> Ecosystem</h2>
      </div>
      <button 
        onClick={onBack}
        className="text-xs uppercase tracking-widest font-bold border-b border-brand-cyan pb-2 hover:text-brand-cyan transition-colors"
      >
        Return Home
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {PRODUCTS.map((product) => (
        <div key={product.id} className="bg-brand-surface border border-white/5 p-10 flex flex-col h-full relative group hover:border-brand-cyan/40 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-brand-cyan transition-opacity font-display font-bold uppercase tracking-widest text-[8px]">
            Tech Specification V.1
          </div>
          
          <div className="flex-1">
            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-[0.3em] diamond-bullet">{product.category} therapy</span>
            <h3 className="text-3xl font-display font-bold mt-4 mb-2 text-white">{product.name}</h3>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-8 leading-relaxed">{product.tagline}</p>
            
            <div className="brochure-line-h mb-8" />

            <div className="mb-10">
              <h4 className="text-[10px] font-bold text-brand-cyan mb-4 uppercase tracking-[0.2em] border-l-2 border-brand-cyan pl-3">Available Models</h4>
              <ul className="space-y-3">
                {product.models.map((m, i) => (
                  <li key={i} className="text-[11px] uppercase tracking-wider text-white/70 bg-white/5 p-3 font-medium">✦ {m}</li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h4 className="text-[10px] font-bold text-brand-cyan mb-4 uppercase tracking-[0.2em] border-l-2 border-brand-cyan pl-3">Engineering Specs</h4>
              <ul className="grid grid-cols-1 gap-4">
                {product.specs.map((s, i) => (
                  <li key={i} className="text-[10px] uppercase tracking-widest text-white/50 border-b border-white/5 pb-2">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <button className="w-full py-4 bg-transparent border-2 border-brand-cyan text-brand-cyan font-bold uppercase tracking-[0.3em] text-xs hover:bg-brand-cyan hover:text-brand-bg transition-all">
            Inquire Specifications
          </button>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-brand-bg text-white border-t border-white/5 section-padding mt-20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative">
      <div className="brochure-line-v opacity-20" />
      <div className="col-span-1 md:col-span-2 pl-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 border-2 border-brand-cyan flex items-center justify-center">
            <span className="font-display font-bold text-sm text-brand-cyan">L</span>
          </div>
          <span className="font-display font-bold text-xl tracking-[0.2em]">LUMEA</span>
        </div>
        <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest leading-relaxed">
          The intersection of performance optimization and holistic well-being. Built for the elite. 
        </p>
      </div>
      
      <div>
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-cyan mb-8">Contact</h4>
        <div className="space-y-4 text-white/60 text-xs uppercase tracking-widest">
          <p>Lumea Wellness</p>
          <p>+91 9539000041</p>
          <p>+91 7907047468</p>
        </div>
      </div>
      
      <div>
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-cyan mb-8">Ecosystem</h4>
        <div className="space-y-4 text-white/60 text-xs uppercase tracking-widest">
          <p>Cold Therapy</p>
          <p>Heat Therapy</p>
          <p>Light Therapy</p>
        </div>
      </div>
    </div>
    
    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/20">
      <p>© 2024 Lumea Wellness | Precision Engineered</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-brand-cyan transition-colors">Privacy Specification</a>
        <a href="#" className="hover:text-brand-cyan transition-colors">Terms of Use</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen">
      <Navbar activePage={page} setPage={setPage} />
      
      {page === 'home' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Hero onExplore={() => setPage('shop')} />
          
          <section id="pillars" className="section-padding bg-brand-bg">
            <div className="max-w-7xl mx-auto">
              <div className="relative pl-12 mb-32">
                <div className="brochure-line-v" />
                <span className="diamond-bullet uppercase text-xs tracking-[0.3em] text-brand-cyan mb-4 block">Ecosystem</span>
                <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 uppercase">Total <br /> Recovery.</h2>
                <p className="text-lg text-white/40 max-w-2xl font-light leading-relaxed uppercase tracking-widest">
                  Integrated science-backed modalities engineered to enhance physical resilience and biological potential.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-48">
                {PRODUCTS.map((product, i) => (
                  <PillarCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-brand-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-cyan/5 -skew-y-3 translate-y-32" />
            <div className="relative z-10 glass-card rounded-none p-12 md:p-32 text-center max-w-6xl mx-auto border-brand-cyan/30">
              <span className="diamond-bullet uppercase text-xs tracking-[0.3em] text-brand-cyan mb-8 block">Inquiry</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8">Elevate Your <br /> Environment.</h2>
              <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto font-light uppercase tracking-widest">
                Professional Series equipment for commercial clinics, elite centers and private estates.
              </p>
              <button 
                onClick={() => setPage('shop')}
                className="bg-brand-cyan text-brand-bg px-16 py-6 font-bold uppercase tracking-[0.3em] text-sm hover:bg-white transition-all hover:scale-105"
              >
                Access Technical Catalog
              </button>
            </div>
          </section>
        </motion.div>
      )}

      {page === 'shop' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <ProductListing onBack={() => setPage('home')} />
        </motion.div>
      )}

      {page === 'science' && (
        <div className="section-padding pt-32 text-center min-h-screen">
          <h2 className="text-5xl font-display mb-8">The Science of Recovery</h2>
          <p className="max-w-2xl mx-auto text-brand-slate/60 text-lg">
            Every Lumea product is engineered using principles of photobiomodulation, thermodynamics, and cellular metabolic pathways to ensure measurable physiological results.
          </p>
          {/* Add more scientific details if needed */}
        </div>
      )}

      <Footer />
    </div>
  );
}
