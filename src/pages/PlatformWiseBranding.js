import * as React from "react";
import { useRef } from "react";
import { Typography, Box } from "@mui/material";
import bannerImage from "../images/contact-us.jpg";
import VideoMarquee from "../components/VideoMarquee";
import CustomCard from "./CustomCard";
import styled from "@emotion/styled";

const StyledFlexContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20%;
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

export default function PlatformWiseBranding() {
  const escalatorBrandingRef = useRef(null);
  const liftBrandingRef = useRef(null);
  const platformIndicationBoardsRef = useRef(null);
  const roofBoardsRef = useRef(null);
  const stationBoardsRef = useRef(null);
  const waterHydrantBoardsRef = useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      title: "Escalator Branding",
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        escalatorBrandingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Lift Branding",
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        liftBrandingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Platform Indication Boards",
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        platformIndicationBoardsRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "Roof Boards",
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        roofBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Station Boards",
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        stationBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Water Hydrant Boards",
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        waterHydrantBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <div style={{ backgroundColor: "#f0f0f0" }}>
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
            Platform Branding That Captures Attention
          </Typography>

          <Typography variant="h6" sx={TypographyText.h6}>
            Strategically placed ads on platforms enhance brand recognition and{" "}
            <br />
            engagement among passengers.
          </Typography>
        </OverlayText>
      </ImageContainer>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}
      >
        PLATFORM WISE BRANDING
      </Typography>

      <StyledFlexContainer>
        {cardData.map((card, index) => (
          <CustomCard
            key={index}
            title={card.title}
            description={card.description}
            onViewMore={card.onViewMore}
          />
        ))}
      </StyledFlexContainer>

      <Typography
        ref={escalatorBrandingRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Escalator Branding
      </Typography>

      <Typography
        ref={liftBrandingRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Lift Branding
      </Typography>

      <Typography
        ref={platformIndicationBoardsRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Platform Indication Boards
      </Typography>

      <Typography
        ref={roofBoardsRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Roof Boards
      </Typography>

      <Typography
        ref={stationBoardsRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Station Boards
      </Typography>

      <Typography
        ref={waterHydrantBoardsRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Water Hydrant Boards
      </Typography>

      <VideoMarquee />
    </div>
  );
}
