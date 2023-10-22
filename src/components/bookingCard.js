import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BookingCard() {
    return (
        <Card sx={{ minWidth: 275 }} style={{ borderRadius: '10px' }}>
            <CardContent>
                <h2 style={{ marginLeft: "20px" }}>Check Booking Availability</h2>
                <div style={{ display: 'flex' }}>
                    <div>
                        <div style={{ marginLeft: "20px", marginTop: '15px', fontSize: '16px', fontWeight: 'bold', }}>Check-in</div>
                        <input type="date" id="checkInDate" style={{ marginLeft: "20px", marginTop: '10px', fontSize: '16px', width: '225px', height: '30px', borderRadius: '10px', padding: '5px 10px', border: '1px solid #999' }} />
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
                        <input type="date" id="checkOutDate" style={{ marginLeft: "20px", marginTop: '10px', fontSize: '16px', width: '225px', height: '30px', borderRadius: '10px', padding: '5px 10px', border: '1px solid #999' }} />
                    </div>
                    <div>
                        <div style={{ marginLeft: "20px", marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}>Adult</div>
                        <select
                            id="adult"
                            style={{
                                marginLeft: "20px", marginTop: '10px', fontSize: '16px', width: '250px', height: '40px', borderRadius: '10px', padding: '10px', border: '1px solid #999',cursor:"pointer" }}
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
                        >
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </select>
                    </div>
                    <div>
                        <div style={{ marginLeft: "20px", marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}></div>
                        <button style={{ marginLeft: "20px",marginRight: "20px", marginTop: '28px', fontSize: '16px', height: '40px', borderRadius: '10px', padding: '5px 10px', border: '1px solid #999',cursor:"pointer" }}>Submit</button>
                    </div>
                </div>
            </CardContent>

        </Card>
    );
}