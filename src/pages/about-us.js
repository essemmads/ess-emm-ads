/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { Typography, Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import AboutUsBgImg from "/public/images/about-us/about-us-bg.png";
import AboutUsImg1 from "/public/images/about-us/about-us-1.png";
import AboutUsImg2 from "/public/images/about-us/about-us-2.png";
import AboutUsImg3 from "/public/images/about-us/about-us-3.png";
import AboutUsImg4 from "/public/images/about-us/about-us-4.png";
import AboutUsImg5 from "/public/images/about-us/about-us-5.png";
import AboutUsImg6 from "/public/images/about-us/about-us-6.png";
import AboutUsImg7 from "/public/images/about-us/about-us-7.png";
import AboutUsImg8 from "/public/images/about-us/about-us-8.png";
import AboutUsImg9 from "/public/images/about-us/about-us-9.png";
import essArrLogo from "/public/images/ess-arr-logo-white.png";
import VideoMarquee from "../components/VideoMarquee";
import Image from "next/image";


const StyledTextGridContainer = styled(Grid)`
  margin-top: 20px;
  align-items: center;
`;

const StyledLeftGrid = styled(Grid)`
  padding-left: 0;
  padding-top: 0;
  margin-left: 2%;
`;

const StyledTypographyLeft = styled(Typography)`
  font-size: 24px;
  color: #ffffff;
  font-weight: 100;
`;

const StyledRightTypography = styled(Typography)`
  font-size: 20px;
  color: #ffffff;
  line-height: 1.6;
`;

const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  @media (max-width: 1600px) {
    height: 110vh;
  }

  @media (max-width: 800px) {
    height: 160vh;
  }

  @media (max-width: 470px) {
    height: 200vh;
  }

  @media (max-width: 350px) {
    height: 240vh;
  }
`;


const TextOverlay = styled(Box)`
  position: absolute;
  top: 1%;
  left: 5%;
  color: #ffffff;
  padding: 20px;
  max-width: 85%;
  
  @media (max-width: 1000px) {
    max-width: 90%;
  }
`;

const StyledHeading = styled(Typography)`
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 20px;
  align-text: left;

  @media (max-width: 400px) {
    font-size: 35px;
  }
`;

const StyledSubText = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
`;

const StyledBox = styled(Box)`
  margin: 40px;

  @media (max-width: 750px) {
    padding: 0;
    margin: 10px;
  }
`;

const StyledGridContainer = styled(Grid)`
  margin-top: 20px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled("div")`
display: flex;
justify-content: center;
margin-top: 20px;
  img {
    width: 20%;
    height: auto;

    @media (max-width: 950px) {
     width: 40%;
    }
    @media (max-width: 600px) {
     width: 60%;
    }
  }
`;

export default function AboutUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", margin: "5% 0", fontWeight: 100 }}
      >
        ABOUT US
      </Typography>

      <Box sx={{ backgroundColor: "#1976D2", padding: "20px" }}>
      <LogoContainer>
        <Image
          src={essArrLogo}
          alt="Ess Emm Railway Ads logo"
          style={{ cursor: "pointer" }}
        />
      </LogoContainer>

        <StyledTextGridContainer container spacing={4}>
          <StyledLeftGrid item xs={12} md={5}>
            <StyledTypographyLeft variant="body1">
              “ Our Journey from Madurai to{" "}
              <span style={{ color: "#B31F58" }}>Tamil Nadu</span> ”
            </StyledTypographyLeft>
          </StyledLeftGrid>
          <Grid item xs={12} md={6}>
            <StyledRightTypography variant="body1">
              In the ever-evolving world of advertising, staying ahead of the
              curve is essential. With 25 years of experience, we’ve carved out
              a niche that merges creativity with strategic solutions. Our
              journey began in the vibrant city of Madurai, where our passion
              for innovative advertising took root. Today, we proudly oversee
              operations in more than 25 railway stations across Tamil Nadu,
              transforming the way brands connect with their audiences.
            </StyledRightTypography>
          </Grid>
        </StyledTextGridContainer>

        <StyledTextGridContainer container spacing={4}>
          <StyledLeftGrid item xs={12} md={5}>
            <StyledTypographyLeft variant="body1">
              “ Our Foundation in{" "}
              <span style={{ color: "#B31F58" }}>Madurai</span> ”
            </StyledTypographyLeft>
          </StyledLeftGrid>
          <Grid item xs={12} md={6}>
            <StyledRightTypography variant="body1">
              Madurai, known for its rich history and cultural heritage, was the
              perfect launchpad for our advertising journey. Here, we learned
              the importance of understanding local markets and tailoring our
              strategies to resonate with diverse audiences. Our deep roots in
              Madurai allowed us to build strong relationships with clients and
              communities, setting the stage for our expansion across Tamil
              Nadu.
            </StyledRightTypography>
          </Grid>
        </StyledTextGridContainer>

        <StyledTextGridContainer container spacing={4}>
          <StyledLeftGrid item xs={12} md={5}>
            <StyledTypographyLeft variant="body1">
              A Growing Network
            </StyledTypographyLeft>
          </StyledLeftGrid>
          <Grid item xs={12} md={6}>
            <StyledRightTypography variant="body1">
              Over the years, our operations have expanded significantly. We
              currently manage advertising initiatives at over 25 railway
              stations throughout the state, making us a prominent player in
              outdoor advertising. These stations serve as high-traffic hubs,
              providing our clients with unparalleled visibility and reach.
            </StyledRightTypography>
          </Grid>
        </StyledTextGridContainer>

        <StyledTextGridContainer container spacing={4}>
          <StyledLeftGrid item xs={12} md={5}>
            <StyledTypographyLeft variant="body1">
              Branding on the Move
            </StyledTypographyLeft>
          </StyledLeftGrid>
          <Grid item xs={12} md={6}>
            <StyledRightTypography variant="body1">
              One of our standout offerings is train branding. With over 20
              trains branded specifically for our clients, we provide unique
              advertising solutions that travel across the region. This mobile
              advertising approach not only captures attention but also fosters
              brand recognition in a dynamic way. Our curated campaigns are
              designed to engage passengers and create lasting impressions.
            </StyledRightTypography>
          </Grid>
        </StyledTextGridContainer>

        <StyledTextGridContainer container spacing={4}>
          <StyledLeftGrid item xs={12} md={5}>
            <StyledTypographyLeft variant="body1">
              Trust and Client Satisfaction
            </StyledTypographyLeft>
          </StyledLeftGrid>
          <Grid item xs={12} md={6}>
            <StyledRightTypography variant="body1">
              Our commitment to excellence has earned us the trust of more than
              125 clients, spanning various industries. We pride ourselves on
              delivering cost-effective and innovative solutions that cater to
              each client's unique needs. The positive feedback we receive is a
              testament to our team's dedication and expertise. We listen to our
              clients, understand their goals, and work tirelessly to fulfill
              and even exceed to their expectations.
            </StyledRightTypography>
          </Grid>
        </StyledTextGridContainer>

        <StyledTextGridContainer container spacing={4}>
          <StyledLeftGrid item xs={12} md={5}>
            <StyledTypographyLeft variant="body1">
              Our Vision
            </StyledTypographyLeft>
          </StyledLeftGrid>
          <Grid item xs={12} md={6}>
            <StyledRightTypography variant="body1">
              In a competitive advertising landscape, it’s crucial to offer
              something unique. Our team excels in developing creative campaigns
              that not only capture attention but also drive results. We
              leverage data-driven insights to craft tailored strategies,
              ensuring that every campaign we execute is both effective and
              memorable. Our vision is to continue expanding our reach across
              Tamil Nadu and across the country while maintaining the high
              standards that our clients expect. We believe in the power of
              creativity, collaboration, and innovation, and we’re excited to
              reach out millions and millions in the years to come and touch the
              top notch in our journey
            </StyledRightTypography>
          </Grid>
        </StyledTextGridContainer>
      </Box>

      <ImageContainer>
          <Image
            src={AboutUsBgImg}
            alt="About Us Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        <TextOverlay>
          <StyledHeading variant="h3">Management</StyledHeading>
          <StyledSubText>
            ESS ARR ADS, owned and managed by Soosairaj Antonysamy for the past
            25 years, has evolved from a small, city-based advertising agency
            into a prominent company with a presence in over 20 cities across
            Tamil Nadu. Starting with a customer-centric approach and a focus on
            delivering high-quality, tailored advertising solutions, Soosairaj
            expanded the business strategically, capitalizing on market research
            and regional demand. By adopting decentralized management,
            empowering local teams, and investing in innovation, the company
            navigated challenges and stayed competitive in the rapidly changing
            advertising landscape. ESS ARR ADS' success is a testament to
            Soosairaj's effective leadership and vision for growth, positioning
            the company for further expansion in the future.
          </StyledSubText>
          <StyledHeading variant="h3">Our Team</StyledHeading>
          <StyledSubText>
            The team at ESS ARR ADS plays a crucial role in the company’s
            success, driven by a culture of creativity, collaboration, and
            continuous growth. Under Soosairaj’s leadership, the company has
            placed a strong emphasis on employee development, offering training
            and fostering a work environment that encourages innovation and
            ownership. The team consists of skilled professionals from various
            fields, including Creative design, Marketing, Client Management, and
            Media Manager, all working together to deliver impactful campaigns.
            With decentralized leadership allowing for autonomy at the city
            level, the employees are empowered to make quick decisions, ensuring
            that the company remains agile and responsive to client needs across
            its expanding footprint. This dynamic team is essential to the
            ongoing success and growth of ESS ARR ADS.
          </StyledSubText>
        </TextOverlay>
      </ImageContainer>

      <StyledBox>
        {/* Row 1 */}
        <StyledGridContainer container spacing={4}>
          <Grid item xs={12} md={12}>
            <StyledImage src={AboutUsImg1} alt="About Us 1" />
          </Grid>
        </StyledGridContainer>

        {/* Row 2 */}
        <StyledGridContainer container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledImage src={AboutUsImg2} alt="About Us 2" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledImage src={AboutUsImg3} alt="About Us 3" />
          </Grid>
        </StyledGridContainer>

        {/* Row 3 */}
        <StyledGridContainer container spacing={4}>
          <Grid item xs={12} md={12}>
            <StyledImage src={AboutUsImg4} alt="About Us 4" />
          </Grid>
        </StyledGridContainer>

        {/* Row 4 */}
        <StyledGridContainer container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledImage src={AboutUsImg5} alt="About Us 5" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledImage src={AboutUsImg6} alt="About Us 6" />
          </Grid>
        </StyledGridContainer>

        {/* Row 5 */}
        <StyledGridContainer container spacing={4}>
          <Grid item xs={12} md={12}>
            <StyledImage src={AboutUsImg7} alt="About Us 7" />
          </Grid>
        </StyledGridContainer>

        {/* Row 6 */}
        <StyledGridContainer container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledImage src={AboutUsImg8} alt="About Us 8" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledImage src={AboutUsImg9} alt="About Us 9" />
          </Grid>
        </StyledGridContainer>
      </StyledBox>
      <VideoMarquee/>
    </Box>
  );
}
