import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import AboutPage from './components/AboutPage';
import Testimonials from './components/Testimonials';
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route component={NotFoundPage} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
