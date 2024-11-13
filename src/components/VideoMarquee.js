import React from 'react';
import Marquee from 'react-fast-marquee';
import { Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

const videoSources = [
  "https://www.youtube.com/embed/WAM3E91iKWM?si=WG_k9gUf4cRlLGSZ",
  "https://www.youtube.com/embed/WAM3E91iKWM?si=WG_k9gUf4cRlLGSZ",
  "https://www.youtube.com/embed/WAM3E91iKWM?si=WG_k9gUf4cRlLGSZ",
  "https://www.youtube.com/embed/WAM3E91iKWM?si=WG_k9gUf4cRlLGSZ",
];

const Container = styled("div")`
  overflow: hidden;
  width: 100%;
`;

const StyledMarquee = styled(Marquee)`
  background: linear-gradient(to top, #1976d2 50%, transparent 50%);
  height: 50vh;

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

  @media (max-width: 600px) {
    width: 90%;
    height: auto;
  }
`;

export default function VideoMarquee({ isHome = false }) {
  return (
    <Container>
      {!isHome && (
        <Title variant="h5">Get Started Now!</Title>
      )}
      
      {!isHome && (
        <StyledButton variant="contained" color="primary">
          REQUEST A QUOTE
        </StyledButton>
      )}
      
      <Title variant="h5" isHome={isHome}>
        Watch Latest videos!
      </Title>

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
