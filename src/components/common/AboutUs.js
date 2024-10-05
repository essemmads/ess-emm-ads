import * as React from "react";
import { Card, CardContent, Typography, Button } from '@mui/material';

export default function AboutUs() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <Card variant="outlined" sx={{boxShadow: 3}}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: '16px'}}>
          About
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', paddingBottom: '20px' }}>
          We provide quality products and exceptional service.
        </Typography>
        <Button variant="contained" color="primary" sx={{ padding: '10px 15px' }}>
            More About Us
          </Button>
      </CardContent>
    </Card>
  </div>
  );
}
