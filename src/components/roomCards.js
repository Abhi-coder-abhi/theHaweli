import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'
import "../css/roomcards.css"
import { styled } from '@mui/system';

const CustomChip = styled(Chip)(({ theme }) => ({
    backgroundColor: 'black',
    height: '2vw',
    '@media (max-width: 600px)': {
        height: '5vw',
    }
    // Add more styles as needed
}));

export default function RoomCard({ openModal }) {

    const starStyle = {
        color: 'gold',
        fontsize: "1vw"
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
            <Card className='room1-card' style={{ backgroundColor: 'lightyellow', border: '0.2vw solid #8A3324' }}>
                <CardContent >
                    <div className='room-card-full-container'>
                        <Typography className='room1-card-container' style={{ color: "#8A3324", fontWeight: 'bold', fontFamily: "cursive" }}>
                            Simple Bed Room
                        </Typography>

                        <div className='room1-card-price'>
                            &#8377;200 per night
                        </div>
                        <div className="room-features-label">Features</div>
                        <div style={{ display: "flex",flexWrap:"wrap" }}>
                            <div className="room-features-chip">
                                <Chip label="2 Rooms" />
                            </div>
                            <div className="room-features-chip">
                                <Chip label="1 Bathroom" />
                            </div>
                            <div className="room-features-chip">
                                <Chip label="1 Balcony" />
                            </div>
                            <div className="room-features-chip">
                                <Chip label="3 Sofa" />
                            </div>
                        </div>
                        <div className="room-features-facilities-container">
                            <div className="room-features-facilities-label">Facilities</div>
                            <div style={{ display: "flex" }}>
                                <div className="room-features-facilities-chip">
                                    <Chip label="Wifi" />
                                </div>
                                <div className="room-features-facilities-chip">
                                    <Chip label="Television" />
                                </div>
                                <div className="room-features-facilities-chip">
                                    <Chip label="Room Heater" />
                                </div>
                            </div>
                        </div>
                        <div className="room-features-guests-label">Guests</div>
                        <div style={{ display: "flex" }}>
                            <div className="room-features-guests-chip">
                                <Chip label="5 Adults" />
                            </div>
                            <div className="room-features-guests-chip">
                                <Chip label="4 Children" />
                            </div>
                        </div>
                        <div className="room-features-rating-container">
                            <div className="room-features-rating-chip">
                                <Chip label={<span style={starStyle}>★★★★</span>} />
                            </div>
                        </div>

                    </div>
                    <div sx={{ whiteSpace: 'nowrap' }} style={{ textAlign: "center", marginLeft: "4vw" }}>
                        <button style={{
                            fontSize: '1vw',
                            boxShadow: "0 0 2px 2px #8A3324",
                            padding: `${10 / 16}vw`, cursor: 'pointer', border: '3px solid #8A3324', borderRadius: `${40 / 16}vw`, fontWeight: "bold", backgroundColor: "#F0E68C", color: "#8A3324",
                        }}
                            onClick={openBookingModal}>   Book Now</button>
                    </div>
                </CardContent>
            </Card>
            {
                isBookingModalOpen && (
                    <div className='booking-room-modal' >
                        <div className='booking-room-modal-card'>
                            <form className='booking-room-modal-form'>
                                <div className='booking-room-modal-header'> Booking-Details</div>
                                <div className='booking-room-modal-container'>
                                    <div className="booking-room-modal-field-container">
                                        <div className="booking-room-modal-field-header">Check-In</div>
                                        <input className='booking-room-modal-input' type="date" onChange={handleChange} name="checkin" />
                                        <div className="booking-room-modal-field-header">Adult</div>
                                        <select className='booking-room-modal-select' onChange={handleChange} name="adult">
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div className="booking-room-modal-field-container2">
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <div className="booking-room-modal-field-header" > Check-out</div>
                                            <input className='booking-room-modal-input' type="date" onChange={handleChange} name='checkout' />
                                            <div className="booking-room-modal-field-header" > Children</div>
                                            <select className='booking-room-modal-select' onChange={handleChange} name='children' >
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingRight: '20px' }}>
                                    <div className="booking-room-modal-field-header"style={{marginLeft:"1vw"}} > Type</div>
                                    <div style={{ display: "flex" }}>
                                        <select  style={{ fontSize: '18px', width: '180px', padding: "6px", marginTop: "5px",marginLeft:"1vw" }} onChange={handleChange} name='type' >
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
                )
            }

        </div >
    );
}