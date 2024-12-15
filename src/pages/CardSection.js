import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PhoneIcon from "../images/icons/phone-icon.png";
import AddressIcon from "../images/icons/location-icon.png";
import EmailIcon from "../images/icons/mail-icon.png";

const FadingCard = styled(Card)`
  border-radius: 25px;
  background-color: #1976d2;
  color: white;
  position: relative;
  z-index: 1;
  height: 400px;
  width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: ${({ side }) =>
    side === "right" ? "25px -20px 25px 0" : "25px 0 25px -20px"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    ${({ side }) => side}: 0;
    width: 70px;
    height: 100%;
    background: linear-gradient(
      to ${({ side }) => (side === "right" ? "left" : "right")},
      #77b6f6,
      #1976d2
    );
    z-index: -1;
  }

  @media (max-width: 600px) {
    width: 80%;
    height: 45vh;
    margin: 8px 0;

    &::before {
      width: 100%;
      height: 70px;
      top: auto;
      ${({ side }) => (side === "right" ? "bottom" : "top")}: 0;
      background: linear-gradient(
        to ${({ side }) => (side === "right" ? "top" : "bottom")},
        #77b6f6,
        #1976d2
      );
    }
  }
`;

const CenterCard = styled(Card)`
  border-radius: 25px;
  background-color: #1976d2;
  color: white;
  z-index: 2;
  height: 450px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    width: 90%;
    height: 45vh;
    margin: -25px 0;
  }
`;

const StyledIcon = styled("img")`
  width: 50px;
  height: auto;
  margin-top: 20%;
`;

const StyledCenterIcon = styled("img")`
  width: 50px;
  height: auto;
  margin-top: 5%;
`;

const CardSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
        position: "relative",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
      }}
    >
      <FadingCard side="right">
        <StyledIcon src={PhoneIcon} alt="Phone Icon" />
        <CardContent sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="h5">Phone Number</Typography>
          <Typography variant="h5" marginTop={1}>
            98421 08493
          </Typography>
        </CardContent>
      </FadingCard>

      <CenterCard>
        <StyledCenterIcon src={AddressIcon} alt="Address Icon" />
        <CardContent sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="h5">Address</Typography>
          <Typography variant="h5" marginTop={2}>
            2, Shanmugam Pillai Thoppu 2nd Street,
            <br /> West Ponnagaram Main Road. Madurai - 625 016.
          </Typography>
        </CardContent>
      </CenterCard>

      <FadingCard side="left">
        <StyledIcon src={EmailIcon} alt="Email Icon" />
        <CardContent sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="h5">Email Address</Typography>
          <Typography variant="h5" marginTop={1}>
            essarrads@gmail.com
          </Typography>
        </CardContent>
      </FadingCard>
    </Box>
  );
};

export default CardSection;