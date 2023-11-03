import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import "../css/testimonialCards.css"
import { styled } from '@mui/system';
import result from "../Jsons/descriptions.json"

export default function TestimonialCard(props) {
    console.log(props)
    const CustomChip = styled(Chip)(({ theme }) => ({
        backgroundColor: 'black',
        height: '1.5vw',
        '@media (max-width: 600px)': {
          height: '3vw', 
        }
        // Add more styles as needed
      }));

    return (
        <Card className="testimonial-card" style={{boxShadow:" 0 0 6vw rgba(0, 0, 0, 0.6 )", backgroundColor:"lightyellow"}}>
            <CardActionArea className="testimonial-card-container">

                <CardContent className="custom-card-content">
                    <div className="custom-title">
                        <NetworkWifiIcon />{result[props.number].title}
                    </div>
                    <div className="custom-text">
                    {result[props.number].description}
                    </div>
                    <CustomChip label={<a className="custom-star" href=""> ★★★★  </a>} />
                </CardContent>

            </CardActionArea>
        </Card>
    );
}