import { useState } from 'react';
import { Header } from './components/Header';
import { LocationCard } from './components/LocationCard';
import { Map } from './components/Map';
import { locations } from './data/locations';
import { Location } from './types/location';

function App() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header locations={locations} />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="mb-8">
          <Map locations={locations} onLocationSelect={setSelectedLocation} />
        </div>
        
        {selectedLocation ? (
          <div className="w-full">
            <LocationCard location={selectedLocation} />
          </div>
        ) : (
          <div className="text-center text-gray-600 my-8">
            <p>Click on a map marker to view location details</p>
          </div>
        )}
      </main>
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} My Japan Journey. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
