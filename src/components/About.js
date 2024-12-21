import * as React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import styled from "@emotion/styled";
import aboutImage from "/public/images/bg-vector.png";
import sideImage from "/public/images/illustrator.png";
import essArrLogo from "/public/images/ess-arr-logo.png";
import { useRouter } from "next/router";
import Image from "next/image";

// Styled container for the full background image
const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 80px 0;
  box-sizing: border-box;

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

// Container for content positioning
const ContentWrapper = styled(Box)`
  position: relative;
  z-index: 2;
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  
  @media only screen and (max-width: 900px) {
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
  z-index: 2;
  border-radius: 10px;

  @media only screen and (max-width: 900px) {
    width: 60%;
  }
  
  @media only screen and (max-width: 500px) {
    width: auto;
    padding: 20px;
  }
`;

const SideImageContainer = styled(Box)`
  width: 50%;
  z-index: 2;
  padding-left: 20px;

  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 900px) {
    width: 80%;
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const Divider = styled(Typography)`
  color: #1976D2;
  font-weight: bold;
  font-size: 24px;
  margin-right: 8px;
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: #1976D2;
  font-size: 24px;
`;

const Description = styled(Typography)`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  padding: 12px 24px;
  font-size: 18px;
  background-color: #1976D2;
  color: white;

  &:hover {
    background-color: #00388c;
  }
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;

  @media (max-width: 900px) {
    display: none;
  }
`;

export default function About() {
  const router = useRouter();

  return (
    <StyledContainer id="aboutUsSection">
      <BackgroundImageContainer>
        <Image
          src={aboutImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
      </BackgroundImageContainer>

      <ContentWrapper>
        <StyledCard variant="outlined">
          <CardContent>
            <Image
              src={essArrLogo}
              alt="Ess Emm Railway Ads"
              style={{ display: "flex", justifySelf: "center", width: "50%", height: "50%" }}
            />

            <Box display="flex" alignItems="center" sx={{ marginBottom: "16px", paddingTop: "50px" }}>
              <Divider variant="h6">|</Divider>
              <Title variant="h6">About</Title>
            </Box>

            <Description variant="body2">
              In the ever-evolving world of advertising, staying ahead of the curve is essential. With 25 years of experience, we’ve carved out a niche that merges creativity with strategic solutions. Our journey began in the vibrant city of Madurai, where our passion for innovative advertising took root. Today, we proudly oversee operations in more than 25 railway stations across Tamil Nadu, transforming the way brands connect with their audiences.
            </Description>

            <Box display="flex" justifyContent="center">
              <StyledButton variant="contained" onClick={() => router.push('/about-us')}>
                MORE ABOUT US
              </StyledButton>
            </Box>
          </CardContent>
        </StyledCard>

        <SideImageContainer>
          <Image src={sideImage} alt="Side Graphic" />
        </SideImageContainer>
      </ContentWrapper>
    </StyledContainer>
  );
}
