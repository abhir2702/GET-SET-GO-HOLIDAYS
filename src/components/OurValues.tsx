
import { cn } from "@/lib/utils";
import { Lightbulb, Heart, Target, Handshake } from "lucide-react";

interface OurValuesProps {
  className?: string;
}

const OurValues = ({ className }: OurValuesProps) => {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Passion",
      description: "We're passionate about travel and creating unforgettable experiences for our clients."
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service and tour planning."
    },
    {
      icon: <Handshake className="h-6 w-6 text-white" />,
      title: "Trust",
      description: "Building trust through transparency, reliability, and consistent delivery of promises."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: "Innovation",
      description: "We constantly innovate to bring fresh, creative ideas to our travel experiences."
    }
  ];

  return (
    <section className={cn("py-20 bg-travel-dark", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-travel-accent font-medium mb-3">WHAT DRIVES US</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h2>
          <div className="w-20 h-1 bg-travel-accent mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-travel-dark-lighter rounded-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-travel-primary rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-white/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
