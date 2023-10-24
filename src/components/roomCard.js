import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'

export default function RoomCard(props) {
    const widthPercentage = (value, base) => `${(value / 1920) * 130}%`;
    const email = localStorage.getItem('email');
    console.log(email)
    const [selectedRoom, setSelectedRoom] = useState('single');
    const starStyle = {
        color: 'gold',
    };
    const [formData, setFormData] = useState({});
    const [isBookingModalOpen, setBookingModalOpen] = useState(false);
    const openBookingModal = () => {
        setBookingModalOpen(true);
    };

    const closeBookingModal = () => {
        setBookingModalOpen(false);
    };
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
        formData.email=email
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
    return (
        <div>
            <Card style={{ width: widthPercentage(1250), }}  >
                <CardActionArea style={{ cursor: "auto" }}>
                    <img style={{ width:"100%" }} src={props.image} alt="" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Simple Room Name
                        </Typography>
                        <div style={{ fontSize: "16px" }}>
                            &#8377;200 per night
                        </div>
                        <div style={{ fontSize: "16px", marginTop: "20px", fontWeight: 'bold' }}>
                            Features
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginTop: "5px", fontWeight: 'bold' }}>
                                <Chip label="2 Rooms" sx={{ width: '70px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                            <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                                <Chip label="1 Bathroom" sx={{ width: '80px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                            <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                                <Chip label="1 Balcony" sx={{ width: '80px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                            <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                                <Chip label="3 Sofa" sx={{ width: '70px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", marginTop: "20px", fontWeight: 'bold' }}>
                            Facilities
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginTop: "5px", fontWeight: 'bold' }}>
                                <Chip label="Wifi" sx={{ width: '70px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                            <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                                <Chip label="Television" sx={{ width: '80px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                            <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                                <Chip label="AC" sx={{ width: '50px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                            <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                                <Chip label="Room Heater" sx={{ width: '90px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", marginTop: "20px", fontWeight: 'bold' }}>
                            Guests
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginTop: "5px", fontWeight: 'bold' }}>
                                <Chip label="5 Adult" sx={{ width: '70px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                            <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '10px' }}>
                                <Chip label="4 Children" sx={{ width: '80px', height: '20px' }} style={{ fontSize: '10px' }} />
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", marginTop: "20px", fontWeight: 'bold' }}>
                            Rating
                        </div>
                        <div style={{ marginTop: "5px", }}>
                            <Chip label={<span style={starStyle}>★★★★</span>} sx={{ width: '75px', height: '20px' }} style={{ fontSize: '15px' }} />
                        </div>
                        <div>
                            <button sx={{ width: '70px', height: '25px' }} style={{ fontSize: '16px', marginTop: "7px", marginLeft: '180px', 
                            padding: '10px', cursor: 'pointer', border: '2px solid #8A3324', borderRadius: "5px", fontWeight: "bold", backgroundColor: "#F0E68C", color: "#8A3324", }}
                                onClick={openBookingModal}>   Book Now</button>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            {isBookingModalOpen && (
                <div className="modal">
                    <div className="modal-content" style={{ marginLeft: "500px", marginRight: "500px", marginTop: "20px", display: 'flex' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150%' }}>
                            <div style={{ fontSize: '25px', fontWeight: "bold" }}> Booking-Details</div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, paddingRight: '20px' }}>
                                    <div style={{ fontSize: '20px', marginTop: "20px" }}> Check-In</div>
                                    <input style={{ fontSize: '18px', width: '100%', padding: "5px" }} type="date" onChange={handleChange} name='checkin' />


                                    <div style={{ fontSize: '20px', marginTop: "10px", marginLeft: '10px' }}>Adult</div>
                                    <select style={{ fontSize: '18px', width: '100%', padding: "5px", marginLeft: '10px' }} onChange={handleChange} name='adult' >
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                </div>
                                <div style={{ flex: 1, paddingLeft: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ fontSize: '20px', marginTop: "20px" }}> Check-out</div>
                                        <input style={{ fontSize: '18px', width: '100%', padding: "5px" }} type="date" onChange={handleChange} name='checkout' />
                                        <div style={{ fontSize: '20px', marginTop: "10px" }}> Children</div>
                                        <select style={{ fontSize: '18px', width: '100%', padding: "5px" }} onChange={handleChange} name='children' >
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingRight: '20px' }}>
                                <div style={{ fontSize: '20px', marginTop: "20px", textAlign: 'center' }}> Type</div>
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
                                <button style={{ fontSize: '20px', textAlign: 'center', marginRight: '10px', cursor: 'pointer', backgroundColor: "blue", color: "white", borderRadius: "5px" }} onClick={handleSubmit}>
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