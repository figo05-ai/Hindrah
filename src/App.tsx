
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Principles from './components/Principles';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Methodology from './components/Methodology';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <>
      <div
      className="min-h-screen overflow-x-hidden bg-background pb-20 font-body text-foreground md:pb-0"
    >
        <Header />
        <Hero />
        <ScrollReveal><Stats /></ScrollReveal>
        <ScrollReveal><Principles /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Sectors /></ScrollReveal>
        <ScrollReveal><Methodology /></ScrollReveal>
        <ScrollReveal><Impact /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><Plans /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
        <Footer />
        <MobileCTA />
      </div>
    </>
  );
}
