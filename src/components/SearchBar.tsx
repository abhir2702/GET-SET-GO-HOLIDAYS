
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { searchTours } from "@/data/tours";
import { Tour } from "@/types/Tour";

const searchPlaceholders = [
  "Where to?",
  "Explore Bali...",
  "Discover Paris...",
  "Visit New York...",
  "Adventure in Himalayas...",
  "Relax in Maldives..."
];

const SearchBar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [destination, setDestination] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [textTransition, setTextTransition] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [searchResults, setSearchResults] = useState<Tour[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  
  // Handle typing animation for placeholders
  useEffect(() => {
    const currentPlaceholder = searchPlaceholders[placeholderIndex];
    
    if (letterIndex < currentPlaceholder.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(currentPlaceholder.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      }, 100);
      
      return () => clearTimeout(typingTimeout);
    } else {
      // When finished typing, wait before erasing
      const pauseTimeout = setTimeout(() => {
        setTextTransition(true);
        // Start erasing
        const erasingInterval = setInterval(() => {
          setDisplayText(prev => {
            if (prev.length <= 1) {
              clearInterval(erasingInterval);
              setTextTransition(false);
              setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
              setLetterIndex(0);
              return "";
            }
            return prev.slice(0, -1);
          });
        }, 50);
        
        return () => {
          clearInterval(erasingInterval);
          clearTimeout(pauseTimeout);
        };
      }, 2000);
      
      return () => clearTimeout(pauseTimeout);
    }
  }, [placeholderIndex, letterIndex, displayText]);
  
  // Improved RGB border animation
  useEffect(() => {
    if (!borderRef.current) return;
    
    let hue = 0;
    let animationFrameId: number;
    
    const animateBorder = () => {
      hue = (hue + 0.5) % 360; // Reduced speed for smoother animation
      if (borderRef.current) {
        borderRef.current.style.background = 
          `linear-gradient(${hue}deg, 
          rgba(63, 94, 251, 0), 
          rgba(63, 94, 251, 0.8) 20%, 
          rgba(252, 70, 107, 0.8) 40%, 
          rgba(63, 252, 171, 0.8) 60%, 
          rgba(252, 176, 69, 0.8) 80%, 
          rgba(63, 94, 251, 0))`;
        
        // Mask to create border only
        borderRef.current.style.webkitMask = 
          `linear-gradient(#fff 0 0) content-box, 
           linear-gradient(#fff 0 0)`;
        borderRef.current.style.webkitMaskComposite = "xor";
        borderRef.current.style.mask = 
          `linear-gradient(#fff 0 0) content-box, 
           linear-gradient(#fff 0 0)`;
        borderRef.current.style.maskComposite = "exclude";
      }
      animationFrameId = requestAnimationFrame(animateBorder);
    };
    
    animateBorder();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!searchContainerRef.current) return;
    
    const { left, top, width, height } = searchContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setMousePosition({ x, y });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      const results = searchTours(destination);
      if (results.length > 0) {
        navigate(`/search-results?q=${encodeURIComponent(destination)}`);
      } else {
        setSearchResults([]);
        setShowResults(true);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    
    if (value.trim().length > 2) {
      const results = searchTours(value);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (id: string) => {
    navigate(`/tour/${id}`);
    setShowResults(false);
    setSearchResults([]);
  };
  
  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div 
      className="relative w-full max-w-3xl mx-auto px-6 py-8 mt-6"
      ref={searchContainerRef}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 w-32 h-32 -z-10 transition-all duration-500"
        style={{
          left: `calc(${mousePosition.x}% - 4rem)`,
          top: `calc(${mousePosition.y}% - 4rem)`,
        }}
      ></div>
      
      <form 
        onSubmit={handleSubmit} 
        className={cn(
          "relative overflow-hidden rounded-full transition-all duration-300",
          isActive 
            ? "shadow-premium" 
            : "shadow-glass-md",
        )}
      >
        {/* Improved Animated RGB Border */}
        <div 
          ref={borderRef}
          className="absolute inset-0 rounded-full"
          style={{ 
            padding: "3px",
            zIndex: 1,
            pointerEvents: "none",
            opacity: 0.8,
            transition: "opacity 0.3s ease"
          }}
        ></div>
        
        <div className="flex items-center relative z-0 glass-card rounded-full p-2">
          {/* Destination */}
          <div className="flex-1 relative flex items-center bg-white/50 rounded-full p-2">
            <div className="pl-2 text-travel-primary">
              <Search className="h-5 w-5" />
            </div>
            <div className="flex-1 px-2">
              <input
                type="text"
                value={destination}
                onChange={handleInputChange}
                placeholder={displayText}
                className={cn(
                  "w-full bg-transparent text-gray-800 focus:outline-none text-lg py-2",
                  textTransition ? "opacity-70" : "opacity-100",
                  "transition-opacity duration-300"
                )}
                onFocus={() => {
                  setIsActive(true);
                  setShowResults(destination.trim().length > 2);
                }}
                onBlur={() => setIsActive(false)}
              />
              {!destination && (
                <span className="absolute left-14 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="inline-block w-0.5 h-5 bg-travel-primary/70 animate-pulse"></span>
                </span>
              )}
            </div>
          </div>
          
          {/* Search Button */}
          <div className="flex-none ml-2">
            <Button
              type="submit"
              className={cn(
                "h-12 px-6 rounded-full bg-gradient-to-r from-blue-600 via-travel-primary to-blue-600 text-white font-medium",
                "flex items-center justify-center gap-2 hover:shadow-lg bg-size-200 bg-pos-0 hover:bg-pos-100"
              )}
              style={{
                backgroundSize: "200% auto",
                transition: "all 0.5s ease"
              }}
            >
              <span className="font-medium">Find Tours</span>
            </Button>
          </div>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="max-h-96 overflow-y-auto">
            {searchResults.map((tour) => (
              <div 
                key={tour.id}
                className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                onClick={() => handleResultClick(tour.id)}
              >
                <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                  <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{tour.name}</p>
                  <p className="text-xs text-gray-500">{tour.location}</p>
                </div>
                <div className="text-xs font-semibold text-travel-primary">
                  {tour.pricing.with_flight || tour.pricing.land_only}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {showResults && searchResults.length === 0 && destination.trim() !== "" && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg p-4 text-center">
          <p className="text-gray-600">No tours found for "{destination}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
