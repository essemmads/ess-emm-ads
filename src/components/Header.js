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
import CallIcon from "../images/phone-sm-icon.png";
import EmailIcon from "../images/mail-sm-icon.png";


export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const socialLinks = [
    { icon: <FacebookRoundedIcon />, label: "Facebook" },
    { icon: <InstagramIcon />, label: "Instagram" },
    { icon: <LinkedInIcon />, label: "LinkedIn" },
    { icon: <YouTubeIcon />, label: "YouTube" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1, color: "#1976D2" }} id="header">
      <AppBar position="static">
        <Toolbar>
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
              <Link href="tel:+919876543210" underline="none" color="white">
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
              >
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <YouTubeIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

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

        <Card sx={{ marginBottom: "30px", padding: "15px", marginTop: "50px" }}>
          <CardContent>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
            
            <img src={CallIcon} alt="Ess Emm Railway Ads Phone" />
                
            </IconButton>
            <Link href="tel:+919876543210" underline="none" color="black">
              +91 1234567890
            </Link>
            <br />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
             <img src={EmailIcon} alt="Ess Emm Railway Ads Email"/>
            </IconButton>
            <Link href="mailto:essemm@gmail.com" underline="none" color="black">
              essemm@gmail.com
            </Link>
          </CardContent>
        </Card>

        <Card sx={{ marginBottom: "30px", padding: "15px" }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              {socialLinks.map(({ icon, label }, index) => (
                <IconButton
                  key={label}
                  size="small "
                  color="inherit"
                  aria-label={label}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </CardContent>
        </Card>
      </SwipeableDrawer>
    </Box>
  );
}
