import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Accomodations(props) {
  return (
    <div  >
      <div style={{ marginTop: '8vw', marginBottom: '4vw', fontSize: "1.99vw", textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>Accomodations</span></div>
      <Card sx={{ width: "80vw", marginLeft: "5vw", height: "9vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.7vw",color: "#8A3324"}}>★ Room Types</h2>
            <p style={{marginTop:"0.8vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>We offer a variety of room types to suit your needs, including Single Rooms, Double Rooms, Suites, Family Rooms, Deluxe Rooms, and Luxury Suites.</p>
            </CardContent>
      </Card>
        <Card sx={{ width: "80vw", marginLeft: "5vw", height: "9vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.7vw",color: "#8A3324"}}>★ Room Descriptions</h2>
            <p style={{marginTop:"0.8vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>Our Single Rooms are perfect for solo travelers, while our Suites offer spacious elegance with a separate living area. The Deluxe Rooms provide stunning views of the city, and our Luxury Suites are the epitome of opulence.</p>
            </CardContent>

        </Card>
        <Card sx={{ width: "80vw", marginLeft: "5vw", height: "9vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.7vw",color: "#8A3324"}}>★ Special Offers and Packages</h2>
            <p style={{marginTop:"0.8vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>Explore our special offers, such as our Honeymoon Package with a romantic dinner for two, or our Spa Weekend Package for a relaxing getaway. We also offer discounts for extended stays.</p>
            </CardContent>

        </Card>
        <Card sx={{ width: "80vw", marginLeft: "5vw", height: "9vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.7vw",color: "#8A3324"}}>★ Amenities</h2>
            <p style={{marginTop:"0.8vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>All our rooms are equipped with modern amenities, including free Wi-Fi, flat-screen TVs, minibars, air conditioning, and comfortable bedding for a restful stay.</p>
            </CardContent>
        </Card>
    </div>
  );
}
