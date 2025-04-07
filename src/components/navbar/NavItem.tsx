import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface NavItemProps {
  name: string;
  href: string;
  isActive: boolean;
  variant?: 'light' | 'dark' | 'glass';
  scrolled: boolean;
  onClick: (name: string, href: string) => void;
}

const NavItem = ({ name, href, isActive, variant, scrolled, onClick }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <Link
        to={href}
        className={cn(
          "font-bold text-sm px-4 py-2 rounded-full relative group",
          "transition-all duration-300 ease-out",
          "hover:text-white",
          isActive ? 'text-white' : 'text-white/80',
          "overflow-hidden",
        )}
        onClick={(e) => {
          e.preventDefault();
          onClick(name, href);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10">{name}</span>
        <span 
          className={cn(
            "absolute inset-0 bg-black/80 rounded-full -z-0",
            "transition-all duration-300 ease-out",
            isHovered || isActive 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-90"
          )}
        />
      </Link>
    </li>
  );
};

export default NavItem;
