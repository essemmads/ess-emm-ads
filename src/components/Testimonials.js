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

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      designation: "CEO, Company A",
      feedback: "This is an amazing service! Highly recommend.",
      profileImage: defaultProfileImage,
    },
    {
      name: "Jane Smith",
      designation: "Manager, Company B",
      feedback: "Fantastic experience! Will use again.",
      profileImage: defaultProfileImage,
    },
    {
      name: "Michael Brown",
      designation: "Developer, Company C",
      feedback: "Very satisfied with the service and support.",
      profileImage: defaultProfileImage,
    },
    {
      name: "Emily Davis",
      designation: "Designer, Company D",
      feedback: "A game changer for our business!",
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
                <Typography
                  variant="subtitle1"
                  sx={{ fontStyle: "italic", marginBottom: "16px" }}
                >
                  {testimonial.designation}
                </Typography>
                <Typography variant="body2">{testimonial.feedback}</Typography>
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
