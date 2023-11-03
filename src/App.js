import React from 'react';
import Header from './header';
import Footer from './footer';
import HomePage from './pages/homepage';
import About from './pages/About';
import Rooms from './pages/rooms';
import ContactUs from './pages/contactUs';
import Facilities from './pages/facilities';
import Images from './pages/images';
import Faqs from './pages/faqs';
import Reviews from './pages/reviews';
import Accomodations from './pages/accomodations';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Securities from './pages/securities';
import Cleanliness from './pages/cleanliness';
import Management from './pages/management';
import Feedback from './pages/feedback';
import Offers from './pages/offers';
import NearBy from './pages/nearby';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/images" element={<Images />} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/accomodations" element={<Accomodations/>} />
        <Route path="/securities" element={<Securities/>} />
        <Route path="/cleanliness" element={<Cleanliness/>} />
        <Route path="/management" element={<Management/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/nearby" element={<NearBy/>} />
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;
