import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../css/reviews.css"
import result from "../Jsons/descriptions.json"

export default function Reviews(props) {
  return (
    <div  >
      <div className='review-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>OUR CUSTOMER REVIEWS</span></div>
      <Card className='review-page-card' style={{ backgroundColor: "lightyellow"}}>
        <CardContent className="review-page-card-container">
          <h2 className="review-page-card-header" >👤 {result[0].title} </h2>
          <p className="review-page-card-body">{result[0].description}</p>
        </CardContent>
      </Card>
      <Card className='review-page-card' style={{ backgroundColor: "lightyellow"}}>
        <CardContent className="review-page-card-container">
          <h2 className="review-page-card-header">👤 {result[1].title}</h2>
          <p className="review-page-card-body">{result[1].description}</p>
        </CardContent>

      </Card>
      <Card className='review-page-card' style={{ backgroundColor: "lightyellow"}}>
        <CardContent className="review-page-card-container">
          <h2 className="review-page-card-header">👤 {result[2].title}</h2>
          <p className="review-page-card-body">{result[2].description}</p>
        </CardContent>

      </Card>
      <Card className='review-page-card' style={{ backgroundColor: "lightyellow"}}>
        <CardContent className="review-page-card-container">
          <h2 className="review-page-card-header">👤{result[3].title}</h2>
          <p className="review-page-card-body">{result[3].description}</p>
        </CardContent>

      </Card>
    </div>
  );
}
