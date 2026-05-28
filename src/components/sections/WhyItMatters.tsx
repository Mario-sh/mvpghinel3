import { AnimatedText, FadeIn } from "../ui/AnimatedText";
import { Globe2, History, Radio, Users } from "lucide-react";

const reasons = [
  {
    title: "Digital Preservation",
    desc: "Archiving the ephemeral beauty of cultural artifacts, language, and rituals safely in the digital realm for future generations to explore and learn from.",
    icon: History
  },
  {
    title: "Amplifying Voices",
    desc: "Bypassing traditional gatekeepers to give African creators a direct, unfiltered line to an international audience hungry for authentic narratives.",
    icon: Radio
  },
  {
    title: "Connecting Generations",
    desc: "Bridging the gap between the elders who hold the history and the digital natives who hold the future, weaving a continuous thread of identity.",
    icon: Users
  },
  {
    title: "Global Accessibility",
    desc: "Breaking geographical borders to position African heritage not as a niche, but as a central pillar of global human culture.",
    icon: Globe2
  }
];

export function WhyItMatters() {
  return (
    <section className="py-32 md:py-48 bg-bg relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,176,52,0.03)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <FadeIn>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-8 bg-surface">
              <div className="w-2 h-2 rounded-full bg-brand" />
            </div>
          </FadeIn>
          <AnimatedText 
            as="h2"
            text="Beyond aesthetics. A mission of consequence."
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-8"
          />
          <FadeIn delay={0.4}>
            <p className="text-xl text-muted font-light">
              We operate at the convergence of technology and anthropology, ensuring that as the world accelerates forward, our roots remain anchored and celebrated.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden glass-panel-heavy">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn delay={0.2 * index} key={index} className="bg-bg/80 backdrop-blur-md p-10 md:p-16 hover:bg-white/[0.02] transition-colors duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-8 text-brand group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed font-light">{item.desc}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
