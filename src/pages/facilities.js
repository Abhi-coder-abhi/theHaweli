import * as React from 'react';
import Card from '@mui/material/Card';
import image1 from "../images/facilities/6.jpg"
import image2 from "../images/facilities/7.jpg"
import image3 from "../images/facilities/8.jpg"
import image4 from "../images/facilities/9.jpg"
import image5 from "../images/facilities/10.jpg"
import image6 from "../images/facilities/11.jpg"
import image7 from "../images/facilities/12.jpg"
import image8 from "../images/facilities/13.jpg"
import image9 from "../images/facilities/14.jpg"
import "../css/facilities.css"

export default function Facilities() {

    return (
        <div>
            <div className='facility-page-header'><span >OUR FACILITIES</span></div>
            <div className='facility-page-description'>We do not give you just rooms to stay. We give you an environment so you can experience the best</div>
            <div className='facility-page-description2'>while on a holiday with us. Walk into our resort and enjoy a refreshing, rejuvenating, day-off with us.</div>
            <div className='facility-page-facility-row'>
                <Card className="facility-page-card">
                    <img src={image1} alt="" />
                    <div className="facility-page-card-title">An Infinite-edge Pool</div>
                    <div className="facility-page-card-description">
                        Experience the joy of swimming in our infinity-edge pool that gives you a nice picturesque view.
                    </div>
                </Card>

                <Card className="facility-page-card-margin">
                    <img src={image2} alt="" />
                    <div className="facility-page-card-title">An Iconic Spa</div>
                    <div className="facility-page-card-description">
                        Set forth on an exquisite wellness journey to refresh, re-energize, and rejuvenate at our iconic spa.
                    </div>
                </Card>
                <Card className="facility-page-card-margin">
                    <img src={image3} alt="" />
                    <div className="facility-page-card-title">Luxurious Rooms</div>
                    <div className="facility-page-card-description">
                        We have three in-house restaurants offering different cuisines that you can choose from.

                    </div>
                </Card>
            </div>
            <div className='facility-page-facility-row'>
                <Card className="facility-page-card">
                    <img src={image4} alt="" />
                    <div className="facility-page-card-title">Deep Soaking Bath-tub</div>
                    <div className="facility-page-card-description">
                        Take a dip into these special bath-tubs to soak into a refreshing vacation mode that you have wanted.</div>
                </Card>
                <Card className="facility-page-card-margin">
                    <img src={image5} alt="" />
                    <div className="facility-page-card-title">Guest Computer & WiFi</div>
                    <div className="facility-page-card-description">
                        We offer special computers and WiFi for guests who did like to stay connected while on vacation</div>
                </Card>
                <Card className="facility-page-card-margin">
                    <img src={image6} alt="" />
                    <div className="facility-page-card-title">24 Hour Concierge</div>
                    <div className="facility-page-card-description">We have three in-house restaurants offering different cuisines that you can choose from.</div>
                </Card>
            </div>
            <div className='facility-page-facility-row' style={{ marginBottom:"5vw" }}>
            <Card className="facility-page-card">
                    <img src={image7} alt="" />
                    <div className="facility-page-card-title">Ocean View Terrace</div>
                    <div className="facility-page-card-description">Among the scenic beauty of the city we also have an ocean view terrace for every suite in our hotel.</div>

                </Card>
                <Card className="facility-page-card-margin">
                    <img src={image8} alt="" />
                    <div className="facility-page-card-title">Delicious Food</div>
                    <div className="facility-page-card-description">We have team chefs from across the world. So you can enjoy the delicacies anytime during your stay</div>
                </Card>
                <Card className="facility-page-card-margin">
                    <img src={image9} alt="" />
                    <div className="facility-page-card-title">Private Beach</div>
                    <div className="facility-page-card-description">Want to take a dip into the sea? All our guests get complimentary access to our private beach.</div>
                </Card>
            </div>
        </div>
    );
}