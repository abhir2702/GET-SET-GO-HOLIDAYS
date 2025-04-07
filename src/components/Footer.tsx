import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-travel-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-white">GET SET GO</span>
              <span className="text-gray-400"> HOLIDAYS</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Creating journeys that last a lifetime. Discover the world with our premium travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-travel-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-travel-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-travel-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-travel-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/indian-tours" className="text-gray-300 hover:text-white transition-colors">Indian Tours</Link></li>
              <li><Link to="/international-tours" className="text-gray-300 hover:text-white transition-colors">International Tours</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><Link to="/indian-tours" className="text-gray-300 hover:text-white transition-colors">Goa Beach Escape</Link></li>
              <li><Link to="/indian-tours" className="text-gray-300 hover:text-white transition-colors">Kashmir Magnificent Tour</Link></li>
              <li><Link to="/indian-tours" className="text-gray-300 hover:text-white transition-colors">Rajasthan Golden Triangle</Link></li>
              <li><Link to="/international-tours" className="text-gray-300 hover:text-white transition-colors">Bali Paradise Package</Link></li>
              <li><Link to="/international-tours" className="text-gray-300 hover:text-white transition-colors">Dubai Explorer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-travel-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Travel Street, Mumbai, Maharashtra, India 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-travel-primary flex-shrink-0" />
                <span className="text-gray-300">+91 9716360128</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-travel-primary flex-shrink-0" />
                <span className="text-gray-300">info@getsetgoholidays.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Get Set Go Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
