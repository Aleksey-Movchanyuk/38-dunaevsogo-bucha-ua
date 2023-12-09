import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Overview from './components/Overview';
import Gallery from './components/Gallery';
import Location from './components/Location';
import ContactForm from './components/ContactForm';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Overview />
      <Gallery />
      <Location />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
