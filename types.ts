
export interface Property {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  price: string;
  specs: {
    beds: number;
    baths: number;
    sqft: number;
  };
  gallery: string[];
}

export type Theme = 'light' | 'dark';
