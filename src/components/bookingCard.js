import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useMediaQuery } from '@mui/material';
import "../css/booking.css"

export default function BookingCard() {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [adult, setAdult] = useState("");
    const [children, setChildren] = useState("");
    const email = localStorage.getItem('email');
    const [type, setType] = useState("single");

    console.log("b", email)


    const changeHandler = (e) => {
        const { name, value, } = e.target;
        if (name === 'from') {
            // Update the loginMail state when the email input changes
            setCheckInDate(value);
        }
        if (name === 'to') {
            // Update the loginPassword state when the password input changes
            setCheckOutDate(value);
        }
        if (name === "adult") {
            setAdult(value)
        }
        if (name === "children") {
            setChildren(value)
        }
        else {
            setType(value)
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // If email is not present, show a warning to log in first
        alert('Room is Available Now');
        // You can also navigate to the login page or take other actions as needed
    }


    return (
        <Card
        className='my-booking-card ' style={{backgroundColor: "rgba(255, 255, 150, 0.5)"}}
        >
            <CardContent>
                <h2 className='booking-card-header'>Check Booking Availability</h2>
                <div className="form-container">
                    <div>
                        <div className="form-group">
                            <label className='.booking-card-label'>Check-in</label>
                            <input className='booking-card-input' type="date" id="checkInDate" name="from" onChange={changeHandler}/>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label className='.booking-card-label'>Check-out</label>
                            <input className='booking-card-input' type="date" id="checkOutDate" name="to" onChange={changeHandler}/>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label className='.booking-card-label'>Adult</label>
                            <select className='booking-card-select' id="adult" name="adult" onChange={changeHandler}>
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label className='.booking-card-label'>Children</label>
                            <select className='booking-card-select' id="children" name="children" onChange={changeHandler}>
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label className='.booking-card-label'>Type</label>
                            <select className='booking-card-select' id="type" name="type">
                                <option value="single">Single Bed</option>
                                <option value="double">Double Bed</option>
                                <option value="triple">Triple Bed</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className="submit-button" onClick={handleFormSubmit}>Submit</button>
                    </div>
                </div>
            </CardContent>

        </Card>
    );
}