import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import OurValues from "@/components/OurValues";
import OwnerProfile from "../components/OwnerProfile";
import Footer from "@/components/Footer";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Get Set Go Holidays</title>
        <meta 
          name="description" 
          content="Learn about Get Set Go Holidays, our story, and our values. We're passionate about creating unforgettable travel experiences."
        />
      </Helmet>
      
      <main>
        <Navbar variant="dark" />
        <AboutHero />
        <OurStory />
        <OurValues />
        <OwnerProfile />
      </main>
      
      <Footer />
    </>
  );
};

export default AboutUs;
