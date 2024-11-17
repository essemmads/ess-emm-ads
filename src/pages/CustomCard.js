import React from 'react';
import { Card, CardContent, CardHeader, Button, Typography, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '@emotion/styled';

const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledCard = styled(Card)`
  width: 300px;
  border-radius: 10px;
`;

const StyledCardHeader = styled(CardHeader)`
  background-color: #1976D2;
  color: white;
  text-align: center;
  position: relative;
  height: 3px;

  .MuiCardHeader-title {
    font-size: 1rem;
    font-weight: 200;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 4px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const CardContentWrapper = styled(CardContent)`
  background-color: #D9D9D9;
  padding-top: 20px;
  position: relative;
  z-index: 0;
  border-radius: 0 0 10px 10px;
`;


const MoreDetailsButton = styled(Button)`
  border-radius: 50px;
  border-color: #1976D2;
  color: #1976D2;
  border-width: 2px;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(25, 118, 210, 0.1);
  }
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const CustomCard = ({ title, description, onViewMore }) => {
  return (
    <CardContainer>
      <StyledCard>
        <StyledCardHeader title={title} />
        <CardContentWrapper>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {description}
          </Typography>
        </CardContentWrapper>
      </StyledCard>

      <ButtonContainer>
        <MoreDetailsButton variant="outlined" onClick={onViewMore}>
          More details <KeyboardArrowDownIcon style={{ paddingLeft: '5px' }} />
        </MoreDetailsButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default CustomCard;
