import React from "react";
import { Typography, Link, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000000;
  color: white;
  padding: 20px 0;
  overflow: hidden;
  flex-direction: column;
  min-height: 100px;

  @media (max-width: 900px) {
    padding: 20px 10px;
    margin-top: 50%;
  }
  
  @media (max-width: 350px) {
    margin-top: 90%;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  flex-direction: row;
  align-self: center;
  gap: 10%;

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
  margin-left: 5%;

  @media (max-width: 750px) {
    justify-content: center;
    width: 100%;
    padding-top: 20px;
    gap: 20px;
    margin-left: 0;
  }
`;

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    document.getElementById(path)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <ColumnContainer>
      <Column>
          <Typography variant="body1">| About ESS ARR ADS</Typography>
          <Typography variant="body2" sx={{marginTop: "12px" }}>
            In the ever-evolving world of advertising, we proudly oversee operations in more than 25 railway stations across Tamil Nadu, 
            transforming the way brands connect with their audiences.
          </Typography>
        </Column>

        <Column>
          <Typography variant="body1">| Quick Links</Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: "10px", marginBottom: "10px", cursor: "pointer" }}
            onClick={() => {
              router.push("/");
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
              router.push("/");
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
              router.push("/");
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
              router.push("/");
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
          <Typography variant="body2" sx={{marginTop: "12px" }}>
            2, Shanmugam Pillai Thoppu 2nd Street,
            <br />
            West Ponnagaram Main Road, Madurai.
            <br />
            625 016
          </Typography>

          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", marginTop: "10px" }}
          >
            Trichy
          </Typography>
          <Typography variant="body2" sx={{marginTop: "12px" }}>
            17, Arockiasamy Pillai Street, 
            <br />
            Crawford Colony, Trichy.
            <br />
            620012
          </Typography>

        </Column>

        <Column>
          <Typography variant="body1">| Associate company</Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", marginTop: "12px" }}
          >
            Ess Emm Advertising
          </Typography>
          <Box display="flex" alignItems="center" sx={{ marginTop: "12px" }}>
            <Typography variant="body2" sx={{ marginRight: "8px" }}> 
              Email: 
            </Typography>
            <Link href="mailto:essemmadvertisings@gmail.com" color="#fff" underline="none" variant="body2">
              essemmadvertisings@gmail.com
            </Link>
          </Box>

          <Box display="flex" alignItems="center" sx={{ marginTop: "12px" }}>
            <Typography variant="body2" sx={{ marginRight: "8px" }}> 
              Phone no :
            </Typography>
            <Link href="tel:+919791235939" color="#fff" underline="none" variant="body2">
            97912 35939
            </Link>
          </Box>
        </Column>
      </ColumnContainer>

      <SocialIcons>
        <FacebookIcon sx={{ cursor: "pointer" }} onClick={() => window.open("https://www.linkedin.com/company/105284338/admin/dashboard/", "_blank")}/>
        <LinkedInIcon sx={{ cursor: "pointer" }} onClick={() => window.open("https://www.linkedin.com/company/105284338/admin/dashboard/", "_blank")}/>
        <InstagramIcon sx={{ cursor: "pointer" }} onClick={() => window.open("https://www.instagram.com/ess_arr_ads/", "_blank")}/>
        <YouTubeIcon sx={{ cursor: "pointer" }} onClick={() => window.open("https://www.youtube.com/@EssArrAds", "_blank")}/>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
