import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  padding: 0 0 120px 0;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 0 16px;

  @media (max-width: 1550px) {
    gap: 50px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardContainer = styled.div`
  flex: 1 1 calc(33.33% - 30px);
  max-width: 400px;
  position: relative;

  @media (max-width: 1550px) {
    max-width: 300px;
    flex: 1 1 calc(33.33% - 30px);
  }

  @media (max-width: 750px) {
    flex: 1 1 100%;
    width: 300px;
    gap: 60px;
  }

  @media (max-width: 350px) {
    width: auto;
  }
`;

const MainCard = styled(Card)`
  width: 65vw;
  text-align: center;
  transition: 0.3s;
  display: flex;
  height: 25vh;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: visible;

  @media (max-width: 1200px) {
    height: 30vh;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

   @media (max-width: 450px) {
    width: 80%;
    height: 35vh;
  }
`;


const GreyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: 800;
  font-size: 22px;
  padding: 10px;

  @media (max-width: 1060px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const LeftContent = styled(Typography)`
  text-align: center;
  margin-top: 20px!important;

  @media (max-width: 450px) {
    width: 45vw;
  }
`;

const CenterTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const HangingButton = styled(Button)`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  z-index: 1;
  border-radius: 50px;
  text-transform: none;
  width: 50%;

  @media (max-width: 1060px) {
    bottom: -15px;
  }
`;

const MainCardHangingButton = styled(Button)`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  z-index: 1;
  border-radius: 50px;
  text-transform: none;
  

  @media (max-width: 1060px) {
    bottom: -20px;
  }

  @media (max-width: 320px) {
    width: 50vw;
  }
`;

const ArrowButton = styled(Button)`
  min-width: 40px;
  height: 40px;
  margin: -2px 20px;
  padding: 0;
`;

const Title = styled(Typography)`
  padding: 80px 0;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

const StyledCardHeader = styled(CardHeader)`
  background-color: #1976d2;
  color: white;
  text-align: center;
  position: relative;
  height: 3px;

  .MuiCardHeader-title {
    font-size: 1.2rem;
    font-weight: 600;

     @media (max-width: 600px) {
        font-size: 1rem;
      }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 4px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export default function Services() {
  const isTab = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = React.useState("TRAIN BRANDING");

  const services = [
    { id: 1, name: "STATION BRANDING", content: "It transforms high-traffic hubs into impactful advertising spaces, engaging diverse audiences with creative,large scale promotional displays." },
    { id: 2, name: "OUTDOOR ADVERTISING", content: "It leverages station exteriors, billboards, and transit routes to capture broad audience attention with high-visibility, impactful campaigns." },
    { id: 3, name: "PLATFORM WISE BRANDING", content: "It targets passengers at specific platforms with tailored messages, ensuring focused and localized audience engagement." },
  ];

  const brandingOptions = ["EXTERIOR", "TRAIN BRANDING", "INTERIOR"];

  const handleLeftArrowClick = () => {
    if (isTab) {
      const currentIndex = brandingOptions.indexOf(currentItem);
      const newIndex =
        (currentIndex - 1 + brandingOptions.length) % brandingOptions.length;
      setCurrentItem(brandingOptions[newIndex]);
    }
  };

  const handleRightArrowClick = () => {
    if (isTab) {
      const currentIndex = brandingOptions.indexOf(currentItem);
      const newIndex = (currentIndex + 1) % brandingOptions.length;
      setCurrentItem(brandingOptions[newIndex]);
    }
  };

  const handleViewMore = (service) => {
    const formattedService = service.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${formattedService}`);
  };

  React.useEffect(() => {
    console.log(isTab, "asa")
    if(!isTab) {
      setCurrentItem("TRAIN BRANDING");
    }
  }, [isTab])

  return (
    <Container id="ourServices" style={{backgroundColor: "#F4F5F9"}}>
      <Title> Our Services </Title>
      <ServicesWrapper>
        {services.map((service) => (
          <CardContainer key={service.id}>
            <Card
              sx={{
                textAlign: "center",
                transition: "0.3s",
                height: "30vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "visible",
              }}
            >
               <StyledCardHeader title={service.name}/>
              <CardContent style={{padding: "20px"}} sx={{ flexGrow: 1 }}>
                <Typography >
                  {service.content}
                </Typography>
              </CardContent>
              <HangingButton
                variant="contained"
                color="primary"
                onClick={() => handleViewMore(service.name)}
              >
                <Typography fontWeight={700}>View more</Typography>
              </HangingButton>
            </Card>
          </CardContainer>
        ))}
      </ServicesWrapper>
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MainCard sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <GreyBox>
            <div>EXTERIOR</div>
            <LeftContent>Ensure your message reaches a wide audience with eye-catching designs on the exterior of trains.</LeftContent>
          </GreyBox>

          <CenterTextWrapper sx={{ flexGrow: 1 }}>
            <CardContent
              sx={{
                flexGrow: 1,
                padding: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <ArrowButton
                onClick={handleLeftArrowClick}
                disabled={currentItem === "EXTERIOR"}
              >
                <ArrowBackIosIcon />
              </ArrowButton>

            <div>
              <Typography variant="h6" fontWeight={700}>
                {currentItem}
              </Typography>

             {currentItem === "INTERIOR" && <LeftContent>Make a lasting impression on passengers as they interact with your brand throughout their ride.</LeftContent>}
             {currentItem === "EXTERIOR" && <LeftContent>Ensure your message reaches a wide audience with eye-catching designs on the exterior of trains.</LeftContent>}
            </div>
              <ArrowButton
                onClick={handleRightArrowClick}
                disabled={currentItem === "INTERIOR"}
              >
                <ArrowForwardIosIcon />
              </ArrowButton>

              <MainCardHangingButton
                variant="contained"
                color="primary"
                onClick={() => handleViewMore(currentItem)}
              >
                <Typography fontWeight={700}>View More</Typography>
              </MainCardHangingButton>
            </CardContent>
          </CenterTextWrapper>

          {/* INTERIOR inside the card */}
          <GreyBox>
            <div>INTERIOR</div>
            <LeftContent>Make a lasting impression on passengers as they interact with your brand throughout their ride.</LeftContent>
          </GreyBox>
        </MainCard>
      </div>
    </Container>
  );
}
