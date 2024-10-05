import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import styled from '@emotion/styled'


const Container = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: black; /* Change arrow color to black */
  }

  .slick-prev,
  .slick-next {
    z-index: 1; /* Ensure arrows are above the slides */
  }
`;

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      designation: "CEO, Company A",
      feedback: "This is an amazing service! Highly recommend."
    },
    {
      name: "Jane Smith",
      designation: "Manager, Company B",
      feedback: "Fantastic experience! Will use again."
    },
    {
      name: "Michael Brown",
      designation: "Developer, Company C",
      feedback: "Very satisfied with the service and support."
    },
    {
      name: "Emily Davis",
      designation: "Designer, Company D",
      feedback: "A game changer for our business!"
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  
  return (
    <Container>
      <Box sx={{ padding: '40px 0', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
          What Our Clients Say
        </Typography>
        <Box sx={{ width: '70%', margin: '0 auto' }}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Card key={index} sx={{ padding: '20px', margin: '0 auto' }}>
                <CardContent>
                  <Typography variant="h6">{testimonial.name}</Typography>
                  <Typography variant="subtitle1" sx={{ fontStyle: 'italic', marginBottom: '16px' }}>
                    {testimonial.designation}
                  </Typography>
                  <Typography variant="body2">
                    {testimonial.feedback}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
}
