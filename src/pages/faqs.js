import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Faqs(props) {
  return (
    <div  >
      <div style={{ marginTop: '8vw', marginBottom: '4vw', fontSize: "1.99vw", textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>FAQS</span></div>
      <Card sx={{ width: "80vw", marginLeft: "5vw", height: "9vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.7vw",color: "#8A3324"}}>★ What is the check-in time and check-out time?</h2>
            <p style={{marginTop:"0.8vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>Check-in times typically start in the early afternoon, around 12:00 PM, while check-out times are in the morning, often around 11:00 AM. These times may vary from one hotel to another.</p>
            </CardContent>

        </Card>
        <Card sx={{ width: "80vw", marginLeft: "5vw", height: "9vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.7vw",color: "#8A3324"}}>★ Is early check-in or late check-out possible?</h2>
            <p style={{marginTop:"0.8vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>Early check-in and late check-out may be possible but are subject to availability. It's best to contact the hotel reception in advance to make arrangements.</p>
            </CardContent>

        </Card>
        <Card sx={{ width: "80vw", marginLeft: "5vw", height: "9vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.7vw",color: "#8A3324"}}>★ How do I make a reservation?</h2>
            <p style={{marginTop:"0.8vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>You can make a reservation by contacting the hotel directly, visiting their website, or using a third-party booking platform. Provide your check-in and check-out dates, the number of guests, and any special requests.</p>
            </CardContent>

        </Card>
        <Card sx={{ width: "80vw", marginLeft: "5vw", height: "9vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.7vw",color: "#8A3324"}}>★ Is Wi-Fi available, and is it free?</h2>
            <p style={{marginTop:"0.8vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>Yes we provide free wifi with best internet.</p>
            </CardContent>

        </Card>
    </div>
  );
}
