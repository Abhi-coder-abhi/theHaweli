import * as React from 'react';
import Director from "../images/title/director.jpeg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import image1 from "../images/about/hotel.png"
import image2 from "../images/about/customer.png"
import image3 from "../images/about/rating.png"
import image4 from "../images/about/staff.png"
import "../css/about.css"

export default function About() {

    return (
        <div>
            <div className="about-page-director-heading">
                <span>About Director</span>
            </div>

            <div className="about-page-director-description">
                Mr. Swarnjeet Singh is the man behind the mission of making the haweli resort as a one-stop solution for travelers and visitors
            </div>

            <div className="about-page-story-section">
                <div>
                    <div className="about-page-story-heading">Story Of Haweli Resort</div>
                    <div className="about-page-story-coming-soon">Coming Soon...</div>
                </div>
                <img className="about-page-story-image" src={Director} alt="" />
            </div>
            <div className="about-page-card-container">
                <div className="about-page-card">
                    <Card className="about-page-card-content">
                        <CardActionArea>
                            <img src={image1} alt="" className="about-page-card-image" />
                            <CardContent className="about-page-card-text">100 + Rooms</CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="about-page-card">
                    <Card className="about-page-card-content">
                        <CardActionArea>
                            <img src={image2} alt="" className="about-page-card-image" />
                            <CardContent className="about-page-card-text">200+ CUSTOMERS</CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="about-page-card">
                    <Card className="about-page-card-content">
                        <CardActionArea>
                            <img src={image3} alt="" className="about-page-card-image" />
                            <CardContent className="about-page-card-text">150+ REVIEWS</CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="about-page-card">
                    <Card className="about-page-card-content">
                        <CardActionArea>
                            <img src={image4} alt="" className="about-page-card-image" />
                            <CardContent className="about-page-card-text">200+ STAFFS</CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>

            <div style={{ marginTop: '8%', marginBottom: '4vh', fontSize: `${30 / 16}vw`, textAlign: 'center', fontWeight: "bold" }}><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}>Management Team</span></div>
        </div>
    );
} 