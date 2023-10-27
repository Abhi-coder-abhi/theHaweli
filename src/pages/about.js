import * as React from 'react';
import Director from "../images/title/director.jpeg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import image1 from "../images/about/hotel.png"
import image2 from "../images/about/customer.png"
import image3 from "../images/about/rating.png"
import image4 from "../images/about/staff.png"

export default function About() {
    
    return (
        <div>
            <div style={{ marginTop: '8%', marginBottom: '4vh', fontSize: "1.99vw", textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>About Director</span></div>
            <div style={{ marginTop: '0.1%', fontSize: `${18 / 16}vw`, textAlign: 'center',color:"#990033" }}>Mr. Swarnjeet Singh is the man behind the mission of making the haweli resort as a one stop solution for travellors and visitors</div>
            
            <div style={{ display: "flex" }}>
                <div>
                <div style={{marginTop:"40vh",marginLeft:"10vw",fontSize:`${35 / 16}vw`,fontWeight:"bold"}}>Story Of Haweli Resort</div>
                <div style={{marginTop:"2vh",marginLeft:"10vw",fontSize:`${24 / 16}vw`,fontWeight:"bold"}}>Coming Soon...</div>
                </div>
            <img style={{ marginTop:"12vh",marginLeft:"20vw",width:"40vw"}} src={Director} alt="" /> 
            </div>
            <div style={{display:"flex",marginTop:"5%"}}>
            <div style={{ width: "22vw", marginLeft: "1vw", height: "28vh", boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)", borderTop: "4px solid orange" }}>
  <Card style={{ backgroundColor: "lightyellow", height: "100%", boxShadow: "none",textAlign:"center" }}><CardActionArea >
  <img style={{ width: "7vw", height: "5vw",marginTop:"2.4vw" }} src={image1} alt="" />
    <CardContent style={{marginTop:"",fontSize:`${26 / 16}vw`,fontWeight:"bold"}}>
        100 + Rooms
    </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div style={{ width: "22vw", marginLeft: "3vw", height: "28vh", boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)", borderTop: "4px solid orange" }}>
  <Card style={{ backgroundColor: "lightyellow", height: "100%", boxShadow: "none",textAlign:"center" }}><CardActionArea>
  <img style={{ width: "7vw", height: "5vw",marginTop:"2.4vw" }} src={image2} alt="" />
    <CardContent style={{marginTop:"",fontSize:`${26 / 16}vw`,fontWeight:"bold"}}>
    200+ CUSTOMERS
    </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div style={{ width: "22vw", marginLeft: "3vw", height: "28vh", boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)", borderTop: "4px solid orange" }}>
  <Card style={{ backgroundColor: "lightyellow", height: "100%", boxShadow: "none",textAlign:"center" }}><CardActionArea>
  <img style={{ width: "7vw", height: "5vw",marginTop:"2.4vw" }} src={image3} alt="" />
    <CardContent style={{marginTop:"",fontSize:`${26/ 16}vw`,fontWeight:"bold"}}>
    150+ REVIEWS
    </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div style={{ width: "22vw", marginLeft: "3vw", height: "28vh", boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)", borderTop: "4px solid orange" }}>
  <Card style={{ backgroundColor: "lightyellow", height: "100%", boxShadow: "none",textAlign:"center" }}><CardActionArea>
  <img style={{ width: "7vw", height: "5vw",marginTop:"2.4vw" }} src={image4} alt="" />
    <CardContent style={{marginTop:"",fontSize:`${26 / 16}vw`,fontWeight:"bold"}}>
    200+ STAFFS
    </CardContent>
            </CardActionArea>
        </Card>
        </div>
                 
            </div>
            <div style={{ marginTop: '8%', marginBottom: '4vh', fontSize: `${30/ 16}vw`, textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>Management Team</span></div>
        </div>
    );
} 