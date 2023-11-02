import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../css/faqs.css"

export default function Faqs(props) {
  return (
    <div  >
      <div className='faq-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>FAQS</span></div>
      <Card className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container' >
            <h2 className='faq-page-card-header'>★ What is the check-in time and check-out time?</h2>
            <p className='faq-page-card-body'>Check-in times typically start in the early afternoon, around 12:00 PM, while check-out times are in the morning, often around 11:00 AM. These times may vary from one hotel to another.</p>
            </CardContent>

        </Card>
        <Card className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container' >
            <h2 className='faq-page-card-header'>★ Is early check-in or late check-out possible?</h2>
            <p className='faq-page-card-body'>Early check-in and late check-out may be possible but are subject to availability. It's best to contact the hotel reception in advance to make arrangements.</p>
            </CardContent>

        </Card>
        <Card  className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container'>
            <h2 className='faq-page-card-header'>★ How do I make a reservation?</h2>
            <p className='faq-page-card-body'>You can make a reservation by contacting the hotel directly, visiting their website, or using a third-party booking platform. Provide your check-in and check-out dates, the number of guests, and any special requests.</p>
            </CardContent>

        </Card>
        <Card className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container'>
            <h2 className='faq-page-card-header'>★ Is Wi-Fi available, and is it free?</h2>
            <p className='faq-page-card-body'>Yes we provide free wifi with best internet.</p>
            </CardContent>

        </Card>
    </div>
  );
}
