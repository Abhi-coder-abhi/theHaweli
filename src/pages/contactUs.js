import * as React from 'react';
import { Card } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md';
import "../css/contactus.css"
export default function ContactUs() {
    return (
        <div>
            <div className='contact-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>Contact Us</span></div>
            <div className='contact-page-container'>
                <Card className='contact-page-map-card'>
                    <div className='contact-page-map-form'>
                        <div
                            id="map-container-google-1"
                            className="z-depth-1-half map-container"
                            style={{ height: '100%' }}
                        >
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7245.925749959363!2d84.347083!3d24.762462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cffda9ed112b7%3A0xfbd08bbf8248e7d8!2sTHE%20HAWELI%20%7C%7C%20RESORT%20%26%20RESTAURANT%20%7C%7C!5e0!3m2!1sen!2sus!4v1697624473869!5m2!1sen!2sus"
                                style={{ border: 0, width: '94%', height: '100%', padding: `${20 / 16}vw`, borderRadius: '5px' }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className='contact-page-contact-form'><div className="address">
  <div className="contact-page-contact-title">Address</div>
  <div className="contact-page-contact-address-line">
    <MdLocationOn className="contact-page-contact-icon" />
    <div className="contact-page-contact-text">Plot No - 303 , Narbdeshwar Nagar , Bharthauli Road , Jasoiya More</div>
  </div>
  <div className="contact-page-contact-sub-address">Aurangabad (Bihar)- 824101</div>
  <div className="contact-page-contact-title">Call Us</div>
  <div className="contact-page-contact-phone-line">
    <PhoneIcon className="contact-page-contact-icon" />
    <div className="contact-page-contact-text">+91971890521</div>
    <PhoneIcon className="icon" />
    <div className="contact-page-contact-text">+918789618100</div>
  </div>
  <div className="contact-page-contact-icon-link">
    <PhoneIcon className="contact-page-contact-icon" />
    <a className="contact-page-contact-link">+91971890521</a>
  </div>
  <div className="contact-page-contact-title">Whatsapp</div>
  <div className="contact-page-contact-whatsapp-line">
    <WhatsAppIcon className="contact-page-contact-icon" />
    <p className="contact-page-contact-text">+919718905221</p>
  </div>
  <div className="contact-page-contact-title">Email</div>
  <div className="contact-page-contact-email-line">
    <MailIcon className="contact-page-contact-icon" />
    <p className="contact-page-contact-text">info@haweli.com</p>
  </div>
  <div className="contact-page-contact-title">Follow Us</div>
</div>

                        <div style={{ marginTop: `${10 / 16}vw`, display: "flex", paddingBottom: "20px", color: "#333366" }}>
                            <div >
                                <a href="https://www.facebook.com/Thehaweliresort" target="_blank" rel="noopener noreferrer">
                                    <button style={{ cursor: 'pointer', fontSize: `${18 / 16}vw`, color: "#333366" }}><FaFacebook /></button>
                                </a>
                            </div>
                            <div >
                                <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer">
                                    <button style={{ marginLeft: `${10 / 16}vw`, cursor: 'pointer', fontSize: `${18 / 16}vw`, color: "#333366" }}><FaInstagram /></button>
                                </a>
                            </div>
                            <div >
                                <a href="https://twitter.com/thehaweliresort" target="_blank" rel="noopener noreferrer">
                                    <button style={{ marginLeft: `${10 / 16}vw`, cursor: 'pointer', fontSize: `${18 / 16}vw`, color: "#333366" }}><FaTwitter /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="contact-page-message-card" style={{marginBottom:"5vw"}}>
                    <form className="contact-page-message-form">
                        <div className="contact-page-message-header">Send a Message</div>
                        <div className="contact-page-form-label">Name</div>
                        <input type="text" className="contact-page-input-field" />
                        <div className="contact-page-form-label">Email</div>
                        <input type="text" className="contact-page-input-field" />
                        <div className="contact-page-form-label">Subject</div>
                        <input type="text" className="contact-page-input-field" />
                        <div className="contact-page-form-label">Message</div>
                        <textarea className="contact-page-text-area" />
                        <button className="contact-page-submit-button">Submit</button>
                    </form>
                </Card>

            </div>
        </div>
    );
}
