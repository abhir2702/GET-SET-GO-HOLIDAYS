import { useEffect, useState } from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import SearchBar from '@/components/SearchBar';
import FeaturedSection from '@/components/FeaturedSection';
import TourCategory from '@/components/TourCategory';
import ServicesSection from '@/components/ServicesSection';
import CustomTourForm from '@/components/CustomTourForm';
import { getLimitedIndianTours, getLimitedInternationalTours } from '@/data/tours';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const indianTours = getLimitedIndianTours(4); // Only 4 Indian tours
  const internationalTours = getLimitedInternationalTours(4); // Only 4 International tours

  useEffect(() => {
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Carousel */}
      <HeroCarousel />
      
      {/* Search Bar - Now positioned below the hero with proper spacing */}
      <div className="bg-gray-50/80 py-6">
        <SearchBar />
      </div>
      
      {/* Featured Tours Section - Limited to 8 tours */}
      <FeaturedSection className="bg-white" />
      
      {/* Indian Tours Section - Limited to 4 with View All button */}
      <TourCategory 
        title="Discover India"
        description="Explore the diverse landscapes and rich cultural heritage across India"
        tag="india"
        tours={indianTours}
        viewAllLink="/indian-tours"
        className="bg-white"
      />
      
      {/* International Tours Section - Limited to 4 with View All button */}
      <TourCategory 
        title="International Getaways"
        description="Experience the world's most breathtaking destinations and create unforgettable memories"
        tag="international"
        tours={internationalTours}
        viewAllLink="/international-tours"
        className="bg-gray-50/50"
      />

      {/* Custom Tour Section */}
      <CustomTourForm className="bg-white" />
      
      {/* Services Section - Now at the bottom before footer */}
      <ServicesSection className="bg-white" />
      
      {/* Footer */}
      <footer className="bg-travel-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">GET SET GO HOLIDAYS</h3>
              <p className="text-white/70 text-sm">
                Discover the world with our expertly curated travel experiences. 
                From local adventures to global explorations, we make your journey unforgettable.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/indian-tours" className="hover:text-white transition-colors">Tours & Packages</Link></li>
                <li><Link to="/indian-tours" className="hover:text-white transition-colors">Destinations</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Get in Touch</h4>
              <p className="text-white/70 text-sm mb-4">
                Subscribe to our newsletter for the latest travel deals and updates.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 text-sm rounded-l-md w-full bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/20"
                />
                <button className="bg-travel-primary px-4 py-2 text-sm rounded-r-md font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} GET SET GO HOLIDAYS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
