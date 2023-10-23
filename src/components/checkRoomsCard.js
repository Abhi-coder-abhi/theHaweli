import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function BookingCard() {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [adult, setAdult] = useState("");
    const [children, setChildren] = useState("");
    const email = localStorage.getItem('email');
    console.log("b",email)


    const changeHandler = (e) =>{
        const { name, value,} = e.target;
        if (name === 'from') {
          // Update the loginMail state when the email input changes
          setCheckInDate(value);
        } 
         if (name === 'to') {
          // Update the loginPassword state when the password input changes
          setCheckOutDate(value);
        }
        if(name === "adult"){
            setAdult(value)
        }
        else if(name === "children"){
            setChildren(value)
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (email) {
            // If email is present, proceed with the fetch request
            const data = {
                checkin: checkInDate,
                checkout: checkOutDate,
                adult: adult,
                children: children,
                email:email
            };

            fetch('/book-room', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
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
      };
    return (
        <Card sx={{ minWidth: 275 }} style={{ borderRadius: '10px' }}>
            <CardContent>
                <h2 style={{ marginLeft: "20px" }}>Check Booking Availability</h2>
                <div style={{ display: 'flex' }}>
                    <div>
                        <div style={{ marginLeft: "20px", marginTop: '15px', fontSize: '16px', fontWeight: 'bold', }}>Check-in</div>
                        <input type="date" id="checkInDate" style={{ marginLeft: "20px", marginTop: '10px', fontSize: '16px', width: '225px', height: '30px', borderRadius: '10px', padding: '5px 10px', border: '1px solid #999' }} onChange={changeHandler} name="from"/>
                        <style>
        {`
          /* Apply the cursor style to the date picker icon */
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
          }
        `}
      </style>
                    </div>
                    <div>
                        <div style={{ marginLeft: "20px", marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}>Check-out</div>
                        <input type="date" id="checkOutDate" style={{ marginLeft: "20px", marginTop: '10px', fontSize: '16px', width: '225px', height: '30px', borderRadius: '10px', padding: '5px 10px', border: '1px solid #999' }} onChange={changeHandler} name="to"/>
                    </div>
                    <div>
                        <div style={{ marginLeft: "20px", marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}>Adult</div>
                        <select
                            id="adult"
                            style={{
                                marginLeft: "20px", marginTop: '10px', fontSize: '16px', width: '250px', height: '40px', borderRadius: '10px', padding: '10px', border: '1px solid #999',cursor:"pointer" }}
                                onChange={changeHandler} name="adult"
                        >
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </select>
                    </div>
                    <div>
                        <div style={{ marginLeft: "20px", marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}>Children</div>
                        <select
                            id="children"
                            style={{
                                marginLeft: "20px", marginTop: '10px', fontSize: '16px', width: '250px', height: '40px', borderRadius: '10px', padding: '5px 10px', border: '1px solid #999',cursor:"pointer"    }}
                                onChange={changeHandler} name="children"
                        >
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </select>
                    </div>
                    <div>
                        <div style={{ marginLeft: "20px", marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}></div>
                        <button style={{ marginLeft: "20px",marginRight: "20px", marginTop: '28px', fontSize: '16px', height: '40px', borderRadius: '10px', padding: '5px 10px', border: '1px solid #999',cursor:"pointer" }} onClick={handleFormSubmit}>Submit</button>
                    </div>
                </div>
            </CardContent>

        </Card>
    );
}