import * as React from "react";
import { useRef } from "react";
import { Typography, Box, Chip } from "@mui/material";
import bannerImage from "../images/train-branding.png";
import VideoMarquee from "../components/VideoMarquee";
import CustomCard from "./CustomCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

const StyledSliderContainer = styled(Box)`
  width: 900px;
  margin: 0 auto;
  margin-bottom: 4rem;

  @media (max-width: 950px) {
    width: 700px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ResponsiveBackground = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  @media (max-width: 900px) {
    background-color: #e0e0e0;
  }

  @media (max-width: 600px) {
    background-color: #d0d0d0;
  }
`;

const StyledFlexContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  @media only screen and (max-width: 1200px) {
    height: 60vh;
  }
`;

const ImageOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

const OverlayText = styled(Box)`
  position: absolute;
  top: 37%;
  left: 10%;
  text-align: left;
  padding: 20px;
  background-color: rgba(25, 118, 210, 0.5);

  @media (max-width: 900px) {
    top: 30%;
    left: 8%;
    padding: 15px;
  }

  @media (max-width: 600px) {
    top: 25%;
    left: 5%;
    padding: 10px;
    width: 80%;
  }
`;

const LineTextContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 40px;
    background-color: white;
    margin-right: 10px;

    @media (max-width: 600px) {
      height: 30px;
    }
  }
`;

const GlobalSlickDotsStyles = () => (
  <Global
    styles={css`
      .slick-dots {
        bottom: -30px;
      }
      .slick-dots li button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: grey;
        border: none;
      }
      .slick-dots li.slick-active button {
        background-color: #1976d2;
      }
      .slick-dots li button:before {
        font-size: 0;
      }
    `}
  />
);

export default function TrainBranding() {
  const interiorMirrorBrandingRef = useRef(null);
  const interiorPanelBrandingRef = useRef(null);
  const interiorGlassdoorBrandingRef = useRef(null);
  const foodTraybrandingRef = useRef(null);
  const trainWrappingRef = useRef(null);
  const trainEnginePaintingRef = useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      label: "INTERIOR TRAIN BRANDING",
      title: "Branding That Travels with You",
      description:
        "Make a lasting impression on passengers as they interact with your brand throughout their ride.",
    },
    {
      label: "EXTERIOR TRAIN BRANDING",
      title: "Branding That Travels with You",
      description:
        "Make a lasting impression on passengers as they interact with your brand throughout their ride.",
    },
  ];

  const interiorTrainBrandingCardData = [
    {
      title: "Interior Mirror Branding",
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        interiorMirrorBrandingRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "Interior Panel Branding",
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        interiorPanelBrandingRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "Interior Glassdoor Branding",
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        interiorGlassdoorBrandingRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "Food Tray Branding",
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        foodTraybrandingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const exteriorTrainBrandingCardData = [
    {
      title: "Train Wrapping",
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        trainWrappingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Train Engine Painting",
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        trainEnginePaintingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const TypographyText = {
    subtitle1: {
      fontWeight: 300,
      color: "white",
      fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
    },
    h4: {
      fontWeight: 700,
      color: "white",
      fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" },
      paddingTop: "20px",
    },
    h6: {
      color: "white",
      fontSize: { xs: "0.8rem", sm: "1rem", md: "1.3rem" },
    },
  };

  return (
    <ResponsiveBackground>
      <ImageContainer>
        <Box
          component="img"
          src={bannerImage}
          alt="Banner"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <ImageOverlay />
        <OverlayText>
          <LineTextContainer>
            <Typography variant="subtitle1" sx={TypographyText.subtitle1}>
              Our services
            </Typography>
          </LineTextContainer>

          <Typography variant="h4" sx={TypographyText.h4}>
            Train Branding
            <br /> Interior & Exterior Branding
          </Typography>
        </OverlayText>
      </ImageContainer>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}
      >
        TRAIN BRANDING
      </Typography>

      <StyledSliderContainer>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                backgroundColor: "#D9D9D9",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <Chip
                label={slide.label}
                sx={{
                  backgroundColor: "#1976D2",
                  color: "white",
                  fontWeight: "bold",
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                {slide.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "black" }}>
                {slide.description}
              </Typography>
            </Box>
          ))}
        </Slider>
        <GlobalSlickDotsStyles />
      </StyledSliderContainer>

      <Typography variant="h5" sx={{ fontWeight: 700, padding: "40px" }}>
        Interior Train Branding
      </Typography>

      <StyledFlexContainer>
        {interiorTrainBrandingCardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 0 30%",
              minWidth: "200px",
              maxWidth: "300px",
              margin: "0 auto",
              gridColumn: index === 3 ? "1 / 4" : "auto",
            }}
          >
            <CustomCard
              title={card.title}
              description={card.description}
              onViewMore={card.onViewMore}
            />
          </Box>
        ))}
      </StyledFlexContainer>

      <Typography variant="h5" sx={{ fontWeight: 700, padding: "40px" }}>
        Exterior Train Branding
      </Typography>

      <StyledFlexContainer>
        {exteriorTrainBrandingCardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 0 30%",
              minWidth: "200px",
              maxWidth: "300px",
              margin: "0 auto",
              gridColumn: index === 3 ? "1 / 4" : "auto",
            }}
          >
            <CustomCard
              title={card.title}
              description={card.description}
              onViewMore={card.onViewMore}
            />
          </Box>
        ))}
      </StyledFlexContainer>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px", color: "#1976D2" }}
      >
        Interior Train Branding
      </Typography>

      <Typography
        ref={interiorMirrorBrandingRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Interior Mirror Branding
      </Typography>

      <Typography
        ref={interiorPanelBrandingRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Interior Panel Branding
      </Typography>

      <Typography
        ref={interiorGlassdoorBrandingRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Interior Glassdoor Branding
      </Typography>

      <Typography
        ref={foodTraybrandingRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Food Tray Branding
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px", color: "#1976D2" }}
      >
        Exterior Train Branding
      </Typography>

      <Typography
        ref={trainWrappingRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Train Wrapping
      </Typography>

      <Typography
        ref={trainEnginePaintingRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Train Engine Painting
      </Typography>

      <VideoMarquee />
    </ResponsiveBackground>
  );
}
