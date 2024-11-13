import React from 'react';
import { Card, CardContent, CardHeader, Button, Typography, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomCard = ({ title, description, onViewMore }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
      <Card sx={{ width: 300, borderRadius: '10px' }}>
        <CardHeader
          title={title}
          sx={{
            backgroundColor: "#1976D2",
            color: "white",
            textAlign: 'center',
          }}
          titleTypographyProps={{
            style: { fontSize: '1rem', fontWeight: '200' }
          }}
        />
        <CardContent sx={{ backgroundColor: '#D9D9D9' }}>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {description}
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button
          variant="outlined"
          onClick={onViewMore}
          sx={{
            borderRadius: '50px',
            borderColor: '#1976D2',
            color: '#1976D2',
            borderWidth: '2px',
            fontWeight: 'bold',
          }}
        >
          More details <KeyboardArrowDownIcon style={{ paddingLeft: '5px' }} />
        </Button>
      </Box>
    </Box>
  );
};

export default CustomCard;
