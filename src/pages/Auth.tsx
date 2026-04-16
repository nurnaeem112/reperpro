import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Eye, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Auth({ mode }: { mode: 'login' | 'signup' }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] hero-glow -z-10 opacity-50"></div>
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-12">
          <Link to="/" className="text-4xl font-bold tracking-tighter text-white group">
            Repur<span className="text-primary group-hover:text-secondary transition-colors">Pro</span>
          </Link>
          <p className="text-on-surface-variant mt-4 text-lg font-medium">Join the digital renaissance.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container/40 backdrop-blur-2xl border border-white/5 p-10 md:p-12 rounded-5xl shadow-2xl relative"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl -z-10"></div>
          
          <h1 className="text-3xl font-bold mb-10 tracking-tight text-white">
            {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
          </h1>
          
          <form className="space-y-8">
            {mode === 'signup' && (
              <div className="space-y-3">
                <label className="block text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase ml-4">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors w-5 h-5" />
                  <input className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-white/10" placeholder="Alex Sterling" />
                </div>
              </div>
            )}

            <div className="space-y-3">
              <label className="block text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase ml-4">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors w-5 h-5" />
                <input className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-white/10" placeholder="alex@celestial.ai" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center ml-4">
                <label className="block text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase">Password</label>
                {mode === 'login' && <Link to="#" className="text-[10px] text-primary hover:underline font-bold tracking-wider uppercase">Forgot?</Link>}
              </div>
              <div className="relative group">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors w-5 h-5" />
                <input className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-16 pr-14 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-white/10" type="password" placeholder="••••••••" />
                <button type="button" className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            {mode === 'signup' && (
              <div className="flex items-start gap-4 ml-2">
                <div className="relative flex items-center">
                  <input type="checkbox" className="w-5 h-5 rounded-lg border-white/10 bg-white/5 text-primary focus:ring-primary/50 cursor-pointer appearance-none checked:bg-primary border transition-all" />
                  <div className="absolute pointer-events-none opacity-0 check-icon">
                    <svg className="w-3 h-3 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <label className="text-xs text-on-surface-variant leading-relaxed">
                  I agree to the <Link to="#" className="text-primary hover:underline font-bold">Terms</Link> and <Link to="#" className="text-primary hover:underline font-bold">Privacy Policy</Link>.
                </label>
              </div>
            )}

            <button className="w-full bg-primary text-on-surface-variant font-bold py-6 rounded-full shadow-2xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all text-lg">
              {mode === 'signup' ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[10px]">
              <span className="px-6 bg-surface-container-low text-on-surface-variant font-bold tracking-[0.2em] uppercase">OR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SocialButton icon="https://www.google.com/favicon.ico" label="Google" />
            <SocialButton icon={<Terminal size={20} />} label="GitHub" />
          </div>
        </motion.div>

        <p className="text-center mt-10 text-on-surface-variant text-lg">
          {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}
          <Link to={mode === 'signup' ? '/login' : '/signup'} className="text-primary font-bold hover:text-white transition-colors ml-2 underline underline-offset-8 decoration-primary/30 hover:decoration-white">
            {mode === 'signup' ? 'Sign In' : 'Sign Up'}
          </Link>
        </p>
      </div>
    </main>
  );
}

function SocialButton({ icon, label }: any) {
  return (
    <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white text-sm font-bold py-4 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
      {typeof icon === 'string' ? <img src={icon} className="w-5 h-5 group-hover:scale-110 transition-transform" alt={label} referrerPolicy="no-referrer" /> : icon}
      {label}
    </button>
  );
}
