import { AnimatedText, FadeIn } from "../ui/AnimatedText";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const culturePillars = [
  {
    title: "Sound & Rhythm",
    desc: "The heartbeat of the continent, evolved for the global stage.",
    image: "https://images.unsplash.com/photo-1516280440502-861f4c728e5e?q=80&w=2670&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-8",
    aspect: "aspect-[16/9] md:aspect-[21/9]"
  },
  {
    title: "Visual Artistry",
    desc: "Colors and forms that carry ancestral memory.",
    image: "https://images.unsplash.com/photo-1544230232-a579d4695034?q=80&w=2541&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-4",
    aspect: "aspect-[4/5] md:aspect-[3/4]"
  },
  {
    title: "Sartorial Innovation",
    desc: "Textiles that write history and redefine modern luxury.",
    image: "https://images.unsplash.com/photo-1616428238712-4299b8288ce4?q=80&w=2670&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-5",
    aspect: "aspect-[4/5] md:aspect-[4/5]"
  },
  {
    title: "Digital Storytelling",
    desc: "Native narratives crafted for immersive new mediums.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2670&auto=format&fit=crop", // Or abstract
    colSpan: "col-span-1 md:col-span-7",
    aspect: "aspect-[16/9] md:aspect-[16/10]"
  }
];

export function Culture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="culture" className="py-24 md:py-40 bg-zinc-950 relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">Culture in Motion</h2>
            </FadeIn>
            <AnimatedText 
              as="h3"
              text="A living, breathing archive of African identity."
              className="text-4xl md:text-6xl font-medium leading-[1.05]"
            />
          </div>
          <FadeIn delay={0.4} className="md:text-right">
            <p className="text-lg text-white/60 font-light max-w-sm">From the deep roots to the digital frontier, we celebrate every dimension of modern creativity.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {culturePillars.map((item, index) => (
            <FadeIn delay={index * 0.15} key={index} className={`${item.colSpan} group relative overflow-hidden rounded-2xl bg-[#0a0a0a]`}>
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                <motion.div 
                  className="absolute inset-0 w-full h-[120%]"
                  style={{ y: index % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="block text-brand font-mono text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">0{index + 1}</span>
                    <h4 className="text-2xl md:text-3xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70 font-light max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
