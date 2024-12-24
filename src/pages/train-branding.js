/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { useRef } from "react";
import { Typography, Box, Chip } from "@mui/material";
import bannerImage from "/public/images/banner-images/train-branding.png";
import VideoMarquee from "../components/VideoMarquee";
import CustomCard from "../components/CustomCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import interiorMirrorCard from "/public/images/card-images/mirror-branding-card.png";
import interiorPanelCard from "/public/images/card-images/panel-branding-card.png";
import glassdoorCard from "/public/images/card-images/glassdoor-branding-card.png";
import foodTrayCard from "/public/images/card-images/food-tray-card.png";
import trainWrappingCard from "/public/images/card-images/train-wrapping-card.png";
import trainEnginePaintingCard from "/public/images/card-images/train-engine-painting-card.png";

import mirrorBranding1 from "/public/images/mirror-branding/mirror-1.png";
import mirrorBranding2 from "/public/images/mirror-branding/mirror-2.png";
import mirrorBranding3 from "/public/images/mirror-branding/mirror-3.png";
import mirrorBranding4 from "/public/images/mirror-branding/mirror-4.png";
import mirrorBranding5 from "/public/images/mirror-branding/mirror-5.png";
import mirrorBranding6 from "/public/images/mirror-branding/mirror-6.png";

import panelBranding1 from "/public/images/panel-branding/panel-1.png";
import panelBranding2 from "/public/images/panel-branding/panel-2.png";
import panelBranding3 from "/public/images/panel-branding/panel-3.png";
import panelBranding4 from "/public/images/panel-branding/panel-4.png";
import panelBranding5 from "/public/images/panel-branding/panel-5.png";
import panelBranding6 from "/public/images/panel-branding/panel-6.png";

import glassdoorBranding1 from "/public/images/door-branding/door-1.png";
import glassdoorBranding2 from "/public/images/door-branding/door-2.png";
import glassdoorBranding3 from "/public/images/door-branding/door-3.png";
import glassdoorBranding4 from "/public/images/door-branding/door-4.png";
import glassdoorBranding5 from "/public/images/door-branding/door-5.png";
import glassdoorBranding6 from "/public/images/door-branding/door-6.png";

import foodTray1 from "/public/images/food-tray/tray-1.png";
import foodTray2 from "/public/images/food-tray/tray-2.png";
import foodTray3 from "/public/images/food-tray/tray-3.png";
import foodTray4 from "/public/images/food-tray/tray-4.jpg";
import foodTray5 from "/public/images/food-tray/tray-5.png";
import foodTray6 from "/public/images/food-tray/tray-6.png";

import trainWrapping1 from "/public/images/exterior-wrapping/exterior-1.png";
import trainWrapping2 from "/public/images/exterior-wrapping/exterior-2.png";
import trainWrapping3 from "/public/images/exterior-wrapping/exterior-3.png";
import trainWrapping4 from "/public/images/exterior-wrapping/exterior-4.png";
import trainWrapping5 from "/public/images/exterior-wrapping/exterior-5.png";
import trainWrapping6 from "/public/images/exterior-wrapping/exterior-6.png";

import enginePainting1 from "/public/images/engine-painting/engine-painting-1.png";
import enginePainting2 from "/public/images/engine-painting/engine-painting-2.png";
import enginePainting3 from "/public/images/engine-painting/engine-painting-3.png";
import Image from "next/image";
import ImageGrid from "../components/ImageGrid";

const StyledSliderContainer = styled(Box)`
  width: 900px;
  margin: 0 auto;
  margin-bottom: 4rem;

  @media (max-width: 950px) {
    width: 700px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ResponsiveBackground = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const StyledFlexContainer = styled(Box)`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;

  & > div {
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1300px) {
    width: 60%;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
    align-content: center;

    & > div {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
    }
  }
`;

const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  height: 70vh;
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

const GlobalSlickDotsStyles = () => (
  <Global
    styles={css`
      .slick-dots {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        width: 70px !important; /* Auto-width based on content */
        background-color: #bfbfbf !important;
        border-radius: 20px !important;
        padding-top: 6px !important; /* Space around the dots */
        padding-left: 6px !important; /* Space around the dots */
        margin: 0 auto !important;
        position: relative !important;
        bottom: -15px !important; /* Adjust the vertical positioning */
      }

      .slick-dots li {
        margin: 0 4px !important; /* Slightly larger spacing for balance */
      }

      .slick-dots li button {
        width: 12px !important;
        height: 12px !important;
        border-radius: 50% !important;
        background-color: grey !important;
        border: none !important;
      }

      .slick-dots li.slick-active button {
        background-color: #1976d2 !important;
      }

      .slick-dots li button:before {
        font-size: 0 !important;
      }
    `}
  />
);


const ContentContainer = styled.div`
  width: 90%;
  margin: 0 6%;

  @media (max-width: 750px) {
    margin: 0 auto;
  }
