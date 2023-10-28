import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingCard from '../components/bookingCard';
import FacilityCard from '../components/facilityCard';
import TestimonialCard from '../components/testimonialcard';
import PhoneIcon from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import MapCard from '../components/mapCard';
import facilityimage1 from "../images/facilities/1.jpeg"
import facilityimage2 from "../images/facilities/2.jpeg"
import facilityimage3 from "../images/facilities/3.jpeg"
import facilityimage4 from "../images/facilities/4.jpeg"
import facilityimage5 from "../images/facilities/5.jpeg"
import titleimage1 from "../images/title/1.jpg"
import titleimage2 from "../images/title/2.jpg"
import titleimage3 from "../images/title/3.jpg"
import titleimage4 from "../images/title/4.jpg"
import titleimage5 from "../images/title/5.jpg"
import logo from "../images/title/logo.jpeg"
import RoomImages from '../components/roomImages';
import RoomCard from '../components/roomCards';
import {BsFillCupHotFill} from "react-icons/bs"
import {MdOutlineFoodBank} from "react-icons/md"
import {FaCarSide} from "react-icons/fa"


const HomePage = () => {
    const [currentImage, setCurrentImage] = useState(1);
    const navigate = useNavigate();
    // Define your image sources
    const images = [titleimage1, titleimage2, titleimage5];

    useEffect(() => {
        const interval = setInterval(() => {
            // Change to the next image (0 to 4, then wrap around)
            setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        }, 5000); // Change image every 5 seconds (adjust as needed)

        // Clear the interval on component unmount
        return () => {
            clearInterval(interval);
        };
    }, []);
    /*<div style={{ marginLeft: `${50 / 16}vw` }}>
                        <FacilityCard header={'Haweli Restaurant'} content={p5} image={facilityimage5} />
                    </div>*/

    let p1 = "Experience the joy of swimming in our infinity-edge pool that gives you a nice picturesque view."
    let p2 = "We have four in-house different size lawn area offering different lawn that you can choose from."
    let p3 = "We have big and safe children play area for their happiness. People are free to enjoy their events."
    let p4 = "We have three in-house Ac banquet hall offering different hall that you can choose from."
    let p5 = "We have in-house restaurants offering different indian,south,cuisines taste that you can choose ."
    return (
        <div style={{ marginBottom: '50px' }}>
            <div style={{ position: 'relative', }}>
                <img style={{ marginTop: `${70 / 16}vw`, width: "100vw", height: "36vw" }} src={images[currentImage]} alt="My Image" />
                <div style={{ position: 'absolute', top: '37vw', backgroundColor: "transparent" }}>
                    <BookingCard />
                </div>
                <div style={{ position: 'absolute', top: `${78 / 16}vw`, marginLeft: "0.5vw" }}>
                    <img style={{ width: "7vw", height: "4.5vw" }} src={logo} alt="My Image" />
                </div>
                <div style={{ marginLeft: "40vw", top: `${20}vw`, textAlign: "center", position: 'absolute' }}>
                    <button style={{ fontSize: '1.4vw', padding: `${15 / 16}vw`, cursor: 'pointer', border: '4px solid #8A3324', borderRadius: `${15 / 16}vw`, fontWeight: 'bold', backgroundColor: 'transparent', color: " #8A3324" }}
                        onClick={() => navigate('/rooms')}>
                        More Rooms
                    </button>
                    <button style={{ fontSize: '1.4vw', marginLeft: "2vw", padding: `${15 / 16}vw`, cursor: 'pointer', border: '4px solid #8A3324', borderRadius: `${15 / 16}vw`, fontWeight: 'bold', backgroundColor: 'transparent', color: " #8A3324" }}
                        onClick={() => navigate('/rooms')}>
                        Book Now
                    </button>
                </div>
            </div>
            <div style={{ marginRight: '5vw', marginLeft: '5vw ' }}>

                <div style={{ marginTop: `${150 / 16}vw`, marginBottom: `${50 / 16}vw`, fontSize: `${30 / 16}vw`, textAlign: 'center' }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>OUR ROOMS</span></div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "10%" }}>
                        <RoomCard />
                    </div >
                    <RoomImages />

                </div>

                <div style={{ textAlign: "center", marginTop: "4vw" }}>
                    <button style={{ fontSize: '1vw', padding: `${10 / 16}vw`, cursor: 'pointer', border: '2px solid #8A3324', borderRadius: `${5 / 16}vw`, fontWeight: 'bold', backgroundColor: 'black', color: 'gold' }}
                        onClick={() => navigate('/rooms')}>
                        More Rooms
                    </button>
                </div>

                <div style={{ marginTop: `${80 / 16}vw`, marginBottom: `${70 / 16}vw`, fontSize: `${30 / 16}vw`, textAlign: 'center', }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>OUR FACILITIES</span></div>
                <div style={{ display: 'flex', height: "20vw", marginLeft: `${90 / 16}vw` }}>
                    <FacilityCard header={'Swiming Pool (upcoming)'} content={p1} image={facilityimage1} />
                    <div style={{ marginLeft: `${50 / 16}vw` }}>
                        <FacilityCard header={'Lawn Area'} content={p2} image={facilityimage2} />
                    </div>
                    <div style={{ marginLeft: `${50 / 16}vw` }}>
                        <FacilityCard header={'Children Play Area'} content={p3} image={facilityimage3} />
                    </div>
                    <div style={{ marginLeft: `${50 / 16}vw` }}>
                        <FacilityCard header={'Big banquat Hall'} content={p4} image={facilityimage4} />
                    </div>

                </div>
                <div style={{ marginBottom: `${50 / 16}vw`, textAlign: "center", marginTop: "3vw" }}>
                    <button sx={{ width: `${70 / 16}vw`, height: `${25 / 16}vw ` }} style={{ fontSize: '1vw', padding: `${10 / 16}vw`, backgroundColor: 'black', cursor: 'pointer', border: `${2 / 16}vw solid black`, fontWeight: 'bold', color: "gold", borderRadius: `${10 / 16}vw solid red` }}>More Facilities</button>
                </div>
                <div style={{ marginTop: `${80 / 16}vw`, marginBottom: `${50 / 16}vw`, fontSize: `${30 / 16}vw`, textAlign: 'center', }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>TESTIMONIALS</span></div>
                <div style={{ display: 'flex', marginLeft: "5.5vw" }}>
                    <TestimonialCard />
                    <div style={{ marginLeft: `${70 / 16}vw` }}>
                        <TestimonialCard />
                    </div>
                    <div style={{ marginLeft: `${70 / 16}vw` }}>
                        <TestimonialCard />
                    </div>
                    <div style={{ marginLeft: `${70 / 16}vw` }}>
                        <TestimonialCard />
                    </div>
                </div>
                <div style={{ marginTop: `${80 / 16}vw`, marginBottom: `${50 / 16}vw`, fontSize: `${30 / 16}vw`, textAlign: 'center', }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>Hotel Services</span></div>
                <div style={{ display: "flex",marginTop:"1vw" }}>
                    <div>
                    <div style={{fontSize:"4vw",marginLeft:"12vw",color:"#8A3324"}}><FaCarSide/></div>
                        <div style={{ marginTop: "1vw", fontWeight: "bold", fontSize: "1.5vw", marginLeft: "10vw", color: "#8A3324" }}>Travel Plan</div>
                        <div style={{ width: "20vw", textAlign: "center", marginTop: "1vw", marginLeft: "4vw" }}>We at hotel helps you to plan your travel to visit nearby places</div>
                    </div>
                    <div style={{marginLeft:"6vw"}}>
                    <div style={{fontSize:"4vw",marginLeft:"12vw",color:"#8A3324"}}><MdOutlineFoodBank/></div>
                        <div style={{ marginTop: "1vw",fontWeight: "bold", fontSize: "1.5vw", marginLeft: "8vw", color: "#8A3324" }}>Cattering Service</div>
                        <div style={{ width: "20vw", textAlign: "center", marginTop: "1vw", marginLeft: "4vw" }}>We at hotel helps you to plan your travel to visit nearby places</div>
                    </div>
                    <div style={{marginLeft:"6vw"}}>
                    <div style={{fontSize:"4vw",marginLeft:"12vw",color:"#8A3324"}}><BsFillCupHotFill/></div>
                        <div style={{ marginTop: "1vw", fontWeight: "bold", fontSize: "1.5vw", marginLeft: "5vw", color: "#8A3324" }}>Multi Cuisine Restaurant</div>
                        <div style={{ width: "20vw", textAlign: "center", marginTop: "1vw", marginLeft: "4vw" }}>We at hotel helps you to plan your travel to visit nearby places</div>
                    </div>
                </div>
                <div style={{ marginTop: `${80 / 16}vw`, marginBottom: `${50 / 16}vw`, fontSize: `${30 / 16}vw`, textAlign: 'center', }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>REACH US</span></div>
                <div style={{ display: 'flex', marginBottom: `${50 / 16}vw`, marginLeft: "5.5vw" }}>
                    <MapCard />
                    <div style={{ marginLeft: `${550 / 16}vw` }}>
                        <div style={{ fontSize: `${20 / 16}vw`, fontWeight: "bold", color: " #8A3324" }}>Call Us</div>
                        <div style={{ display: 'flex', fontSize: '1vw', marginTop: `${10 / 16}vw` }}>
                            <PhoneIcon style={{ fontSize: '1vw' }} />+91971890521
                            <PhoneIcon style={{ fontSize: '1vw', marginLeft: `${10 / 16}vw` }} />+918789618100
                        </div>
                        <div style={{ fontsize: "4vw" }}>
                            <PhoneIcon style={{ fontSize: '1vw', marginTop: `${10 / 16}vw` }} /><a style={{ fontsize: "1vw", fontSize: '1vw', }}>+91971890521</a>
                        </div>
                        <div style={{ marginTop: '10vw' }}>
                            <div style={{ fontSize: `${20 / 16}vw`, fontWeight: 'bold', color: " #8A3324" }}>FOLLOW US</div>
                        </div>
                        <div style={{ marginTop: `${10 / 16}vw` }}>
                            <a href="https://www.facebook.com/Thehaweliresort" target="_blank" rel="noopener noreferrer">
                                <Chip label={<a style={{ color: "gold" }}> <FaFacebook /> Facebook  </a>} style={{ fontSize: `${18 / 16}vw`, fontWeight: "bold", backgroundColor: "black" }} />
                            </a>
                        </div>

                        <div style={{ marginTop: `${10 / 16}vw` }}>
                            <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer" style={{}}>
                                <Chip label={<a style={{ color: "gold" }}> <FaInstagram /> Instagram </a>} style={{ fontSize: `${18 / 16}vw`, fontWeight: "bold", backgroundColor: "black" }} />
                            </a>
                        </div>

                        <div style={{ marginTop: `${10 / 16}vw` }}>
                            <a href="https://twitter.com/thehaweliresort" target="_blank" rel="noopener noreferrer">
                                <Chip label={<a style={{ color: "gold" }}> <FaTwitter /> Twitter </a>} style={{ fontSize: `${18 / 16}vw`, fontWeight: "bold", backgroundColor: "black" }} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;