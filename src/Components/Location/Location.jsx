import React from 'react';
import Map from '../Map/Map';
import './Location.css';

function Location() {
  return (
    <div className="location-section">
      <h1>Location</h1>
      <div className="map-section">
        <div className="map-info">
          <h2>A rich history</h2>
          <div>
            <p>test</p>
          </div>
        </div>
        <Map isMarkerShown />
      </div>
    </div>
  );
}

export default Location;
