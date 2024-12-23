/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { useRef } from "react";
import { Typography, Box } from "@mui/material";
import bannerImage from "/public/images/banner-images/outdoor-ad.png";
import VideoMarquee from "../components/VideoMarquee";
import CustomCard from "../components/CustomCard";
import styled from "@emotion/styled";
import pathwayCard from "/public/images/card-images/pathway-card.png";
import billBoardCard from "/public/images/card-images/billboard-card.png";
import entranceArchCard from "/public/images/card-images/entrance-arch-card.png";
import fourSidePoleCard from "/public/images/card-images/four-side-pole-card.png";
import poleKioskCard from "/public/images/card-images/pole-kiosk-card.png";
import railwayCrossingCard from "/public/images/card-images/railway-crossing-card.png";

import pathway1 from "/public/images/pathway/pathway-1.png";
import pathway2 from "/public/images/pathway/pathway-2.png";
import pathway3 from "/public/images/pathway/pathway-3.png";
import pathway4 from "/public/images/pathway/pathway-4.png";
import pathway5 from "/public/images/pathway/pathway-5.png";
import pathway6 from "/public/images/pathway/pathway-6.png";

import billboard1 from "/public/images/billboard/billboard-1.png";
import billboard2 from "/public/images/billboard/billboard-2.png";
import billboard3 from "/public/images/billboard/billboard-3.png";
import billboard4 from "/public/images/billboard/billboard-4.png";
import billboard5 from "/public/images/billboard/billboard-5.png";
import billboard6 from "/public/images/billboard/billboard-6.png";

import entranceArch1 from "/public/images/entrance-arch/entrance-arch-1.png";
import entranceArch2 from "/public/images/entrance-arch/entrance-arch-2.png";
import entranceArch3 from "/public/images/entrance-arch/entrance-arch-3.png";
import entranceArch4 from "/public/images/entrance-arch/entrance-arch-4.png";
import entranceArch5 from "/public/images/entrance-arch/entrance-arch-5.png";
import entranceArch6 from "/public/images/entrance-arch/entrance-arch-6.png";

import fourSidePole1 from "/public/images/four-side-pole/pole-1.png";
import fourSidePole2 from "/public/images/four-side-pole/pole-2.png";
import fourSidePole3 from "/public/images/four-side-pole/pole-3.png";
import fourSidePole4 from "/public/images/four-side-pole/pole-4.png";
import fourSidePole5 from "/public/images/four-side-pole/pole-5.png";
import fourSidePole6 from "/public/images/four-side-pole/pole-6.png";

import poleKiosk1 from "/public/images/pole-kiosk/pole-kiosk-1.png";
import poleKiosk2 from "/public/images/pole-kiosk/pole-kiosk-2.png";
import poleKiosk3 from "/public/images/pole-kiosk/pole-kiosk-3.png";
import poleKiosk4 from "/public/images/pole-kiosk/pole-kiosk-4.png";
import poleKiosk5 from "/public/images/pole-kiosk/pole-kiosk-5.png";
import poleKiosk6 from "/public/images/pole-kiosk/pole-kiosk-6.png";

