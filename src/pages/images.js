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

export default function Images() {

    return (
        <div>
            <div style={{ marginTop: `${120 / 16}vw`, fontSize: `${30 / 16}vw`, textAlign: 'center', fontWeight: "bold", }}><span style={{  borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B" }}>Our Photos</span></div>
           
            <div style={{ display: "flex", marginTop: '10vh', marginLeft: '10vw'}}>
                <Card style={{ width: '20vw', height: "25vh", borderRadius: `${10 / 16}vw`, padding: `${20 / 16}vw`,border:"5px solid #F0E68C" ,boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)"}}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image1} alt="" />
                    
                </Card>
                <Card style={{ width: '20vw', marginLeft: '5vw', height: "25vh", borderRadius: `${10 / 16}vw`, padding: `${20 / 16}vw`,border:"5px solid #F0E68C",boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)" }}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image2} alt="" />
                   
                </Card>
                <Card style={{ width: '20vw', marginLeft: '5vw', height: "25vh", borderRadius: `${10 / 16}vw`, padding: `${20 / 16}vw`,border:"5px solid #F0E68C",boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)" }}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image3} alt="" />
                 
                </Card>
            </div>
            <div style={{ display: "flex", marginTop: '10vh', marginLeft: '10vw' }}>
            <Card style={{ width: '20vw', height: "25vh", borderRadius: `${10 / 16}vw`, padding: `${20 / 16}vw`,border:"5px solid #F0E68C",boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)" }}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image4} alt="" />
                    
                </Card>
                <Card style={{ width: '20vw', marginLeft: '5vw', height: "25vh", borderRadius: `${10 / 16}vw`, padding: `${20 / 16}vw`,border:"5px solid #F0E68C",boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)" }}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image5} alt="" />
                   
                </Card>
                <Card style={{ width: '20vw', marginLeft: '5vw', height: "25vh", borderRadius: `${10 / 16}vw`, padding: `${20 / 16}vw`,border:"5px solid #F0E68C",boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)" }}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image6} alt="" />
                 
                </Card>
            </div>
            <div style={{ display: "flex", marginTop: '10vh', marginLeft: '10vw' }}>
            <Card style={{ width: '20vw', height: "25vh", borderRadius: "10px", padding: `${20 / 16}vw`,border:"5px solid #F0E68C",boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)" }}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image7} alt="" />
                    
                </Card>
                <Card style={{ width: '20vw', marginLeft: '5vw', height: "25vh", borderRadius: `${10 / 16}vw`, padding: `${20 / 16}vw`,border:"5px solid #F0E68C",boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)" }}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image8} alt="" />
                   
                </Card>
                <Card style={{ width: '20vw', marginLeft: '5vw', height: "25vh", borderRadius: `${10 / 16}vw`, padding: `${20 / 16}vw`,border:"5px solid #F0E68C",boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)" }}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image9} alt="" />
                 
                </Card>
            </div>
            <div style={{ display: "flex", marginTop: '10vh', marginLeft: '10vw' }}>
            <Card style={{ width: '20vw', height: "25vh", borderRadius: `${10 / 16}vw`, padding: `${20 / 16}vw`,border:"5px solid #F0E68C",boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)" }}>
                    <img style={{ width: "20vw", height: "25vh" }} src={image10} alt="" />
                    
                </Card>
                
            </div>
        </div>
    );
}