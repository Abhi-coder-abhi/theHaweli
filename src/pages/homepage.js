import React from 'react';
import RoomCard from '../components/roomCard';
import BookingCard from '../components/bookingCard';
import FacilityCard from '../components/facilityCard';
import TestimonialCard from '../components/testimonialcard';
import PhoneIcon from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import MapCard from '../components/mapCard';

const HomePage = () => {
    let p1 = "Experience the joy of swimming in our infinity-edge pool that gives you a nice picturesque view."
    let p2 = "We have four in-house different size lawn area offering different lawn that you can choose from."
    let p3 = "We have big and safe children play area for their happiness. People are free to enjoy their events."
    let p4 = "We have three in-house Ac banquet hall offering different hall that you can choose from."
    let p5 = "We have in-house restaurants offering different indian,south,cuisines taste that you can choose ."
    return (
        <div style={{ marginBottom: '50px' }}>
            <img />
            <div style={{ marginTop: '100px', marginRight: '130px', marginLeft: '130px' }}>
                <BookingCard />
                <div style={{ marginTop: '80px', marginBottom: '50px', fontSize: "30px", textAlign: 'center', }}>OUR ROOMS</div>
                <div style={{ display: 'flex' }}>
                    <RoomCard />
                    <div style={{ marginLeft: '100px' }}>
                        <RoomCard />
                    </div>
                    <div style={{ marginLeft: '100px' }}>
                        <RoomCard />
                    </div>
                </div>
                <div style={{ marginTop: '80px', marginBottom: '50px', marginLeft: "350px" }}>
                    <button sx={{ width: '70px', height: '25px' }} style={{ fontSize: '16px', marginTop: "7px", marginLeft: '180px', padding: '10px', backgroundColor: 'white', cursor: 'pointer', border: '1px solid black', fontWeight: 'bold' }}>More Rooms &gt;&gt;&gt;</button>
                </div>
                <div style={{ marginTop: '80px', marginBottom: '50px', fontSize: "30px", textAlign: 'center', }}>OUR FACILITIES</div>
                <div style={{ display: 'flex' }}>
                    <FacilityCard header={'Swiming Pool (upcoming)'} content={p1} />
                    <div style={{ marginLeft: '50px' }}>
                        <FacilityCard header={'Lawn Area'} content={p2} />
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                        <FacilityCard header={'Children Play Area'} content={p3} />
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                        <FacilityCard header={'Big banquat Hall'} content={p4} />
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                        <FacilityCard header={'Haweli Restaurant'} content={p5} />
                    </div>
                </div>
                <div style={{ marginTop: '80px', marginBottom: '50px', marginLeft: "350px" }}>
                    <button sx={{ width: '70px', height: '25px' }} style={{ fontSize: '16px', marginTop: "7px", marginLeft: '180px', padding: '10px', backgroundColor: 'white', cursor: 'pointer', border: '1px solid black', fontWeight: 'bold' }}>More Facilities &gt;&gt;&gt;</button>
                </div>
                <div style={{ marginTop: '80px', marginBottom: '50px', fontSize: "30px", textAlign: 'center', }}>TESTIMONIALS</div>
                <div style={{ display: 'flex' }}>
                    <TestimonialCard />
                    <div style={{ marginLeft: '70px' }}>
                        <TestimonialCard />
                    </div>
                    <div style={{ marginLeft: '70px' }}>
                        <TestimonialCard />
                    </div>
                    <div style={{ marginLeft: '70px' }}>
                        <TestimonialCard />
                    </div>
                </div>
                <div style={{ marginTop: '80px', marginBottom: '50px', fontSize: "30px", textAlign: 'center', }}>REACH US</div>
                <div style={{ display: 'flex', marginBottom: "50px" }}>
                    <MapCard />
                    <div style={{ marginLeft: '550px' }}>
                        <div style={{ fontSize: '20px', fontWeight: "bold" }}>Call Us</div>
                        <div style={{ display: 'flex', fontSize: '16px', marginTop: '10px' }}>
                            <PhoneIcon style={{ fontSize: '16px' }} />+91971890521
                            <PhoneIcon style={{ fontSize: '16px', marginLeft: '10px' }} />+918789618100
                        </div>
                        <PhoneIcon style={{ fontSize: '16px', marginTop: '10px' }} />+91971890521
                        <div style={{ marginTop: '160px' }}>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>FOLLOW US</div>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <a href="https://www.facebook.com/Thehaweliresort" target="_blank" rel="noopener noreferrer">
                                <Chip label={<> <FaFacebook /> Facebook  </>} style={{ fontSize: '16px', fontWeight: "bold" }} />
                            </a>
                        </div>

                        <div style={{ marginTop: "10px" }}>
                            <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer">
                                <Chip label={<> <FaInstagram /> Instagram </>} style={{ fontSize: '18px', fontWeight: "bold" }} />
                            </a>
                        </div>

                        <div style={{ marginTop: "10px" }}>
                            <a href="https://twitter.com/thehaweliresort" target="_blank" rel="noopener noreferrer">
                                <Chip label={<> <FaTwitter /> Twitter </>} style={{ fontSize: '18px', fontWeight: "bold" }} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;