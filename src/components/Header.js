import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useMediaQuery, Card, CardContent, Button } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from "../images/icons/phone-sm-icon.png";
import EmailIcon from "../images/icons/mail-sm-icon.png";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  margin-bottom: 30px;
  padding: 15px;
  margin-top: 50px;
  background-color: #1976d2;
`;

const StyledIconButton = styled(IconButton)`
  align-self: center;
  width: 10vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  align-self: center;
  font-size: 1rem;

  @media (max-width: 350px) {
    align-self: center;
  }
`;

const InfoSection = styled(Link)`
  display: flex;
  align-self: center;
  gap: 20px;

  @media (max-width: 350px) {
    flex-direction: column;
  }
`;

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const socialLinks = [
    { icon: <FacebookRoundedIcon />, label: "Facebook" },
    { icon: <LinkedInIcon />, label: "LinkedIn" },
    { icon: <InstagramIcon />, label: "Instagram" },
    { icon: <YouTubeIcon />, label: "YouTube" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1, color: "#1976D2" }} id="header">
      <AppBar position="static">
        <Toolbar style={{ padding: "0 4%" }}>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!isMobile && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <img src={CallIcon} alt="Ess Emm Railway Ads Phone" />
              </IconButton>
              <Link href="tel:0452-2362201" underline="none" color="white">
                0452 - 2362201
              </Link>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: "20px" }}
              >
                <img src={EmailIcon} alt="Ess Emm Railway Ads Email" />
              </IconButton>
              <Link
                href="mailto:essarrads@gmail.com"
                underline="none"
                color="white"
              >
                essarrads@gmail.com
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ padding: "2px" }}
              >
                <FacebookRoundedIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ padding: "2px" }}
              >
                <LinkedInIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ padding: "2px" }}
              >
                <InstagramIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ padding: "2px" }}
              >
                <YouTubeIcon sx={{ fontSize: "35px" }} />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <SwipeableDrawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          sx={{
            "& .MuiDrawer-paper": {
              width: "100%",
              height: "100%",
              padding: 2,
              boxSizing: "border-box",
            },
          }}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ position: "absolute", top: 16, right: 16, color: "black" }}
          >
            <CloseIcon />
          </IconButton>

          <Card variant="outlined" sx={{ marginTop: "50px" }}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px !important",
              }}
            >
              <Button
                variant="contained"
                onClick={toggleDrawer(true)}
                sx={{ width: "90%" }}
              >
                Get Quote
              </Button>
            </CardContent>
          </Card>

          <StyledCard>
            <CardContent>
              <InfoSection>
                <StyledIconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="phone"
                >
                  <img src={CallIcon} alt="Ess Emm Railway Ads Phone" />
                </StyledIconButton>
                <StyledLink href="tel:0452-2362201">0452 - 2362201</StyledLink>
              </InfoSection>
              <br />
              <InfoSection>
                <StyledIconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="email"
                >
                  <img src={EmailIcon} alt="Ess Emm Railway Ads Email" />
                </StyledIconButton>
                <StyledLink href="mailto:essarrads@gmail.com">
                  essarrads@gmail.com
                </StyledLink>
              </InfoSection>
            </CardContent>
          </StyledCard>

          <StyledCard>
            <CardContent>
              <Box display="flex" justifyContent="space-around">
                {socialLinks.map(({ icon, label }, index) => (
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    sx={{ padding: "2px" }}
                    label={label}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Box>
            </CardContent>
          </StyledCard>
        </SwipeableDrawer>
      )}
    </Box>
  );
}
