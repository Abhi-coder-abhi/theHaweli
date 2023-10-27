import * as React from 'react';
import { Card } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Chip from '@mui/material/Chip';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function ContactUs() {
    return (
        <div>
            <div style={{ marginTop:  `${120 / 16}vw`, marginBottom: `${50 / 16}vw`, fontSize: `${30 / 16}vw`, textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>CONTACT US</span></div>
            <div style={{ display: "flex" }}>
                <Card style={{ width: `${700 / 16}vw`, marginTop: `${80 / 16}vw`, marginLeft: `${60 / 16}vw`,border:"5px solid #F0E68C",height: `${1000 / 16}vw` }}>
                    <div style={{ height:  `${400 / 16}vw`, flex: '1' }}>
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
                    <div style={{ paddingLeft:`${20 / 16}vw`, marginTop: `${60 / 16}vw` }}>
                        <div style={{ fontSize: `${20 / 16}vw`, fontWeight: 'bold',color: "#8A3324" }}>Address</div>
                        <div style={{ display: 'flex', fontSize: '1vw', marginTop: `${10 / 16}vw` }}>
                            <PhoneIcon style={{ fontSize: '1vw' }} />
                            <div style={{ fontSize: '1vw',color:"#333366"  }}> Plot No - 303 , Narbdeshwar Nagar , Bharthauli Road , Jasoiya More </div>
                        </div>
                        <div style={{ fontSize: '1vw', marginTop: `${5/ 16}vw`,color:"#333366"  }}> Aurangabad ( Bihar)- 824101 </div>
                        <div style={{ fontSize: `${20 / 16}vw`, fontWeight: 'bold', marginTop: `${30 / 16}vw`,color: "#8A3324" }}>Call Us</div>
                        <div style={{ display: 'flex', fontSize: '1vw', marginTop: `${10 / 16}vw`,color:"#333366"  }}>
                            <PhoneIcon style={{ fontSize: '1vw' }} />+91971890521
                            <PhoneIcon style={{ fontSize: '1vw', marginLeft:`${10 / 16}vw` }} />+918789618100
                        </div>
                        <PhoneIcon style={{ fontSize: '1vw', marginTop: `${10 / 16}vw`,color:"#333366"  }} /><a style={{ fontSize: '1vw' }}>+91971890521</a>
                        <div style={{ marginTop: `${30 / 16}vw` }}>
                            <div style={{ fontSize: `${20 / 16}vw`, fontWeight: 'bold',color: "#8A3324" }}>Whatsapp</div>
                        </div>
                        <div style={{ marginTop: `${10 / 16}vw`, display: "flex", }}>
                            <div >
                                <WhatsAppIcon style={{ fontSize: "1vw" ,color:"#333366" }}/>
                            </div>
                            <p style={{ fontSize: '1vw' }}>+919718905221</p>
                        </div>
                        <div style={{ marginTop: `${20 / 16}vw` }}>
                            <div style={{ fontSize: `${20 / 16}vw`, fontWeight: 'bold',color: "#8A3324" }}>Email</div>
                        </div>
                        <div style={{ marginTop: `${10 / 16}vw`, display: "flex", }}>
                            <div style={{ fontSize: `${12/ 16}vw`,color:"#333366"  }}>
                                <MailIcon style={{ fontSize: "1vw"  }}/>
                            </div>
                            <p style={{ fontSize: '1vw',color:"#333366"  }}>info@haweli.com</p>
                        </div>
                        
                        <div style={{ fontSize: `${20 / 16}vw`, fontWeight: 'bold', marginTop: `${20 / 16}vw`,color: "#8A3324" }}>Follow Us</div>
                        <div style={{ marginTop: `${10 / 16}vw`, display: "flex", paddingBottom: "20px",color:"#333366"  }}>
                            <div >
                                <a href="https://www.facebook.com/Thehaweliresort" target="_blank" rel="noopener noreferrer">
                                    <button style={{ cursor: 'pointer', fontSize: `${18/ 16}vw`,color:"#333366"  }}><FaFacebook /></button>
                                </a>
                            </div>
                            <div >
                                <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer">
                                    <button style={{ marginLeft: `${10 / 16}vw`, cursor: 'pointer', fontSize: `${18/ 16}vw`,color:"#333366"  }}><FaInstagram /></button>
                                </a>
                            </div>
                            <div >
                                <a href="https://twitter.com/thehaweliresort" target="_blank" rel="noopener noreferrer">
                                    <button style={{ marginLeft: `${10 / 16}vw`, cursor: 'pointer', fontSize: `${18/ 16}vw`,color:"#333366"  }}><FaTwitter /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: `${700 / 16}vw`, height: `${1000 / 16}vw`, marginTop: `${80 / 16}vw`, marginLeft: `${40 / 16}vw`, marginRight: `${20 / 16}vw`,border:"5px solid #F0E68C" }}>
                    <form style={{ paddingLeft: `${25 / 16}vw` }}>
                        <div style={{ fontSize: `${24/ 16}vw`, marginTop: `${30 / 16}vw`, fontWeight: "bold",color: "#CC9900",fontFamily: "cursive" }}>Send a Message</div>
                        <div style={{ fontSize: `${20 / 16}vw`, marginTop: `${20 / 16}vw`, fontWeight: "bold",color: "#8A3324", }}>Name</div>
                        <input type="text" style={{ height: "35px", marginTop: `${5 / 16}vw`, width: `${600 / 16}vw`, fontSize: "1vw" }} />
                        <div style={{ fontSize: `${20 / 16}vw`, marginTop: `${20 / 16}vw`, fontWeight: "bold",color: "#8A3324", }}>Email</div>
                        <input type="text" style={{ height: "35px", marginTop: `${5 / 16}vw`, width: `${600 / 16}vw`, fontSize: "1vw" }} />
                        <div style={{ fontSize: `${20 / 16}vw`, marginTop: `${20 / 16}vw`, fontWeight: "bold",color: "#8A3324", }}>Subject</div>
                        <input type="text" style={{ height: "35px", marginTop: `${5 / 16}vw`, width: `${600 / 16}vw`, fontSize: "1vw" }} />
                        <div style={{ fontSize: `${20 / 16}vw`, marginTop:`${20 / 16}vw`, fontWeight: "bold",color: "#8A3324", }}>Message</div>
                        <textarea type="text" style={{ height: `${100 / 16}vw`, marginTop: `${5 / 16}vw`, width: `${590 / 16}vw`, fontSize: `${14/ 16}vw`, padding: `${10 / 16}vw` }} />
                        <button style={{ fontSize: `${18/ 16}vw`, marginTop: `${20 / 16}vw`, padding: `${5/ 16}vw`, backgroundColor: 'white', cursor: 'pointer', border: '2px solid #8A3324', borderRadius: `${5 / 16}vw`, fontWeight: "bold", backgroundColor: "#F0E68C", color: "#8A3324", }}>Submit</button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
