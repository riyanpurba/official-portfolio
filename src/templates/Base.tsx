import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

import { Header } from '@/templates/Header';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Technology } from '@/components/home/Technology';
import { Experience } from '@/components/home/Experience';
import { Projects } from '@/components/home/Projects';
import { Footer } from '@/templates/Footer';
import { Contact } from '@/components/home/Contact';
import { Parallax } from '@/components/home/Parallax';

const Base = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <main className="lg:pb-16">
      <Hero />
      <About />
      <Technology />
      <Experience />
      <Projects />
      <Parallax />
      <Contact />
    </main>
    <Footer />
  </>
);

export { Base };