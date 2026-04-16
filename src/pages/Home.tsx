import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Twitter, Linkedin, MessageSquare, AtSign, FileText, Zap, Brain, Rocket, BarChart3, Clock, Bookmark, Check, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-glow -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container-highest/30 border border-white/5 backdrop-blur-md mb-8"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Powered by Gemini 3.1 Pro</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline font-bold text-6xl md:text-8xl lg:text-9xl text-center max-w-6xl leading-[0.9] mb-8 tracking-tighter"
        >
          Turn One Idea Into Content for Every Platform
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant text-center max-w-2xl mb-12 leading-relaxed"
        >
          RepurPro uses AI to transform your idea into optimized platform-specific posts for X, LinkedIn, Reddit, Threads.

        </motion.p>

        {/* AI Command Line */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-3xl relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-surface-container/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-5 flex flex-col gap-4 shadow-2xl">
            <div className="flex items-start gap-4 px-4 pt-2">
              <Sparkles className="text-primary mt-1 w-6 h-6" />
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 p-0 resize-none min-h-[100px] text-lg" 
                placeholder="Paste your idea or link here..."
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 px-2 pb-2">
              <div className="flex flex-wrap gap-2">
                <PlatformChip icon={<Twitter size={14} />} label="X Thread" />
                <PlatformChip icon={<Linkedin size={14} />} label="LinkedIn" />
                <PlatformChip icon={<MessageSquare size={14} />} label="Reddit" />
                <PlatformChip icon={<AtSign size={14} />} label="Threads" />
              </div>
              <Link to="/dashboard" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-white/5">
                Generate <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>

        
      </section>

      {/* Engineered for Velocity */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl text-left">
            <h2 className="font-headline font-bold text-5xl md:text-6xl mb-6 leading-tight">Built for Speed, Made for Creators</h2>
            <p className="text-on-surface-variant text-lg">Turn one idea into content for every platform — without rewriting or wasting time.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant">01</div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant">02</div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant">03</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Zap className="text-primary" />} 
            title="Input Idea" 
            description="Add a thought, blog, or content. We extract the key message instantly."
          />
          <FeatureCard 
            icon={<Brain className="text-secondary" />} 
            title="AI creates platform-ready posts"   
            description="Get content tailored for X, LinkedIn, Reddit, Threads — each optimized to perform."
          />
          <FeatureCard 
            icon={<Rocket className="text-primary" />} 
            title="Publish or copy in seconds" 
            description="Copy or post your content across platforms with one click. No formatting needed."
          />
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container p-12 rounded-5xl flex flex-col justify-end border border-white/5 relative overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/tech/1200/800" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000" 
              alt="AI Background"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Brain className="text-primary" />
              </div>
              <h3 className="font-headline font-bold text-4xl mb-4">Intelligent AI Repurposing</h3>
              <p className="text-on-surface-variant text-lg max-w-md">Our neural engine doesn't just copy-paste; it reframes your core arguments for the specific audience psychographics of each platform.</p>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-primary-dim p-12 rounded-5xl text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <Sparkles size={48} />
            <div>
              <h3 className="font-headline font-bold text-3xl mb-2">Viral Hook Gen</h3>
              <p className="text-white/80 text-lg">Stop the scroll with AI-tested opening lines that demand attention.</p>
            </div>
          </div>

          <div className="bg-surface-container-high p-10 rounded-5xl flex flex-col justify-between border border-white/5">
            <Clock className="text-primary" size={32} />
            <div>
              <h3 className="font-headline font-bold text-2xl mb-2">Smart Scheduling</h3>
              <p className="text-on-surface-variant text-sm">Post when your specific niche is most active. No guesswork.</p>
            </div>
          </div>

          <div className="bg-surface-container-highest p-10 rounded-5xl flex flex-col justify-between border border-white/5">
            <BarChart3 className="text-secondary" size={32} />
            <div>
              <h3 className="font-headline font-bold text-2xl mb-2">Performance</h3>
              <p className="text-on-surface-variant text-sm">Real-time analytics for every repurposed post.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md mb-8"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Simple, Transparent Pricing</span>
          </motion.div>
          
          <h2 className="font-headline font-bold text-5xl md:text-7xl tracking-tighter mb-8 leading-[0.9]">
            Plans that scale with <br /> <span className="text-gradient">your influence.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          <PricingCard 
            tier="Free"
            price="0"
            description="Perfect for experimenting."
            features={[
              { text: "5 Repurposes / mo", included: true },
              { text: "X & LinkedIn only", included: true },
              { text: "Standard Speed", included: true },
              { text: "Advanced Analytics", included: false },
            ]}
            buttonText="Start Free"
          />
          <PricingCard 
            tier="Creator"
            price="29"
            description="For serious digital creators."
            featured
            features={[
              { text: "Unlimited Repurposes", included: true },
              { text: "All Platforms", included: true },
              { text: "Viral Hook Engine", included: true },
              { text: "Custom AI Voices", included: true },
            ]}
            buttonText="Get Started"
          />
          <PricingCard 
            tier="Pro"
            price="79"
            description="For agencies and teams."
            features={[
              { text: "Team Workspaces", included: true },
              { text: "API Access", included: true },
              { text: "White-label Reports", included: true },
              { text: "Priority Support", included: true },
            ]}
            buttonText="Contact Sales"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">Common Questions</h2>
          <p className="text-on-surface-variant text-lg">Everything you need to know about RepurPro.</p>
        </div>
        <div className="space-y-4">
          <FAQItem 
            question="Can I cancel my subscription at any time?"
            answer="Yes, you can cancel your subscription at any time from your dashboard. Your access will remain active until the end of your current billing period."
          />
          <FAQItem 
            question="What platforms are supported for repurposing?"
            answer="RepurPro supports YouTube, TikTok, Instagram, Twitter/X, LinkedIn, and Facebook. Our Creator and Pro plans include all current and future platform integrations."
          />
          <FAQItem 
            question="Is there a limit on how much I can generate?"
            answer="While the Creator plan is 'unlimited,' we maintain a fair usage policy to ensure high performance for all users. Most individual creators will never hit these soft limits."
          />
          <FAQItem 
            question="How does the AI ensure my voice is maintained?"
            answer="Our AI analyzes your input content's tone, style, and key arguments. It then adapts these to the target platform while preserving your unique perspective and core message."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline font-bold text-6xl md:text-8xl mb-8 leading-[0.9] tracking-tighter">Ready to 10x Your <br/><span className="text-gradient">Content Reach?</span></h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-12 text-xl leading-relaxed">Join 15,000+ creators who are saving 20+ hours a week while reaching 5x more people.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/signup" className="btn-primary text-lg px-12 py-5">
              Start Your Free Trial
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-12 py-5">
              See Showcase
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function PlatformChip({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <span className="bg-white/5 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest text-on-surface-variant flex items-center gap-2 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
      {icon} {label}
    </span>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-surface-container-low p-12 rounded-5xl relative group overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-16 h-16 bg-surface-container-highest rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
      <h3 className="font-headline font-bold text-3xl mb-4">{title}</h3>
      <p className="text-on-surface-variant text-lg leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({ tier, price, description, features, buttonText, featured }: any) {
  return (
    <div className={cn(
      "p-10 rounded-5xl border flex flex-col transition-all duration-500 relative group",
      featured 
        ? "bg-surface-container border-primary/50 shadow-2xl scale-105 z-10" 
        : "bg-surface-container-low border-white/5 hover:border-white/20"
    )}>
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-bold px-6 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-lg shadow-primary/20">
          MOST POPULAR
        </div>
      )}
      <div className="mb-10">
        <h3 className="font-headline font-bold text-2xl mb-4">{tier}</h3>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-5xl font-bold tracking-tighter">${price}</span>
          <span className="text-on-surface-variant font-medium">/mo</span>
        </div>
        <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
      </div>
      <ul className="space-y-5 mb-12 flex-grow">
        {features.map((f: any, i: number) => (
          <li key={i} className={cn("flex items-center gap-4 text-sm font-medium transition-opacity", !f.included && "opacity-30")}>
            <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", f.included ? "bg-primary/20 text-primary" : "bg-white/5 text-on-surface-variant")}>
              {f.included ? <Check size={12} /> : <X size={12} />}
            </div>
            {f.text}
          </li>
        ))}
      </ul>
      <button className={cn(
        "w-full py-5 rounded-full font-bold transition-all text-lg",
        featured 
          ? "bg-white text-black shadow-xl shadow-white/5 hover:scale-[1.02] active:scale-95" 
          : "bg-surface-container-highest text-white border border-white/5 hover:bg-white/5 active:scale-95"
      )}>
        {buttonText}
      </button>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="bg-surface-container/40 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden transition-all hover:border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex justify-between items-center text-left group"
      >
        <h4 className="font-bold text-xl text-white group-hover:text-primary transition-colors">{question}</h4>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
        >
          <ChevronDown className="w-5 h-5 opacity-50" />
        </motion.div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <p className="px-8 pb-8 text-on-surface-variant text-lg leading-relaxed max-w-3xl">{answer}</p>
      </motion.div>
    </div>
  );
}
