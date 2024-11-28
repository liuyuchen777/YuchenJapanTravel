import React from 'react';
import { Calendar, MapPin, Star, Clock, Train, Lightbulb, Navigation, Tag } from 'lucide-react';
import { Location } from '../types/location';

interface LocationCardProps {
  location: Location;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <img 
        src={location.imageUrl} 
        alt={location.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
            <div className="flex items-center mt-2">
              <MapPin className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-600">{location.prefecture}</span>
            </div>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {location.category}
          </span>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-600">{location.visitDate}</span>
            </div>
            {renderRating(location.rating)}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-700 leading-relaxed">{location.description}</p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Clock className="w-4 h-4 text-gray-500 mr-2" />
              <h4 className="font-semibold text-gray-900">Best Time to Visit</h4>
            </div>
            <p className="text-gray-600 ml-6">{location.bestTimeToVisit}</p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Train className="w-4 h-4 text-gray-500 mr-2" />
              <h4 className="font-semibold text-gray-900">Access</h4>
            </div>
            <p className="text-gray-600 ml-6">{location.transportAccess}</p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Lightbulb className="w-4 h-4 text-gray-500 mr-2" />
              <h4 className="font-semibold text-gray-900">Travel Tips</h4>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-6">
              {location.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Navigation className="w-4 h-4 text-gray-500 mr-2" />
              <h4 className="font-semibold text-gray-900">Nearby Attractions</h4>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-6">
              {location.nearbyAttractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Tag className="w-4 h-4 text-gray-500 mr-2" />
              <h4 className="font-semibold text-gray-900">Highlights</h4>
            </div>
            <div className="flex flex-wrap gap-2 ml-6">
              {location.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
