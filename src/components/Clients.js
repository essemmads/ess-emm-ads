import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";
import client_logo_1 from "/public/images/client-logo/client_logo_1.png";
import client_logo_2 from "/public/images/client-logo/client_logo_2.png";
import client_logo_3 from "/public/images/client-logo/client_logo_3.png";
import client_logo_4 from "/public/images/client-logo/client_logo_4.png";
import client_logo_5 from "/public/images/client-logo/client_logo_5.png";
import client_logo_6 from "/public/images/client-logo/client_logo_6.png";
import client_logo_7 from "/public/images/client-logo/client_logo_7.png";
import client_logo_8 from "/public/images/client-logo/client_logo_8.png";
import client_logo_9 from "/public/images/client-logo/client_logo_9.png";
import client_logo_10 from "/public/images/client-logo/client_logo_10.png";
import client_logo_11 from "/public/images/client-logo/client_logo_11.png";
import client_logo_12 from "/public/images/client-logo/client_logo_12.png";
import client_logo_13 from "/public/images/client-logo/client_logo_13.png";
import client_logo_14 from "/public/images/client-logo/client_logo_14.png";
import client_logo_15 from "/public/images/client-logo/client_logo_15.png";
import client_logo_16 from "/public/images/client-logo/client_logo_16.png";
import client_logo_17 from "/public/images/client-logo/client_logo_17.png";
import client_logo_18 from "/public/images/client-logo/client_logo_18.png";
import client_logo_19 from "/public/images/client-logo/client_logo_19.png";
import client_logo_20 from "/public/images/client-logo/client_logo_20.png";
import client_logo_21 from "/public/images/client-logo/client_logo_21.png";
import client_logo_22 from "/public/images/client-logo/client_logo_22.png";
import client_logo_23 from "/public/images/client-logo/client_logo_23.png";
import client_logo_24 from "/public/images/client-logo/client_logo_24.png";
import client_logo_25 from "/public/images/client-logo/client_logo_25.png";
import client_logo_26 from "/public/images/client-logo/client_logo_26.png";
import Image from "next/image";

const imagesRow1 = [
  client_logo_1,
  client_logo_2,
  client_logo_3,
  client_logo_4,
  client_logo_5,
  client_logo_6,
  client_logo_7,
  client_logo_8,
  client_logo_9,
  client_logo_1,
  client_logo_2,
  client_logo_3,
  client_logo_4,
  client_logo_5,
];
const imagesRow2 = [
  client_logo_10,
  client_logo_11,
  client_logo_12,
  client_logo_13,
  client_logo_14,
  client_logo_15,
  client_logo_16,
  client_logo_17,
  client_logo_18,
  client_logo_9,
  client_logo_10,
  client_logo_11,
  client_logo_12,
  client_logo_13,
  client_logo_14,
];
const imagesRow3 = [
  client_logo_19,
  client_logo_20,
  client_logo_21,
  client_logo_22,
  client_logo_23,
  client_logo_24,
  client_logo_25,
  client_logo_26,
  client_logo_17,
  client_logo_18,
  client_logo_19,
  client_logo_21,
  client_logo_22,
  client_logo_23,
  client_logo_24,
];

const Container = styled(Box)`
  background-color: #f0f0f0;
  padding: 80px 0;
`;

const Title = styled(Typography)`
  padding-bottom: 80px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

const StyledMarquee = styled(Marquee)`
  padding-bottom: 25px;
`;

const StyledCard = styled(Card)`
  width: 150px;
  margin: 0 10px;
  border-radius: 25px;
  box-shadow: none;
  height: 16vh;
  display: flex;
  self-align: center;

  @media (max-width: 600px) {
    width: 120px;
    margin: 0 5px;
  }
`;

const CardContentWrapper = styled(CardContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ClientImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export default function Clients() {
  return (
    <Container>
      <Title>Our Clients</Title>

      <StyledMarquee speed={50} pauseOnHover>
        {imagesRow1.map((src, index) => (
          <StyledCard key={index}>
            <CardContentWrapper>
              <ClientImage src={src} alt={`Row 1 - ${index + 1}`} />
            </CardContentWrapper>
          </StyledCard>
        ))}
      </StyledMarquee>

      <StyledMarquee speed={50} direction="right" pauseOnHover>
        {imagesRow2.map((src, index) => (
          <StyledCard key={index}>
            <CardContentWrapper>
              <ClientImage src={src} alt={`Row 2 - ${index + 1}`} />
            </CardContentWrapper>
          </StyledCard>
        ))}
      </StyledMarquee>

      <StyledMarquee speed={50} pauseOnHover>
        {imagesRow3.map((src, index) => (
          <StyledCard key={index}>
            <CardContentWrapper>
              <ClientImage src={src} alt={`Row 3 - ${index + 1}`} />
            </CardContentWrapper>
          </StyledCard>
        ))}
      </StyledMarquee>
    </Container>
  );
}
