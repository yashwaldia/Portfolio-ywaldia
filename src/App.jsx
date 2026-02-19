import Navbar       from './components/layout/Navbar/Navbar';
import Footer       from './components/layout/Footer/Footer';
import ScrollToTop  from './components/layout/ScrollToTop/ScrollToTop';
import Hero         from './components/sections/Hero/Hero';
import About        from './components/sections/About/About';
import Skills       from './components/sections/Skills/Skills';
import Qualification from './components/sections/Qualification/Qualification';
import Services     from './components/sections/Services/Services';
import Projects     from './components/sections/Projects/Projects';
import CTABanner    from './components/sections/CTABanner/CTABanner';
import Contact      from './components/sections/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualification />
        <Projects />
        <Skills />
        {/* <Services /> */}
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
