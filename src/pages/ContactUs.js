import * as React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import contactImage from "../images/contact-us.png";
import GetInTouch from "./GetInTouch";
import CardSection from "./CardSection";
import styled from "@emotion/styled";
import VideoMarquee from "../components/VideoMarquee";

const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
s
  @media (max-width: 900px) {
    height: 300px;
  }

  @media (max-width: 600px) {
    height: 250px;
  }
`;

const BannerImage = styled(Box)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayText = styled(Box)`
  position: absolute;
  top: 30%;
  left: 10%;
  transform: translateY(-50%);
  color: black;
  text-align: left;

  @media (max-width: 900px) {
    top: 40%;
    left: 5%;
  }

  @media (max-width: 750px) {
    left: 5%;
    font-size: 0.9rem;
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

export default function ContactUs() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <ImageContainer>
        <BannerImage component="img" src={contactImage} alt="Banner" />
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
              Contact us
            </Typography>
          </LineTextContainer>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "black",
              fontSize: { xs: '1.2rem', sm: '2rem'},
            }}
          >
            We Look Forward To<br />Assisting You
          </Typography>
        </OverlayText>
      </ImageContainer>

      <Container maxWidth="lg" style={{ padding: "0" }}>
        <CardSection />
      </Container>

      <Grid
        container
        spacing={1}
        justifyContent="space-around"
        sx={{ margin: "10% auto", width: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <ImageContainer component="img" src={contactImage} alt="Contact Illustration" />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '20px',
              backgroundColor: '#1976D2',
              borderRadius: '25px',
              position: 'relative',
              overflow: 'visible',
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: '-60px',
                right: 0,
                borderLeft: '80px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '100px solid #1976D2',
              }}
            />
            <GetInTouch isContactUsSection={true} />
          </Box>
        </Grid>
      </Grid>
      <VideoMarquee />
    </div>
  );
}
