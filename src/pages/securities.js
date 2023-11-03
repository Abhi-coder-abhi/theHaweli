import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../css/faqs.css"

export default function Securities(props) {
  return (
    <div  >
      <div className='faq-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>Securities</span></div>
      <Card className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container' >
            <h2 className='faq-page-card-header'>★ 24/7 Security Personnel</h2>
            <p className='faq-page-card-body'>We maintain a dedicated team of security personnel who are available round the clock to address security concerns and ensure your safety.</p>
            </CardContent>

        </Card>
        <Card className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container' >
            <h2 className='faq-page-card-header'>★ CCTV Surveillance</h2>
            <p className='faq-page-card-body'>Our premises are equipped with state-of-the-art CCTV surveillance to monitor public areas, entrances, hallways, and parking lots, providing a safe environment for our guests.</p>
            </CardContent>

        </Card>
        <Card  className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container'>
            <h2 className='faq-page-card-header'>★ Secure Parking</h2>
            <p className='faq-page-card-body'>Rest assured that our parking facilities are well-lit, monitored, and secure, allowing you to park your vehicle with peace of mind.</p>
            </CardContent>

        </Card>
        <Card className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container'>
            <h2 className='faq-page-card-header'>★ Fire Safety</h2>
            <p className='faq-page-card-body'>Our commitment to safety includes fire safety measures like smoke detectors, sprinklers, and fire extinguishers in guest rooms and common areas.</p>
            </CardContent>

        </Card>
    </div>
  );
}
