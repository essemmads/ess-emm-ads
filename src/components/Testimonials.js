import React from "react";
import { Typography, Box } from "@mui/material";
import Slider from "react-slick";
import styled from "@emotion/styled";
import defaultProfileImage from "/public/images/icons/profile-icon.png";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Global, css } from "@emotion/react";
import Image from "next/image";
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 80px 0;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }
`;

const Title = styled(Typography)`
  padding-bottom: 80px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

const StyledTypography = styled(Typography)`
  margin: 0 auto;
  text-align: center;
  width: 60%;

   @media (max-width: 600px) {
    margin: 0 0;
    width: 100%;
  }
`;

export default function Testimonials() {
  const testimonials = [
    {
      name: "Pranav srinath",
      designation: "CEO, Company A",
      feedback: "We are delighted with the results of our railway advertising campaign managed by Ess Arr Ads. Their team’s expertise, innovative designs, and seamless execution made the entire process stress-free. They truly understand the nuances of impactful advertising.",
      profileImage: defaultProfileImage,
    },
    {
      name: "Swetha",
      designation: "Manager, Company B",
      feedback: "Ess Arr Ads took our railway advertising campaign to new heights. Their team’s creativity and strategic planning helped us make a strong impression on commuters. We saw a noticeable increase in engagement, and their professionalism ensured the process was seamless.",
      profileImage: defaultProfileImage,
    },
    {
      name: "Praveen kumar",
      designation: "Developer, Company C",
      feedback: "Ess Arr Ads delivered outstanding railway advertising solutions that gave our brand the visibility it needed. Their strategic placements and creative designs helped us reach a broad, engaged audience. We were thoroughly impressed with their dedication and results.",
      profileImage: defaultProfileImage,
    },
    {
      name: "Manimaran",
      designation: "Developer, Company C",
      feedback: "Working with Ess Arr Ads has been a transformative experience for our brand. Their expertise in railway advertising ensured our message reached the right audience effectively. The team’s dedication and innovative ideas have significantly enhanced our market presence.",
      profileImage: defaultProfileImage,
    },
    {
      name: "Jeyaraj",
      designation: "Developer, Company C",
      feedback: "Ess Arr Ads exceeded our expectations with their railway advertising services. Their unique concepts, flawless execution, and excellent customer support helped us connect with our target audience effectively. We highly recommend their services!",
      profileImage: defaultProfileImage,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const GlobalSlickDotsStyles = () => (
    <Global
      styles={css`
        .slick-dots {
          bottom: -30px !important;
        }
        .slick-dots li button {
          width: 12px !important;
          height: 12px !important;
          border-radius: 50% !important;
          background-color: grey !important;
          border: none !important;
        }
        .slick-dots li.slick-active button {
          background-color: #1976d2 !important;
        }
        .slick-dots li button:before {
          font-size: 0 !important;
        }

        @media (max-width: 750px) {
          .slick-dots {
            display: block !important;
          }
        }

        @media (min-width: 751px) {
          .slick-dots {
            display: none !important;
          }
        }
      `}
    />
  );

  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Title>Client Testimonials</Title>
        <Box sx={{ width: "70%", margin: "0 auto" }}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <ProfileImage
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                  />
                </Box>
                <Typography variant="h6">{testimonial.name}</Typography>
                {/* <Typography
                  variant="subtitle1"
                  sx={{ fontStyle: "italic", marginBottom: "16px" }}
                >
                  {testimonial.designation}
                </Typography> */}
                <StyledTypography variant="body2">{testimonial.feedback}</StyledTypography>
              </div>
            ))}
          </Slider>
          <GlobalSlickDotsStyles />
        </Box>
      </Box>
    </Container>
  );
}

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "5%",
        top: "50%",
        backgroundColor: "#000000",
        borderRadius: "30%",
        zIndex: 1,
        "&:hover": {
          backgroundColor: "black",
        },
        "@media (max-width: 750px)": {
          display: "none",
        },
      }}
    >
      <ChevronLeftIcon sx={{ color: "white", fontSize: "2rem" }} />
    </IconButton>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "5%",
        top: "50%",
        backgroundColor: "#000000",
        borderRadius: "30%",
        zIndex: 1,
        "&:hover": {
          backgroundColor: "black",
        },
        "@media (max-width: 750px)": {
          display: "none",
        },
      }}
    >
      <ChevronRightIcon sx={{ color: "white", fontSize: "2rem" }} />
    </IconButton>
  );
};

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};


CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};
