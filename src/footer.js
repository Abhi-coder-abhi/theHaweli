import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chip } from '@mui/material';
import logo from "./images/title/logo.jpeg"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// Import the icons you want to use
import { faHotel, } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const navigate = useNavigate();
    const footerStyle = {
      position: 'relative',
      width: '100vw',
      background: 'black',
      color: '#fff',
      marginTop: '6.25rem', // Convert 100px to rem (100 / 16 = 6.25rem)
    };
  
    return (
      <div>
        <footer style={footerStyle}>
          <div style={{ display: "flex", color: "#F0E68C" }}>
            <div style={{fontSize:"1vw"}}>
              <div style={{ marginLeft: "5vw", marginBottom: "1.25vw", marginTop: "2.5vw",fontSize:"1vw" }} onClick={() => navigate('/homepage')}><h2 >Home</h2></div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "0.625vw",fontsize:"1vw" }} onClick={() => navigate('/about')}>About Us</div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "0.625vw",fontsize:"1vw" }} onClick={() => navigate('/reviews')}>Reviews</div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "0.625vw",fontsize:"1vw" }}>Get Directions</div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "0.625vw",fontsize:"1vw" }}>Nearby Views</div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "3.125vw",fontsize:"1vw" }} onClick={() => navigate('/contactUs')}>Contact Us</div>
            </div>
            <div style={{fontSize:"1vw"}}>
              <div style={{ marginLeft: "5vw", marginBottom: "1.25vw", marginTop: "2.5vw" }}><h2 >Customer Help</h2></div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "0.625vw" }}>Guest Support</div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "0.625vw" }} onClick={() => navigate('/contactUs')}>Guest Feedback</div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "0.625vw" }} onClick={() => navigate('/faqs')}>FAQS</div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "0.625vw" }}>Offers</div>
              <div style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "3.125vw" }} onClick={() => navigate('/contactUs')}>Location</div>
            </div>
            <div style={{ position: "absolute", top: "1vw", left: "50vw", transform: "translateX(-50%)", textAlign: "center", color: "#F0E68C", fontSize: "1.5vw", fontWeight: "bold", cursor: "pointer", fontFamily: "cursive" }}>
              <Chip label={<span style={{ color: "gold" }}>★★★★★★★★★★★★★★★★★★★★★★★★★★★★</span>} style={{ fontSize: '0.9375vw' }} />
            </div>
            <div style={{ position: "absolute", top: "3vw", left: "50vw", transform: "translateX(-50%)", textAlign: "center", color: "#F0E68C", fontSize: "1.5vw", fontWeight: "bold", cursor: "pointer", fontFamily: "cursive" }}>
              <FontAwesomeIcon icon={faHotel} /><a style={{ marginLeft: "0.625vw" }}>THE HAWELI</a><FontAwesomeIcon icon={faHotel} style={{ marginLeft: "0.625vw" }} />
            </div>
            <div style={{ position: "absolute", top: "5vw", left: "50vw", transform: "translateX(-50%)", textAlign: "center", color: "#F0E68C", fontSize: "1.5vw", fontWeight: "bold", cursor: "pointer", fontFamily: "cursive" }}>
              Resort
            </div>
            <div style={{ position: "absolute", top: "7vw", left: "50vw", transform: "translateX(-50%)", textAlign: "center", color: "#F0E68C", fontSize: "1.5vw", fontWeight: "bold", cursor: "pointer", fontFamily: "cursive" }}>
              <Chip label={<span style={{ color: "gold", }}>★★★★★★★★★★★★★★★★★★★★★★★★★★★★</span>} style={{ fontSize: '0.9375vw' }} />
            </div>
            <div style={{ position: "absolute", top: "10vw", left: "50vw", transform: "translateX(-50%)", textAlign: "center", color: "#F0E68C", fontSize: "1.5vw", fontWeight: "bold", cursor: "pointer", fontFamily: "cursive" }}>
            <img style={{width:"7vw",height:"4vw"  }} src={logo} alt="My Image" />
            </div>
              
            <div style={{fontSize:"1vw"}}>
              <div style={{ marginLeft: "40vw", marginBottom: "1.25vw", marginTop: "2.5vw",fontSize:"100%"  }}><h2 >Services</h2></div>
              <div style={{ marginLeft: "40vw", cursor: 'pointer', marginBottom: "0.625vw",fontSize:"100%"  }}>Tour Packages</div>
              <div style={{ marginLeft: "40vw", cursor: 'pointer', marginBottom: "0.625vw",fontSize:"100%"  }}>Accommodation</div>
              <div style={{ marginLeft: "40vw", cursor: 'pointer', marginBottom: "0.625vw",fontSize:"100%"  }}>Security</div>
              <div style={{ marginLeft: "40vw", cursor: 'pointer', marginBottom: "0.625vw",fontSize:"100%"  }}>Cleanliness</div>
              <div style={{ marginLeft: "40vw", cursor: 'pointer', marginBottom: "3.125vw",fontSize:"100%"  }}>Management</div>
            </div>
            <div style={{fontSize:"1vw"}}>
              <div style={{ marginLeft: "5vw", marginBottom: "1.25vw", marginTop: "2.5vw" }}><h2 >Contact</h2></div>
              <div style={{ marginLeft: "5vw",fontsize:"1vw" }}>Plot No - 303 , Narbdeshwar</div>
              <div style={{ marginLeft: "5vw", }}>Nagar , Bharthauli Road ,</div>
              <div style={{ marginLeft: "5vw", }}>Jasoiya More , Aurangabad </div>
              <div style={{ marginLeft: "5vw", marginBottom: "1.25rem" }}>(Bihar)- 824101</div>
              <div style={{ display: 'flex' }}>
                <a href="https://www.facebook.com/Thehaweliresort" target="_blank" rel="noopener noreferrer">
                  <button style={{ marginLeft: "5vw", cursor: 'pointer', marginBottom: "3.125vw", fontSize: '1.125vw' }}><FaFacebook /></button>
                </a>
                <a href="https://twitter.com/thehaweliresort" target="_blank" rel="noopener noreferrer">
                  <button style={{ marginLeft: "1vw", cursor: 'pointer', marginBottom: "3.125vw", fontSize: '1.125vw' }}><FaTwitter /></button>
                </a>
                <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer">
                  <button style={{ marginLeft: "1vw", cursor: 'pointer', marginBottom: "3.125vw", fontSize: '1.125vw' }}><FaInstagram /></button>
                </a>
                <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer">
                  <button style={{ marginLeft: "1vw", cursor: 'pointer', marginBottom: "3.125vw", fontSize: '0.8vw' }}><WhatsAppIcon /></button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ textAlign:"center",fontsize:"1vw" }}>
            Copyright © 2023 thehaweliresorts | Powered by{' '}
            <a href="https://teksila.in/" target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>
              https://teksila.in/
            </a>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  