
import { Property } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'azure-heights',
    name: 'Azure Heights',
    location: 'Amalfi Coast, Italy',
    description: 'A masterpiece of contemporary architecture suspended between the sky and the Mediterranean Sea.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000',
    price: '$12,500,000',
    specs: { beds: 5, baths: 6, sqft: 7500 },
    gallery: [
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'the-monolith',
    name: 'The Monolith',
    location: 'Engadin Valley, Switzerland',
    description: 'An architectural tribute to the surrounding alpine peaks, crafted from local stone and reclaimed oak.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000',
    price: '$18,200,000',
    specs: { beds: 4, baths: 4, sqft: 5200 },
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'casa-luna',
    name: 'Casa Luna',
    location: 'Joshua Tree, California',
    description: 'Where desert brutalism meets ultimate luxury. A sanctuary of silence under the infinite stars.',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=2000',
    price: '$8,900,000',
    specs: { beds: 3, baths: 3, sqft: 4100 },
    gallery: [
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];
