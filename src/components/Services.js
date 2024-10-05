import * as React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "RAILWAY ADVERTISING",
      description:
        "It’s all about wrapping of a coach or an entire train with your stunning print advertisements.",
    },
    {
      id: 2,
      name: "DESIGNING & WRITING",
      description:
        "We efficiently execute creative writing (Malayalam & English), concept development,",
    },
    {
      id: 3,
      name: "DIGITAL MARKETING",
      description:
        "We conceive, design and deliver creative content for social media like Facebook, Instagram etc.",
    },
    {
      id: 4,
      name: "OUTDOOR ADVERTISING",
      description:
        "We provide complete facility for interior LCD display on private buses in Kerala. We have",
    },
  ];

  const handleViewMore = (serviceId) => {
    navigate(`/service${serviceId}`);
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "120px 0" }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>
        Our Services
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={service.id}
            sx={{ position: "relative" }}
          >
            <Card
              sx={{
                padding: "16px",
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#cfe8fc", // Light blue on hover
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6">{service.name}</Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>

            <Button
              variant="contained"
              color="primary"
              sx={{
                position: "absolute",
                bottom: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              onClick={() => handleViewMore(service.id)}
            >
              View More
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
