import * as React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import styled from "@emotion/styled";
import aboutImage from "/public/images/bg-vector.png";
import sideImage from "/public/images/illustrator.png";
import essArrLogo from "/public/images/ess-arr-logo.png";
import { useRouter } from "next/router";
import Image from "next/image";

// Full container for the component
const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 80px 0;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin: 20px 0;
  }
`;

// Fullscreen background image
const BackgroundImageContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    display: none; /* Hide background on smaller screens */
  }
`;

// Main wrapper for the content
const ContentWrapper = styled(Box)`
  position: relative;
  z-index: 2;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  @media (max-width: 900px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`;

const StyledCard = styled(Card)`
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 40%;
  padding: 40px;
  position: relative;
  border-radius: 10px;
  min-height: fit-content;
  overflow: visible;

  @media (max-width: 900px) {
    width: 90%;
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    width: auto;
    padding: 20px;
  }
`;

const SideImageContainer = styled(Box)`
  width: 40%;
  z-index: 2;
  padding-left: 20px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 900px) {
    width: 80%;
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const Divider = styled(Typography)`
  color: #1976d2;
  font-weight: bold;
  font-size: 24px;
  margin-right: 8px;
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: #1976d2;
  font-size: 24px;
`;

const Description = styled(Typography)`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const StyledButton = styled(Button)`
  padding: 12px 24px;
  font-size: 18px;
  background-color: #1976d2;
  color: white;

  &:hover {
    background-color: #00388c;
  }
`;

export default function About() {
  const router = useRouter();

  return (
    <StyledContainer id="aboutUsSection">
      {/* Background Image */}
      <BackgroundImageContainer>
        <Image
          src={aboutImage}
          alt="About Background Image"
          layout="fill"
          priority
        />
      </BackgroundImageContainer>

      {/* Main Content */}
      <ContentWrapper>
        <StyledCard variant="outlined">
          <CardContent>
            <Box display="flex" justifyContent="center" marginBottom="20px">
              <Image
                src={essArrLogo}
                alt="Ess Emm Railway Ads logo"
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              sx={{ marginBottom: "16px", paddingTop: "20px" }}
            >
              <Divider>|</Divider>
              <Title>About</Title>
            </Box>

            <Description>
              In the ever-evolving world of advertising, staying ahead of the
              curve is essential. With 25 years of experience, we’ve carved out
              a niche that merges creativity with strategic solutions. Our
              journey began in the vibrant city of Madurai, where our passion
              for innovative advertising took root. Today, we proudly oversee
              operations in more than 25 railway stations across Tamil Nadu,
              transforming the way brands connect with their audiences.
            </Description>

            <Box display="flex" justifyContent="center">
              <StyledButton
                variant="contained"
                onClick={() => router.push("/about-us")}
              >
                MORE ABOUT US
              </StyledButton>
            </Box>
          </CardContent>
        </StyledCard>

        {/* Side Image */}
        <SideImageContainer>
          <Image
            src={sideImage}
            alt="Side Graphic"
            width={400}
            height={400}
          />
        </SideImageContainer>
      </ContentWrapper>
    </StyledContainer>
  );
}
