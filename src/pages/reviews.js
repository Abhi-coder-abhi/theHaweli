import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../css/reviews.css"

export default function Reviews(props) {
  return (
    <div  >
      <div className='review-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>OUR CUSTOMER REVIEWS</span></div>
      <Card className='review-page-card' style={{ backgroundColor: "lightyellow"}}>
        <CardContent className="review-page-card-container">
          <h2 className="review-page-card-header" >👤 Jayant Singh </h2>
          <p className="review-page-card-body">"It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."</p>
        </CardContent>
      </Card>
      <Card className='review-page-card' style={{ backgroundColor: "lightyellow"}}>
        <CardContent className="review-page-card-container">
          <h2 className="review-page-card-header">👤 Jayant Singh </h2>
          <p className="review-page-card-body">"It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."</p>
        </CardContent>

      </Card>
      <Card className='review-page-card' style={{ backgroundColor: "lightyellow"}}>
        <CardContent className="review-page-card-container">
          <h2 className="review-page-card-header">👤 Jayant Singh </h2>
          <p className="review-page-card-body">"It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."</p>
        </CardContent>

      </Card>
      <Card className='review-page-card' style={{ backgroundColor: "lightyellow"}}>
        <CardContent className="review-page-card-container">
          <h2 className="review-page-card-header">👤Jayant Singh </h2>
          <p className="review-page-card-body">"It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."</p>
        </CardContent>

      </Card>
    </div>
  );
}
