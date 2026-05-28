import { AnimatedText, FadeIn } from "../ui/AnimatedText";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-40 md:py-60 overflow-hidden bg-brand">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2)_0%,transparent_70%)] mix-blend-overlay" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <AnimatedText 
          as="h2"
          text="The Next Chapter."
          className="text-5xl md:text-8xl font-bold tracking-tighter text-bg mb-8"
        />
        
        <FadeIn delay={0.4} className="max-w-2xl mx-auto mb-16">
          <p className="text-xl md:text-3xl text-bg/80 font-medium leading-relaxed">
            Be part of the movement that is defining the digital future of African culture.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-bg text-white font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-2xl shadow-bg/20">
            <span className="relative z-10 text-lg">Partner With Us</span>
            <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
          </button>
        </FadeIn>
      </div>
      
      {/* Footer minimal info integrated into CTA to save a component, or just a tiny bottom bar */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-center text-bg/60 text-sm font-medium tracking-wide">
        <span>© {new Date().getFullYear()} GHINEL. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-bg transition-colors">Twitter</a>
          <a href="#" className="hover:text-bg transition-colors">Instagram</a>
          <a href="#" className="hover:text-bg transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
