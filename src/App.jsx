import { useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ThreeBackground />
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Stats />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
}
