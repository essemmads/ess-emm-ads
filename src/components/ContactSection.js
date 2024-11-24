import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import GetInTouch from '../pages/GetInTouch';
import blackPhoneIcon from '../images/black-phone.png';
import blackMailIcon from '../images/black-mail.png';
import blackLocationIcon from '../images/black-location.png';
import styled from '@emotion/styled';

const ContactContainer = styled(Box)`
  display: flex;
  height: 100vh;
  padding: 0 15% 0 0;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    padding: 0 5% 0 0;
  }

  @media (max-width: 830px) {
    flex-direction: column;
    padding: 0 0 30% 0;
    margin: 15px 0 50px 0;
  }
`;

const BlueContainer = styled(Box)`
  flex: 0 0 35%;
  position: relative;
  bottom: 15%;
  left: 20px;
  background-color: #1976d2;
  color: white;
  z-index: 1;
  height: 65vh;
  margin-left: 10%;
  padding: 20px;
  bottom: 40px;

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
    height: 60vh;
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
  padding-left: 20px;

  @media (max-width: 830px) {
    width: inherit;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }
`;

const InfoText = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
  padding-right: 30px;

  span:first-of-type {
    color: black;
  }

  @media (max-width: 600px) {
    text-align: center;
    padding-left: 20px;
  }
`;

const Title = styled(Typography)`
  font-size: 2rem;
  margin: 10% 0 0 5%;

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media (max-width: 600px) {
    text-align: center;
    margin: 10% 0 0 0;
  }
`;

const SectionTitle = styled(Typography)`
  padding: 80px 0;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

const IconContainer = styled.img`
  width: 10%;

  @media (max-width: 1200px) {
    width: 15%;
  }

  @media (max-width: 830px) {
    width: 7%;
  }
  
   @media (max-width: 600px) {
    width: 10%;
  }

  @media (max-width: 350px) {
    width: 15%;
  }
`;

const ContactSection = () => {
  const isMobile = useMediaQuery("(max-width:830px)");

  return (
    <div id="contactUsSection">
      <SectionTitle>Contact Us</SectionTitle>
    <ContactContainer>
      <BlueContainer>
        <Title variant="h3" align={isMobile ? "center" : "left"} gutterBottom>
          Don't Hesitate To <br/>Contact Us
        </Title>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '60px', justifyContent: "space-between" }}>
          <InfoItem>
            <IconContainer src={blackPhoneIcon} alt="Phone Icon"/>
            <InfoText>
              <span>Phone Number</span>
              <span>98421 08493</span>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <IconContainer src={blackLocationIcon} alt="E-Mail Icon"/>
            <InfoText>
              <span>Address</span>
              <span>2, Shanmugam Pillai Thoppu 2nd Street, <br/>West Ponnagaram Main Road, Madurai - 625 016.</span>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <IconContainer src={blackMailIcon} alt="Location Icon"/>
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
    </div>
  );
};

export default ContactSection;
