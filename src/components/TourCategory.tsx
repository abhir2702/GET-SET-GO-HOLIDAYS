
import { cn } from "@/lib/utils";
import TourCard from "./TourCard";
import { useEffect, useState } from "react";
import { Tour } from "@/types/Tour";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface TourCategoryProps {
  className?: string;
  title: string;
  description: string;
  tag: string;
  tours: Tour[];
  viewAllLink: string;
}

const TourCategory = ({ className, title, description, tag, tours, viewAllLink }: TourCategoryProps) => {
  const navigate = useNavigate();
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

    const elements = document.querySelectorAll(`.tour-item-${tag}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [tag]);

  const handleViewDetails = (id: string) => {
    navigate(`/tour/${id}`);
  };

  const handleBookNow = (id: string) => {
    navigate(`/tour/${id}?action=book`);
  };

  const handleViewAll = () => {
    navigate(viewAllLink);
  };

  return (
    <section className={cn("py-16", className)} id={tag}>
      <div className="container mx-auto px-4">
        <div className="section-heading">
          <span className="chip">{tag === "india" ? "Domestic Adventures" : "Global Journeys"}</span>
          <h2>{title}</h2>
          <p className="description">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <div 
              key={tour.id}
              className={cn(
                `tour-item-${tag} transition-all duration-700`,
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
        
        <div className="mt-12 text-center">
          <Button 
            onClick={handleViewAll} 
            className="px-6 py-2"
            size="lg"
          >
            View All {tag === "india" ? "Indian" : "International"} Tours
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourCategory;
