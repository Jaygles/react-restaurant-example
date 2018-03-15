import React from 'react';
import Map from '../Map/Map';
import './Location.css';

function Location() {
  return (
    <div className="location-section">
      <h1 className="location-heading">Location</h1>
      <div className="map-section">
        <div className="map-info">
          <h2 className="map-info-heading">A rich history</h2>
          <div className="map-desc">
            <p className="map-desc-p">
              Our founder Alphonso Carroway IV set our store up in the middle of the Bob Billings
              and Kasold intersection. He stubbornly stood his ground when those who loved him
              pleaded he not try to bake and sell cakes in the middle of a busy intersection.
              Thankfully no one could get through his thick skull. You can still find us planted in
              the middle of Kasold and Bob Billings after all these years.
            </p>
            <br />
            <p className="map-desc-p">
              Through thick and thin we are proud to be a part of this city's rich culture and
              history. We hope to provide cakes to the generations to come.
            </p>
          </div>
        </div>
        <Map isMarkerShown />
      </div>
    </div>
  );
}

export default Location;
