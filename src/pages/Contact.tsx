import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-48 pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] hero-glow -z-10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Connect with us</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
              Get in <br/><span className="text-gradient">Touch.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-md">
              We're here to help you scale. Whether you're a creator or an enterprise, our team is ready to amplify your reach.
            </p>
          </div>

          <div className="space-y-10">
            <ContactInfo icon={<Mail size={24} />} label="Email Support" value="support@repurpro.com" />
            <ContactInfo icon={<MapPin size={24} />} label="Location" value="Remote-first, built for the global creator economy." />
            
            <div className="pt-4 flex flex-wrap gap-4">
              <SocialLink icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink icon={<Github size={18} />} label="GitHub" />
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-4xl bg-surface-container-low border border-white/5 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10 flex justify-between items-center">
              <div className="space-y-2">
                <p className="text-xl font-bold text-white">Quick Question?</p>
                <p className="text-on-surface-variant leading-relaxed">Check our extensive FAQ library for instant answers.</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-surface-variant group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <ArrowRight size={24} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container/40 backdrop-blur-2xl border border-white/5 rounded-5xl p-10 md:p-16 shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 blur-3xl -z-10"></div>
            
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant ml-4">Full Name</label>
                  <input className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant ml-4">Email Address</label>
                  <input className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant ml-4">Subject</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none appearance-none transition-all">
                    <option className="bg-surface-container">General Inquiry</option>
                    <option className="bg-surface-container">Technical Support</option>
                    <option className="bg-surface-container">Enterprise Sales</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                    <ArrowRight size={18} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant ml-4">Your Message</label>
                <textarea className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none resize-none transition-all placeholder:text-white/20" rows={6} placeholder="Tell us about your project..." />
              </div>

              <button className="w-full bg-primary text-on-surface-variant font-bold text-xl py-6 rounded-full shadow-2xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-4 group">
                Send Message 
                <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, label, value }: any) {
  return (
    <div className="flex items-start gap-8 group">
      <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
        {React.cloneElement(icon as React.ReactElement, { className: "text-primary" })}
      </div>
      <div className="space-y-1">
        <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">{label}</p>
        <p className="text-2xl text-white font-medium">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon, label }: any) {
  return (
    <button className="px-6 py-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-white hover:bg-surface-container border border-white/5 hover:border-primary/30 transition-all text-sm font-bold tracking-tight flex items-center gap-3">
      {icon} {label}
    </button>
  );
}
