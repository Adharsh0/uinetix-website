import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'; // base/global styles if needed
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;
