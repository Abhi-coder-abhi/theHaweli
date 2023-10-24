import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const footerStyle = {
        position: 'relative', // or 'absolute' depending on your layout needs
        width: '100%',
        background: 'black',
        color: '#fff',
        marginTop:'100px',
    };
    return (
        <div>
            <footer style={footerStyle}>
                <div style={{display:"flex",color: "#F0E68C",}}>
                <div >
                    <div style={{ marginLeft: "30px", marginBottom: "20px", marginTop: "40px" }}><h2 >Home</h2></div>
                    <div style={{ marginLeft: "30px", cursor: 'pointer', marginBottom: "10px" }}>About Us</div>
                    <div style={{ marginLeft: "30px", cursor: 'pointer', marginBottom: "10px" }}>Reviews</div>
                    <div style={{ marginLeft: "30px", cursor: 'pointer', marginBottom: "10px" }}>Get Directions</div>
                    <div style={{ marginLeft: "30px", cursor: 'pointer', marginBottom: "10px" }}>Nearby Views</div>
                    <div style={{ marginLeft: "30px", cursor: 'pointer', marginBottom: "50px" }}>Contact Us</div>
                </div>
                <div>
                    <div style={{ marginLeft: "200px", marginBottom: "20px", marginTop: "40px" }}><h2 >Customer Help</h2></div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "10px" }}>Guest Support</div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "10px" }}>Guest Feedback</div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "10px" }}>FAQS</div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "10px" }}>Offers</div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "50px" }}>Location</div>
                </div>
                <div>
                    <div style={{ marginLeft: "200px", marginBottom: "20px", marginTop: "40px" }}><h2 >Services</h2></div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "10px" }}>Tour Packages</div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "10px" }}>Accodomation</div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "10px" }}>Security</div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "10px" }}>Cleaniness</div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "50px" }}>Management</div>
                </div>
                <div>
                    <div style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "20px", marginTop: "40px" }}><h2 >Contact</h2></div>
                    <div style={{ marginLeft: "200px", }}>Plot No - 303 , Narbdeshwar</div>
                    <div style={{ marginLeft: "200px", }}>Nagar , Bharthauli Road ,</div>
                    <div style={{ marginLeft: "200px", }}>Jasoiya More , Aurangabad </div>
                    <div style={{ marginLeft: "200px", marginBottom: "20px" }}>(Bihar)- 824101</div>
                    <div style={{ display: 'flex' }}>
                        <a href="https://www.facebook.com/Thehaweliresort" target="_blank" rel="noopener noreferrer">
                            <button style={{ marginLeft: "200px", cursor: 'pointer', marginBottom: "50px", fontSize: '18px' }}><FaFacebook /></button>
                        </a>
                        <a href="https://twitter.com/thehaweliresort" target="_blank" rel="noopener noreferrer">
                            <button style={{ marginLeft: "10px", cursor: 'pointer', marginBottom: "50px", fontSize: '18px' }}><FaTwitter /></button>
                        </a>
                        <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer">
                            <button style={{ marginLeft: "10px", cursor: 'pointer', marginBottom: "50px", fontSize: '18px' }}><FaInstagram /></button>
                        </a>
                    </div>
                </div>
                </div>
                <div style={{ marginLeft: "500px", marginBottom: "10px" }}>
                Copyright © 2023 thehaweliresorts | Powered by <a href="https://teksila.in/" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>https://teksila.in/</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;