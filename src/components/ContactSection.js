import React from 'react';
import { Typography, Box } from '@mui/material';
import GetInTouch from '../pages/GetInTouch';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import styled from '@emotion/styled';

const ContactContainer = styled(Box)`
  display: flex;
  height: 100vh;
  padding: 15% 15% 0 0;

  @media (max-width: 1200px) {
  padding: 30% 15% 0 0;
  height: 80vh;
  }

  @media (max-width: 830px) {
    flex-direction: column;
    padding: 30% 0 30% 0;
  }
`;

const BlueContainer = styled(Box)`
  flex: 0 0 30%;
  position: relative;
  bottom: 15%;
  left: 20px;
  background-color: #1976d2;
  color: white;
  z-index: 1;
  height: 65vh;
  margin-left: 10%;
  padding: 20px;

  @media (max-width: 830px) {
    flex: none;
    margin-left: 0;
    width: inherit;
    height: auto;
    bottom: 0;
    left: 0;
    padding: 20px;
  }
`;

const GetInTouchContainer = styled(Box)`
  flex: 1;
  background-color: #f4f5f9;
  position: relative;
  height: 65vh;
  width: 50%;
  margin-left: -20%;
  display: flex;
  align-items: center;

  @media (max-width: 830px) {
    flex: none;
    width: 100%;
    height: auto;
    margin-left: 0;
  }
`;

const GetInTouchWrapper = styled("div")`
  padding-left: 30%;

  @media (max-width: 830px) {
    padding-left: 0;
  }
`;

const InfoItem = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 830px) {
  width: inherit;
  }
`;

const InfoText = styled("div")`
  display: flex;
  flex-direction: column;

  span:first-of-type {
    color: black;
  }
`;

const Title = styled(Typography)`
  font-size: 3rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 750px) {
    text-align: center;
  }
`;

const ContactSection = () => {
  return (
    <ContactContainer>
      <BlueContainer>
        <Title variant="h3" align="left" gutterBottom>
          Don't hesitate to contact us
        </Title>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '60px' }}>
          <InfoItem>
            <PhoneIcon style={{ marginRight: '10px', fontSize: '24px', color: 'white' }} />
            <InfoText>
              <span>Phone Number</span>
              <span>98421 08493</span>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <HomeIcon style={{ marginRight: '10px', fontSize: '24px', color: 'white' }} />
            <InfoText>
              <span>Address</span>
              <span>2, Shanmugam Pillai Thoppu 2nd Street, West Ponnagaram Main Road, Madurai - 625 016.</span>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <HomeIcon style={{ marginRight: '10px', fontSize: '24px', color: 'white' }} />
            <InfoText>
              <span>Email</span>
              <span>essarrads@gmail.com</span>
            </InfoText>
          </InfoItem>
        </div>
      </BlueContainer>

      <GetInTouchContainer>
        <GetInTouchWrapper>
          <GetInTouch />
        </GetInTouchWrapper>
      </GetInTouchContainer>
    </ContactContainer>
  );
};

export default ContactSection;
