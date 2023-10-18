import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';

export default function Facilities() {
    
    return (
        <Card style={{ maxWidth: "250px" }}>
            <CardActionArea>
    
                <CardContent>
                    <div style={{fontWeight:'bold',fontSize:'18px'}}>
<NetworkWifiIcon/>Jayant Singh
                    </div>
                    <div style={{fontSize:'16px',marginTop:'5px'}}>
"It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}