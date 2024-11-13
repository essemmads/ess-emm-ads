import * as React from "react";
import { Typography, Box } from "@mui/material";
import contactImage from "../images/about-us.png";
import styled from "@emotion/styled";
import VideoMarquee from "../components/VideoMarquee";

const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    height: 250px;
  }
`;

const ImageOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const OverlayText = styled(Box)`
  position: absolute;
  top: 30%;
  left: 10%;
  color: white;
  text-align: left;

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
    background-color: white;
    margin-right: 10px;
  }
`;

export default function AboutUs() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <ImageContainer>
        <Box
          component="img"
          src={contactImage}
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
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 300,
                color: "white",
                fontSize: { xs: '0.8rem', sm: '1.5rem' },
              }}
            >
              About us
            </Typography>
          </LineTextContainer>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "white",
              fontSize: { xs: '1.2rem', sm: '2rem' },
            }}
          >
            Passionate About What We Do
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: '0.8rem', sm: '1rem' },
            }}
          >
            Every project we undertake is designed to <br />create real impact for our clients.
          </Typography>
        </OverlayText>
      </ImageContainer>

      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}
      >
        About Us
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, padding: '40px' }}>
        Management
      </Typography>

      <VideoMarquee />
    </div>
  );
}
