import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const GridContainer = styled(Box)`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  width: ${({ isTrainBranding }) => (isTrainBranding ? "100%" : "90%")};
  margin: ${({ isTrainBranding }) => (isTrainBranding ? "0 0" : "0 3%")};
  padding-top: 25px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled(Box)`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const ImageGrid = ({ images, isTrainBranding = false }) => (
  <GridContainer isTrainBranding={isTrainBranding}>
    {images.map((image, index) => (
      <GridItem key={index}>
        <img src={image} alt={`${index + 1}`} />
      </GridItem>
    ))}
  </GridContainer>
);

export default ImageGrid;
