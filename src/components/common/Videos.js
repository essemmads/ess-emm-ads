import * as React from "react";
import { Typography, Grid, Box } from '@mui/material';


export default function AboutUs() {
  return (
    <Box sx={{ padding: '40px 0', backgroundColor: '#fff' }}>
    <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
      Our Videos
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6}>
        <iframe
          width="70%"
          height="315"
          src="https://www.youtube.com/embed/AiD6SOOBKZI?si=8Mx9VIg7UJ7fL5to"
          title="YouTube Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Grid>
      <Grid item xs={12} sm={6}>
        <iframe
          width="70%"
          height="315"
          src="https://www.youtube.com/embed/WAM3E91iKWM?si=WG_k9gUf4cRlLGSZ"
          title="YouTube Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Grid>
    </Grid>
  </Box>
  );
}
