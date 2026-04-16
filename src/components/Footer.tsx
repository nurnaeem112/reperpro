import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-surface w-full py-24 px-8 border-t border-black/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] hero-glow -z-10 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-8 relative z-10">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-on-surface">
            Repur<span className="text-primary">Pro</span>
          </Link>
          <p className="text-on-surface-variant text-lg max-w-xs leading-relaxed">
            Building the intelligence layer for the creator economy. Elevate your narrative across every digital horizon.
          </p>
          <div className="pt-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50 font-bold">
              © 2026 RepurPro AI. <br/>Engineered for Celestial Intelligence.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          <h4 className="text-on-surface font-bold text-[10px] uppercase tracking-[0.2em]">Product</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Features</Link></li>
            <li><Link to="/pricing" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Pricing</Link></li>
            <li><Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Integrations</Link></li>
            <li><Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">API Docs</Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-on-surface font-bold text-[10px] uppercase tracking-[0.2em]">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">About Us</Link></li>
            <li><Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Careers</Link></li>
            <li><Link to="/contact" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Contact</Link></li>
            <li><Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Press Kit</Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-on-surface font-bold text-[10px] uppercase tracking-[0.2em]">Legal</h4>
          <ul className="space-y-4">
            <li><Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Privacy Policy</Link></li>
            <li><Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Terms of Service</Link></li>
            <li><Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Cookie Policy</Link></li>
            <li><Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Security</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
