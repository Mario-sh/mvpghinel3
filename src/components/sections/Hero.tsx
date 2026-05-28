import { AnimatedText, FadeIn } from "../ui/AnimatedText";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bg opacity-90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50 z-20" />
        
        {/* Subtle glowing orb for "golden hour" / brand vibe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/20 blur-[120px] rounded-full pointer-events-none"
        />
        
        {/* We can use an abstract cinematic placeholder or high-res texture here. For now, elegant noise/gradient */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col items-center text-center">
        <FadeIn delay={0.2} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">The New African Narrative</span>
        </FadeIn>

        <AnimatedText 
          as="h1"
          text="Africa's stories deserve"
          className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold leading-[1.1] tracking-tight text-white mb-2"
        />
        <AnimatedText 
          as="h1"
          text="a global stage."
          delay={0.8}
          className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold leading-[1.1] tracking-tight text-brand mb-8"
        />

        <FadeIn delay={1.5} className="max-w-2xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-muted leading-relaxed font-light">
            We are building the digital intersection of culture, creativity, and future-forward technology. Preserving heritage, amplifying voices, and redefining identical on a worldwide scale.
          </p>
        </FadeIn>

        <FadeIn delay={1.8}>
          <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-bg font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Discover GHINEL</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-brand translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-full"></div>
          </button>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 bg-brand"
          />
        </div>
      </motion.div>
    </section>
  );
}
