import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBgeANVbyfV6MnQ1Eksb7AcCyLy4afKQjA&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div className="map-loading">Loading...</div>,
    containerElement: <div style={{ width: '100%', height: '40vw' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    className="gmap"
    defaultZoom={16}
    defaultCenter={{ lat: 38.9569119, lng: -95.2790558 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 38.9569119, lng: -95.2790558 }} />}
  </GoogleMap>
));

export default Map;
