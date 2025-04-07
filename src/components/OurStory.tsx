import { cn } from "@/lib/utils";
import { Calendar, MapPin, Users } from "lucide-react";

interface OurStoryProps {
  className?: string;
}

const OurStory = ({ className }: OurStoryProps) => {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="section-heading text-left mb-8">
            <span className="chip">Our Story</span>
            <h2 className="text-left">The Journey of Get Set Go Holidays</h2>
          </div>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              Founded in 2010 by a group of passionate travel enthusiasts, Get Set Go Holidays began with a simple yet profound mission: to create travel experiences that transform lives. What started as a small venture driven by dreams and determination has now blossomed into one of India's most trusted and innovative travel companies.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8">Our Beginning</h3>
            <p>
              In our early days, we specialized in curating local experiences across India, helping travelers discover the hidden gems of our diverse nation. With each successful journey, our reputation grew, and so did our vision. We expanded our horizons, venturing into international tourism while maintaining our commitment to authentic, immersive travel experiences.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8">Evolution and Growth</h3>
            <p>
              Over the years, we've evolved from a traditional travel agency into a modern, technology-driven travel solutions provider. We've embraced digital innovation while keeping the human touch that makes travel special. Our team has grown from a handful of dreamers to over 50 travel experts, each bringing unique insights and expertise to craft unforgettable journeys.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8">Our Philosophy</h3>
            <p>
              At Get Set Go Holidays, we believe that travel is more than just visiting new places—it's about creating connections, understanding different perspectives, and returning home with stories that will last a lifetime. Our journey has been marked by an unwavering dedication to excellence, personalized service, and a deep respect for the cultures and environments we visit.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8">Sustainable Tourism</h3>
            <p>
              As responsible travel advocates, we're committed to sustainable tourism practices. We work closely with local communities, promote eco-friendly accommodations, and encourage responsible travel behavior among our clients. Our sustainable initiatives have helped preserve cultural heritage sites and support local economies across various destinations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8">Looking Ahead</h3>
            <p>
              Today, as we continue to grow and innovate, our core mission remains unchanged: to create extraordinary travel experiences that inspire, educate, and bring joy to our travelers. We're constantly exploring new destinations, forming strategic partnerships, and enhancing our services to meet the evolving needs of modern travelers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="w-12 h-12 text-travel-primary mb-3" />
              <h4 className="text-2xl font-semibold mb-1">12+</h4>
              <p className="text-sm text-gray-600">Years of Excellence</p>
              <p className="text-xs text-gray-500 mt-2">Creating memorable journeys since 2010</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-12 h-12 text-travel-primary mb-3" />
              <h4 className="text-2xl font-semibold mb-1">50+</h4>
              <p className="text-sm text-gray-600">Global Destinations</p>
              <p className="text-xs text-gray-500 mt-2">Curating experiences worldwide</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-travel-primary mb-3" />
              <h4 className="text-2xl font-semibold mb-1">20,000+</h4>
              <p className="text-sm text-gray-600">Happy Travelers</p>
              <p className="text-xs text-gray-500 mt-2">Creating lifelong memories</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-travel-primary/5 rounded-lg border border-travel-primary/10">
            <blockquote className="text-center italic text-gray-800">
              "Every journey begins with a dream, and at Get Set Go Holidays, we're here to turn those dreams into unforgettable realities. We don't just plan trips; we craft experiences that become cherished memories for a lifetime."
            </blockquote>
            <p className="text-center text-sm text-gray-600 mt-4">- The Get Set Go Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
