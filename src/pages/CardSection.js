import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/system';

const FadingCard = styled(Card)`
  border-radius: 25px;
  background-color: #1976D2;
  color: white;
  position: relative;
  z-index: 1;
  height: 250px;
  width: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ side }) => (side === 'right' ? '25px -20px 25px 0' : '25px 0 25px -20px')};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    ${({ side }) => side}: 0;
    width: 70px;
    height: 100%;
    background: linear-gradient(
      to ${({ side }) => (side === 'right' ? 'left' : 'right')},
      #77b6f6,
      #1976D2
    );
    z-index: -1;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 8px 0;

    &::before {
      width: 100%;
      height: 70px;
      top: auto;
      ${({ side }) => (side === 'right' ? 'bottom' : 'top')}: 0;
      background: linear-gradient(to ${({ side }) => (side === 'right' ? 'top' : 'bottom')}, #77b6f6, #1976D2);
    }
  }
`;

const CenterCard = styled(Card)`
  border-radius: 25px;
  background-color: #1976D2;
  color: white;
  z-index: 2;
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const CardSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
        position: 'relative',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
      }}
    >
    
      <FadingCard side="right">
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700}>Phone Number</Typography>
          <Typography variant="body1">98421 08493</Typography>
        </CardContent>
      </FadingCard>

    
      <CenterCard>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700}>Address</Typography>
          <Typography variant="body1">
            2, Shanmugam Pillai Thoppu 2nd Street, West Ponnagaram Main Road. Madurai - 625 016.
          </Typography>
        </CardContent>
      </CenterCard>

      <FadingCard side="left">
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700}>Email</Typography>
          <Typography variant="body1">essarrads@gmail.com</Typography>
        </CardContent>
      </FadingCard>
    </Box>
  );
};

export default CardSection;
