
import { cn } from "@/lib/utils";

interface NavStylesProps {
  variant?: 'light' | 'dark' | 'glass';
  scrolled: boolean;
}

export const getNavbarStyles = ({ variant = 'light', scrolled }: NavStylesProps) => {
  if (variant === 'dark') {
    return scrolled 
      ? 'glass-nav-dark' 
      : 'bg-transparent text-white border-transparent';
  } else if (variant === 'glass') {
    return scrolled 
      ? 'glass-nav' 
      : 'bg-transparent border-transparent';
  } else {
    return scrolled 
      ? 'glass-nav' 
      : 'bg-transparent border-transparent';
  }
};

export const getTextColor = ({ variant = 'light', scrolled }: NavStylesProps) => {
  if (variant === 'dark') {
    return scrolled ? 'text-gray-800' : 'text-white';
  } else {
    return scrolled ? 'text-gray-800' : 'text-white';
  }
};

export const getLogo = ({ variant = 'light', scrolled }: NavStylesProps) => {
  return {
    primary: variant === 'dark' && !scrolled ? 'text-white' : 'text-travel-primary',
    secondary: variant === 'dark' && !scrolled ? 'text-white/80' : 'text-gray-700'
  };
};
