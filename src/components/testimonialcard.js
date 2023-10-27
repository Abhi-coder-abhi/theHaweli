import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';

export default function TestimonialCard() {
    const starStyle = {
        color: 'gold',
        fontSize:"1vw"
    };
    return (
        <Card style={{ maxWidth: `${250 / 16}vw`, boxShadow: "0 0 22px rgba(0, 0, 0, 0.6)" }}>
            <CardActionArea style={{ cursor: "auto" }}>

                <CardContent style={{ backgroundColor: "lightyellow" }}>
                    <div style={{ fontWeight: 'bold', fontSize: `${18 / 16}vw`, color: "#8A3324" }}>
                        <NetworkWifiIcon />Jayant Singh
                    </div>
                    <div style={{ fontSize: '1vw', marginTop: '5px' }}>
                        "It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."
                    </div>
                    <Chip label={<span style={starStyle}>★★★★</span>} sx={{ width: `${100 / 16}vw`, height: `${20 / 16}vw`, marginTop: `${5/ 16}vw`, backgroundColor: "black" }} style={{ fontSize: `${18 / 16}vw`}} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}