import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../css/faqs.css"

export default function Cleanliness(props) {
  return (
    <div  >
      <div className='faq-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>Securities</span></div>
      <Card className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container' >
            <h2 className='faq-page-card-header'>★ Daily Housekeeping</h2>
            <p className='faq-page-card-body'>Our dedicated housekeeping team ensures that your guest room is cleaned and sanitized daily to provide you with a fresh and inviting space.</p>
            </CardContent>

        </Card>
        <Card className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container' >
            <h2 className='faq-page-card-header'>★ Bed Linen and Towels</h2>
            <p className='faq-page-card-body'>We take pride in changing and laundering bed linens and towels regularly to offer you hygienic and comfortable accommodations.</p>
            </CardContent>

        </Card>
        <Card  className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container'>
            <h2 className='faq-page-card-header'>★ Bathroom Cleaning</h2>
            <p className='faq-page-card-body'>Our rigorous cleaning regimen includes thorough sanitation of all bathroom fixtures, including sinks, showers, toilets, and mirrors.</p>
            </CardContent>

        </Card>
        <Card className='faq-page-card' style={{backgroundColor:"lightyellow"}}>
            <CardContent className='faq-page-card-container'>
            <h2 className='faq-page-card-header'>★ Surface Disinfection</h2>
            <p className='faq-page-card-body'>High-touch surfaces, such as doorknobs, light switches, and remote controls, are disinfected regularly to maintain a clean and safe environment.</p>
            </CardContent>

        </Card>
    </div>
  );
}
