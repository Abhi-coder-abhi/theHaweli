import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';

export default function Rooms() {

    return (
        <Card style={{ maxWidth: "250px", marginBottom: "212px", marginTop: "70px" }}>
            <CardActionArea>

                <CardContent>
                    <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                        <NetworkWifiIcon />Jayant Singh
                    </div>
                    <div style={{ fontSize: '16px', marginTop: '5px' }}>
                        "It was really awesome management and decoration.we are really much happy and too much enjoying in my function..."
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}