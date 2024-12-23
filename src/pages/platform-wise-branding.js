import * as React from "react";
import { useRef } from "react";
import { Typography, Box } from "@mui/material";
import bannerImage from "/public/images/banner-images/platform-wise.png";
import VideoMarquee from "../components/VideoMarquee";
import CustomCard from "../components/CustomCard";
import styled from "@emotion/styled";
import escalatorCard from "/public/images/card-images/escalator-branding-card.jpg";
import liftcard from "/public/images/card-images/lift-card.png";
import platformIndicationCard from "/public/images/card-images/platform-indication-card.png";
import stationBoardCard from "/public/images/card-images/station-board-card.png";
import waterHydrantBoardCard from "/public/images/card-images/water-hydrant-card.png";
import escalatorBranding1 from "/public/images/escalator-branding/escalator-1.png";
import escalatorBranding2 from "/public/images/escalator-branding/escalator-2.png";
import escalatorBranding3 from "/public/images/escalator-branding/escalator-3.png";
import escalatorBranding4 from "/public/images/escalator-branding/escalator-4.png";
import escalatorBranding5 from "/public/images/escalator-branding/escalator-5.png";
import escalatorBranding6 from "/public/images/escalator-branding/escalator-6.png";

import liftBranding1 from "/public/images/lift-branding/lift-1.png";
import liftBranding2 from "/public/images/lift-branding/lift-2.png";
import liftBranding3 from "/public/images/lift-branding/lift-3.png";
import liftBranding4 from "/public/images/lift-branding/lift-4.png";
import liftBranding5 from "/public/images/lift-branding/lift-5.png";
import liftBranding6 from "/public/images/lift-branding/lift-6.png";

import roofBranding1 from "/public/images/roof-board-branding/roof-1.png";
import roofBranding2 from "/public/images/roof-board-branding/roof-2.png";
import roofBranding3 from "/public/images/roof-board-branding/roof-3.png";
import roofBranding4 from "/public/images/roof-board-branding/roof-4.png";
import roofBranding5 from "/public/images/roof-board-branding/roof-5.png";
import roofBranding6 from "/public/images/roof-board-branding/roof-6.png";

import stationBranding1 from "/public/images/station-boards/station-board-1.png";
import stationBranding2 from "/public/images/station-boards/station-board-2.png";
import stationBranding3 from "/public/images/station-boards/station-board-3.png";
import stationBranding4 from "/public/images/station-boards/station-board-4.png";
import stationBranding5 from "/public/images/station-boards/station-board-5.png";
import stationBranding6 from "/public/images/station-boards/station-board-6.png";

import waterHydrant1 from "/public/images/water-hydrant-boards/water-hydrant-1.png";
import waterHydrant2 from "/public/images/water-hydrant-boards/water-hydrant-2.png";
import waterHydrant3 from "/public/images/water-hydrant-boards/water-hydrant-3.png";
import waterHydrant4 from "/public/images/water-hydrant-boards/water-hydrant-4.png";
import waterHydrant5 from "/public/images/water-hydrant-boards/water-hydrant-5.png";
import waterHydrant6 from "/public/images/water-hydrant-boards/water-hydrant-6.png";

import platformBranding1 from "/public/images/platform-branding/platform-1.png";
import platformBranding2 from "/public/images/platform-branding/platform-2.png";
import platformBranding3 from "/public/images/platform-branding/platform-3.png";
import platformBranding4 from "/public/images/platform-branding/platform-4.png";
import platformBranding5 from "/public/images/platform-branding/platform-5.png";
import platformBranding6 from "/public/images/platform-branding/platform-6.png";
import ImageGrid from "../components/ImageGrid";
import Image from "next/image";

const StyledFlexContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  height: 70%;
`;

const OverlayText = styled(Box)`
  position: absolute;
  top: 30%;
  left: 8%;
  text-align: left;
  padding: 20px;
  background-color: rgba(25, 118, 210, 0.5);
  width: 40%;

  @media (max-width: 900px) {
    top: 30%;
    left: 8%;
    padding: 15px;
    width: 60%;
  }

  @media (max-width: 600px) {
    top: 25%;
    left: 5%;
    padding: 10px;
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
    background-color: white;
    margin-right: 10px;

    @media (max-width: 600px) {
      height: 30px;
    }
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  margin: 0 45px;

  @media (max-width: 750px) {
    margin: 0 auto;
  }
`;

const SectionHeading = styled(Typography)`
  font-weight: 700;
  padding: 40px 0px 15px 45px;

  @media (max-width: 750px) {
    padding: 40px 0px 15px 0px;
    text-align: center;
  }
`;

const ContentText = styled(Typography)`
  line-height: 1.8;
  font-size: 20px;
  text-align: justify;
`;

export default function PlatformWiseBranding() {
  const escalatorBrandingRef = useRef(null);
  const liftBrandingRef = useRef(null);
  const platformIndicationBoardsRef = useRef(null);
  const roofBoardsRef = useRef(null);
  const stationBoardsRef = useRef(null);
  const waterHydrantBoardsRef = useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      title: "Escalator Branding",
      image: escalatorCard,
      images: [
        escalatorBranding1,
        escalatorBranding2,
        escalatorBranding3,
        escalatorBranding4,
        escalatorBranding5,
        escalatorBranding6,
      ],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        escalatorBrandingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Lift Branding",
      image: liftcard,
      images: [
        liftBranding1,
        liftBranding2,
        liftBranding3,
        liftBranding4,
        liftBranding5,
        liftBranding6,
      ],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        liftBrandingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Platform Indication Boards",
      image: platformIndicationCard,
      images: [
        platformBranding1,
        platformBranding2,
        platformBranding3,
        platformBranding4,
        platformBranding5,
        platformBranding6,
      ],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        platformIndicationBoardsRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "Roof Boards",
      image: roofBranding4,
      images: [
        roofBranding1,
        roofBranding2,
        roofBranding3,
        roofBranding4,
        roofBranding5,
        roofBranding6,
      ],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        roofBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Station Boards",
      image: stationBoardCard,
      images: [
        stationBranding1,
        stationBranding2,
        stationBranding3,
        stationBranding4,
        stationBranding5,
        stationBranding6,
      ],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        stationBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Water Hydrant Boards",
      image: waterHydrantBoardCard,
      images: [
        waterHydrant1,
        waterHydrant2,
        waterHydrant3,
        waterHydrant4,
        waterHydrant5,
        waterHydrant6,
      ],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        waterHydrantBoardsRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const TypographyText = {
    subtitle1: {
      fontWeight: 300,
      color: "white",
      fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
    },
    h4: {
      fontWeight: 700,
      color: "white",
      fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" },
      paddingTop: "20px",
    },
    h6: {
      color: "white",
      fontSize: { xs: "0.8rem", sm: "1rem", md: "1.3rem" },
    },
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
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
            alt="Platform Banner"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            height="100%"
          />
        <OverlayText>
          <LineTextContainer>
            <Typography variant="subtitle1" sx={TypographyText.subtitle1}>
              Our services
            </Typography>
          </LineTextContainer>

          <Typography variant="h4" sx={TypographyText.h4}>
            Platform Branding That Captures Attention
          </Typography>
          <br />

          <Typography variant="h6" sx={TypographyText.h6}>
            Strategically placed ads on platforms enhance brand recognition and{" "}
            engagement among passengers.
          </Typography>
        </OverlayText>
        </Box>
      </ImageContainer>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}
      >
        PLATFORM WISE BRANDING
      </Typography>

      <StyledFlexContainer>
        {cardData.map((card, index) => (
          <CustomCard
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            onViewMore={card.onViewMore}
          />
        ))}
      </StyledFlexContainer>

      <SectionHeading ref={escalatorBrandingRef} variant="h5">
        Escalator Branding
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Railway escalator advertising makes use of the vertical space on
          escalators to display eye-catching ads, turning the escalator ride
          into a branded experience. This can include wraps on the steps, sides,
          or overhead panels, as well as digital screens that show dynamic
          content. With commuters spending time on escalators, this form of
          advertising provides continuous exposure, ensuring high visibility for
          brands. Additionally, offering passengers a unique, interactive
          advertising experience as they move through the station.
          <br />
          Railway escalator branding involves placing advertisements on
          escalators within railway stations, turning the moving structure into
          a dynamic marketing space. Ads can be placed on the sides, steps, or
          handrails of escalators, ensuring visibility as passengers ride up or
          down. This form of branding captures attention in high-traffic areas
          where commuters are in close proximity and have extended exposure to
          the messaging. Additionally, digital displays can be integrated into
          the escalator for animated ads or promotions, making the advertising
          more engaging. Escalator branding is an innovative and effective way
          to connect with a captive audience as they move through the station.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[0].images} />

      <SectionHeading ref={liftBrandingRef} variant="h5">
        Lift Branding
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Lift branding utilizes the interior and exterior spaces of elevators
          in railway stations to display advertisements. This can include
          graphics on the lift doors, walls, buttons, or even the ceiling,
          making use of the confined space to capture the attention of
          passengers during their short ride. Lift branding provides an
          opportunity for high-visibility exposure, as commuters often spend
          several seconds to minutes inside the lift, ensuring that ads are
          noticed. Additionally, this form of branding can be easily customized
          and tailored to specific audiences, promoting products, services, or
          events to passengers in a highly engaging way.
          <br />
          Railway lift branding involves placing advertisements inside and
          outside elevators within railway stations. Ads can be displayed on the
          lift doors, walls, ceilings, or on digital screens inside the lift. As
          passengers use the lift, they have focused attention on the space,
          providing a great opportunity for brands to showcase their messages.
          This form of branding benefits from the captive audience in a
          confined, high-traffic environment, ensuring that commuters have
          extended exposure to the advertising content. Whether using static
          decals or interactive digital displays, lift branding is an effective
          way to create memorable, high-visibility marketing moments in busy
          stations.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[1].images} />

      <SectionHeading ref={platformIndicationBoardsRef} variant="h5">
        Platform Indication Boards
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Railway platform indication board advertising leverages the prime
          locations of static platform boards to display brand messages
          alongside important train information. These boards, typically used to
          show arrival and departure times, can be adapted to feature targeted
          ads, promotions, or services, providing brands with high visibility
          among passengers waiting on the platform. With their prominent
          position and constant exposure, these boards are an effective way to
          reach a diverse and captive audience.
          <br />
          Railway platform indication boards are essential signage systems
          located on train platforms, displaying crucial information such as
          train arrival and departure times, platform numbers, delays, and other
          important updates for passengers. These boards can be static or
          digital, with digital boards offering real-time updates, dynamic
          schedules, and multi-language support for a diverse audience.
          Positioned prominently along platforms, these indication boards ensure
          that passengers can easily access the information they need, enhancing
          the overall station experience. Additionally, platform indication
          boards offer an opportunity for advertising, as brands can place ads
          alongside train schedule information, reaching a wide and engaged
          audience.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[2].images} />

      <SectionHeading ref={roofBoardsRef} variant="h5">
        Roof Boards
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Roof boards are large advertising boards positioned on the roofs of
          railway stations visible to passengers both inside the station and
          from a distance. These boards can be used for static advertisements
          and are strategically placed in high-traffic areas to ensure maximum
          visibility. Roof boards often capture attention from commuters as they
          enter or exit the station, and are also visible to those traveling by
          train or vehicle. Their elevated position makes them effective for
          broad-reaching campaigns, providing high-impact exposure to a diverse
          audience while utilizing unused vertical space.
          <br />
          Railway roof boards are large advertising panels installed on the
          roofs of railway stations, typically positioned in areas where they
          are highly visible to both passengers inside the station and to people
          outside. These boards utilize the elevated position to offer maximum
          exposure, especially to commuters arriving by train or from a
          distance. Often designed with large, bold graphics or digital
          displays, roof boards are an effective way to showcase brand messages,
          product promotions, or event advertisements. They are ideal for
          capturing attention in high-traffic areas, providing broad visibility
          in a way that traditional ground-level ads may not.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[3].images} />

      <SectionHeading ref={stationBoardsRef} variant="h5">
        Station Boards
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Station boards advertising refers to the strategic placement of
          advertisements within railway stations, including those displaying
          train schedules, platform directions, and other vital station
          information. These boards can be static, offering a high-visibility
          opportunity for brands to reach commuters as they navigate through the
          station. By integrating ads directly onto these information boards or
          using adjacent spaces, station boards ensure that advertisements are
          seen frequently by a captive audience.
          <br />
          Railway station boards are essential signage systems within stations
          that provide passengers with critical information, such as train
          schedules, platform numbers, arrival and departure times, and other
          station-related updates. These boards can be static, like traditional
          flip boards, or digital, with the latter offering real-time updates,
          multilingual support, and dynamic content. Positioned at strategic
          locations like entrances, waiting areas, and platforms, station boards
          ensure that passengers can easily navigate the station and stay
          informed. Additionally, these boards can serve as advertising spaces,
          allowing brands to reach a wide audience by placing ads alongside the
          essential travel information.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[4].images} />

      <SectionHeading ref={waterHydrantBoardsRef} variant="h5">
        Water Hydrant Boards
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Water hydrant boards at railway stations are typically positioned near
          critical water supply systems for firefighting and emergency use.
          These boards, often placed in visible, high-traffic areas, can also
          serve as effective advertising spaces. Due to their prominent
          placement, water hydrant boards provide an opportunity for brands to
          display ads, safety notices, or sponsorship messages. By utilizing
          these functional spaces, advertisers can capture the attention of
          commuters in locations that are less conventional for marketing,
          offering a unique chance to engage with passengers while still serving
          an important safety purpose.
          <br />
          Railway water hydrant boards are signage placed near water hydrant
          systems in railway stations, which are critical for firefighting and
          emergency response. These boards typically indicate the location of
          water hydrants and provide important safety information for station
          staff and emergency responders. Due to their prominent placement in
          key areas of the station, water hydrant boards also serve as potential
          advertising spaces. Advertisers can use these boards to display brand
          messages, safety tips, or public service announcements, ensuring
          visibility among passengers and station personnel. With their
          functional and strategic location, water hydrant boards offer a unique
          and often underutilized opportunity for targeted, high-visibility
          advertising.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[5].images} />

      <VideoMarquee />
    </div>
  );
}
