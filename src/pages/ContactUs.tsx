import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { config } from '@/config/env';
import { rateLimiter } from '@/lib/rateLimit';
import { csrfProtection } from '@/lib/csrf';

// Validation helpers
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, ''); // Basic XSS prevention
};

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
    const clientId = formData.email;
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
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message)
      };

      // Here you would typically send the data to your backend
      // For now, we'll just show a success message
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '' 
      });

      // Generate new CSRF token for next submission
      setCsrfToken(csrfProtection.generateToken());
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: ["123 Travel Street", "Adventure City, AC 12345"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: ["+91 9716360128"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: ["info@getsetgo.com", "support@getsetgo.com"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"]
    }
  ];

  return (
    <>
      <Navbar variant="dark" />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[50vh] bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/images/Kerala Backwaters Tour.webp')",
            backgroundAttachment: "fixed"
          }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl text-center"
            >
              We'd love to hear from you. Let us know how we can help!
            </motion.p>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-travel-primary/10 p-3 rounded-full text-travel-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Whether you have a question about our tours, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_csrf" value={csrfToken} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
            <Button variant="outline" className="hover:bg-travel-primary hover:text-white transition-colors">
              Visit Help Center
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;