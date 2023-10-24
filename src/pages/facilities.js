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

export default function Facilities() {

    return (
        <div>
            <div style={{ marginTop: '120px', fontSize: "30px", textAlign: 'center', fontWeight: "bold", }}><span style={{  borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B" }}>OUR FACILITIES</span></div>
            <div style={{ marginTop: '15px', fontSize: "18px", textAlign: 'center',color:"#990033" }}>We do not give you just rooms to stay. We give you an environment so you can experience the best</div>
            <div style={{ marginTop: '3px', marginBottom: '50px', fontSize: "18px", textAlign: 'center',color:"#990033" }}>while on a holiday with us. Walk into our resort and enjoy a refreshing, rejuvenating, day-off with us.</div>
            <div style={{ display: "flex", marginTop: '80px', marginLeft: '20px'}}>
                <Card style={{ width: '410px', height: "180px", borderRadius: "10px", padding: "20px",borderTop:"5px solid #F0E68C" }}>
                    <img style={{ width: "100px", height: "90px" }} src={image1} alt="" />
                    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px",color:"#8A3324" }}>An Infinite-edge Pool</div>
                    <div style={{ fontSize: "16px", marginTop: "10px",color:"#333366"  }}>Experience the joy of swimming in our infinity-edge pool that gives you a nice picturesque view.</div>
                </Card>
                <Card style={{ width: '410px', marginLeft: '40px', height: "180px", borderRadius: "10px", padding: "20px",borderTop:"5px solid #F0E68C" }}>
                    <img style={{ width: "100px", height: "90px" }} src={image2} alt="" />
                    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px",color:"#8A3324" }}>An Iconic Spa</div>
                    <div style={{ fontSize: "16px", marginTop: "10px",color:"#333366"  }}>Set forth on an exquisite wellness journey to refresh, re-energize and rejuvenate at our iconic spa.</div>
                </Card>
                <Card style={{ width: '410px', marginLeft: '40px', height: "180px", borderRadius: "10px", padding: "20px",borderTop:"5px solid #F0E68C" }}>
                    <img style={{ width: "100px", height: "90px" }} src={image3} alt="" />
                    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px",color:"#8A3324" }}>Luxurious Rooms</div>
                    <div style={{ fontSize: "16px", marginTop: "10px",color:"#333366"  }}>We have three in-house restaurants offering different cuisines that you can choose from.

                    </div>
                </Card>
            </div>
            <div style={{ display: "flex", marginTop: '40px', marginLeft: '20px' }}>
                <Card style={{ width: '410px', height: "180px", borderRadius: "10px", padding: "20px",borderTop:"5px solid #F0E68C" }}>
                    <img style={{ width: "100px", height: "90px" }} src={image4} alt="" />
                    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px",color:"#8A3324" }}>Deep Soaking Bath-tub</div>
                    <div style={{ fontSize: "16px", marginTop: "10px",color:"#333366"  }}>Take a dip into these special bath-tubs to soak into a refreshing vacation mode that you have wanted.</div>

                </Card>
                <Card style={{ width: '410px', marginLeft: '40px', height: "180px", borderRadius: "10px", padding: "20px",borderTop:"5px solid #F0E68C"}}>
                    <img style={{ width: "100px", height: "90px" }} src={image5} alt="" />
                    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px",color:"#8A3324" }}>Guest Computer & WiFi</div>
                    <div style={{ fontSize: "16px", marginTop: "10px",color:"#333366"  }}>We offer special computers and WiFi for guests who did like to stay connected while on vacation</div>
                </Card>
                <Card style={{ width: '410px', marginLeft: '40px', height: "180px", borderRadius: "10px", padding: "20px",borderTop:"5px solid #F0E68C" }}>
                    <img style={{ width: "100px", height: "90px" }} src={image6} alt="" />
                    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px",color:"#8A3324" }}>24 Hour Concierge</div>
                    <div style={{ fontSize: "16px", marginTop: "10px",color:"#333366"  }}>We have three in-house restaurants offering different cuisines that you can choose from.</div>
                </Card>
            </div>
            <div style={{ display: "flex", marginTop: '40px', marginLeft: '20px' }}>
                <Card style={{ width: '410px', height: "180px", borderRadius: "10px", padding: "20px",borderTop:"5px solid #F0E68C" }}>
                    <img style={{ width: "100px", height: "90px" }} src={image7} alt="" />
                    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" ,color:"#8A3324"}}>Ocean View Terrace</div>
                    <div style={{ fontSize: "16px", marginTop: "10px",color:"#333366"  }}>Among the scenic beauty of the city we also have an ocean view terrace for every suite in our hotel.</div>

                </Card>
                <Card style={{ width: '410px', marginLeft: '40px', height: "180px", borderRadius: "10px", padding: "20px" ,borderTop:"5px solid #F0E68C"}}>
                    <img style={{ width: "100px", height: "90px" }} src={image8} alt="" />
                    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px",color:"#8A3324" }}>Delicious Food</div>
                    <div style={{ fontSize: "16px", marginTop: "10px",color:"#333366"  }}>We have team chefs from across the world. So you can enjoy the delicacies anytime during your stay</div>
                </Card>
                <Card style={{ width: '410px', marginLeft: '40px', height: "180px", borderRadius: "10px", padding: "20px",borderTop:"5px solid #F0E68C" }}>
                    <img style={{ width: "100px", height: "90px" }} src={image9} alt="" />
                    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px",color:"#8A3324" }}>Private Beach</div>
                    <div style={{ fontSize: "16px", marginTop: "10px",color:"#333366"  }}>Want to take a dip into the sea? All our guests get complimentary access to our private beach.</div>
                </Card>
            </div>
        </div>
    );
}