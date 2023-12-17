import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/UI/Pages/Header/Header';
import Home from './components/UI/Pages/Home/Home';
import About from './components/UI/Pages/About/About';
import Contact from './components/UI/Pages/Contact/Contact';
import Services from './components/UI/Pages/Services/Services';
import Footer from './components/UI/Pages/Footer/Footer';
import Error from './components/UI/Pages/Error/Error';

function App() {
  return (
    <>
   < Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes> 
    </Router>
    <Footer/>
    </>
  );
}

export default App;
