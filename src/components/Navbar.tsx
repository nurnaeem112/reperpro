import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  if (location.pathname === '/login' || location.pathname === '/signup') return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-black/5">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-on-surface flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          RepurPro
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium tracking-tight text-sm">
          <NavLink to="/" active={location.pathname === '/'}>Features</NavLink>
          <NavLink to="/pricing" active={location.pathname === '/pricing'}>Pricing</NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/login" className="text-on-surface-variant hover:text-on-surface font-medium text-sm transition-colors">Login</Link>
          <Link to="/signup" className="bg-primary text-white font-bold px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 text-sm shadow-lg shadow-primary/20">
            Start Free
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }: { to: string, children: React.ReactNode, active: boolean }) {
  return (
    <Link 
      to={to} 
      className={cn(
        "relative py-1 transition-colors", 
        active ? "text-on-surface" : "text-on-surface-variant hover:text-on-surface"
      )}
    >
      {children}
      {active && (
        <motion.div 
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
        />
      )}
    </Link>
  );
}
