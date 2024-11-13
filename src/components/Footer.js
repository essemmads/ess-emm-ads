import React from 'react';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000000;
  color: white;
  padding: 20px 0;
  margin-top: 40px;
  overflow: hidden;

  @media (max-width: 750px) {
    padding: 20px 10px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 600px) {
    margin-top: 100%;
  }
`;


const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 750px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  @media (max-width: 750px) {
    align-items: flex-start;
    text-align: left;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid #444; // Adding a separator line
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;

  @media (max-width: 750px) {
    justify-content: center;
    width: 100%;
    padding-top: 20px;
    gap: 15px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ColumnContainer>
        <Column>
          <Typography variant="body1">| About ESS ARR ADS</Typography>
        </Column>

        <Column>
          <Typography variant="body1">| Quick Links</Typography>
          <Typography variant="body2" sx={{ marginTop: '10px', marginBottom: '10px' }}>Home</Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>About Us</Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>Our Services</Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>Contact Us</Typography>
        </Column>

        <Column>
          <Typography variant="body1">| Company</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '10px' }}>Madurai</Typography>
          <Typography variant="body2">
            2, Shanmugam Pillai Thoppu 2nd Street,<br/>West Ponnagaram Main Road, Madurai.
            <br />625 016
          </Typography>
        </Column>
      </ColumnContainer>

      <SocialIcons>
        <FacebookIcon sx={{ cursor: 'pointer' }} />
        <TwitterIcon sx={{ cursor: 'pointer' }} />
        <InstagramIcon sx={{ cursor: 'pointer' }} />
        <LinkedInIcon sx={{ cursor: 'pointer' }} />
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
