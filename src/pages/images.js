import * as React from 'react';
import Card from '@mui/material/Card';
import image1 from "../images/resort/1.jpeg"
import image2 from "../images/resort/2.jpeg"
import image3 from "../images/resort/3.jpeg"
import image4 from "../images/resort/4.jpeg"
import image5 from "../images/resort/5.jpeg"
import image6 from "../images/resort/6.jpeg"
import image7 from "../images/resort/7.jpeg"
import image8 from "../images/resort/8.jpeg"
import image9 from "../images/resort/9.jpeg"
import image10 from "../images/resort/10.jpeg"
import "../css/images.css"

export default function Images() {

    return (
        <div>
            <div className='image-page-header'><span style={{  borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B" }}>Our Photos</span></div>
           
            <div className='image-page-image-row'>
                <Card className='image-page-card'>
                    <img  src={image1} alt="" />
                    
                </Card>
                <Card className='image-page-card-margin'>
                    <img src={image2} alt="" />
                   
                </Card>
                <Card   className='image-page-card-margin'>
                    <img src={image3} alt="" />
                 
                </Card>
            </div>
            <div className='image-page-image-row'>
            <Card className='image-page-card'>
                    <img src={image4} alt="" />
                    
                </Card>
                <Card  className='image-page-card-margin'>
                    <img src={image5} alt="" />
                   
                </Card>
                <Card  className='image-page-card-margin'>
                    <img  src={image6} alt="" />
                 
                </Card>
            </div>
            <div className='image-page-image-row'>
            <Card className='image-page-card'>
                    <img  src={image7} alt="" />
                    
                </Card>
                <Card  className='image-page-card-margin'>
                    <img  src={image8} alt="" />
                   
                </Card>
                <Card  className='image-page-card-margin'>
                    <img  src={image9} alt="" />
                 
                </Card>
            </div>
            <div className='image-page-image-row'>
            <Card className='image-page-card' style={{marginBottom:"2vw"}}>
                    <img  src={image10} alt="" />
                    
                </Card>
                
            </div>
        </div>
    );
}