import React, { useState } from 'react';
import BookingCard from '../components/bookingCard';
import roomimage1 from "../images/rooms/1.jpg"
import roomimage2 from "../images/rooms/2.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RoomCard from '../components/roomCards';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'


export default function Rooms() {


    return (
        <div style={{ overflowX: "hidden" }}>
            <div style={{ marginTop: '6vw', marginBottom: '2.5%', fontSize: `${30 / 16}vw`, textAlign: 'center', fontWeight: "bold" }}>
                <span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>OUR ROOMS</span></div>



            <div style={{ marginRight: "15vw" }}>
                <BookingCard />
            </div>


            <div style={{ marginTop: "5vw", marginLeft: "5vw" }}>
                <div style={{ display: "flex" }}>
                    <CardActionArea style={{ cursor: "auto" }}>
                        <img style={{ width: "60vw", height: "41vw",  }} src={roomimage1} alt="" />

                    </CardActionArea>
                    <div style={{ marginTop: "1vw", marginRight: "6vw" }}><RoomCard /></div>
                </div>
                <div style={{ display: "flex" }}>
                <div style={{marginTop:"6vw"  }}><RoomCard /></div>
                    <div style={{ marginTop: '5vw' }}>
                        <CardActionArea style={{ cursor: "auto", marginLeft: "2.7vw" }}>
                            <img style={{ width: "60vw", height: "41vw", }} src={roomimage2} alt="" />

                        </CardActionArea>
                    </div>
                   
                </div>
                <div style={{ display: "flex" }}>
                <div style={{ marginTop: '5vw' }}>
                    <CardActionArea style={{ cursor: "auto" }}>
                        <img style={{ width: "60vw", height: "41vw",}} src={roomimage1} alt="" />

                    </CardActionArea>
                </div>
                <div style={{ marginTop: "6vw", marginRight: "6vw" }}><RoomCard /></div>
                </div>
            </div>


        </div>
    );
}