import railwayCrossing1 from "/public/images/railway-crossing/crossing-1.png";
import railwayCrossing2 from "/public/images/railway-crossing/crossing-2.png";
import railwayCrossing3 from "/public/images/railway-crossing/crossing-3.png";
import railwayCrossing4 from "/public/images/railway-crossing/crossing-4.png";
import railwayCrossing5 from "/public/images/railway-crossing/crossing-5.png";
import railwayCrossing6 from "/public/images/railway-crossing/crossing-6.png";
import Image from "next/image";
import ImageGrid from "../components/ImageGrid";

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
  right: 4%;
  text-align: left;
  padding: 20px;
  background-color: rgba(25, 118, 210, 0.5);
  width: 40%;

  @media (max-width: 900px) {
    top: 30%;
    padding: 15px;
    width: 60%;
  }

  @media (max-width: 600px) {
    top: 25%;
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

export default function OutdoorAdvertising() {
  const pathwayRef = useRef(null);
  const billboardsRef = useRef(null);
  const entranceArchRef = useRef(null);
  const fourSidePoleRef = useRef(null);
  const poleKioskRef = useRef(null);
  const railwayCrossingRef = useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      title: "Pathway",
      image: pathwayCard,
      images: [pathway1, pathway2, pathway3, pathway4, pathway5, pathway6],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        pathwayRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Billboards",
      image: billBoardCard,
      images: [
        billboard1,
        billboard2,
        billboard3,
        billboard4,
        billboard5,
        billboard6,
      ],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        billboardsRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Entrance Arch",
      image: entranceArchCard,
      images: [
        entranceArch1,
        entranceArch2,
        entranceArch3,
        entranceArch4,
        entranceArch5,
        entranceArch6,
      ],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        entranceArchRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Four Side Pole",
      image: fourSidePoleCard,
      images: [
        fourSidePole1,
        fourSidePole2,
        fourSidePole3,
        fourSidePole4,
        fourSidePole5,
        fourSidePole6,
      ],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        fourSidePoleRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Pole Kiosk",
      image: poleKioskCard,
      images: [
        poleKiosk1,
        poleKiosk2,
        poleKiosk3,
        poleKiosk4,
        poleKiosk5,
        poleKiosk6,
      ],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        poleKioskRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Railway Crossing",
      image: railwayCrossingCard,
      images: [
        railwayCrossing1,
        railwayCrossing2,
        railwayCrossing3,
        railwayCrossing4,
        railwayCrossing5,
        railwayCrossing6,
      ],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        railwayCrossingRef.current?.scrollIntoView({ behavior: "smooth" });
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
          alt="Outdoor Banner"
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
            High-Impact Outdoor Advertising
          </Typography>
          <br />

          <Typography variant="h6" sx={TypographyText.h6}>
            Stand out in busy railway environments with vibrant and compelling
            outdoor advertisements.
          </Typography>
        </OverlayText>
      </Box>
      </ImageContainer>

      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}
      >
        OUTDOOR ADVERTISING
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

      <SectionHeading ref={pathwayRef} variant="h5">
        Pathway
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Pathway advertising utilizes the walkways, corridors, and pathways
          within railway stations to promote brands and messages. These
          high-traffic areas ensure maximum visibility as passengers traverse
          them to reach platforms, ticket counters, or exits. Common formats
          include floor decals, wall posters, digital screens, and illuminated
          displays. Pathway advertising is an impactful way to capture the
          attention of a diverse audience, enhance brand recall, and create
          immersive experiences through creative visuals and interactive
          designs.
          <br />
          Railway pathway advertising utilizes the walkways and corridors within
          railway stations to showcase brand promotions and messages. These
          high-traffic areas, where passengers move between platforms, ticket
          counters, and exits, provide excellent visibility for advertisements.
          Common formats include floor graphics, wall panels, illuminated
          displays, and digital screens strategically placed to capture
          attention. Pathway advertising ensures maximum exposure to a diverse
          audience, leveraging the constant movement of commuters. It is an
          effective way to create impactful brand engagement while enhancing the
          station's visual appeal with creative and interactive designs.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[0].images} />

      <SectionHeading ref={billboardsRef} variant="h5">
        Billboards
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Railway billboards advertising utilizes large, eye-catching billboards
          strategically placed in high-visibility areas within railway stations,
          along tracks, or near major station entrances. These billboards can
          feature static , promoting products, services, or brand messages to a
          wide audience of commuters and travelers. Positioned to maximize
          exposure, railway billboards ensure that brands reach diverse
          demographics, offering prolonged engagement as passengers wait for
          trains or navigate station spaces. This form of advertising is
          particularly effective in creating high-impact visibility due to the
          constant flow of foot traffic.
          <br />
          Railway outdoor billboard advertising involves placing large,
          eye-catching billboards in strategic locations around railway
          stations, such as station entrances, nearby roads, or adjacent to
          railway tracks. These billboards are designed to target both
          passengers and passersby, ensuring high visibility to a broad and
          diverse audience. With options for static displays or dynamic digital
          screens, outdoor billboards can showcase vibrant and impactful
          advertisements that leave a lasting impression. This form of
          advertising benefits from the high traffic and visibility associated
          with railway stations, making it an effective tool for brand
          promotion, product launches, or event awareness campaigns.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[1].images} />

      <SectionHeading ref={entranceArchRef} variant="h5">
        Entrance Arch
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Entrance arch advertising involves placing large, branded arches or
          structures at the main entrances of railway stations, creating a
          striking first impression for commuters. These arches can feature
          static banners, digital screens to promote a product, service, or
          event. Positioned where passengers enter or exit, entrance arches
          capture attention immediately, making them an ideal medium for
          high-visibility advertising. This form of advertising is particularly
          effective in reaching large, diverse crowds, ensuring maximum exposure
          as travelers pass through the station's entry points.
          <br />
          Railway entrance arch advertising utilizes the large, prominent arches
          at station entrances as a powerful platform for brand promotion. These
          arches, often the first point of interaction for passengers entering
          the station, provide high visibility and create a lasting impression.
          Advertisers can customize the arch with vibrant banners, logos, or
          digital displays to showcase their messages effectively. This form of
          advertising targets a diverse audience, including daily commuters and
          long-distance travelers, ensuring broad reach. Entrance arch
          advertising combines functionality with creativity, enhancing the
          station's aesthetic appeal while delivering impactful brand exposure.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[2].images} />

      <SectionHeading ref={fourSidePoleRef} variant="h5">
        Four Side Pole
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Railway four-side pole advertising involves placing tall, freestanding
          poles with advertising space on all four sides at strategic locations
          within or around railway stations. These poles are positioned in
          high-traffic areas such as station entrances, walkways, or platforms
          to ensure maximum visibility from every angle. With their 360-degree
          exposure, four-side poles effectively capture the attention of
          commuters coming from various directions. They are ideal for promoting
          brands, events, or products to a diverse audience, offering both
          static and digital display options. This form of advertising maximizes
          reach, providing high-impact visibility in busy railway environments.
          <br />
          Railway four-side pole advertising utilizes freestanding poles with
          advertising panels on all four sides, strategically placed in
          high-traffic areas within railway stations. These poles are positioned
          along walkways, platforms, or station entrances, ensuring visibility
          from multiple angles. This format maximizes exposure as passengers
          move through the station, making it an effective medium for promoting
          brands, services, or events. With options for static graphics or
          dynamic digital content, four-side pole advertising offers versatility
          and high-impact visibility, engaging a diverse audience in the
          bustling railway environment.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[3].images} />

      <SectionHeading ref={poleKioskRef} variant="h5">
        Pole Kiosk
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Railway pole kiosk advertising uses freestanding, pole-mounted kiosks
          placed at key locations within railway stations, such as entrances,
          walkways, and near platforms. These kiosks typically feature
          advertising spaces on all sides, displaying brand messages, digital
          ads, or interactive content. Positioned at eye level, they capture the
          attention of commuters as they move through the station. Pole kiosks
          are versatile and can be customized with an effective solution for
          high-visibility advertising in busy, high-traffic areas of the
          station. This type of advertising offers both static and dynamic
          engagement opportunities, providing brands with maximum exposure.
          <br />
          Railway pole kiosk advertising leverages vertical poles equipped with
          display panels to showcase brand promotions in high-traffic areas of
          railway stations. These kiosks are strategically placed along
          pathways, near ticket counters, platforms, or entrances, ensuring
          constant visibility to commuters. Featuring static or digital
          advertisements, pole kiosks capture the attention of passengers as
          they navigate the station. This form of advertising is cost-effective
          and versatile, offering customizable designs that align with brand
          messaging. Railway pole kiosk advertising is an impactful way to reach
          a diverse audience while enhancing the station's visual appeal.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[4].images} />

      <SectionHeading ref={railwayCrossingRef} variant="h5">
        Railway Crossing
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Railway crossing advertising involves placing advertisements at or
          near railway crossings, where trains pass through intersections with
          roads or pedestrian walkways. This form of outdoor advertising targets
          drivers, pedestrians, and passengers who are waiting for trains or
          passing by. Common formats include large billboards, banner ads, or
          digital screens mounted at crossing gates, barriers, or nearby
          structures. The key benefit of railway crossing advertising is its
          high visibility to motorists and pedestrians during peak hours or
          waiting periods, making it an impactful way to promote products,
          services, or events to a broad audience.
          <br />
          Railway crossing advertising involves placing advertisements at or
          near railway crossings, where trains intersect with roads or
          pedestrian paths. These high-visibility locations capture the
          attention of drivers, pedestrians, and passengers as they wait or pass
          through the crossing. Common formats include large billboards,
          banners, or digital displays mounted on gates, barriers, or nearby
          structures. Since these crossings are often points of delay, they
          offer an extended opportunity for brands to reach a captive audience,
          making railway crossing advertising an effective method for promoting
          products or services to a broad range of commuters and travelers.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[5].images} />
      <VideoMarquee />
    </div>
  );
}
