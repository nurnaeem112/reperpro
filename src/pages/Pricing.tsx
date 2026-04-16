import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="pt-48 pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] hero-glow -z-10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md mb-8"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Simple, Transparent Pricing</span>
        </motion.div>
        
        <h1 className="font-headline font-bold text-6xl md:text-8xl tracking-tighter mb-8 leading-[0.9]">
          Plans that scale with <br /> <span className="text-gradient">your influence.</span>
        </h1>
        <p className="text-on-surface-variant text-xl max-w-2xl mx-auto leading-relaxed">
          Dominate every social platform without the extra work. Choose the plan that fits your creative workflow.
        </p>
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

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mt-48">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-white mb-4">Common Questions</h2>
          <p className="text-on-surface-variant">Everything you need to know about RepurPro.</p>
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
        </div>
      </section>
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

import { cn } from '@/src/lib/utils';
import { ChevronDown } from 'lucide-react';
