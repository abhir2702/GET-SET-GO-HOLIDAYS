
import { Tour } from "@/types/Tour";
import { indianTours } from "./indianTours";
import { internationalTours } from "./internationalTours";

// Combine all tours
export const tours: Tour[] = [...indianTours, ...internationalTours];

// Helper functions to get subsets of tours
export const getIndianTours = () => indianTours;
export const getInternationalTours = () => internationalTours;

// Get limited number of tours for homepage sections
export const getLimitedIndianTours = (limit = 4) => indianTours.slice(0, limit);
export const getLimitedInternationalTours = (limit = 4) => internationalTours.slice(0, limit);

export const getFeaturedTours = (limit = 8) => {
  // Get 4 tours from each category for featured section
  const featuredIndian = indianTours
    .filter(tour => tour.featured)
    .slice(0, Math.floor(limit / 2));
  
  const featuredInternational = internationalTours
    .filter(tour => tour.featured)
    .slice(0, Math.ceil(limit / 2));
  
  return [...featuredIndian, ...featuredInternational];
};

export const searchTours = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return tours.filter(tour => 
    tour.name.toLowerCase().includes(lowerCaseQuery) || 
    tour.location.toLowerCase().includes(lowerCaseQuery)
  );
};
