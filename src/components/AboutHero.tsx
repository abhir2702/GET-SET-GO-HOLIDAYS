import { cn } from "@/lib/utils";

interface AboutHeroProps {
  className?: string;
}

const AboutHero = ({ className }: AboutHeroProps) => {
  return (
    <section className={cn("relative h-[60vh] md:h-[80vh] bg-cover bg-center", className)}>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/src/assets/images/About_us hero image.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 text-white z-10">
          <div className="max-w-3xl">
            <h5 className="text-travel-accent font-medium mb-3 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>Welcome to Get Set Go Holidays</h5>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in opacity-0 hero-text-shadow" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>Creating Journeys That Last a Lifetime</h1>
            <p className="text-xl text-white/90 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              We're a team of passionate travelers dedicated to creating unforgettable experiences. 
              From breathtaking destinations to personalized service, we're here to make your travel dreams come true.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
