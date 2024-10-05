import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adImg1 from "../images/ad-img-1.jpg";
import adImg2 from "../images/ad-img-2.jpg";
import adImg3 from "../images/ad-img-3.jpg";

export default function CarouselCard() {
  const images = [adImg1, adImg2, adImg3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} style={{ width: "75%", margin: "0 auto" }}>
      {images.map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt={`Slide ${index}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      ))}
    </Slider>
  );
}
