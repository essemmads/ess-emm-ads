import * as React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import bannerImage from "/public/images/contact-us-banner.jpg";
import contactUsIllustrator from "/public/images/contact-us-illustrator.png";
import GetInTouch from "../components/GetInTouch";
import CardSection from "../components/CardSection";
import styled from "@emotion/styled";
import VideoMarquee from "../components/VideoMarquee";
import Image from "next/image";


const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  height: 70vh;
`;

const OverlayText = styled(Box)`
  position: absolute;
  top: 30%;
  left: 10%;
  transform: translateY(-50%);
  color: black;
  text-align: left;

  @media (max-width: 900px) {
    top: 40%;
    left: 5%;
  }

  @media (max-width: 750px) {
    left: 5%;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    top: 25%;
  }
`;

const LineTextContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 40px;
    background-color: black;
    margin-right: 10px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  display: block;

  @media (max-width: 900px) {
    display: none;
  }
`;

const IllustratorContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled(Box)`
  padding: 20px;
  background-color: #1976d2;
  border-radius: 13%;
  position: relative;
  overflow: visible;
  box-shadow: 3;
  width: 70%;
  height: auto;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
    height: auto;
  }
`;

const StyledGrid = styled(Grid)`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 900px) {
    margin: 20% auto;
  }
`;

export default function ContactUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ImageContainer>
        <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <Image
              src={bannerImage}
              alt="Banner"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
            />
        <OverlayText>
          <LineTextContainer>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 300,
                color: "black",
                fontSize: { xs: "0.8rem", sm: "1.5rem" },
              }}
            >
              Contact us
            </Typography>
          </LineTextContainer>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "black",
              fontSize: { xs: "1.2rem", sm: "2rem" },
            }}
          >
            We Look Forward To
            <br />
            Assisting You
          </Typography>
        </OverlayText>
        </Box>
      </ImageContainer>

      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}
      >
        CONTACT US
      </Typography>

      <Container maxWidth="lg" style={{ padding: "0" }}>
        <CardSection />
      </Container>

      <StyledGrid container spacing={1} justifyContent="space-around">
      <IllustratorContainer item xs={12} md={4}>
        <StyledImage
          src={contactUsIllustrator}
          alt="Contact Illustration"
          width="100%"
          height="auto"
        />
      </IllustratorContainer>


        <Grid
          item
          xs={12}
          md={6}
          paddingRight={1}
          style={{ alignContent: "center", justifyItems: "center" }}
        >
          <StyledBox>
            <Box
              sx={{
                position: "absolute",
                bottom: "-85px",
                right: 0,
                borderLeft: "70px solid transparent",
                borderTop: "140px solid #1976D2",
              }}
            />
            <GetInTouch isContactUsSection={true} />
          </StyledBox>
        </Grid>
      </StyledGrid >
      <VideoMarquee isContactUsSection={true}/>
    </div>
  );
}
