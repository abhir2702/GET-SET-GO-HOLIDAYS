
export interface Tour {
  id: string;
  name: string;
  pricing: {
    with_flight?: string;
    land_only?: string;
  };
  duration: string;
  itinerary: string[];
  image: string;
  location: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  category: 'india' | 'international';
}
