import React, { useState } from 'react';
import RoomCard from '../components/roomCard';
import BookingCard from '../components/checkRoomsCard';
import roomimage1 from "../images/rooms/1.jpg"
import roomimage2 from "../images/rooms/2.jpg"

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
            <div style={{ marginTop: '120px', marginBottom: '50px', fontSize: "30px", textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid black", display: 'inline-block' }}>OUR ROOMS</span></div>
            <div style={{ marginLeft: "100px", marginRight: "100px" }}>
                <button
                    onClick={handleApplyFiltersClick}
                    style={{ marginTop: '30px', fontSize: "20px", borderRadius: "5px", backgroundColor: "white", cursor: "pointer" }}
                >
                    Apply Filters
                </button>
                {isBookingCardVisible && (
                    <BookingCard onClose={handleBookingCardClose} />
                )}
            </div>
            <div style={{ display: 'flex', marginLeft: "100px", marginTop: "100px" }}>
                <RoomCard image={roomimage1} />
                <div style={{ marginLeft: '100px' }}>
                    <RoomCard image={roomimage2} />
                </div>
                <div style={{ marginLeft: '100px' }}>
                    <RoomCard image={roomimage1} />
                </div>
            </div>

        </div>
    );
}