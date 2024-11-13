import * as React from "react";
import { useRef } from "react";
import { Typography, Box } from "@mui/material";
import contactImage from "../images/outdoor-ad.png";
import VideoMarquee from "../components/VideoMarquee";
import CustomCard from "./CustomCard";
import styled from '@emotion/styled';

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
  top: 30%;
  left: 10%;
  color: black;
  text-align: left;
  z-index: 2;

  @media (max-width: 600px) {
    left: 5%;
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
    background-color: black;
    margin-right: 10px;
  }
`;

const ImageOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
`;

export default function OutdoorAdvertising() {
  const pathwayRef = useRef(null);
  const billboardsRef = useRef(null);
  const entranceArchRef = useRef(null);
  const fourSidePoleRef = useRef(null);
  const poleKioskRef = useRef(null);
  const railwayCrossingRef = useRef(null);

  const cardData = [
    {
      title: "Pathway",
      description: "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        pathwayRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Billboards",
      description: "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        billboardsRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
      {
        title: "Entrance Arch",
        description: "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
        onViewMore: () => {
          entranceArchRef.current?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        title: "Four Side Pole",
        description: "Description for Station Building goes here. This can include key features, specifications, etc.",
        onViewMore: () => {
          fourSidePoleRef.current?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        title: "Pole Kiosk",
        description: "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
        onViewMore: () => {
          poleKioskRef.current?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        title: "Railway Crossing",
        description: "Description for Station Building goes here. This can include key features, specifications, etc.",
        onViewMore: () => {
          railwayCrossingRef.current?.scrollIntoView({ behavior: "smooth" });
        },
      },
  ];

  return (
    <div style={{ backgroundColor: "#f0f0f0", position: "relative" }}>
      <Box
        component="div"
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          marginBottom: "40px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={contactImage}
          alt="Banner"
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
        <ImageOverlay />
        <OverlayText>
          <LineTextContainer>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 300,
                color: "black",
                fontSize: { xs: '0.8rem', sm: '1.5rem' },
              }}
            >
              Our services
            </Typography>
          </LineTextContainer>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "black",
              fontSize: { xs: '1.2rem', sm: '2rem' },
              paddingTop: "40px"
            }}
          >
            High-Impact Outdoor Advertising
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontSize: { xs: '0.8rem', sm: '1.3rem' },
            }}
          >
           Stand out in busy railway environments with vibrant 
           and compelling outdoor advertisements.
          </Typography>
        </OverlayText>
      </Box>

      <Typography variant="h4" align="center" sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}>
        OUTDOOR ADVERTISING
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

      <Typography ref={pathwayRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
        Pathway
      </Typography>
      <Typography ref={billboardsRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
        Billboards
      </Typography>
      <Typography ref={entranceArchRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
        Entrance Arch
      </Typography>
      <Typography ref={fourSidePoleRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
        Four Side Pole
      </Typography>
      <Typography ref={poleKioskRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
        Pole Kiosk
      </Typography>
      <Typography ref={railwayCrossingRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
        Railway Crossing
      </Typography>

      <VideoMarquee />
    </div>
  );
}
