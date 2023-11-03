import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chip } from '@mui/material';
import logo from "./images/title/logo.jpeg"
import "./css/footer.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// Import the icons you want to use
import { faHotel, } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const navigate = useNavigate();


  return (
    <div>
      <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-section-title'>
            <div >
              <h2 className="main-heading">Home</h2>
            </div>
            <div className="nav-link" onClick={() => navigate('/about')}>
              About Us
            </div>
            <div className="nav-link" onClick={() => navigate('/reviews')}>
              Reviews
            </div>
            <div className="nav-link" onClick={() => navigate('/contactUs')}>Get Directions </div>
            <div className="nav-link" onClick={() => navigate('/nearby')}>Nearby Views</div>
            <div className="nav-link" onClick={() => navigate('/contactUs')}>
              Contact Us
            </div>
          </div>
          <div className='footer-section-title'>
            <div>
              <h2 className="main-heading" >Customer Help</h2>
            </div>
            <div className="nav-link" onClick={() => navigate('/contactUs')}>Guest Support</div>
            <div className="nav-link" onClick={() => navigate('/feedback')}>
              Guest Feedback
            </div>
            <div className="nav-link" onClick={() => navigate('/faqs')}>
              FAQS
            </div>
            <div className="nav-link" onClick={() => navigate('/offers')}>Offers</div>
            <div className="nav-link" onClick={() => navigate('/contactUs')}>
              Location
            </div>
          </div>
          <div className="absolute-centered top-1">
            <Chip label={<span className="footer-chip1">★★★★★★★★★★★★★★★★★★★★★★★★★★★★</span>} />
          </div>
          <div className="absolute-centered top-3">
            <FontAwesomeIcon icon={faHotel} className="footer-icon" />
            <a className="footer-icon">THE HAWELI</a>
            <FontAwesomeIcon icon={faHotel} className="footer-icon" />
          </div>
          <div className="absolute-centered top-5">
            Resort
          </div>
          <div className="absolute-centered top-7">
            <Chip label={<span className="footer-chip2">★★★★★★★★★★★★★★★★★★★★★★★★★★★★</span>} />
          </div>
          <div className="absolute-centered top-10">
            <img className="footer-image" src={logo} alt="My logo" />
          </div>


          <div className='footer-section-title'>
            <div>
              <h2 className="section-heading">Services</h2>
            </div>
            <div className="nav-link-section" onClick={() => navigate('/facilities')}>Facilities</div>
            <div className="nav-link-section" onClick={() => navigate('/accomodations')}>Accommodation</div>
            <div className="nav-link-section" onClick={() => navigate('/securities')}>Security</div>
            <div className="nav-link-section" onClick={() => navigate('/cleanliness')}>Cleanliness</div>
            <div className="nav-link-section" onClick={() => navigate('/management')}>Management</div>
          </div>
          <div >
            <div className='footer-contact-title'>Contact</div>
            <div className="address-line">Plot No - 303 , Narbdeshwar</div>
            <div className="address-line">Nagar , Bharthauli Road ,</div>
            <div className="address-line">Jasoiya More , Aurangabad </div>
            <div className="address-line">(Bihar)- 824101</div>
            <div className="footer-social-media-icons">
              <a href="https://www.facebook.com/Thehaweliresort" target="_blank" rel="noopener noreferrer">
                <button className="social-media-button1"><FaFacebook /></button>
              </a>
              <a href="https://twitter.com/thehaweliresort" target="_blank" rel="noopener noreferrer">
                <button className="social-media-button"><FaTwitter /></button>
              </a>
              <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer">
                <button className="social-media-button"><WhatsAppIcon className="footer-whatsapp-icon" /></button>
              </a>
              <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer">
                <button className="social-media-button"><FaInstagram /></button>
              </a>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", fontsize: "1vw", color: "white" }}>
          Copyright © 2023 thehaweliresorts | Powered by{' '}
          <a href="https://teksila.in/" target="_blank" rel="noopener noreferrer" style={{ color: "aqua" }}>
            https://teksila.in/
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
