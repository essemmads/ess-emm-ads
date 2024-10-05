import * as React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export default function AboutUs() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
      }}
    >
      <Card variant="outlined" sx={{ boxShadow: 3, width: "60%" }}>
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: "16px" }}>
            About
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", paddingBottom: "20px" }}
          >
            We provide quality products and exceptional service. Black and White
            Creations, a leading advertising company based in Kochi, specializes
            in railway advertising and offers comprehensive services across
            print, TV, radio, outdoor, and online media. As the No. 1 railway
            advertising agency in South India, Black and White Creations has
            successfully wrapped over 1,000 train coaches in the past decade,
            serving Southern Railway, South Central Railway, South Western
            Railway, and East Coast Railway.
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ paddingBottom: "20px" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "10px 15px" }}
            >
              More About Us
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
