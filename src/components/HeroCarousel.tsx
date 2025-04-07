import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { getFeaturedTours } from "@/data/tours";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const featuredTours = getFeaturedTours(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredTours.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [featuredTours.length]);

  const handleExplore = (tourId: string) => {
    navigate(`/tour/${tourId}`);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <Navbar variant="dark" />
      
      {/* Background Images */}
      {featuredTours.map((destination, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            onLoad={() => setLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 z-20"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center relative z-30">
        {featuredTours.map((destination, index) => (
          <div 
            key={index}
            className={cn(
              "transition-all duration-700 absolute",
              currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
              {destination.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              {destination.location} • {destination.duration.replace('N/', ' Nights / ')} Days
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group rounded-full bg-white text-gray-900 hover:bg-white/90 transition-all duration-300"
                onClick={() => handleExplore(destination.id)}
              >
                <span>Explore Tour</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Carousel Controls */}
      <div className={cn(
        "absolute bottom-12 left-0 w-full z-30 transition-all duration-1000",
        loaded ? 'opacity-100' : 'opacity-0'
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {featuredTours.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                )}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
