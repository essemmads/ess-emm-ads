import * as React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 120px 0;
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
    gap: 20px;
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
  }
`;

const MainCard = styled(Card)`
  width: 65vw;
  text-align: center;
  transition: 0.3s;
  display: flex;
  height: 30vh;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: visible;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const GreyBox = styled.div`
  width: 15vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 22px;

  @media (max-width: 1060px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
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
`;

const ArrowButton = styled(Button)`
  min-width: 40px;
  height: 40px;
  margin: -2px 20px;
  padding: 0;
`;

export default function Services() {
  const navigate = useNavigate();

  const services = [
    { id: 1, name: "STATION BRANDING" },
    { id: 2, name: "OUTDOOR ADVERTISING" },
    { id: 3, name: "PLATFORM WISE BRANDING" },
  ];

  const handleViewMore = (service) => {
    const formattedService = service.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${formattedService}`);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>
        Our Services
      </Typography>
      <ServicesWrapper>
        {services.map((service) => (
          <CardContainer key={service.id}>
            <Card
              sx={{
                padding: "16px",
                textAlign: "center",
                transition: "0.3s",
                height: "30vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "visible",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight={700}>
                  {service.name}
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
        <MainCard>
          <GreyBox>EXTERIOR</GreyBox>
          <CenterTextWrapper>
            <CardContent
              sx={{
                flexGrow: 1,
                padding: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <ArrowButton>
                <ArrowBackIosIcon />
              </ArrowButton>

              <Typography variant="h6" fontWeight={700}>
                TRAIN BRANDING
              </Typography>
              <ArrowButton>
                <ArrowForwardIosIcon />
              </ArrowButton>

              <MainCardHangingButton
                variant="contained"
                color="primary"
                onClick={() => handleViewMore(1)}
              >
                <Typography fontWeight={700}>View More</Typography>
              </MainCardHangingButton>
            </CardContent>
          </CenterTextWrapper>
          <GreyBox>INTERIOR</GreyBox>
        </MainCard>
      </div>
    </Container>
  );
}
