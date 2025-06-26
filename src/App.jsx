import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'; // base/global styles if needed
import About from './components/About';
import Services from './components/Services';
import  Contact  from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
