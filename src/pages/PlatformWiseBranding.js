import * as React from "react";
import { useRef } from "react";
import {
  Typography,
  Box,
} from "@mui/material";
import contactImage from "../images/contact-us.jpg";
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

export default function PlatformWiseBranding() {
  const escalatorBrandingRef = useRef(null);
  const liftBrandingRef = useRef(null);
  const platformIndicationBoardsRef = useRef(null);
  const roofBoardsRef = useRef(null);
  const stationBoardsRef = useRef(null);
  const waterHydrantBoardsRef = useRef(null);

  const cardData = [
    {
      title: "Escalator Branding",
      description: "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        escalatorBrandingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Lift Branding",
      description: "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        liftBrandingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
      {
        title: "Platform Indication Boards",
        description: "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
        onViewMore: () => {
            platformIndicationBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        title: "Roof Boards",
        description: "Description for Station Building goes here. This can include key features, specifications, etc.",
        onViewMore: () => {
            roofBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        title: "Station Boards",
        description: "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
        onViewMore: () => {
            stationBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        title: "Water Hydrant Boards",
        description: "Description for Station Building goes here. This can include key features, specifications, etc.",
        onViewMore: () => {
            waterHydrantBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
        },
      },
  ];

  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <Box
        component="img"
        src={contactImage}
        alt="Banner"
        sx={{
          width: "100%",
          height: "auto",
          marginBottom: "40px",
        }}
      />
      <Typography variant="h4" align="center" sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}>
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

      <Typography ref={escalatorBrandingRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
      Escalator Branding
      </Typography>

      <Typography ref={liftBrandingRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
        Lift Branding
      </Typography>

      <Typography ref={platformIndicationBoardsRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
      Platform Indication Boards
      </Typography>

      <Typography ref={roofBoardsRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
      Roof Boards
      </Typography>

      <Typography ref={stationBoardsRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
      Station Boards
      </Typography>

      <Typography ref={waterHydrantBoardsRef} variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
      Water Hydrant Boards
      </Typography>

      <VideoMarquee />
    </div>
  );
}
