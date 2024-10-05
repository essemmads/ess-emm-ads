import * as React from "react";
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Services() {
  const navigate = useNavigate();
  
  const handleViewMore = () => {
    navigate(`/service1`);
  };

  return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '40px 0' }}>
          <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
            Our Services
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {Array.from({ length: 4 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ position: 'relative' }}>
                <Card sx={{ padding: '16px', textAlign: 'center' }}>
                  <CardContent>
                    <Typography variant="h6">Service {index + 1}</Typography>
                    <Typography variant="body2">
                      Brief description of service {index + 1}.
                    </Typography>
                  </CardContent>
                </Card>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ 
                    position: 'absolute', 
                    bottom: '-15px', // Positioning the button to hang out
                    left: '50%', 
                    transform: 'translateX(-50%)', // Center the button
                  }}
                  onClick={() => handleViewMore()}
                >
                  View More
                </Button>
              </Grid>
            ))}
          </Grid>
        </div> 
  );
}
