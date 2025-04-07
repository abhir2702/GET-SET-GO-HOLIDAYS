import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, MapPin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { config } from '@/config/env';
import { rateLimiter } from '@/lib/rateLimit';
import { csrfProtection } from '@/lib/csrf';

// Add validation helpers
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, ''); // Basic XSS prevention
};

interface CustomTourFormProps {
  className?: string;
}

const CustomTourForm = ({ className }: CustomTourFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    startDate: '',
    duration: '',
    numberOfPeople: '',
    specialRequirements: ''
  });

  const [csrfToken, setCsrfToken] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Generate CSRF token when component mounts
    setCsrfToken(csrfProtection.generateToken());
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }

    if (!formData.duration || parseInt(formData.duration) < 1) {
      newErrors.duration = 'Please enter a valid duration';
    }

    if (!formData.numberOfPeople || parseInt(formData.numberOfPeople) < 1) {
      newErrors.numberOfPeople = 'Please enter a valid number of people';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive"
      });
      return;
    }

    // Check rate limiting
    const clientId = formData.email; // Use email as client identifier
    if (!rateLimiter.checkLimit(clientId)) {
      toast({
        title: "Too Many Requests",
        description: "Please wait before submitting another request",
        variant: "destructive"
      });
      return;
    }

    // Validate CSRF token
    if (!csrfProtection.validateToken(csrfToken)) {
      toast({
        title: "Security Error",
        description: "Invalid form submission. Please try again.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize inputs before creating message
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        destination: sanitizeInput(formData.destination),
        startDate: sanitizeInput(formData.startDate),
        duration: sanitizeInput(formData.duration),
        numberOfPeople: sanitizeInput(formData.numberOfPeople),
        specialRequirements: sanitizeInput(formData.specialRequirements)
      };

      // Format the message for WhatsApp
      const message = `*New Custom Tour Request*
🧑‍🦱 Name: ${sanitizedData.name}
📧 Email: ${sanitizedData.email}
📱 Phone: ${sanitizedData.phone}
🗺️ Destination: ${sanitizedData.destination}
📅 Start Date: ${sanitizedData.startDate}
⏱️ Duration: ${sanitizedData.duration}
👥 Number of People: ${sanitizedData.numberOfPeople}
📝 Special Requirements: ${sanitizedData.specialRequirements}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${config.whatsappContact}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Success!",
        description: "Your custom tour request has been sent. We'll get back to you soon!",
      });
      
      // Reset form and generate new CSRF token
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        startDate: '',
        duration: '',
        numberOfPeople: '',
        specialRequirements: ''
      });
      setCsrfToken(csrfProtection.generateToken());
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="chip">Customize Your Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Create Your Perfect Tour</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us your dream destination and preferences, and we'll craft a personalized tour package just for you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_csrf" value={csrfToken} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Destination</label>
                  <Input
                    placeholder="Where would you like to go?"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    required
                  />
                  {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Start Date</label>
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    required
                  />
                  {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Duration (Days)</label>
                  <Input
                    type="number"
                    placeholder="Number of days"
                    min="1"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    required
                  />
                  {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Number of People</label>
                  <Input
                    type="number"
                    placeholder="Number of travelers"
                    min="1"
                    value={formData.numberOfPeople}
                    onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                    required
                  />
                  {errors.numberOfPeople && <p className="text-red-500 text-sm">{errors.numberOfPeople}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Special Requirements</label>
                <Textarea
                  placeholder="Tell us about any special requirements, preferences, or questions you have..."
                  className="min-h-[120px]"
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                Send Request
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomTourForm;