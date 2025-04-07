import { Tour } from '@/types/Tour';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Eye } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TourCardProps {
  tour: Tour;
  onViewDetails?: (id: string) => void;
  onBookNow?: (id: string) => void;
}

const TourCard = ({ tour, onViewDetails, onBookNow }: TourCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(tour.id);
    }
  };

  const handleBookNow = () => {
    const phoneNumber = '919716360128';
    const message = `*Tour Booking Request*\n
🎯 Tour: ${tour.name}
📍 Location: ${tour.location}
⏱️ Duration: ${tour.duration.replace('N/', ' nights / ')}
💰 Price: ${tour.pricing.with_flight || tour.pricing.land_only}

I would like to book this tour. Please provide more information.`;

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      className={cn(
        "group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={tour.image}
          alt={tour.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-300",
            isHovered && "scale-110"
          )}
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-sm font-medium text-gray-900">
          {tour.duration}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-1">
          <MapPin size={14} className="text-travel-primary mr-1" />
          <span className="text-xs text-gray-600 truncate">{tour.location}</span>
        </div>
        <h3 className="text-base font-medium mb-1 line-clamp-1">{tour.name}</h3>
        <div className="flex items-center mb-3">
          <Star size={14} className="text-yellow-500 mr-1 fill-yellow-500" />
          <span className="text-xs font-medium">{tour.rating}</span>
          <span className="text-xs text-gray-500 ml-1">({tour.reviewCount})</span>
        </div>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">
          {tour.itinerary[0]} and more...
        </p>
        <div className="flex justify-between items-end mt-auto pt-3 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Starts from</span>
            <span className="text-base font-bold text-travel-primary">
              {tour.pricing.with_flight || tour.pricing.land_only}
            </span>
          </div>
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="h-8 rounded-md text-xs px-2.5 border-travel-primary/30 text-travel-primary hover:bg-travel-primary/5" 
              onClick={handleViewDetails}
            >
              <Eye size={12} className="mr-1" />
              Details
            </Button>
            <Button 
              size="sm" 
              className="h-8 rounded-md text-xs px-2.5" 
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
