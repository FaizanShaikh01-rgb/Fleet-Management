"use client";
import { useMemo, useEffect, useRef } from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Remove default icon for all markers
// L.Marker.prototype.options.icon = L.divIcon({ className: '' });

const FlyToLocation = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(position, 16);
  }, [position, map]);

  return null;
};

const FleetMap = ({ carIndex, viewState, geojson }) => {
  const center = [viewState.latitude, viewState.longitude];

  // Set the default icon only once on mount (client-side)
  useEffect(() => {
    L.Marker.prototype.options.icon = L.divIcon({ className: '' });
  }, []);

  return (
    <div
      className="is-full bs-full"
      style={{ height: "100%", width: "100%" }}
    >
      <MapContainer
        center={center}
        zoom={12.5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToLocation position={center} />
        {geojson.features.map((item, index) => (
          <Marker
            key={index}
            position={[item.geometry.latitude, item.geometry.longitude]}
            icon={L.divIcon({
              className: '',
              html: `<img src='/images/apps/logistics/fleet-car.png' height='42' width='20' style='${index === carIndex ? "filter: drop-shadow(0 0 7px var(--mui-palette-primary-main));" : ''}' />`,
              iconSize: [20, 42],
              iconAnchor: [10, 42],
            })}
          >
            <Popup>
              Vehicle {index + 1}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default FleetMap;
