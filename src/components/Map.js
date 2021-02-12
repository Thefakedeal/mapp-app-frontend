import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap,Popup } from "react-leaflet";
import getLocation from "../helpers/location";

function MapControl({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom]);
  return null;
}

export default function Map({places=[]}) {
  const [position, setPosition] = useState([26.8065, 87.2846]);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    getLocation().then((pos) => {
      setPosition(pos);
      setZoom(13);
    });
  }, []);
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Your Location</Popup>
      </Marker>
      {
          places.map(place=>(
           <Marker position={[place.lat,place.lon]} key={place._id}>
               <Popup>
                   {place.name}
               </Popup>
           </Marker>   
          ))
      }
      <MapControl center={position} zoom={zoom} />
    </MapContainer>
  );
}
