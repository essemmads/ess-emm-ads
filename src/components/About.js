import * as React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import styled from "@emotion/styled";
import aboutImage from "../images/contact-us-bg.jpg";

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 80px 0;
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
`;

const StyledCard = styled(Card)`
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 30%;
  padding: 20px;
  position: relative;
  margin-right: 5%;
  z-index: 2;

  @media only screen and (max-width: 750px) {
    width: 50%;
  }
  
  @media only screen and (max-width: 450px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Divider = styled(Typography)`
  color: #004aad;
  font-weight: bold;
  font-size: 24px;
  margin-right: 8px;
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: #004aad;
  font-size: 24px;
`;

const Description = styled(Typography)`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  padding: 10px 15px;
  font-size: 14px;
`;

export default function About() {
  return (
    <StyledContainer>
      <BackgroundImage />
      
      <StyledCard variant="outlined">
        <CardContent>
          <Box display="flex" alignItems="center" sx={{ marginBottom: "16px" }}>
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
            <StyledButton variant="contained" color="primary">
              More About Us
            </StyledButton>
          </Box>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );
}
