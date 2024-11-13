import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Card, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';
import indianOil from '../images/indianOil.png';
import bharath from '../images/bharath.png';
import hp from '../images/hp.png';

const imagesRow1 = new Array(15).fill(indianOil);
const imagesRow2 = new Array(15).fill(bharath);
const imagesRow3 = new Array(15).fill(hp);

const Container = styled(Box)`
  background-color: #f0f0f0;
  padding: 80px 0;
`;

const Title = styled(Typography)`
  padding-bottom: 80px;
  text-align: center;
`;

const StyledMarquee = styled(Marquee)`
  padding-bottom: 15px;
`;

const StyledCard = styled(Card)`
  width: 150px;
  margin: 0 10px;
  border-radius: 25px;
  box-shadow: none;

  @media (max-width: 600px) {
    width: 120px;
    margin: 0 5px;
  }
`;

const CardContentWrapper = styled(CardContent)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClientImage = styled("img")`
  width: 100%;
  height: auto;
`;

export default function Clients() {
  return (
    <Container>
      <Title variant="h4">Our Clients</Title>

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
