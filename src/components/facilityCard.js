import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'

export default function FacilityCard(props) {
    
    return (
        <Card style={{ width: "18vw",cursor: 'auto' ,borderTop: `${5 / 16}vw solid red`,boxShadow: "0 0 ${25 / 16}vw solid red rgba(0, 0, 0, 0.6)"}}>
            <CardActionArea style={{cursor:"auto"}}>
            <img style={{width:"18vw",height:`${200/ 16}vw`}} src={props.image} alt="My Image" />
                <CardContent>
                    <div style={{fontWeight:'bold', textAlign: 'center',fontSize:'1vw',color:"#8A3324"}}>
{props.header}
                    </div>
                    <div style={{ textAlign: 'center',fontSize:`${14/ 16}vw`,marginTop:`${5 / 16}vw`}}>
{props.content}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}