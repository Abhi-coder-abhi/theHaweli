import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Reviews(props) {
  return (
    <div  >
      <div style={{ marginTop: '8vw', marginBottom: '4vw', fontSize: "1.99vw", textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}>OUR CUSTOMER REVIEWS</span></div>
      <Card sx={{ width: "80vw", marginLeft: "5vw", height: "7vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.5vw",color: "#8A3324"}}>👤 Jayant Singh </h2>
            <p style={{marginTop:"0.5vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>"It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."</p>
            </CardContent>

        </Card>
        <Card sx={{ width: "80vw", marginLeft: "5vw", height: "7vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.5vw",color: "#8A3324"}}>👤 Jayant Singh </h2>
            <p style={{marginTop:"0.5vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>"It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."</p>
            </CardContent>

        </Card>
        <Card sx={{ width: "80vw", marginLeft: "5vw", height: "7vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.5vw",color: "#8A3324"}}>👤 Jayant Singh </h2>
            <p style={{marginTop:"0.5vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>"It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."</p>
            </CardContent>

        </Card>
        <Card sx={{ width: "80vw", marginLeft: "5vw", height: "7vw" }} style={{ borderRadius: `${15 / 16}vw`, backgroundColor: "lightyellow" , boxShadow: "0 0 1.4vw rgba(0, 0, 0, 0.6)", marginBottom: '4vw'}}>
            <CardContent style={{marginLeft:"1vw",marginRight:"2vw"}}>
            <h2 style={{fontSize:"1.5vw",color: "#8A3324"}}>👤Jayant Singh </h2>
            <p style={{marginTop:"0.8vw",marginLeft:"2vw",fontSize:"1.2vw",color:"#333366"}}>"It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."</p>
            </CardContent>

        </Card>
    </div>
  );
}
