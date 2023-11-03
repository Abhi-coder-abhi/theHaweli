import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../css/accomodations.css"

export default function Accomodations(props) {
  return (
    <div  >
      <div className='accomodation-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>Accomodations</span></div>
      <Card className='accomodation-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='accomodation-page-card-container'>
            <h2 className='accomodation-page-card-header'>★ Room Types</h2>
            <p className='accomodation-page-card-body'>We offer a variety of room types to suit your needs, including Single Rooms, Double Rooms, Suites, Family Rooms, Deluxe Rooms, and Luxury Suites.</p>
            </CardContent>
      </Card>
        <Card className='accomodation-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='accomodation-page-card-container'>
            <h2 className='accomodation-page-card-header'>★ Room Descriptions</h2>
            <p className='accomodation-page-card-body'>Our Single Rooms are perfect for solo travelers, while our Suites offer spacious elegance with a separate living area. The Deluxe Rooms provide stunning views of the city, and our Luxury Suites are the epitome of opulence.</p>
            </CardContent>

        </Card>
        <Card className='accomodation-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='accomodation-page-card-container'>
            <h2 className='accomodation-page-card-header'>★ Special Offers and Packages</h2>
            <p className='accomodation-page-card-body'>Explore our special offers, such as our Honeymoon Package with a romantic dinner for two, or our Spa Weekend Package for a relaxing getaway. We also offer discounts for extended stays.</p>
            </CardContent>

        </Card>
        <Card className='accomodation-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 className='accomodation-page-card-header'>★ Amenities</h2>
            <p className='accomodation-page-card-body'>All our rooms are equipped with modern amenities, including free Wi-Fi, flat-screen TVs, minibars, air conditioning, and comfortable bedding for a restful stay.</p>
            </CardContent>
        </Card>
    </div>
  );
}
