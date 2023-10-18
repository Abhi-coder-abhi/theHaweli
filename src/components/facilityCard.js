import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'

export default function FacilityCard(props) {
    
    return (
        <Card style={{ maxWidth: "200px",minWidth:'200px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <div style={{fontWeight:'bold', textAlign: 'center',fontSize:'16px'}}>
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