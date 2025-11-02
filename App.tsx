import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tires from './components/Tires';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Tires />
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;