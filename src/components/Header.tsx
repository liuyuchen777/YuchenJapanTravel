import React from 'react';
import { Map, MapPin } from 'lucide-react';
import { Location } from '../types/location';

interface HeaderProps {
  locations: Location[];
}

export const Header: React.FC<HeaderProps> = ({ locations }) => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-2 rounded-lg">
              <Map className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Japan Journey</h1>
              <p className="text-sm text-gray-600 mt-1">
                <span className="inline-flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Exploring Japan's treasures
                </span>
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="bg-gray-50 px-4 py-2 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">{locations.length} locations</span>
                <span className="mx-2">•</span>
                <span>Updated {new Date().toLocaleDateString()}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};