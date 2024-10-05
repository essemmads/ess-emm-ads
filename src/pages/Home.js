import * as React from "react";
import CarouselCard from "../components/CarouselCard";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Videos from "../components/Videos";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <CarouselCard />
      <AboutUs />
      <Services />
      <Videos />
      <Testimonials />
    </div>
  );
}
