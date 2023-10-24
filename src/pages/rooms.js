import React, { useState } from 'react';
import RoomCard from '../components/roomCard';
import BookingCard from '../components/checkRoomsCard';
import roomimage1 from "../images/rooms/1.jpg"
import roomimage2 from "../images/rooms/2.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Rooms() {
    const [isBookingCardVisible, setCheckRoomCardVisible] = useState(false);

    const handleApplyFiltersClick = () => {
        setCheckRoomCardVisible(!isBookingCardVisible);
    }
    const handleBookingCardClose = () => {
        setCheckRoomCardVisible(false);
    }

    return (
        <div>
            <div style={{ marginTop: '8%', marginBottom: '2.5%', fontSize: "30px", textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B" }}>OUR ROOMS</span></div>
            <div style={{ marginRight: "5%" }}>
                <div
                    onClick={handleApplyFiltersClick}
                    style={{ marginTop: '1.5%', fontSize: "40px",   cursor: "pointer" }}
                >
                <ArrowForwardIcon/>
                </div>
                {isBookingCardVisible && (
                    <div style={{marginLeft:"5%"}}>
                    <BookingCard onClose={handleBookingCardClose} />
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', marginLeft: "5%", marginTop: "5%" }}>
                <RoomCard image={roomimage1} />
                <div style={{ marginLeft: '5%' }}>
                    <RoomCard image={roomimage2} />
                </div>
                <div style={{ marginLeft: '5%' }}>
                    <RoomCard image={roomimage1} />
                </div>
            </div>

        </div>
    );
}