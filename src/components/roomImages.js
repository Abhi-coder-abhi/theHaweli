import React, { useState, useEffect ,useRef} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import roomimage1 from '../images/rooms/1.jpg';
import roomimage2 from '../images/rooms/2.jpg';

export default function RoomImages() {
    const starStyle = {
        color: 'gold',
    };
    
    const [currentImage, setCurrentImage] = useState(roomimage1);
    const images = [roomimage1, roomimage2];
    const imageIndex = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            imageIndex.current = (imageIndex.current + 1) % images.length;
            setCurrentImage(images[imageIndex.current]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Card style={{ width: '40vw', height: '44vw', backgroundColor: 'lightyellow',  }}>
            <img style={{ width: '100%', height: '100%' }} src={currentImage} alt="Room Image" />
        </Card>
    );
}
