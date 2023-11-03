import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../css/reviews.css"

export default function Offers(props) {
  return (
    <div  >
      <div className='review-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>Our-Offers</span></div>
      <Card className='review-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='review-page-card-container' >
            <h2 className='review-page-card-header'>★ Welcome Amenities</h2>
            <p className='review-page-card-body'>Greet guests with a welcome drink, fresh fruit basket, or a small gift in their room upon arrival.</p>
            </CardContent>
        </Card>
        <Card className='review-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='review-page-card-container' >
            <h2 className='review-page-card-header'>★ Free Breakfast</h2>
            <p className='review-page-card-body'>Include a complimentary breakfast for all guests to kickstart their day with a delicious meal.</p>
            </CardContent>
        </Card>
        <Card  className='review-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='review-page-card-container'>
            <h2 className='review-page-card-header'>★ Room Upgrades</h2>
            <p className='review-page-card-body'>Offer room upgrades at a discounted rate or as a loyalty reward for returning guests.</p>
            </CardContent>
        </Card>
        <Card className='review-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='review-page-card-container'>
            <h2 className='review-page-card-header'>★ Special Occasion Packages</h2>
            <p className='review-page-card-body'>Create packages for honeymooners, anniversaries, or special occasions, complete with romantic amenities.</p>
            </CardContent>
        </Card>
    </div>
  );
}
