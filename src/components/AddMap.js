import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  useMapEvent,
} from "react-leaflet";
import getLocation from "../helpers/location";
import {setClickedLocation, setNull} from '../actions/clicked'
import { setLocation, } from "../actions/location";
import { useSelector, useDispatch } from "react-redux";

function MapControl({ center, zoom }) {
    const dispatch = useDispatch();
    const map = useMapEvent('click',e=>{
        dispatch(setClickedLocation({lat:e.latlng.lat, lon:e.latlng.lng}))    
    })
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom]);

  useEffect(()=>{
    return dispatch(setNull())
  },[])

  return null;
}

export default function AddMap() {
  const location = useSelector((store) => store.location);
  const clicked = useSelector((store) => store.clicked);
  const [zoom, setZoom] = useState(2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!location.hasLocation) {
      getLocation().then((pos) => {
        dispatch(setLocation(pos));
      });
    }
    if (location.hasLocation) {
      setZoom(13);
    }
  }, [location]);

  return (
    <MapContainer
      center={location.location}
      zoom={zoom}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {clicked.hasLocation && (
        <Marker position={[clicked.lat, clicked.lon]}>
          <Popup>Your Clicked Location</Popup>
        </Marker>
      )}

      <MapControl center={location.location} zoom={zoom} />
    </MapContainer>
  );
}
