import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { initializeSecurity } from "./lib/security";
import { useDevToolsDetector } from "./hooks/use-dev-tools-detector";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TourDetails from "./pages/TourDetails";
import IndianTours from "./pages/IndianTours";
import InternationalTours from "./pages/InternationalTours";
import SearchResults from "./pages/SearchResults";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => {
  const isDevToolsOpen = useDevToolsDetector();

  useEffect(() => {
    // Initialize all security measures
    initializeSecurity();
  }, []);

  if (isDevToolsOpen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-xl font-bold">
        Developer tools are not allowed on this website.
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/indian-tours" element={<IndianTours />} />
            <Route path="/international-tours" element={<InternationalTours />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
