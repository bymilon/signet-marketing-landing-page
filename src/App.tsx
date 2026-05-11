/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoCloud } from "./components/LogoCloud";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { TestimonialSection } from "./components/TestimonialSection";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  return (
    <main className="relative selection:bg-brand selection:text-dark">
      <CustomCursor />
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <ProductShowcase />
      <TestimonialSection />
      <Pricing />
      <Footer />
    </main>
  );
}

