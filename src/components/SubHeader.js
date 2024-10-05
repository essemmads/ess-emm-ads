import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import essEmmLogo from "../images/ess-emm.jpg";
import styled from "@emotion/styled";
import { Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 5vw;
  margin-top: 14px;
  margin-left: 50px;

  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 600px) {
    width: 20vw;
    margin-top: 14px;
    margin-left: 0px;
  }
`;

export default function SubHeader() {
  const navigate = useNavigate();

  const navItems = ["Portfolio", "Careers", "Contact"];
  const aboutUsOptions = [
    "Overview",
    "Our clients",
    "Our Sister Concern",
    "Awards",
    "Gallery",
  ];
  const serviceOptions = [
    "Railway Advertising",
    "Print",
    "Tv Commercials And Radio Jingles",
    "Creative Designing And Writing",
    "Digital Marketing",
    "Outdoor Advertising",
  ];

  const [aboutUsMenuAnchor, setAboutUsMenuAnchor] = useState(null);
  const [serviceMenuAnchor, setServiceMenuAnchor] = useState(null);

  const handleAboutUsClick = (event) => {
    setAboutUsMenuAnchor(event.currentTarget);
  };

  const handleAboutUsClose = () => {
    setAboutUsMenuAnchor(null);
  };

  const handleServiceClick = (event) => {
    setServiceMenuAnchor(event.currentTarget);
  };

  const handleServiceClose = () => {
    setServiceMenuAnchor(null);
  };

  const handleNavItemClick = (item) => {
    navigate(`/${item.toLowerCase()}`);
  };

  return (
    <Container>
      <ImageContainer>
        <img src={essEmmLogo} alt="Ess emm railway ads" />
      </ImageContainer>
      <Toolbar style={{ float: "right" }}>
        <Box>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={handleAboutUsClick}>
            About Us <ArrowDropDownIcon />
          </Button>
          <Menu
            anchorEl={aboutUsMenuAnchor}
            open={Boolean(aboutUsMenuAnchor)}
            onClose={handleAboutUsClose}
          >
            {aboutUsOptions.map((item) => (
              <MenuItem key={item} onClick={handleAboutUsClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>

          <Button onClick={handleServiceClick}>
            Services <ArrowDropDownIcon />
          </Button>
          <Menu
            anchorEl={serviceMenuAnchor}
            open={Boolean(serviceMenuAnchor)}
            onClose={handleServiceClose}
          >
            {serviceOptions.map((item) => (
              <MenuItem key={item} onClick={handleServiceClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
          {navItems.map((item) => (
            <Button key={item} onClick={() => handleNavItemClick(item)}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}
