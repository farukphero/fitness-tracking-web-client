import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const BranchMap = () => {
  return (
    <MapContainer
      className="map-container hidden md:block rounded-md w-full mx-auto"
      center={[23.684994, 90.356331]}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[24.363588, 88.624138]}>
        <Popup>Rajshahi </Popup>
      </Marker>
      <Marker position={[23.810331, 90.412521]}>
        <Popup>Dhaka </Popup>
      </Marker>
      <Marker position={[22.30942584120019, 92.05444335937501]}>
        <Popup>Chattogram </Popup>
      </Marker>
      <Marker position={[22.79643932091949, 89.27490234375001]}>
        <Popup>khulna</Popup>
      </Marker>
    </MapContainer>
  );
};

export default BranchMap;
