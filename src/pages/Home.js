import * as React from "react";
import CarouselCard from "../components/CarouselCard";
import AboutUs from "../components/About";
import Services from "../components/Services";
import VideoMarquee from "../components/VideoMarquee";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import ContactSection from "../components/ContactSection";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginBottom: "100px" }}>
      <CarouselCard />
      <AboutUs />
      <Services />
      <VideoMarquee isHome={true} />
      <Testimonials />
      <Clients />
      <ContactSection />
    </div>
  );
}
