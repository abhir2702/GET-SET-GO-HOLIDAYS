import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Tour } from '@/types/Tour';
import { tours } from '@/data/tours';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Calendar, Clock, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';
import { Link } from "react-router-dom";

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = tours.find(t => t.id === id);

  if (!tour) {
    toast({
      title: "Tour not found",
      description: "We couldn't find the tour you're looking for.",
      variant: "destructive"
    });
    setTimeout(() => navigate('/'), 2000);
    return null;
  }

  const handleBookNow = () => {
    const phoneNumber = '919716360128';
    const message = `*Tour Booking Request*\n
🎯 Tour: ${tour.name}
📍 Location: ${tour.location}
⏱️ Duration: ${tour.duration.replace('N/', ' nights / ')}
💰 Price with flights: ${tour.pricing.with_flight || 'N/A'}
💰 Land package only: ${tour.pricing.land_only || 'N/A'}

I would like to book this tour. Please provide more information about:
- Available dates
- Payment options
- Detailed itinerary`;

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleAskQuestion = () => {
    const phoneNumber = '919716360128';
    const message = `*Tour Inquiry*\n
I have a question about the ${tour.name} tour.`;

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen">
      <Navbar variant="dark" />
      
      <div className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={tour.image}
          alt={tour.name} 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto">
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)} 
              className="mb-4 text-white border-white/30 hover:bg-white/10 bg-transparent"
            >
              <ArrowLeft size={16} className="mr-1" /> Back
            </Button>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{tour.name}</h1>
            <div className="flex items-center text-white mb-2">
              <MapPin size={16} className="mr-1" />
              <span>{tour.location}</span>
              <div className="mx-3 h-1 w-1 rounded-full bg-white/50"></div>
              <Star size={16} className="mr-1 fill-yellow-400 text-yellow-400" />
              <span>{tour.rating} ({tour.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center text-white">
              <Calendar size={16} className="mr-1" />
              <span>{tour.duration.replace('N/', ' Nights / ')}</span>
              <div className="mx-3 h-1 w-1 rounded-full bg-white/50"></div>
              <Clock size={16} className="mr-1" />
              <span>Best time to visit: Year-round</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the existing JSX... */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Tour Overview</h2>
              <p className="text-gray-600 mb-6">
                Experience the beauty and culture of {tour.location} with our carefully curated {tour.name}. 
                This {tour.duration.replace('N/', ' night / ')} package offers the perfect blend of adventure, 
                relaxation, and cultural immersion.
              </p>

              <h3 className="text-lg font-medium mb-3">Itinerary</h3>
              <div className="space-y-4">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="h-8 w-8 rounded-full bg-travel-primary/10 text-travel-primary flex items-center justify-center font-medium">
                        {index + 1}
                      </div>
                      {index < tour.itinerary.length - 1 && (
                        <div className="h-full w-0.5 bg-gray-200 my-1"></div>
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-gray-800">{day}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Included/Not Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-green-600">What's Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Accommodation as per itinerary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Daily breakfast and select meals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>All transfers and sightseeing as per itinerary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>English speaking tour guide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>All applicable taxes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 text-red-600">What's Not Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>International/domestic airfare (if not selected)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Travel insurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Personal expenses (souvenirs, additional meals, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Optional tours or activities not mentioned in itinerary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Tips and gratuities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Price Details</h3>
              <div className="mb-4 pb-4 border-b border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Package with flights</span>
                  <span className="font-bold text-travel-primary">{tour.pricing.with_flight || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Land package only</span>
                  <span className="font-bold">{tour.pricing.land_only || 'N/A'}</span>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">* Per person based on double occupancy</p>
                <p className="text-sm text-gray-500">* Prices may vary based on season and availability</p>
              </div>
              <Button className="w-full mb-3" onClick={handleBookNow}>Book This Tour</Button>
              <Button variant="outline" className="w-full" onClick={handleAskQuestion}>Ask a Question</Button>
            </div>
          </div>
        </div>
      </div>
      
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
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
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

export default TourDetails;
