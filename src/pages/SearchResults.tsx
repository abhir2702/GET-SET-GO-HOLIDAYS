
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchTours } from '@/data/tours';
import { Tour } from '@/types/Tour';
import TourCard from '@/components/TourCard';
import { useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const [results, setResults] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get('q') || '';
    setQuery(q);
    
    // Simulate loading for better UX
    setLoading(true);
    setTimeout(() => {
      const searchResults = searchTours(q);
      setResults(searchResults);
      setLoading(false);
    }, 500);
  }, [location.search]);

  const handleViewDetails = (id: string) => {
    navigate(`/tour/${id}`);
  };

  const handleBookNow = (id: string) => {
    navigate(`/tour/${id}?action=book`);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Search Results {query ? `for "${query}"` : ''}
          </h1>
          <p className="text-gray-600">
            {results.length === 0 
              ? 'No tours found. Try a different search term.' 
              : `Found ${results.length} tour${results.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm h-96 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((tour) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                onViewDetails={handleViewDetails}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        )}

        {!loading && results.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-medium mb-2">No tours found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any tours matching "{query}". Try a different search term.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-travel-primary text-white rounded-full hover:bg-travel-primary/90 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
