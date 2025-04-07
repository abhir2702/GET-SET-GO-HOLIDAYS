import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";

interface OwnerProfileProps {
  className?: string;
}

const OwnerProfile = ({ className }: OwnerProfileProps) => {
  const stats = [
    {
      icon: <Calendar className="w-6 h-6 text-travel-primary" />,
      value: "15+",
      label: "Years Experience"
    },
    {
      icon: <MapPin className="w-6 h-6 text-travel-primary" />,
      value: "50+",
      label: "Destinations"
    },
    {
      icon: <Users className="w-6 h-6 text-travel-primary" />,
      value: "20k+",
      label: "Happy Travelers"
    }
  ];

  return (
    <section className={cn("py-20 bg-gray-50/50", className)}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="chip">About the Owner</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Meet the Founder</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the driving force behind Get Set Go Holidays and our commitment to creating extraordinary travel experiences.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold mb-2">Gaurav Bisht</h3>
              <p className="text-travel-primary font-medium mb-6">Founder & CEO</p>
              <div className="space-y-4">
                <p className="text-gray-600">
                  With over 15 years of experience in the travel industry, Gaurav Bisht founded Get Set Go Holidays with a vision to transform how people experience travel. His passion for exploring new destinations and creating meaningful connections has shaped our company's commitment to excellence.
                </p>
                <p className="text-gray-600">
                  Under his leadership, Get Set Go Holidays has grown from a small local agency to a trusted name in the travel industry, serving thousands of happy travelers and specializing in both domestic and international tours.
                </p>
                <p className="text-gray-600">
                  "Our mission is not just to plan trips, but to create lifelong memories that our travelers will cherish forever. Every journey we curate is a reflection of our dedication to excellence and personalized service."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-white shadow-sm">
                    <div className="mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center lg:justify-start lg:pl-12"
            >
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-travel-primary/5 p-3">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 rounded-full"></div>
                    <img 
                      src="/src/assets/images/Owner.webp" 
                      alt="Gaurav Bisht - Founder & CEO"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-3 border-2 border-travel-primary/20 rounded-full -z-10"></div>
                {/* Shadow */}
                <div className="absolute -bottom-6 -right-6 -left-6 -z-20 h-6 bg-black/10 blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerProfile;