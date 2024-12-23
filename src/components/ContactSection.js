/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Typography, Box, useMediaQuery, Link } from "@mui/material";
import GetInTouch from "./GetInTouch";
import blackPhoneIcon from "/public/images/icons/black-phone.png";
import blackMailIcon from "/public/images/icons/black-mail.png";
import blackLocationIcon from "/public/images/icons/black-location.png";
import styled from "@emotion/styled";
import Image from "next/image";

const ContactContainer = styled(Box)`
  display: flex;
  padding: 0 15% 0 0;

  @media (max-width: 1200px) {
    padding: 0 5% 0 0;
  }

  @media (max-width: 830px) {
    flex-direction: column;
    padding: 0 0 30% 0;
    margin: 15px 20px 50px 20px;
    height: 100vh;
  }
`;

const BlueContainer = styled(Box)`
  flex: 0 0 35%;
  position: relative;
  left: 20px;
  background-color: #1976d2;
  color: white;
  z-index: 1;
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
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
`;

const InfoText = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  padding-left: 20px;
  padding-right: 30px;

  span:first-of-type {
    color: black;
  }

  @media (max-width: 830px) {
    text-align: center;
    padding-left: 0;
    padding-right: 0;
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

const IconContainer = styled(Image)`
  width: 10%;
  height: 10%;

  @media (max-width: 1200px) {
    width: 15%;
    height: 15%;
  }

  @media (max-width: 830px) {
    width: 7%;
    height: 7%;
  }

  @media (max-width: 600px) {
    width: 10%;
    height: 10%;
  }

  @media (max-width: 350px) {
    width: 15%;
    height: 15%;
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
            Don't Hesitate To <br />
            Contact Us
          </Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "60px",
              justifyContent: "space-between",
            }}
          >
            <InfoItem>
              <IconContainer src={blackPhoneIcon} alt="Phone Icon" />
              <InfoText>
                <span>Phone Number</span>
                <Link href="tel:+919842108493" underline="none" color="white">98421 08493</Link>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <IconContainer src={blackLocationIcon} alt="E-Mail Icon" />
              <InfoText>
                <span>Address</span>
                <span>
                  2, Shanmugam Pillai Thoppu 2nd Street,
                  West Ponnagaram Main Road, Madurai.&nbsp;625&nbsp;016.
                </span>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <IconContainer src={blackMailIcon} alt="Location Icon" />
              <InfoText>
                <span >Email</span>
                <Link href="mailto:essarrads@gmail.com" color="#fff" underline="none">
                essarrads@gmail.com
              </Link>
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
