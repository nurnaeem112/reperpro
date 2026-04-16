import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Twitter, Linkedin, MessageSquare, FileText, History, Bookmark, BarChart3, Layers, Plus, Bell, Settings, Copy, RefreshCw, ChevronDown, Rocket, ArrowRight } from 'lucide-react';
import { generateRepurposedContent } from '@/src/services/gemini';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  const [content, setContent] = React.useState('');
  const [platform, setPlatform] = React.useState('X Thread');
  const [tone, setTone] = React.useState('Professional');
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [output, setOutput] = React.useState<any>(null);

  const handleGenerate = async () => {
    if (!content) return;
    setIsGenerating(true);
    const result = await generateRepurposedContent(content, platform, tone);
    setOutput(result);
    setIsGenerating(false);
  };

  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      

      {/* Main Content */}
      <main className=" pt-24 w-full relative min-h-screen">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] hero-glow pointer-events-none opacity-30"></div>
        
        <div className="max-w-6xl mx-auto p-6 md:p-10 relative z-10">
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                Refine Your <span className="text-gradient">Voice</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
                Transform your core concepts into platform-optimized masterpieces with our multi-channel neural engine.
              </p>
            </div>
            
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Input Area */}
            <section className="lg:col-span-5 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Core Narrative</label>
                  <span className="text-[10px] text-on-surface-variant/50 font-mono">{content.length} chars</span>
                </div>
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-80 bg-surface-container-low rounded-2xl p-6 text-on-surface border border-white/5 focus:border-primary/30 focus:ring-0 transition-all resize-none text-lg leading-relaxed placeholder:text-on-surface-variant/30" 
                  placeholder="Paste your idea, raw notes, or a long-form article here..."
                />
                
                <div className="mt-10 space-y-8">
                  <div>
                    <span className="block text-[10px] font-bold text-on-surface-variant mb-4 uppercase tracking-[0.2em]">Target Platforms</span>
                    <div className="flex flex-wrap gap-2">
                      {['X Thread', 'LinkedIn', 'Reddit', 'Threads'].map(p => (
                        <button 
                          key={p}
                          onClick={() => setPlatform(p)}
                          className={cn(
                            "px-5 py-2.5 rounded-full text-xs font-bold transition-all border",
                            platform === p 
                              ? "bg-primary/10 text-primary border-primary/30" 
                              : "bg-surface-container-high text-on-surface-variant border-transparent hover:border-white/10"
                          )}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold text-on-surface-variant mb-4 uppercase tracking-[0.2em]">System Tone</span>
                    <div className="grid grid-cols-2 gap-3">
                      <ToneButton active={tone === 'Viral'} onClick={() => setTone('Viral')} title="Viral" desc="High engagement, punchy" />
                      <ToneButton active={tone === 'Professional'} onClick={() => setTone('Professional')} title="Professional" desc="Authoritative & Insightful" />
                      <ToneButton active={tone === 'Storytelling'} onClick={() => setTone('Storytelling')} title="Storytelling" desc="Narrative-driven, immersive" />
                      <ToneButton active={tone === 'Casual'} onClick={() => setTone('Casual')} title="Casual" desc="Friendly & Approachable" />
                    </div>
                  </div>

                  <button 
                    onClick={handleGenerate}
                    disabled={isGenerating || !content}
                    className="w-full py-5 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="animate-spin" size={20} />
                        Synthesizing...
                      </>
                    ) : (
                      <>
                        Generate Content <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* Output Area */}
            <section className="lg:col-span-7 space-y-6">
              <div className="bg-surface-container/40 backdrop-blur-xl border border-white/5 rounded-4xl overflow-hidden flex flex-col min-h-[700px] shadow-2xl">
                <div className="flex items-center px-8 pt-8 border-b border-white/5 gap-10">
                  {['X Thread', 'LinkedIn', 'Reddit', 'Threads'].map(t => (
                    <button 
                      key={t} 
                      className={cn(
                        "pb-6 px-1 font-bold text-sm transition-all relative", 
                        t === platform ? "text-primary" : "text-on-surface-variant hover:text-white"
                      )}
                    >
                      {t}
                      {t === platform && (
                        <motion.div layoutId="active-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="p-10 flex-grow overflow-y-auto">
                  {output ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="prose prose-invert max-w-none"
                    >
                      <div className="font-mono text-xs text-primary/50 mb-6 uppercase tracking-widest">Generated Output</div>
                      <div className="whitespace-pre-wrap font-sans text-on-surface text-lg leading-relaxed selection:bg-primary/30">
                        {output}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-on-surface-variant/20">
                      <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
                        <Sparkles size={40} />
                      </div>
                      <p className="text-xl font-medium">Ready for synthesis</p>
                      <p className="text-sm opacity-50 mt-2">Input your core narrative to begin</p>
                    </div>
                  )}
                </div>

                {output && (
                  <div className="p-8 bg-surface-container-low/50 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <button className="px-6 py-3 rounded-full bg-surface-container-highest text-white text-sm font-bold border border-white/5 hover:bg-white/5 transition-all flex items-center gap-2">
                          <Copy size={18} /> Copy All
                        </button>
                        <button onClick={handleGenerate} className="px-6 py-3 rounded-full bg-surface-container-highest text-white text-sm font-bold border border-white/5 hover:bg-white/5 transition-all flex items-center gap-2">
                          <RefreshCw size={18} /> Regenerate
                        </button>
                      </div>
                      <button className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-all">
                        <Bookmark size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ icon, label, active }: any) {
  return (
    <a className={cn(
      "flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all group",
      active 
        ? "bg-white/5 text-white border border-white/10 shadow-lg" 
        : "text-on-surface-variant hover:text-white hover:bg-white/5"
    )} href="#">
      <span className={cn("transition-transform group-hover:scale-110", active ? "text-primary" : "")}>{icon}</span>
      <span className="text-sm font-bold tracking-tight">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(144,171,255,0.8)]"></div>}
    </a>
  );
}

function ToneButton({ active, onClick, title, desc }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "px-5 py-4 rounded-2xl border text-left transition-all group",
        active 
          ? "bg-surface-container-highest text-primary border-primary/40 shadow-lg" 
          : "bg-surface-container-low text-on-surface-variant border-white/5 hover:border-white/20"
      )}
    >
      <div className={cn("font-bold text-sm mb-1 transition-colors", active ? "text-white" : "text-on-surface")}>{title}</div>
      <div className="text-[10px] opacity-40 font-medium uppercase tracking-wider">{desc}</div>
    </button>
  );
}
