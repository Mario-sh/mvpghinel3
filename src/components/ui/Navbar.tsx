import { motion } from "motion/react";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6"
    >
      <div className="flex items-center gap-2">
        {/* Simple luxury logo mark */}
        <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-bg"></div>
        </div>
        <span className="text-xl font-bold tracking-widest uppercase">Ghinel</span>
      </div>

      <div className="hidden md:flex items-center gap-8 glass-panel px-8 py-3 rounded-full text-sm font-medium tracking-wide">
        <a href="#about" className="hover:text-brand transition-colors">Manifesto</a>
        <a href="#culture" className="hover:text-brand transition-colors">Culture</a>
        <a href="#impact" className="hover:text-brand transition-colors">Vision</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-white text-bg font-semibold rounded-full hover:bg-brand hover:text-on-brand transition-all duration-300">
          Join the Movement
        </button>
        <button className="md:hidden w-10 h-10 glass-panel rounded-full flex items-center justify-center">
          <Menu className="w-5 h-5 text-white" />
        </button>
      </div>
    </motion.nav>
  );
}
