import * as React from "react";
import { useRef } from "react";
import { Typography, Box } from "@mui/material";
import bannerImage from "../images/station-branding.png";
import VideoMarquee from "../components/VideoMarquee";
import CustomCard from "./CustomCard";
import styled from "@emotion/styled";

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

const StyledFlexContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20%;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
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

export default function StationBranding() {
  const stationBuildingRef = useRef(null);
  const reservationCounterRef = useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      title: "Station Building",
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        stationBuildingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Reservation Counter",
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        reservationCounterRef.current?.scrollIntoView({ behavior: "smooth" });
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
            Advertising Across the Rail Network
          </Typography>

          <Typography variant="h6" sx={TypographyText.h6}>
            Maximize your brand's visibility with eye-catching ads
            <br />
            in high-traffic railway hubs.
          </Typography>
        </OverlayText>
      </ImageContainer>

      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}
      >
        STATION BRANDING
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
        ref={stationBuildingRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Station Building
      </Typography>

      <Typography
        ref={reservationCounterRef}
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px" }}
      >
        Reservation Counter
      </Typography>

      <VideoMarquee />
    </div>
  );
}
