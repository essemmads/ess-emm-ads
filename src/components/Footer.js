import React from "react";
import { Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000000;
  color: white;
  padding: 20px 0;
  overflow: hidden;
  flex-direction: column;
  min-height: 100px;

  @media (max-width: 750px) {
    padding: 20px 10px;
    margin-top: 50%;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  flex-direction: row;
  align-self: center;

  @media (max-width: 750px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  @media (max-width: 750px) {
    align-items: flex-start;
    text-align: left;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid #444;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 10%;

  @media (max-width: 750px) {
    justify-content: center;
    width: 100%;
    padding-top: 20px;
    gap: 20px;
    margin-left: 0;
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    document.getElementById(path)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <ColumnContainer>
        <Column
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">| About ESS ARR ADS</Typography>
        </Column>

        <Column>
          <Typography variant="body1">| Quick Links</Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: "10px", marginBottom: "10px", cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                handleNavigation("header");
              }, 300);
            }}
          >
            Home
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginBottom: "10px", cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                handleNavigation("aboutUsSection");
              }, 300);
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginBottom: "10px", cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                handleNavigation("ourServices");
              }, 300);
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginBottom: "10px", cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                handleNavigation("contactUsSection");
              }, 300);
            }}
          >
            Contact Us
          </Typography>
        </Column>

        <Column>
          <Typography variant="body1">| Company</Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", marginTop: "10px" }}
          >
            Madurai
          </Typography>
          <Typography variant="body2">
            2, Shanmugam Pillai Thoppu 2nd Street,
            <br />
            West Ponnagaram Main Road, Madurai.
            <br />
            625 016
          </Typography>
        </Column>
      </ColumnContainer>

      <SocialIcons>
        <FacebookIcon sx={{ cursor: "pointer" }} />
        <LinkedInIcon sx={{ cursor: "pointer" }} />
        <InstagramIcon sx={{ cursor: "pointer" }} />
        <YouTubeIcon sx={{ cursor: "pointer" }} />
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
