import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adImg1 from "../images/carousel-img-1.png";
import adImg2 from "../images/carousel-img-2.png";
import adImg3 from "../images/carousel-img-3.png";
import adImg4 from "../images/carousel-img-4.png";
import adImg5 from "../images/carousel-img-5.png";
import { IconButton, Box } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "@emotion/styled";

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  // @media (max-width: 900px) {
  //   height: 50vh;
  // }
`;

export default function CarouselCard() {
  const images = [adImg1, adImg2, adImg3, adImg4, adImg5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index}>
            <CarouselImage src={img} alt={`Slide ${index}`} />
          </Box>
        ))}
      </Slider>
    </div>
  );
}

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: "30%",
        zIndex: 1,
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
      }}
    >
      <ChevronLeftIcon sx={{ color: 'black', fontSize: '2rem' }} />
    </IconButton>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: "30%",
        zIndex: 1,
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
      }}
    >
      <ChevronRightIcon sx={{ color: 'black', fontSize: '2rem' }} />
    </IconButton>
  );
};
