import * as React from "react";
import SubHeader from '../common/SubHeader';
import CarouselCard from '../common/CarouselCard';
import AboutUs from '../common/AboutUs';
import Services from '../common/Services';
import Videos from '../common/Videos';
import Testimonials from '../common/Testimonials';

export default function Home() {
  return (
    <div>
      <SubHeader/>
      <CarouselCard/>
      <AboutUs/>
      <Services/>
      <Videos/>
      <Testimonials/>
  </div>
  );
}
