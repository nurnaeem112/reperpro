import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Globe, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function About() {
  return (
    <div className="pt-48 pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] hero-glow -z-10 opacity-50"></div>
      
      <section className="max-w-7xl mx-auto text-center relative mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">The Future of Content</span>
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
          Amplifying <span className="text-gradient">Every Voice</span> <br /> with Celestial Intelligence.
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-xl leading-relaxed">
          RepurPro transcends traditional AI automation, delivering a sophisticated ecosystem designed for creators who demand depth, scale, and authenticity.
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="10M+" label="Posts Generated" color="text-primary" />
          <StatCard value="50k+" label="Global Creators" color="text-white" highlighted />
          <StatCard value="200k+" label="Hours Saved" color="text-secondary" />
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-32">
        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">Scaling Impact <br/>Without Burnout.</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Founded in the intersection of creative exhaustion and technological possibility, RepurPro was born from a simple realization: the most brilliant ideas are often lost in the noise of platform-specific logistics.
            </p>
            <p>
              Our founders, veterans of the content industry, saw creators spending 80% of their time on distribution and only 20% on the actual magic. We built RepurPro to flip that script.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-5xl overflow-hidden bg-surface-container border border-white/5 shadow-2xl group">
            <img 
              src="https://picsum.photos/seed/nebula/800/800" 
              alt="Celestial" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 p-8 bg-surface-container/60 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl max-w-[280px]">
            <Sparkles className="text-primary mb-4" />
            <p className="text-lg italic font-medium text-on-surface leading-relaxed">"The engine behind the modern digital renaissance."</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard icon={<Zap />} title="Innovation" desc="We don't follow trends; we engineer the tools that define the next decade of content creation." />
          <ValueCard icon={<TrendingUp />} title="Scalability" desc="From solo-creators to global media houses, our infrastructure grows with your ambition." />
          <ValueCard icon={<ShieldCheck />} title="Authenticity" desc="Artificial Intelligence should amplify human truth, not replace it. We prioritize the creator's soul." />
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-20 text-center tracking-tighter">The Minds Behind the Magic.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <TeamMember name="Alex Sterling" role="Founder & CEO" img="https://picsum.photos/seed/alex/400/500" />
          <TeamMember name="Sarah Chen" role="CTO" img="https://picsum.photos/seed/sarah/400/500" />
          <TeamMember name="Marcus Thorne" role="Head of Design" img="https://picsum.photos/seed/marcus/400/500" />
          <TeamMember name="Elena Rodriguez" role="Strategy Director" img="https://picsum.photos/seed/elena/400/500" />
        </div>
      </section>
    </div>
  );
}

function StatCard({ value, label, color, highlighted }: any) {
  return (
    <div className={cn(
      "p-12 rounded-4xl border flex flex-col justify-center items-center text-center transition-all duration-500",
      highlighted ? "bg-surface-container border-white/10 shadow-2xl scale-105 z-10" : "bg-surface-container-low border-white/5"
    )}>
      <span className={cn("text-5xl font-black mb-3 tracking-tighter", color)}>{value}</span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">{label}</span>
    </div>
  );
}

function ValueCard({ icon, title, desc }: any) {
  return (
    <div className="group p-10 rounded-4xl bg-surface-container-low transition-all duration-500 hover:bg-surface-container border border-white/5 hover:border-primary/20">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
        {React.cloneElement(icon as React.ReactElement, { className: "text-primary", size: 28 })}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-primary">{title}</h3>
      <p className="text-on-surface-variant text-lg leading-relaxed">{desc}</p>
    </div>
  );
}

function TeamMember({ name, role, img }: any) {
  return (
    <div className="space-y-6 group">
      <div className="aspect-[4/5] rounded-4xl bg-surface-container-highest overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/5 group-hover:border-primary/30">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
        <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">{role}</p>
      </div>
    </div>
  );
}
