import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Location } from '../types/location';

interface LocationPreviewProps {
  location: Location;
}

export const LocationPreview: React.FC<LocationPreviewProps> = ({ location }) => {
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-3 h-3 ${
              index < rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-64">
      <div className="p-3">
        <div className="mb-2">
          <h3 className="font-bold text-gray-900">{location.name}</h3>
          <div className="flex items-center mt-1">
            <MapPin className="w-3 h-3 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{location.prefecture}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {location.category}
          </span>
          {renderRating(location.rating)}
        </div>
      </div>
    </div>
  );
};
