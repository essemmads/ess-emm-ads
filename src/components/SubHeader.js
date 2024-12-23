import React, { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import essArrLogo from "/public/images/ess-arr-logo.png";
import styled from "@emotion/styled";
import { Menu, MenuItem, useMediaQuery } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image from "next/image";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;

  @media only screen and (max-width: 900px) {
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  @media only screen and (max-width: 400px) {
    padding: 10px 20px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 14px;
  margin-left: 4%;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    width: 50%;
    margin-top: 14px;
  }
`;

const SideMenuButton = styled(IconButton)`
  @media (min-width: 901px) {
    display: none;
  }
`;

const DesktopMenu = styled(Toolbar)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    justify-content: flex-end;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const GetAQuoteButton = styled(Button)`
  background-color: #1976d2;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  height: 28px;
  padding: 6px;
  order: 1;

  &:hover {
    background-color: #1976d2;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
    text-align: right;
  }
`;

const TextButton = styled(Button)`
  color: black;
  font-size: 20px;
  text-transform: none;
  order: 0;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export default function SubHeader() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [serviceMenuAnchor, setServiceMenuAnchor] = useState(null);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const serviceOptions = [
    "Station Branding",
    "Outdoor Advertising",
    "Platform Wise Branding",
    "Train Branding",
  ];

  const handleServiceClick = (event) => {
    setServiceMenuAnchor(event.currentTarget);
  };

  const handleServiceClose = () => {
    setServiceMenuAnchor(null);
  };

  const handleMenuClick = (service) => {
    setDrawerOpen(false);
    setServiceMenuAnchor(null);
    const formattedService = service.toLowerCase().replace(/\s+/g, "-");
    router.push(`/${formattedService}`);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleServiceMenu = () => {
    setServiceMenuOpen((prev) => !prev);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, position: "relative" }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      <List sx={{ marginTop: 4 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(event) => {
              if (event.target.tagName !== "svg") toggleDrawer(false)(event);
              router.push("/");
            }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(event) => {
              if (event.target.tagName !== "svg") toggleDrawer(false)(event);
              router.push("/about-us");
            }}
          >
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleServiceMenu}>
            <ListItemText primary="Services" />
            {serviceMenuOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
        </ListItem>
        {serviceMenuOpen &&
          serviceOptions.map((item) => (
            <ListItem key={item} disablePadding sx={{ pl: 4 }}>
              <ListItemButton onClick={() => handleMenuClick(item)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        <ListItem disablePadding>
          <ListItemButton
            onClick={(event) => {
              if (event.target.tagName !== "svg") toggleDrawer(false)(event);
              router.push("/gallery");
            }}
          >
            <ListItemText primary="Gallery" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(event) => {
              if (event.target.tagName !== "svg") toggleDrawer(false)(event);
              router.push("/contact-us");
            }}
          >
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Container>
      {isMobile && (
        <>
          <SideMenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </SideMenuButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerContent}
          </Drawer>
        </>
      )}

      <ImageContainer>
        <Image
          src={essArrLogo}
          alt="Ess Emm Railway Ads logo"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
      </ImageContainer>

      <DesktopMenu>
        <TextButton onClick={() => router.push("/")}>Home</TextButton>
        <TextButton onClick={() => router.push("/about-us")}>About us</TextButton>
        <TextButton onClick={handleServiceClick}>
          Services <ArrowDropDownIcon />
        </TextButton>
        <Menu
          anchorEl={serviceMenuAnchor}
          open={Boolean(serviceMenuAnchor)}
          onClose={handleServiceClose}
        >
          {serviceOptions.map((item) => (
            <MenuItem
              key={item}
              onClick={() => handleMenuClick(item)}
              sx={{ fontSize: "18px", color: "black", fontWeight: 500 }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
        <TextButton onClick={() => router.push("/gallery")}>Gallery</TextButton>
        <TextButton onClick={() => router.push("/contact-us")}>
          Contact us
        </TextButton>

        <GetAQuoteButton
          onClick={() => {
            router.push("/");
            setTimeout(() => {
              document.getElementById("contactUsSection")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 300);
          }}
          sx={{ marginLeft: "40px" }}
        >
          GET A QUOTE
        </GetAQuoteButton>
      </DesktopMenu>
    </Container>
  );
}
