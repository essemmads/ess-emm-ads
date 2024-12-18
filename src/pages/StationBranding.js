import * as React from "react";
import { useRef } from "react";
import { Typography, Box } from "@mui/material";
import bannerImage from "../images/banner-images/station-branding.png";
import stationBuildingCard from "../images/card-images/station-building-card.png";
import reservationCounterCard from "../images/card-images/reservation-counter-card.png";
import stationBranding1 from "../images/station-building/station-branding-1.png";
import stationBranding2 from "../images/station-building/station-branding-2.png";
import stationBranding3 from "../images/station-building/station-branding-3.png";
import stationBranding4 from "../images/station-building/station-branding-4.png";
import stationBranding5 from "../images/station-building/station-branding-5.png";
import stationBranding6 from "../images/station-building/station-branding-6.png";
import reservationCounter1 from "../images/reservation-counter/counter-1.png";
import reservationCounter2 from "../images/reservation-counter/counter-2.png";
import reservationCounter3 from "../images/reservation-counter/counter-3.png";
import reservationCounter4 from "../images/reservation-counter/counter-4.png";
import reservationCounter5 from "../images/reservation-counter/counter-5.jpg";
import reservationCounter6 from "../images/reservation-counter/counter-6.jpg";
import VideoMarquee from "../components/VideoMarquee";
import ImageGrid from "../components/ImageGrid";
import CustomCard from "./CustomCard";
import styled from "@emotion/styled";

const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  @media only screen and (max-width: 1200px) {
    height: 60vh;
  }
`;

const StyledFlexContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
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
`;

const SectionHeading = styled(Typography)`
  font-weight: 700;
  padding: 40px 0px 15px 45px;
`;

const ContentText = styled(Typography)`
  line-height: 1.8;
  font-size: 20px;
  text-align: justify;
`;

export default function StationBranding() {
  const stationBuildingRef = useRef(null);
  const reservationCounterRef = useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      title: "Station Building",
      image: stationBuildingCard,
      images: [
        stationBranding1,
        stationBranding2,
        stationBranding3,
        stationBranding4,
        stationBranding5,
        stationBranding6,
      ],
      description:
        "Description for Station Building goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        stationBuildingRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Reservation Counter",
      image: reservationCounterCard,
      images: [
        reservationCounter1,
        reservationCounter2,
        reservationCounter3,
        reservationCounter4,
        reservationCounter5,
        reservationCounter6,
      ],
      description:
        "Description for Reservation Counter goes here. This can include key features, specifications, etc.",
      onViewMore: () => {
        reservationCounterRef.current?.scrollIntoView({ behavior: "smooth" });
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
          component="img"
          src={bannerImage}
          alt="Banner"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <OverlayText>
          <LineTextContainer>
            <Typography variant="subtitle1" sx={TypographyText.subtitle1}>
              Our services
            </Typography>
          </LineTextContainer>

          <Typography variant="h4" sx={TypographyText.h4}>
            Advertising Across the Rail Network
          </Typography>
          <br />

          <Typography variant="h6" sx={TypographyText.h6}>
            Maximize your brand's visibility with eye-catching ads in
            high-traffic railway hubs.
          </Typography>
        </OverlayText>
      </ImageContainer>

      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1976D2", marginBottom: "40px", fontWeight: 700 }}
      >
        STATION BRANDING
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

      <SectionHeading ref={stationBuildingRef} variant="h5">
        Station Building
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Railway station building branding transforms station exteriors and
          interiors into powerful advertising spaces. This includes using walls,
          facades, pillars, and entryways to display large-scale advertisements,
          logos, or thematic designs. It leverages the station’s high visibility
          and footfall to maximize brand exposure to a diverse audience of daily
          commuters, travelers, and visitors. Station building branding not only
          promotes businesses but also enhances the station's aesthetic appeal,
          creating a visually engaging environment that integrates functionality
          with impactful marketing. <br />
          Railway station building advertising utilizes the vast and visible
          spaces of station buildings to promote brands, services, or events.
          This includes facades, walls, entry gates, pillars, and rooftops,
          turning them into dynamic advertising platforms. With thousands of
          passengers and visitors passing through daily, station building
          advertising ensures high visibility and prolonged engagement. It
          offers opportunities for creative campaigns, such as large banners,
          digital displays, or thematic wraps that integrate seamlessly with the
          station’s design. This advertising method not only enhances brand
          recognition but also contributes to the aesthetic appeal of the
          station, making it visually engaging for commuters. Its strategic
          placement ensures that messages reach a diverse audience, maximizing
          the return on investment for advertisers.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[0].images} />

      <SectionHeading ref={reservationCounterRef} variant="h5">
        Reservation Counter
      </SectionHeading>
      <ContentContainer>
        <ContentText>
          Reservation counter branding involves transforming counters into
          visually appealing and functional spaces with branded signage,
          posters, digital displays, and thematic designs. This type of branding
          creates a lasting impression on passengers while enhancing their
          experience at the reservation counter. It can also integrate sponsor
          messaging with digital kiosks, seating areas, and interactive
          displays, providing brands with direct access to a captive audience.
          <br />A railway reservation counter is a designated area within a
          station or authorized location where passengers can book, modify, or
          cancel train tickets. Staffed by trained personnel, these counters
          assist travelers with ticketing inquiries, seat availability, train
          schedules, and fare details. They are especially valuable for
          passengers who prefer in-person assistance over online booking
          options. Reservation counters often have a digital interface to
          streamline the ticketing process and improve efficiency. Serving as an
          essential touchpoint for rail travelers, these counters play a crucial
          role in ensuring seamless travel planning and accessibility for all
          passengers.
        </ContentText>
      </ContentContainer>
      <ImageGrid images={cardData[1].images} />

      <VideoMarquee />
    </div>
  );
}
