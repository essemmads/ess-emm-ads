import * as React from "react";
import { Card, CardContent, Typography, Box, Container, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: '#fff', padding: '20px 0' }}>
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Ess Emm Ads. All Rights Reserved.
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>
          Privacy Policy
        </Link>
        |
        <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>
          Terms of Service
        </Link>
      </Box>
    </Container>
  </Box>
  );
}
