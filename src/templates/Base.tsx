import { Header } from '@/templates/Header';
import { Cursor } from '@/components/ui/Cursor';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Clients } from '@/components/home/Clients';
import { Skills } from '@/components/home/Skills';
// import { Testimonials } from '@/components/home/Testimonials';
import { StartProject } from '@/components/home/StartProject';
import { Projects } from '@/components/home/Projects';
import { CaseStudies } from '@/components/home/CaseStudies';
import { Studio } from '@/components/home/Studio';
import { Faq } from '@/components/home/Faq';
import { Contact } from '@/components/home/Contact';

const Base = () => (
  <>
    <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-bg">
      Lewati ke konten
    </a>
    <Cursor />
    <Header />
    <main id="konten">
      <Hero />
      <About />
      <Studio />
      <Projects />
      <Clients />
      <Skills />
      <CaseStudies />
      {/* <Testimonials /> */}
      <Faq />
      <StartProject />
      <Contact />
    </main>
    <Footer />
  </>
);

export { Base };
