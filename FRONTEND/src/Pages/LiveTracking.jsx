import React, { useEffect, useState } from "react";
import markericon from "../assets/markericon.png";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue in Leaflet

const customMarkerIcon = L.icon({
  iconUrl: markericon,
  iconSize: [70, 90], // Size of the icon
  iconAnchor: [20, 65], // Point of the icon which corresponds to the marker's location
  popupAnchor: [0, -65], // Point from which the popup should open relative to the iconAnchor
});

const LiveTracking = () => {
  const RecenterMap = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(position, map.getZoom());
    }, [position, map]);
    return null;
  };

  const [position, setPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    const updatePosition = () => {
        console.log("interval")
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (location) => {
            const { latitude, longitude } = location.coords;
            setPosition([latitude, longitude]); // Update the position state
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
    updatePosition();
    const intervalLat = setInterval(updatePosition,1000);
    
    return ()=>clearInterval(intervalLat)
  }, []);

  return (
    <div className="h-[500px] w-full z-10 rounded-xl shadow ">
      <MapContainer
        center={position}
        zoom={9}
        scrollWheelZoom={true}
        className="h-full w-full z-10 rounded-xl"
        zoomControl={true}
        dragging={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RecenterMap position={position} />
        <Marker position={position} icon={customMarkerIcon}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LiveTracking;
