import { cn } from "@/lib/utils";
import { Plane, Users, MapPin, CreditCard, Clock } from "lucide-react";

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection = ({ className }: ServicesSectionProps) => {
  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Get the best deals on domestic and international flights with our dedicated booking service."
    },
    {
      icon: Users,
      title: "Customized Packages",
      description: "Create your perfect holiday with our fully customizable tour packages tailored to your needs."
    },
    {
      icon: MapPin,
      title: "Guided Tours",
      description: "Explore destinations with our experienced guides who provide in-depth knowledge of local attractions."
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Choose from various payment options including EMI, credit cards, and book now pay later offers."
    },
    {
      icon: Clock,
      title: "Last Minute Deals",
      description: "Take advantage of special last-minute discounts and offers on selected packages."
    }
  ];

  return (
    <section className={cn("py-16 bg-travel-primary/5", className)} id="services">
      <div className="container mx-auto px-4">
        <div className="section-heading text-center mb-12">
          <span className="chip">What We Offer</span>
          <h2>Our Premium Services</h2>
          <p className="description max-w-3xl mx-auto">We provide a wide range of travel services to make your journey seamless and memorable, from start to finish.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-travel-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-travel-primary/20">
                <service.icon className="w-8 h-8 text-travel-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-travel-primary">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

