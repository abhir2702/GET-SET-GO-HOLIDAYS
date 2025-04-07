import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<{ name: string; href: string }>;
  activeItem: string;
  onNavClick: (name: string, href: string) => void;
}

const MobileMenu = ({ isOpen, navItems, activeItem, onNavClick }: MobileMenuProps) => {
  return (
    <div className={cn(
      "md:hidden absolute w-full bg-black/80 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden",
      isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
    )}>
      <div className="px-4 pt-2 pb-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "block px-3 py-3 text-base font-bold rounded-md transition-colors duration-200",
              activeItem === item.name 
                ? "text-white bg-white/20" 
                : "text-white/80 hover:text-white hover:bg-white/10"
            )}
            onClick={(e) => {
              e.preventDefault();
              onNavClick(item.name, item.href);
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
