import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'

export default function RoomCard(props) {
    console.log(props.image)
    const starStyle = {
        color: 'gold',
      };
    return (
        <Card style={{ minWidth: "350px" }}>
            <CardActionArea style={{cursor:"auto"}}>
            <img style={{width:"350px"}} src={props.image} alt="My Image" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Simple Room Name
                    </Typography>
                    <div style={{ fontSize: "16px" }}>
                        &#8377;200 per night
                    </div>
                    <div style={{ fontSize: "16px", marginTop: "20px", fontWeight: 'bold' }}>
                        Features
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginTop: "5px", fontWeight: 'bold' }}>
                            <Chip label="2 Rooms" sx={{ width: '70px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                        <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                            <Chip label="1 Bathroom" sx={{ width: '80px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                        <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                            <Chip label="1 Balcony" sx={{ width: '80px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                        <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                            <Chip label="3 Sofa" sx={{ width: '70px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                    </div>
                    <div style={{ fontSize: "16px", marginTop: "20px", fontWeight: 'bold' }}>
                        Facilities
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginTop: "5px", fontWeight: 'bold' }}>
                            <Chip label="Wifi" sx={{ width: '70px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                        <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                            <Chip label="Television" sx={{ width: '80px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                        <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                            <Chip label="AC" sx={{ width: '50px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                        <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '5px' }}>
                            <Chip label="Room Heater" sx={{ width: '90px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                    </div>
                    <div style={{ fontSize: "16px", marginTop: "20px", fontWeight: 'bold' }}>
                        Guests
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginTop: "5px", fontWeight: 'bold' }}>
                            <Chip label="5 Adult" sx={{ width: '70px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                        <div style={{ marginTop: "5px", fontWeight: 'bold', marginLeft: '10px' }}>
                            <Chip label="4 Children" sx={{ width: '80px', height: '20px' }} style={{ fontSize: '10px' }} />
                        </div>
                    </div>
                    <div style={{ fontSize: "16px", marginTop: "20px", fontWeight: 'bold' }}>
                        Rating
                    </div>
                    <div style={{ marginTop: "5px", }}>
                        <Chip label={<span style={starStyle}>★★★★</span>} sx={{ width: '75px', height: '20px' }} style={{ fontSize: '15px' }} />
                    </div>
                    <div>
                        <button sx={{ width: '70px', height: '25px' }} style={{ fontSize: '16px', marginTop: "7px", marginLeft: '180px',padding: '10px',backgroundColor:'white',cursor:'pointer',border: '1px solid black', }}>More Details</button>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}