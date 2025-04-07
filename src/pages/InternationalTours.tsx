import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { getInternationalTours } from '@/data/tours';
import TourCard from '@/components/TourCard';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import internationalTourHero from '@/assets/images/INTERNATIONAL TOUR.webp';

const InternationalTours = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const allTours = getInternationalTours();
  const [filteredTours, setFilteredTours] = useState(allTours);
  
  useEffect(() => {
    const filtered = allTours.filter(tour => 
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      tour.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTours(filtered);
  }, [searchTerm, allTours]);

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
  }, [filteredTours]);

  const handleViewDetails = (id: string) => {
    navigate(`/tour/${id}`);
  };

  const handleBookNow = (id: string) => {
    navigate(`/tour/${id}?action=book`);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar variant="dark" />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${internationalTourHero})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">International Tours</h1>
          <p className="text-xl max-w-2xl text-center">Experience the world's most breathtaking destinations and create unforgettable memories</p>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="container mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search by destination or tour name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            {searchTerm ? `Search Results (${filteredTours.length})` : 'All International Tours'}
          </h2>
          
          {filteredTours.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No tours found matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-travel-primary hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTours.map((tour, index) => (
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
          )}
        </div>
      </section>
      
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

export default InternationalTours;
