/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/ui/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Culture } from "./components/sections/Culture";
import { WhyItMatters } from "./components/sections/WhyItMatters";
import { Immersive } from "./components/sections/Immersive";
import { Impact } from "./components/sections/Impact";
import { CTA } from "./components/sections/CTA";
import { ReactLenis } from "lenis/react";

export default function App() {
  return (
    <ReactLenis root>
      <div className="bg-bg text-white selection:bg-brand selection:text-bg">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Culture />
          <WhyItMatters />
          <Immersive />
          <Impact />
          <CTA />
        </main>
      </div>
    </ReactLenis>
  );
}
