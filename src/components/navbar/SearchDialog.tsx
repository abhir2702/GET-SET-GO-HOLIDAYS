
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Tour } from '@/types/Tour';

interface SearchDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  indianTours: Tour[];
  internationalTours: Tour[];
  onSelect: (tourId: string) => void;
}

const SearchDialog = ({ 
  isOpen, 
  onOpenChange, 
  indianTours, 
  internationalTours, 
  onSelect 
}: SearchDialogProps) => {
  return (
    <CommandDialog open={isOpen} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search for destinations, tours, or activities..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Popular Destinations">
          {indianTours
            .slice(0, 5)
            .map(tour => (
              <CommandItem 
                key={tour.id}
                onSelect={() => onSelect(tour.id)}
              >
                {tour.name} - {tour.location}
              </CommandItem>
            ))
          }
        </CommandGroup>
        <CommandGroup heading="International Tours">
          {internationalTours
            .slice(0, 5)
            .map(tour => (
              <CommandItem 
                key={tour.id}
                onSelect={() => onSelect(tour.id)}
              >
                {tour.name} - {tour.location}
              </CommandItem>
            ))
          }
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
