export interface Location {
  id: string;
  name: string;
  prefecture: string;
  description: string;
  imageUrl: string;
  visitDate: string;
  highlights: string[];
  coordinates: [number, number];
  rating: number;
  bestTimeToVisit: string;
  transportAccess: string;
  tips: string[];
  nearbyAttractions: string[];
  category: 'shrine' | 'landmark' | 'district' | 'nature' | 'entertainment';
}