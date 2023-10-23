import * as React from 'react';
import { Card } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Chip from '@mui/material/Chip';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function ContactUs() {

    return (
        <div>
            <div style={{ marginTop: '120px', marginBottom: '50px', fontSize: "30px", textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid black", display: 'inline-block' }}>CONTACT US</span></div>
            <div style={{ display: "flex" }}>
                <Card style={{ width: '700px', marginTop: '80px', marginLeft: '20px' }}>
                    <div style={{ height: '400px', flex: '1' }}>
                        <div
                            id="map-container-google-1"
                            className="z-depth-1-half map-container"
                            style={{ height: '100%' }}
                        >
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7245.925749959363!2d84.347083!3d24.762462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cffda9ed112b7%3A0xfbd08bbf8248e7d8!2sTHE%20HAWELI%20%7C%7C%20RESORT%20%26%20RESTAURANT%20%7C%7C!5e0!3m2!1sen!2sus!4v1697624473869!5m2!1sen!2sus"
                                style={{ border: 0, width: '94%', height: '100%', padding: '20px', borderRadius: '5px' }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div style={{ paddingLeft: '20px', marginTop: '60px' }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Address</div>
                        <div style={{ display: 'flex', fontSize: '16px', marginTop: '10px' }}>
                            <PhoneIcon style={{ fontSize: '16px' }} />
                            <div style={{ fontSize: "16px" }}> Plot No - 303 , Narbdeshwar Nagar , Bharthauli Road , Jasoiya More </div>
                        </div>
                        <div style={{ fontSize: '16px', marginTop: '5px' }}> Aurangabad ( Bihar)- 824101 </div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }}>Call Us</div>
                        <div style={{ display: 'flex', fontSize: '16px', marginTop: '10px' }}>
                            <PhoneIcon style={{ fontSize: '16px' }} />+91971890521
                            <PhoneIcon style={{ fontSize: '16px', marginLeft: '10px' }} />+918789618100
                        </div>
                        <PhoneIcon style={{ fontSize: '16px', marginTop: '10px' }} />+91971890521
                        <div style={{ marginTop: '30px' }}>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Email</div>
                        </div>
                        <div style={{ marginTop: '10px', display: "flex", }}>
                            <div style={{ fontSize: "12px" }}>
                                <MailIcon />
                            </div>
                            <p style={{ fontSize: "16px" }}>info@haweli.com</p>
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: "30px" }}>Follow Us</div>
                        <div style={{ marginTop: '10px', display: "flex", paddingBottom: "20px" }}>
                            <div >
                                <a href="https://www.facebook.com/Thehaweliresort" target="_blank" rel="noopener noreferrer">
                                    <button style={{ cursor: 'pointer', fontSize: '18px' }}><FaFacebook /></button>
                                </a>
                            </div>
                            <div style={{}}>
                                <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer">
                                    <button style={{ marginLeft: "10px", cursor: 'pointer', fontSize: '18px' }}><FaInstagram /></button>
                                </a>
                            </div>
                            <div style={{}}>
                                <a href="https://twitter.com/thehaweliresort" target="_blank" rel="noopener noreferrer">
                                    <button style={{ marginLeft: "10px", cursor: 'pointer', fontSize: '18px' }}><FaTwitter /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '700px', height: "900px", marginTop: '80px', marginLeft: '40px', marginRight: "20px" }}>
                    <form style={{ paddingLeft: "25px" }}>
                        <div style={{ fontSize: "24px", marginTop: "30px", fontWeight: "bold" }}>Send a Message</div>
                        <div style={{ fontSize: "20px", marginTop: "20px", fontWeight: "bold" }}>Name</div>
                        <input type="text" style={{ height: "35px", marginTop: "5px", width: "600px", fontSize: "16px" }} />
                        <div style={{ fontSize: "20px", marginTop: "20px", fontWeight: "bold" }}>Email</div>
                        <input type="text" style={{ height: "35px", marginTop: "5px", width: "600px", fontSize: "16px" }} />
                        <div style={{ fontSize: "20px", marginTop: "20px", fontWeight: "bold" }}>Subject</div>
                        <input type="text" style={{ height: "35px", marginTop: "5px", width: "600px", fontSize: "16px" }} />
                        <div style={{ fontSize: "20px", marginTop: "20px", fontWeight: "bold" }}>Message</div>
                        <textarea type="text" style={{ height: "100px", marginTop: "5px", width: "590px", fontSize: "14px", padding: "10px" }} />
                        <button style={{ fontSize: "18px", marginTop: "20px", padding: "5px", backgroundColor: 'white', cursor: 'pointer', border: '2px solid black', borderRadius: "5px", fontWeight: "bold", backgroundColor: "#84E4F7", color: "white" }}>Submit</button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
