import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; // Import Home
import AboutUs from './pages/AboutUs'; // Import AboutUs
import Blog from './pages/Blog'
import Testimonials from './pages/Testimonials'
import ContactUs from './pages/ContactUs'
import Brands from './pages/Brands'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
    </Router>
  );
};

export default App;
