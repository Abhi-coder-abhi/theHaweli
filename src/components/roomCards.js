import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'


export default function RoomCard({ openModal }) {
   
    const starStyle = {
        color: 'gold',
        fontsize:"1vw"
    };
    const [isBookingModalOpen, setBookingModalOpen] = useState(false);
    const email = localStorage.getItem('email');
    const [selectedRoom, setSelectedRoom] = useState('single');
    const openBookingModal = (event) => {
        setBookingModalOpen(true);
    };

    const closeBookingModal = () => {
        setBookingModalOpen(false);
    };
    const [formData, setFormData] = useState({});

    const getRoomPrice = () => {
        switch (selectedRoom) {
            case 'single':
                return '₹200';
            case 'double':
                return '₹300';
            case 'triple':
                return '₹500';
            default:
                return '₹200'; // Default price for unknown room types
        }
    };
    const handleChange = (e) => {
        const { name, value, } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (name === "type")
            setSelectedRoom(value)
    };
    const handleSubmit = (event) => {

        event.preventDefault();
        formData.email = email
        console.log(formData)
        if (email) {
            // If email is present, proceed with the fetch request

            fetch('/book-room', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Handle the response from the server if needed
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            // If email is not present, show a warning to log in first
            alert('Please log in first to book a room.');
            // You can also navigate to the login page or take other actions as needed
        }
        setBookingModalOpen(false)
    }
    
    /**/
    return (
        <div >
            <Card style={{ marginLeft: "2.7vw", width: "25vw", border: '3px solid #8A3324', backgroundColor: "lightyellow", display: "flex" }}  >
                <CardContent >
                    <div>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bold", fontFamily: "cursive", color: "#8A3324",fontSize: "1vw" }}>
                            Simple Bed Room
                        </Typography>

                        <div style={{ fontSize: "1vw",  }}>
                            &#8377;200 per night
                        </div>
                        <div style={{ fontSize: "1vw", marginTop: `${20 / 16}vw`, fontWeight: 'bold', color: "#8A3324" }}>
                            Features
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold' }}>
                                <Chip label={<span style={{ color: "gold",fontSize:"0.6vw" }}>2 Rooms</span>} sx={{ width: `${70 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: "10px" }} />
                            </div>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold', marginLeft:`${5 / 16}vw` }}>
                                <Chip label={<span style={{ color: "gold",fontSize:"0.6vw" }}>1 Bathroom</span>} sx={{ width: `${80 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${10 / 16}vw` }} />
                            </div>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold', marginLeft: `${5 / 16}vw` }}>
                                <Chip label={<span style={{ color: "gold",fontSize:"0.6vw" }}>1 Balcony</span>} sx={{ width: `${80 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${10 / 16}vw` }} />
                            </div>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold', marginLeft: `${5 / 16}vw` }}>
                                <Chip label={<span style={{ color: "gold",fontSize:"0.6vw" }}>3 Sofa</span>} sx={{ width: `${70 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${10 / 16}vw` }} />
                            </div>
                        </div>
                        <div style={{ fontSize: "1vw", marginTop: `${20/ 16}vw`, fontWeight: 'bold', color: "#8A3324" }}>
                            Facilities
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold' }}>
                                <Chip label={<span style={{ color: "gold" }}>Wifi</span>} sx={{ width:`${70 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${10 / 16}vw` }} />
                            </div>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold', marginLeft: `${5 / 16}vw` }}>
                                <Chip label={<span style={{ color: "gold" }}>Telivision</span>} sx={{ width: `${70 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${10 / 16}vw` }} />
                            </div>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold', marginLeft: `${5 / 16}vw` }}>
                                <Chip label={<span style={{ color: "gold" }}>AC</span>} sx={{ width: `${50 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${10 / 16}vw`}} />
                            </div>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold', marginLeft: `${5 / 16}vw` }}>
                                <Chip label={<span style={{ color: "gold" }}>Room Heater</span>} sx={{ width:`${90 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${10 / 16}vw` }} />
                            </div>
                        </div>
                        <div style={{ fontSize: `${16 / 16}vw`, marginTop: `${20 / 16}vw`, fontWeight: 'bold', color: "#8A3324" }}>
                            Guests
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold' }}>
                                <Chip label={<span style={{ color: "gold" }}>5 Adults</span>} sx={{ width: `${70 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${10 / 16}vw` }} />
                            </div>
                            <div style={{ marginTop: `${5 / 16}vw`, fontWeight: 'bold', marginLeft: `${10 / 16}vw` }}>
                                <Chip label={<span style={{ color: "gold" }}>4 children</span>} sx={{ width: `${80 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${10 / 16}vw` }} />
                            </div>
                        </div>
                        <div style={{ fontSize: "1vw", marginTop: `${20 / 16}vw`, fontWeight: 'bold', color: "#8A3324" }}>
                            Rating
                        </div>
                        <div style={{ marginTop: `${5 / 16}vw`, }}>
                            <Chip label={<span style={starStyle}>★★★★</span>} sx={{ width: `${80 / 16}vw`, height: `${20 / 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${15 / 16}vw` }} />
                        </div>
                    </div>
                    <div  sx={{ whiteSpace: 'nowrap' }} style={{textAlign:"center",marginLeft:"4vw"}}>
                        <button style={{
                            fontSize: '1vw',
                            boxShadow: "0 0 2px 2px #8A3324", 
                            padding: `${10 / 16}vw`, cursor: 'pointer', border: '3px solid #8A3324', borderRadius: `${40 / 16}vw`, fontWeight: "bold", backgroundColor: "#F0E68C", color: "#8A3324",
                        }}
                            onClick={openBookingModal}>   Book Now</button>
                    </div>
                </CardContent>
            </Card>
            {isBookingModalOpen && (
                <div style={{
                    top: '0', // Start from the top of the screen
                    left: '0', // Start from the left of the screen
                    width: '100%', // Cover the entire width of the screen
                    height: '100%', // Cover the entire height of the screen
                    position: 'fixed',
                    background: "rgba(0, 0, 0, 0.5)",
                    zIndex: "2000"
                }} >
                    <div className="modal-content" style={{ marginLeft: "19vw", marginRight: "35vw", marginTop: `${20 / 16}vw`, display: 'flex', borderRadius: `${20 / 16}vw`, backgroundColor: "lightyellow" }}>
                        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150%', border: "chocolate" }}>
                            <div style={{ fontSize: '25px', fontWeight: "bold", borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}> Booking-Details</div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, paddingRight: `${20 / 16}vw` }}>
                                    <div style={{ fontSize: `${20 / 16}vw`, marginTop: "20px", color: "#0000CD" }}> Check-In</div>
                                    <input style={{ fontSize: `${18 / 16}vw`, width: '100%', padding: "5px" }} type="date" onChange={handleChange} name='checkin' />


                                    <div style={{ fontSize: `${20 / 16}vw`, marginTop: "10px", marginLeft: '10px', color: "#0000CD" }}>Adult</div>
                                    <select style={{ fontSize: '18px', width: '100%', padding: "5px", marginLeft: '10px' }} onChange={handleChange} name='adult' >
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                </div>
                                <div style={{ flex: 1, paddingLeft: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ fontSize: `${20 / 16}vw`, marginTop: "20px", color: "#0000CD" }}> Check-out</div>
                                        <input style={{ fontSize: '18px', width: '100%', padding: "5px" }} type="date" onChange={handleChange} name='checkout' />
                                        <div style={{ fontSize: `${20 / 16}vw`, marginTop: "10px", color: "#0000CD" }}> Children</div>
                                        <select style={{ fontSize: '18px', width: '100%', padding: "5px" }} onChange={handleChange} name='children' >
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingRight: '20px' }}>
                                <div style={{ fontSize: '20px', marginTop: "20px", textAlign: 'center', color: "#0000CD" }}> Type</div>
                                <div style={{ display: "flex" }}>
                                    <select style={{ fontSize: '18px', width: '200px', padding: "5px", marginTop: "5px" }} onChange={handleChange} name='type' >
                                        <option value="single">Single Bed</option>
                                        <option value="double">Double Bed</option>
                                        <option value="triple">Triple Bed</option>
                                    </select>
                                    <div><Chip label={getRoomPrice()} sx={{ width: '70px', height: '30px', marginLeft: "5px", backgroundColor: "yellow" }} style={{ fontSize: '14px', padding: "5px" }} /></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button style={{ fontSize: '20px', textAlign: 'center', marginRight: '10px', cursor: 'pointer', backgroundColor: "black", color: "gold", borderRadius: "5px" }} onClick={handleSubmit}>
                                    Submit
                                </button>
                                <button style={{ fontSize: '20px', textAlign: 'center', cursor: 'pointer', borderRadius: "5px" }} onClick={closeBookingModal}>
                                    Cancel
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
            
        </div>
    );
}