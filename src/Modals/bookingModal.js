import React, { useState } from 'react';
import { Chip } from '@mui/material';

function BookingModal({ isOpen, onClose }) {  
  const [selectedRoom, setSelectedRoom] = useState('single');
  const [formData, setFormData] = useState({});
  const email = localStorage.getItem('email');
  
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
    onClose();
}
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
if (!isOpen) {
    return null;
  }

  return (
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
                <button style={{ fontSize: '20px', textAlign: 'center', cursor: 'pointer', borderRadius: "5px" }} onClick={onClose}>
                    Cancel
                </button>
            </div>

        </form>
    </div>
</div>
  )}
  export default BookingModal;