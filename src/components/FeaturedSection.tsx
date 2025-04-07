
import { cn } from "@/lib/utils";
import { getFeaturedTours } from "@/data/tours";
import TourCard from "./TourCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FeaturedSectionProps {
  className?: string;
}

const FeaturedSection = ({ className }: FeaturedSectionProps) => {
  const navigate = useNavigate();
  const featuredTours = getFeaturedTours(8); // Limit to 8 tours
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.tour-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleViewDetails = (id: string) => {
    navigate(`/tour/${id}`);
  };

  const handleBookNow = (id: string) => {
    navigate(`/tour/${id}?action=book`);
  };

  return (
    <section className={cn("py-16 bg-white", className)} id="featured">
      <div className="container mx-auto px-4">
        <div className="section-heading">
          <span className="chip">Handpicked for You</span>
          <h2>Featured Destinations</h2>
          <p className="description">Discover our most popular tours, combining the best of domestic and international adventures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour, index) => (
            <div 
              key={tour.id}
              className={cn(
                "tour-item transition-all duration-700",
                visibleItems.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-index={index}
            >
              <TourCard 
                tour={tour} 
                onViewDetails={handleViewDetails}
                onBookNow={handleBookNow}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
