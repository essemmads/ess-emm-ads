import React from 'react';
import Marquee from 'react-fast-marquee';
import { Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";


const videoSources = [
  "https://www.youtube.com/embed/WAM3E91iKWM?si=WG_k9gUf4cRlLGSZ",
  "https://www.youtube.com/embed/WAM3E91iKWM?si=WG_k9gUf4cRlLGSZ",
  "https://www.youtube.com/embed/WAM3E91iKWM?si=WG_k9gUf4cRlLGSZ",
  "https://www.youtube.com/embed/WAM3E91iKWM?si=WG_k9gUf4cRlLGSZ",
];

const Container = styled("div")`
  overflow: hidden;
  width: 100%;
  padding-bottom: 70px;
`;

const StyledMarquee = styled(Marquee)`
  background: linear-gradient(to top, #1976d2 50%, transparent 50%);

  @media (max-width: 600px) {
    height: auto;
  }
`;

const Title = styled(Typography)`
  font-weight: 400;
  padding: 40px;
  text-align: ${({ isHome }) => (isHome ? 'center' : 'left')};
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  margin: 40px;
`;

const VideoFrame = styled("iframe")`
  margin: 0 10px;
  width: 700px;
  height: calc(9 / 16 * 700px);
  border-radius: 20px;
  margin: 60px 30px;

  @media (max-width: 900px) {
    width: 500px;
    height: calc(9 / 16 * 500px);
  }

  @media (max-width: 600px) {
    width: 300px;
    height: calc(9 / 16 * 300px);
    margin: 60px 20px;
  }
`;

const SectionTitle = styled(Typography)`
  padding: 80px 0 30px 0;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

export default function VideoMarquee({ isHome = false }) {
  const navigate = useNavigate();
  return (
    <Container>
      {!isHome && (
        <Title variant="h5">Get Started Now!</Title>
      )}
      
      {!isHome && (
        <StyledButton variant="contained" color="primary" onClick={() => navigate("/contact-us")}>
          REQUEST A QUOTE
        </StyledButton>
      )}
      
      {!isHome && (
      <Title variant="h5" isHome={isHome}>
        Watch Latest videos!
      </Title>
      )}

    {isHome && (
      <SectionTitle>
        Watch Videos
      </SectionTitle>
    )}



      <StyledMarquee speed={50} pauseOnHover>
        {videoSources.map((src, index) => (
          <VideoFrame
            key={index}
            src={src}
            frameBorder="0"
            allowFullScreen
            title={`video-${index}`}
          />
        ))}
      </StyledMarquee>
    </Container>
  );
}
