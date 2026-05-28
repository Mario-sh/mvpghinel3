import { AnimatedText, FadeIn } from "../ui/AnimatedText";

export function Impact() {
  return (
    <section id="impact" className="py-32 md:py-48 bg-bg relative overflow-hidden">
      {/* Abstract global grid background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[2000px] max-h-[2000px] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1500px] max-h-[1500px] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] border border-brand/40 rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <FadeIn>
          <span className="block text-brand font-mono text-sm tracking-[0.2em] uppercase mb-8">Scale & Ambition</span>
        </FadeIn>
        
        <AnimatedText 
          as="h2"
          text="A local soul with a global bandwidth."
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-16 max-w-5xl mx-auto"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 max-w-6xl mx-auto border-t border-white/10 pt-16">
          {[
            { label: "Reach", value: "Global", suffix: "" },
            { label: "Content", value: "Curated", suffix: "+" },
            { label: "Creators", value: "Network", suffix: "" },
            { label: "Architecture", value: "Scalable", suffix: "" }
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.15} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
                {stat.value}<span className="text-brand">{stat.suffix}</span>
              </span>
              <span className="text-sm font-medium tracking-widest uppercase text-muted">
                {stat.label}
              </span>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} className="mt-24 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
            Our infrastructure is designed for infinite scale. We are not just building for the Africa of today, but engineering the platform for the global cultural economy of tomorrow.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
