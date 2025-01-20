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
import CallIcon from "/public/images/icons/phone-sm-icon.png";
import EmailIcon from "/public/images/icons/mail-sm-icon.png";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";

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
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const socialLinks = [
    { icon: <FacebookRoundedIcon />, label: "Facebook", link: "https://www.facebook.com/profile.php?id=61572087698728" },
    { icon: <LinkedInIcon />, label: "LinkedIn", link: "https://www.linkedin.com/company/105284338/admin/dashboard/" },
    { icon: <InstagramIcon />, label: "Instagram", link: "https://www.instagram.com/ess_arr_ads/" },
    { icon: <YouTubeIcon />, label: "YouTube", link: "https://www.youtube.com/@EssArrAds" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = () => {
    setLoading(true);
    toggleDrawer(false)(); 
    router.push("/");
    setTimeout(() => {
      document.getElementById("contactUsSection")?.scrollIntoView({
        behavior: "smooth",
      });
    setLoading(false);
    }, 2000);
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
                <Image src={CallIcon} alt="Ess Emm Railway Ads Phone" />
              </IconButton>
              <Link href="tel:+919842108493" underline="none" color="white">
                98421 08493
              </Link>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: "20px" }}
              >
                <Image src={EmailIcon} alt="Ess Emm Railway Ads Email" />
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
                onClick={() => window.open("https://www.facebook.com/profile.php?id=61572087698728", "_blank")}
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
                onClick={() => window.open("https://www.linkedin.com/company/105284338/admin/dashboard/", "_blank")}
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
                onClick={() => window.open("https://www.instagram.com/ess_arr_ads/", "_blank")}

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
                onClick={() => window.open("https://www.youtube.com/@EssArrAds", "_blank")}
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
                onClick={handleNavigation}
                sx={{ width: "90%" }}
                disabled={loading}
              >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Get A Quote"}
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
                  <Image src={CallIcon} alt="Ess Emm Railway Ads Phone" />
                </StyledIconButton>
                <StyledLink href="tel:+919842108493">98421 08493</StyledLink>
              </InfoSection>
              <br />
              <InfoSection>
                <StyledIconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="email"
                >
                  <Image src={EmailIcon} alt="Ess Emm Railway Ads Email" />
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
                {socialLinks.map(({ icon, label, link }, index) => (
                  <IconButton
                    key={index}
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    sx={{ padding: "2px" }}
                    label={label}
                    onClick={() => window.open(link, "_blank")}
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
