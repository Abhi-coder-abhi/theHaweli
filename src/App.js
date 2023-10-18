import React from 'react';
import Header from './header';
import Footer from './footer';
import HomePage from './pages/homepage';
import About from './pages/about';
import Rooms from './pages/rooms';
import ContactUs from './pages/contactUs';
import Facilities from './pages/facilities';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
