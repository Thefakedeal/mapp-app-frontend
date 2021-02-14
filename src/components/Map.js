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
import { setLocation, } from "../actions/location";
import { useSelector, useDispatch } from "react-redux";

function MapControl({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom]);

  return null;
}

export default function Map({ places = [] }) {
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
      {clicked.location && (
        <Marker position={clicked.location}>
          <Popup>Your Clicked Location</Popup>
        </Marker>
      )}
      <Marker position={location.location}>
        <Popup>Your Location</Popup>
      </Marker>
      {places.map((place) => (
        <Marker position={[place.lat, place.lon]} key={place._id}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
      <MapControl center={location.location} zoom={zoom} />
    </MapContainer>
  );
}
