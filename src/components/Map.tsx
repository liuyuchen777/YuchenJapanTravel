import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '../types/location';
import { LocationPreview } from './LocationPreview';

interface MapProps {
  locations: Location[];
  onLocationSelect: (location: Location) => void;
}

export const Map: React.FC<MapProps> = ({ locations, onLocationSelect }) => {
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer
      center={[36.2048, 138.2529]} // Center of Japan
      zoom={5}
      className="w-full h-[500px] rounded-lg shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coordinates}
          icon={customIcon}
          eventHandlers={{
            click: () => onLocationSelect(location)
          }}
        >
          <Popup>
            <LocationPreview location={location} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