`;

const SectionHeading = styled(Typography)`
  font-weight: 700;
  padding: 40px 0px 15px 0px;

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

const StyledCard = styled(Box)`
  padding: 30px 0;
  background-color: #d9d9d9;
  border-radius: 10px;
  text-align: center;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90% !important;
  margin-left: 5% !important;

  @media (max-width: 500px) {
    height: 200px;
  }

  @media (max-width: 380px) {
    height: 280px;
  }
`;

export default function TrainBranding() {
  const interiorMirrorBrandingRef = useRef(null);
  const interiorPanelBrandingRef = useRef(null);
  const interiorGlassdoorBrandingRef = useRef(null);
  const foodTraybrandingRef = useRef(null);
  const trainWrappingRef = useRef(null);
  const trainEnginePaintingRef = useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    arrows: false,
    centerMode: false, // Don't center the slide
    variableWidth: false, // Disable variable width to avoid partial card visibility
    adaptiveHeight: true, // Allow adaptive height for content change (optional)
  };

  const slides = [
    {
      label: "INTERIOR TRAIN BRANDING",
      title: "Branding That Travels with You",
      description:
        "Make a lasting impression on passengers as they interact with your brand throughout their ride.",
    },
    {
      label: "EXTERIOR TRAIN BRANDING",
      title: "Branding that Travels Far",
      description:
        "Ensure your message reaches a wide audience with eye-catching designs on the exterior of trains.",
    },
  ];

  const interiorTrainBrandingCardData = [
    {
      title: "Interior Mirror Branding",
      image: interiorMirrorCard,
      images: [
        mirrorBranding1,
        mirrorBranding2,
        mirrorBranding3,
        mirrorBranding4,
        mirrorBranding5,
        mirrorBranding6,
      ],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        interiorMirrorBrandingRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "Interior Panel Branding",
      image: interiorPanelCard,
      images: [
        panelBranding1,
        panelBranding2,
        panelBranding3,
        panelBranding4,
        panelBranding5,
        panelBranding6,
      ],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        interiorPanelBrandingRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "Interior Glassdoor Branding",
      image: glassdoorCard,
      images: [
        glassdoorBranding1,
        glassdoorBranding2,
        glassdoorBranding3,
        glassdoorBranding4,
        glassdoorBranding5,
        glassdoorBranding6,
      ],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        interiorGlassdoorBrandingRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "Food Tray Branding",
      image: foodTrayCard,
      images: [
        foodTray1,
        foodTray2,
        foodTray3,
        foodTray4,
        foodTray5,
        foodTray6,
      ],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        foodTraybrandingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const exteriorTrainBrandingCardData = [
    {
      title: "Train Wrapping",
      image: trainWrappingCard,
      images: [
        trainWrapping1,
        trainWrapping2,
        trainWrapping3,
        trainWrapping4,
        trainWrapping5,
        trainWrapping6,
      ],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        trainWrappingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Train Engine Painting",
      image: trainEnginePaintingCard,
      images: [enginePainting1, enginePainting2, enginePainting3],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        trainEnginePaintingRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <ResponsiveBackground>
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
          alt="Train Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        <OverlayText>
          <LineTextContainer>
            <Typography variant="subtitle1" sx={TypographyText.subtitle1}>
              Our services
            </Typography>
          </LineTextContainer>

          <Typography variant="h4" sx={TypographyText.h4}>
            Train Branding <br />
            Interior & Exterior Branding
          </Typography>
        </OverlayText>
        </Box>
      </ImageContainer>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}
      >
        TRAIN BRANDING
      </Typography>

      <StyledSliderContainer>
        <Slider {...settings} style={{ margin: "10px" }}>
          {slides.map((slide, index) => (
            <StyledCard key={index}>
              <Chip
                label={slide.label}
                sx={{
                  backgroundColor: "#1976D2",
                  color: "white",
                  fontWeight: "bold",
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, padding: "0 10px" }}>
                {slide.title}
              </Typography>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="body2" sx={{ mt: 1, color: "black" }}>
                  {slide.description}
                </Typography>
              </div>
            </StyledCard>
          ))}
        </Slider>
        <GlobalSlickDotsStyles />
      </StyledSliderContainer>


      <Typography variant="h5" sx={{ fontWeight: 700, padding: "40px" }}>
        Interior Train Branding
      </Typography>

      <StyledFlexContainer>
        {interiorTrainBrandingCardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 0 30%",
              minWidth: "200px",
              maxWidth: "300px",
              margin: "0 8%",
              gridColumn: index === 3 ? "1 / 4" : "auto",
            }}
          >
            <CustomCard
              title={card.title}
              image={card.image}
              description={card.description}
              onViewMore={card.onViewMore}
            />
          </Box>
        ))}
      </StyledFlexContainer>

      <Typography variant="h5" sx={{ fontWeight: 700, padding: "40px" }}>
        Exterior Train Branding
      </Typography>

      <StyledFlexContainer>
        {exteriorTrainBrandingCardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 0 30%",
              minWidth: "200px",
              maxWidth: "300px",
              margin: "0 8%",
              gridColumn: index === 3 ? "1 / 4" : "auto",
            }}
          >
            <CustomCard
              title={card.title}
              image={card.image}
              description={card.description}
              onViewMore={card.onViewMore}
            />
          </Box>
        ))}
      </StyledFlexContainer>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, padding: "10px 0px 0px 45px", color: "#1976D2" }}
      >
        Interior Train Branding
      </Typography>


      <ContentContainer>
      <SectionHeading ref={interiorMirrorBrandingRef} variant="h5">
        Interior Mirror Branding
      </SectionHeading>
        <ContentText>
          Train interior mirror branding involves placing advertisements on or
          around mirrors inside train compartments, such as in restrooms, near
          washbasins, or within private cabins. This approach captures the
          attention of passengers naturally as they use the mirrors, ensuring
          prolonged engagement with the ad. Brands can use overlays, decals, or
          subtle designs that blend with the mirror’s utility without
          obstructing its primary function. Train interior mirror branding
          offers a unique, captive environment for targeted messaging, making it
          an effective way to promote products or services to a diverse and
          attentive audience during their journey.
          <br />
          Train interior mirror branding involves placing advertisements or
          designs on the mirrors inside train compartments, typically located in
          restrooms, near washbasins, or in other common areas. By utilizing the
          reflective surface, brands can incorporate subtle yet impactful
          graphics, logos, or promotional messages that passengers engage with
          as they use the mirrors. This form of branding ensures that
          advertisements are viewed in close proximity and often during a
          captive moment, making it an effective way to reach passengers in a
          confined space. Train interior mirror branding can also integrate
          digital screens or interactive elements, enhancing engagement and
          offering a unique advertising opportunity within the train
          environment.
        </ContentText>
      <ImageGrid images={interiorTrainBrandingCardData[0].images} isTrainBranding={true}/>

      <SectionHeading ref={interiorPanelBrandingRef} variant="h5">
        Interior Panel Branding
      </SectionHeading>
        <ContentText>
          Interior panel branding involves placing advertisements on the
          interior surfaces of trains, such as wall panels, luggage racks, and
          ceilings, making use of the available space inside train compartments.
          These panels are strategically located to ensure visibility to
          passengers during their journey, providing an uninterrupted
          opportunity for brands to communicate their message. Interior panel
          branding is highly effective in creating a captive advertising
          environment, ensuring maximum engagement and recall among passengers.
          <br />
          Train interior panel branding involves placing advertisements or
          designs on the panels inside the train compartments, such as on the
          walls, above luggage racks, or near doorways. This form of branding
          takes advantage of the available space in high-traffic areas where
          passengers are likely to notice and engage with the advertisements
          during their journey. With options for static graphics, digital
          displays, or even interactive elements, interior panel branding can be
          tailored to suit different brand messages or campaigns. It is an
          effective way to reach a captive audience while enhancing the train's
          overall aesthetic appeal, ensuring long-lasting visibility for brands
          throughout the ride.
        </ContentText>
      <ImageGrid images={interiorTrainBrandingCardData[1].images} isTrainBranding={true}/>

      <SectionHeading ref={interiorGlassdoorBrandingRef} variant="h5">
        Interior Glassdoor Branding
      </SectionHeading>
        <ContentText>
          Interior glass door branding involves applying advertisements or
          designs to the glass doors inside trains, such as compartment
          separators or entry/exit doors. This form of branding uses transparent
          or semi-transparent decals, frosted designs, or vibrant prints,
          ensuring the ads are visually striking without obstructing visibility
          or functionality. Glass door branding captures passenger attention as
          they move through the train, offering a sleek and modern way to
          promote products or services. Its high visibility and creative
          potential make it an effective tool for engaging passengers in a
          confined yet interactive space during their journey.
          <br />
          Train interior glass door branding involves placing advertisements on
          the glass doors that separate different compartments or between
          entryways and passenger areas. This branding method uses transparent
          or frosted decals, vinyl wraps, or digital displays to showcase
          messages without obstructing the door's function. Glass door branding
          captures passengers' attention as they move through the train,
          creating a striking visual impact. As these doors are prominent and
          often in view during stops or when passengers are entering or exiting
          compartments, they offer an excellent opportunity for high visibility
          and engagement. This type of branding is effective in utilizing space
          that would otherwise remain empty, making it an innovative and
          engaging advertising medium.
        </ContentText>
      <ImageGrid images={interiorTrainBrandingCardData[2].images} isTrainBranding={true}/>

      <SectionHeading ref={foodTraybrandingRef} variant="h5">
        Food Tray Branding
      </SectionHeading>
        <ContentText>
          Interior food tray advertising involves placing branded messages or
          visuals on the food trays used in trains, particularly in premium or
          long-distance services where meals are served. Advertisements can be
          printed directly on the tray surface, inserted as liners, or displayed
          on detachable covers. Since food trays are in direct view during
          meals, this form of advertising ensures prolonged engagement, offering
          brands a unique opportunity to connect with passengers in a focused
          environment. It is an effective way to promote products, services, or
          campaigns while leveraging the captive attention of travelers during
          meal times.
          <br />
          Train interior food tray branding involves placing advertisements or
          promotional messages on the food trays used by passengers during their
          journey. These trays, often provided in long-distance or premium-class
          services, offer a unique opportunity to engage passengers during their
          meal times. Ads can be printed directly on the tray surface, included
          as tray liners, or displayed on detachable covers. This form of
          branding ensures that passengers are exposed to the advertisement over
          a prolonged period, making it effective for creating brand recall and
          engagement. Train interior food tray branding is a creative and subtle
          way to promote products or services while enhancing the overall
          passenger experience.
        </ContentText>
      <ImageGrid images={interiorTrainBrandingCardData[3].images} isTrainBranding={true}/>

      </ContentContainer>


      <Typography
        variant="h5"
        sx={{ fontWeight: 700, padding: "40px 0px 0px 45px", color: "#1976D2" }}
      >
        Exterior Train Branding
      </Typography>

      <ContentContainer>

      <SectionHeading ref={trainWrappingRef} variant="h5">
        Train Wrapping
      </SectionHeading>
        <ContentText>
          Train wrapping is a high-impact advertising method where the outer
          surfaces of trains are covered with vibrant, eye-catching vinyl
          graphics, detachable covers or decals. This branding transforms the
          entire train into a moving billboard, providing extensive visibility
          to a wide audience as the train travels through urban and rural areas.
          Train wrapping is highly effective for creating large-scale brand
          awareness, offering advertisers a unique opportunity to showcase their
          messages on a grand canvas. Durable and weather-resistant materials
          ensure the ads remain intact during the campaign period, making it an
          innovative and striking medium for impactful advertising.
          <br />
          Train exterior wrapping is a high-visibility advertising method that
          involves covering the entire exterior of a train with large-scale,
          colorful graphics or advertisements. Using durable vinyl wraps, brands
          can transform the train into a moving billboard that travels through
          urban, suburban, and rural areas, ensuring widespread exposure to
          diverse audiences. This type of branding is particularly effective for
          campaigns seeking massive reach, as the train’s visibility is
          maximized during its travel across various routes. Train exterior
          wrapping can include static images, interactive designs, or digital
          elements, making it a versatile and impactful medium for both
          short-term promotions and long-term brand awareness.
        </ContentText>
      <ImageGrid images={exteriorTrainBrandingCardData[0].images} isTrainBranding={true}/>

      <SectionHeading ref={trainEnginePaintingRef} variant="h5">
        Train Engine Painting
      </SectionHeading>
        <ContentText>
          Train engine painting involves customizing the locomotive’s exterior
          with branded designs, logos, or vibrant themes. This form of
          advertising turns the engine to the most prominent part of the train
          into a powerful visual statement. Painted with durable,
          weather-resistant materials, the branding maintains its appeal even
          during long-distance journeys and various weather conditions. Train
          engine painting is ideal for creating high-impact visibility, as the
          engine is often the first and most noticeable part of the train,
          ensuring maximum exposure to commuters and onlookers along its route.
          This medium combines functionality with creativity, offering brands a
          bold platform for promotion.
          <br />
          Train exterior engine painting involves custom designing and painting
          the locomotive's exterior with vibrant colors, brand logos, or
          promotional themes. This form of branding transforms the engine into a
          bold and eye-catching billboard, as the locomotive is one of the most
          visible parts of the train. Train engine painting is particularly
          effective for creating high-impact brand visibility, as the engine is
          often the first and most noticeable element of a train, visible from a
          distance. The use of durable paints ensures that the artwork remains
          intact despite weather conditions, making it a lasting and powerful
          medium for brand promotion and creating a memorable impression among
          commuters and bystanders.
        </ContentText>
      <ImageGrid images={exteriorTrainBrandingCardData[1].images} isTrainBranding={true}/>
      </ContentContainer>


      <VideoMarquee />
    </ResponsiveBackground>
  );
}
