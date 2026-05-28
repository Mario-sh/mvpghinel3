import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AnimatedText, FadeIn } from "../ui/AnimatedText";

const panels = [
  {
    id: 1,
    title: "Origins",
    subtitle: "The source code of humanity.",
    img: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=2752&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Evolution",
    subtitle: "Adapting without losing essence.",
    img: "https://images.unsplash.com/photo-1604908920150-136b6cbcf292?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Future",
    subtitle: "Writing the next golden era.",
    img: "https://images.unsplash.com/photo-1549490159-4ac97ea47eb1?q=80&w=2574&auto=format&fit=crop"
  }
];

export function Immersive() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-66.66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        <div className="absolute inset-x-0 top-12 md:top-24 z-20 px-6 md:px-12 pointer-events-none">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white/50 mix-blend-difference">
              The Journey
            </h2>
          </FadeIn>
        </div>

        <motion.div style={{ x }} className="flex w-[300vw] h-full items-center">
          {panels.map((panel, i) => (
            <div key={panel.id} className="w-[100vw] h-full flex items-center justify-center p-6 md:p-24 relative">
              
              <div className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden group">
                <img 
                  src={panel.img} 
                  alt={panel.title} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out mix-blend-luminosity opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                  <div className="overflow-hidden mb-2">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                      viewport={{ once: false, margin: "-10%" }}
                    >
                      <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
                        {panel.title}
                      </h3>
                    </motion.div>
                  </div>
                  
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      viewport={{ once: false, margin: "-10%" }}
                    >
                      <p className="text-xl md:text-3xl text-brand font-light tracking-wide">
                        {panel.subtitle}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
