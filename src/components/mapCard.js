import * as React from 'react';
import "../css/mapCard.css"

export default function MapCard(props) {
  return (
    <div  className='map-card-homepage-card'>
    <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: '100%' }}>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7245.925749959363!2d84.347083!3d24.762462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cffda9ed112b7%3A0xfbd08bbf8248e7d8!2sTHE%20HAWELI%20%7C%7C%20RESORT%20%26%20RESTAURANT%20%7C%7C!5e0!3m2!1sen!2sus!4v1697624473869!5m2!1sen!2sus"
        frameBorder="0"
        allowFullScreen
        style={{ border: 0, width: "100%", height: "100%", }}
      ></iframe>
    </div>
  </div>
  );
}
