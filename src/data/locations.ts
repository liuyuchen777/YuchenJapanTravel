import { Location } from '../types/location';

export const locations: Location[] = [
  {
    id: '1',
    name: 'Fushimi Inari Shrine',
    prefecture: 'Kyoto',
    description: 'Famous for its thousands of vermillion torii gates, this shrine dedicated to Inari winds up Mount Inari. The full hike to the summit takes 2-3 hours, but you can turn back at any point. The shrine is particularly atmospheric at dusk and dawn.',
    imageUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1200',
    visitDate: '2023-04-15',
    highlights: ['Senbon Torii', 'Mountain hiking trails', 'Fox statues', 'Sacred Mount Inari', 'Traditional food stalls'],
    coordinates: [34.9671, 135.7727],
    rating: 5,
    bestTimeToVisit: 'Early morning or late afternoon to avoid crowds',
    transportAccess: 'JR Inari Station (JR Nara Line) or Fushimi Inari Station (Keihan Main Line)',
    tips: [
      'Arrive early to avoid crowds',
      'Wear comfortable walking shoes',
      'Bring water for the hike',
      'Try the local Inari sushi',
      'Visit the smaller shrines along the path'
    ],
    nearbyAttractions: [
      'Tofuku-ji Temple',
      'Fushimi Sake District',
      'Toji Temple'
    ],
    category: 'shrine'
  },
  {
    id: '2',
    name: 'Shibuya Crossing',
    prefecture: 'Tokyo',
    description: 'The world\'s busiest pedestrian crossing, surrounded by bright lights and giant video screens. Up to 3,000 people cross at a time during peak hours. The area is a hub of Japanese youth culture and fashion.',
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200',
    visitDate: '2023-04-10',
    highlights: ['Scramble crossing', 'Hachiko statue', 'Shopping district', 'Giant video screens', 'People watching'],
    coordinates: [35.6595, 139.7004],
    rating: 4.5,
    bestTimeToVisit: 'Evening for the best atmosphere and light display',
    transportAccess: 'Shibuya Station (JR Yamanote Line, Tokyo Metro)',
    tips: [
      'Visit the Starbucks overlooking the crossing',
      'Best photos from the MAGNET by SHIBUYA109 building',
      'Visit during rush hour for maximum impact',
      'Check out the new Shibuya Sky observation deck',
      'Explore the back streets for local food'
    ],
    nearbyAttractions: [
      'Meiji Shrine',
      'Harajuku',
      'Yoyogi Park',
      'Cat Street'
    ],
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Dotonbori',
    prefecture: 'Osaka',
    description: 'A popular tourist destination and food district, famous for its bright neon signs and local delicacies. This vibrant entertainment district is considered the heart of Osaka and is best known for its dazzling night scenes and street food culture.',
    imageUrl: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200',
    visitDate: '2023-04-20',
    highlights: ['Glico Running Man sign', 'Street food', 'Canal cruise', 'Neon lights', 'Giant 3D signage'],
    coordinates: [34.6687, 135.5038],
    rating: 5,
    bestTimeToVisit: 'Evening until late night for the best atmosphere',
    transportAccess: 'Namba Station (Multiple lines) or Nipponbashi Station',
    tips: [
      'Try the famous takoyaki and okonomiyaki',
      'Take a evening canal cruise',
      'Visit both sides of the canal',
      'Look for the 3D crab sign',
      'Book restaurants in advance during peak season'
    ],
    nearbyAttractions: [
      'Kuromon Ichiba Market',
      'Shinsaibashi Shopping Street',
      'Hozenji Temple',
      'Amerika-mura'
    ],
    category: 'district'
  }
];
