import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface UseNavbarProps {
  defaultActiveItem?: string;
}

export const useNavbar = ({ defaultActiveItem = 'Home' }: UseNavbarProps = {}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(defaultActiveItem);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // Update active item based on current route
    const path = location.pathname;
    if (path === '/') {
      setActiveItem('Home');
    } else if (path === '/indian-tours') {
      setActiveItem('Indian Tours');
    } else if (path === '/international-tours') {
      setActiveItem('International Tours');
    } else if (path === '/about-us') {
      setActiveItem('About Us');
    } else if (path === '/contact') {
      setActiveItem('Contact');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (name: string, href: string) => {
    setActiveItem(name);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);  // Add this line to scroll to top
    navigate(href);
  };

  const handleSearchSelect = (tourId: string) => {
    setSearchOpen(false);
    navigate(`/tour/${tourId}`);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = (open?: boolean) => {
    setSearchOpen(open !== undefined ? open : !searchOpen);
  };

  return {
    activeItem,
    scrolled,
    mobileMenuOpen,
    searchOpen,
    handleNavClick,
    handleSearchSelect,
    toggleMobileMenu,
    toggleSearch,
    setSearchOpen
  };
};
