import React, { useState } from 'react';
import BookingCard from '../components/bookingCard';
import roomimage1 from "../images/rooms/1.jpg"
import roomimage2 from "../images/rooms/2.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RoomCard from '../components/roomCards';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'
import "../css/rooms.css"

export default function Rooms() {


    return (
        <div style={{ overflowX: "hidden" }}>
            <div className='room-page-header'>
                <span >OUR ROOMS</span></div>

            <div className='room-page-booking-card'>
                <BookingCard />
            </div>


            <div className='room-page-body'>
                <div className="room-container">
                    <div className="room-page-card-area">
                        <CardActionArea style={{ cursor: "auto" }}>
                            <img className="room-page-card-image" src={roomimage1} alt="" />
                        </CardActionArea>
                        <div className="room-page-room-card"><RoomCard /></div>
                    </div>
                    <div className="room-page-card-area room-page-section-spacing">
                        <div className="room-page-room-card"><RoomCard /></div>
                        <CardActionArea style={{ cursor: "auto" }}>
                            <img className="room-page-card-image" src={roomimage2} alt="" />
                        </CardActionArea>
                    </div>
                    <div className="room-page-card-area room-page-section-spacing">
                        <CardActionArea style={{ cursor: "auto" }}>
                            <img className="room-page-card-image" src={roomimage1} alt="" />
                        </CardActionArea>
                        <div className="room-page-room-card"><RoomCard /></div>
                    </div>
                </div>

            </div>


        </div>
    );
}