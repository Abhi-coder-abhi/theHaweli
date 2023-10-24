import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'

export default function FacilityCard(props) {
    
    return (
        <Card style={{ width: "35vh",cursor: 'auto' ,borderTop: '5px solid red'}}>
            <CardActionArea style={{cursor:"auto"}}>
            <img style={{width:"100%",height:"200px"}} src={props.image} alt="My Image" />
                <CardContent>
                    <div style={{fontWeight:'bold', textAlign: 'center',fontSize:'16px',color:"#8A3324"}}>
{props.header}
                    </div>
                    <div style={{ textAlign: 'center',fontSize:'14px',marginTop:'5px'}}>
{props.content}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}