import * as React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import styled from "@emotion/styled";
import aboutImage from "../images/bg-vector.png";
import sideImage from "../images/illustrator.png";
import essArrLogo from "../images/ess-arr-logo.png";
import { useNavigate } from "react-router-dom";


const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 80px 0;
  box-sizing: border-box;

  @media only screen and (max-width: 750px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const BackgroundImage = styled(Box)`
  background-image: url(${aboutImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.9;

  @media only screen and (max-width: 750px) {
    display: none;
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

  @media only screen and (max-width: 750px) {
    width: 60%;
  }
  
  @media only screen and (max-width: 500px) {
    width: 100%;
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

  @media only screen and (max-width: 750px) {
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
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  padding: 12px 24px;
  font-size: 14px;
  background-color: #1976D2;
  color: white;

  &:hover {
    background-color: #00388c;
  }
`;

export default function About() {
  const navigate = useNavigate();

  return (
    <StyledContainer id="aboutUsSection">
      <BackgroundImage />

      <StyledCard variant="outlined">
        <CardContent>
        <img src={essArrLogo} alt="Ess Emm Railway Ads" style={{display: "flex", justifySelf: "center", width: "50%"}}/>


          <Box display="flex" alignItems="center" sx={{ marginBottom: "16px", paddingTop: "50px" }}>
            <Divider variant="h6">|</Divider>
            <Title variant="h6">About</Title>
          </Box>

          <Description variant="body2">
            In the ever-evolving world of advertising, staying ahead of the
            curve is essential. With 25 years of experience, we’ve carved out a
            niche that merges creativity with strategic solutions. Our journey
            began in the vibrant city of Madurai, where our passion for
            innovative advertising took root. Today, we proudly oversee
            operations in more than 25 railway stations across Tamil Nadu,
            transforming the way brands connect with their audiences.
          </Description>

          <Box display="flex" justifyContent="center">
            <StyledButton variant="contained" onClick={() => navigate('/about-us')}>
              MORE ABOUT US
            </StyledButton>
          </Box>
        </CardContent>
      </StyledCard>

      <SideImageContainer>
        <img src={sideImage} alt="Side Graphic" />
      </SideImageContainer>
    </StyledContainer>
  );
}
