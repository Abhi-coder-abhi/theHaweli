import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
        <Card sx={{ width: "85vw", marginLeft: "8vw", height: "10vw" }} style={{ borderRadius: `${15 / 16}vw`,backgroundColor:"rgba(0, 123, 255, 0.5)" }}>
            <CardContent>
                <h2 style={{ marginLeft: "1.5vw", color: "#8A3324", fontSize: "1vw" }}>Check Booking Availability</h2>
                <div style={{ display: 'flex' }}>
                    <div>
                        <div style={{ marginLeft: "1.8vw", marginTop: `${15 / 16}vw`, fontSize: '1vw', fontWeight: 'bold', }}>Check-in</div>
                        <input type="date" id="checkInDate" style={{ marginLeft: "1.5vw", marginTop: `${10 / 16}vw`, fontSize: '1vw', width: '13vw', height: `${30 / 16}vw`, borderRadius: `${10 / 16}vw`, padding: `${5 / 16}vw ${10 / 16}vw`, border: `${1 / 16}vw solid #999` }} onChange={changeHandler} name="from" />
                        <style>
                            {`
                                  input[type="date"]::-webkit-calendar-picker-indicator {
                                    cursor: pointer;
                                     }
                            `}
                        </style>
                    </div>
                    <div>
                        <div style={{ marginLeft: `${20 / 16}vw`, marginTop: `${15 / 16}vw`, fontSize: `${16 / 16}vw`, fontWeight: 'bold' }}>Check-out</div>
                        <input type="date" id="checkOutDate" style={{ marginLeft: `${20 / 16}vw`, marginTop: `${10 / 16}vw`, fontSize: '1vw', width: '13vw', height: `${30 / 16}vw`, borderRadius: `${10 / 16}vw`, padding: `${5 / 16}vw ${10 / 16}vw`, border: `${1 / 16}vw solid #999` }} onChange={changeHandler} name="to" />
                    </div>
                    <div>
                        <div style={{ marginLeft: `${20 / 16}vw`, marginTop: `${15 / 16}vw`, fontSize: '1vw', fontWeight: 'bold' }}>Adult</div>
                        <select
                            id="adult"
                            style={{
                                marginLeft: `${20 / 16}vw`, marginTop: `${10 / 16}vw`, fontSize: '1vw', width: '13vw', height: `${40 / 16}vw`, borderRadius: `${10 / 16}vw`, padding: `${10 / 16}vw`, border: '1px solid #999', cursor: "pointer"
                            }}
                            onChange={changeHandler} name="adult"
                        >
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </select>
                    </div>
                    <div>
                        <div style={{ marginLeft: `${20 / 16}vw`, marginTop: `${15 / 16}vw`, fontSize: '1vw', fontWeight: 'bold' }}>Children</div>
                        <select
                            id="children"
                            style={{
                                marginLeft: `${20 / 16}vw`, marginTop: `${10 / 16}vw`, fontSize: '1vw', width: '13vw', height: `${40 / 16}vw`, borderRadius: `${10 / 16}vw`, padding: `${5 / 16}vw ${10 / 16}vw`, border: '1px solid #999', cursor: "pointer"
                            }}
                            onChange={changeHandler} name="children"
                        >
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </select>
                    </div>
                    <div>
                        <div style={{ marginLeft: `${20 / 16}vw`, marginTop: `${15 / 16}vw`, fontSize: '1vw', fontWeight: 'bold' }}>Type</div>
                        <select
                            id="type"
                            style={{
                                marginLeft: `${20 / 16}vw`, marginTop: `${10 / 16}vw`, fontSize: '1vw', width: '13vw', height: `${40 / 16}vw`, borderRadius: `${10 / 16}vw`, padding: `${5 / 16}vw ${10 / 16}vw`, border: '1px solid #999', cursor: "pointer"
                            }}
                            onChange={changeHandler} name="type"
                        >
                            <option value="single">Single Bed</option>
                            <option value="double">Double Bed</option>
                            <option value="triple">Triple Bed</option>
                        </select>
                    </div>
                    <div>
                        <div style={{ marginLeft: `${20 / 16}vw`, marginTop: '1vw', fontSize: '1vw', fontWeight: 'bold' }}></div>
                        <button style={{ marginLeft: `${20 / 16}vw`, marginRight: `${20 / 16}vw`, marginTop: `${28 / 16}vw`, fontSize: '1vw', height: `${40 / 16}vw`, padding: `${5 / 16}vw ${10 / 16}vw`, borderRadius: `${10 / 16}vw`, border: `${1 / 16}vw solid #999`, cursor: "pointer", backgroundColor: "black", color: "gold", }} onClick={handleFormSubmit}>Submit</button>
                    </div>
                </div>
            </CardContent>

        </Card>
    );
}