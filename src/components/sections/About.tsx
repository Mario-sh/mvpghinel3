import { AnimatedText, FadeIn } from "../ui/AnimatedText";

export function About() {
  return (
    <section id="about" className="relative w-full py-32 md:py-48 bg-bg overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 lg:col-start-1">
            <FadeIn>
              <h2 className="text-sm font-semibold tracking-[0.2em] text-brand uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-brand"></span>
                The Vision
              </h2>
            </FadeIn>
            
            <AnimatedText 
              as="h3"
              text="Originating from the soul of the continent."
              className="text-4xl md:text-5xl font-medium leading-[1.1] mb-8"
            />
            
            <FadeIn delay={0.4}>
              <div className="space-y-6 text-lg text-muted font-light">
                <p>
                  GHINEL was born from a simple but profound truth: African culture has shaped the world, yet its digital footprint remains fragmented.
                </p>
                <p>
                  We are not just building a platform. We are constructing a digital sanctuary. A place where ancestral artistry meets modern innovation, preserving the raw emotional power of our heritage while propelling it into the future.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 relative">
            <FadeIn delay={0.6} className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden glass-panel-heavy p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent z-10 rounded-xl" />
              {/* Elegant placeholder, ideally a high-end editorial shot */}
              <div className="w-full h-full bg-[#1A2235] rounded-xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1531653198031-64d12cbebca2?q=80&w=2669&auto=format&fit=crop" 
                  alt="Abstract cultural art" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-sm font-medium text-white/80 uppercase tracking-widest mb-1">Chapter 01</p>
                <p className="text-xl font-semibold text-white">Preservation through Innovation</p>
              </div>
            </FadeIn>

            {/* Decorative element */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-brand/30 blur-[60px] rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
