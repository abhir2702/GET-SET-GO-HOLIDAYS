import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { tours } from '@/data/tours';
import { useNavbar } from './navbar/useNavbar';
import { getNavbarStyles, getLogo } from './navbar/NavStyles';
import NavItem from './navbar/NavItem';
import MobileMenu from './navbar/MobileMenu';
import SearchDialog from './navbar/SearchDialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
  variant?: 'light' | 'dark' | 'glass';
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Indian Tours', href: '/indian-tours' },
  { name: 'International Tours', href: '/international-tours' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = ({ className, variant = 'light' }: NavbarProps) => {
  const {
    activeItem,
    scrolled,
    mobileMenuOpen,
    searchOpen,
    handleNavClick,
    handleSearchSelect,
    toggleMobileMenu,
    setSearchOpen
  } = useNavbar();

  const isMobile = useIsMobile();
  
  const indianTours = tours.filter(tour => tour.category === 'india');
  const internationalTours = tours.filter(tour => tour.category === 'international');
  
  const navbarStyle = getNavbarStyles({ variant, scrolled });
  const logo = getLogo({ variant, scrolled });

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navbarStyle,
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className={logo.primary}>GET SET GO</span>
              <span className={logo.secondary}> HOLIDAYS</span>
            </Link>
          </div>
          
          <nav className="hidden md:block nav-style-1">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  isActive={activeItem === item.name}
                  variant={variant}
                  scrolled={scrolled}
                  onClick={handleNavClick}
                />
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setSearchOpen(true)}
              className={cn(
                "p-2 rounded-full transition-colors",
                "text-white hover:bg-white/10"
              )}
            >
              <Search className="h-5 w-5" />
            </button>
            
            {isMobile && (
              <button
                className={cn(
                  "p-2 rounded-md",
                  "text-white hover:bg-white/10"
                )}
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      
      <MobileMenu
        isOpen={mobileMenuOpen}
        navItems={navItems}
        activeItem={activeItem}
        onNavClick={handleNavClick}
      />

      <SearchDialog
        isOpen={searchOpen}
        onOpenChange={setSearchOpen}
        indianTours={indianTours}
        internationalTours={internationalTours}
        onSelect={handleSearchSelect}
      />
    </header>
  );
};

export default Navbar;
