import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import PropTypes from 'prop-types';

const GridContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isTrainBranding',
})`
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
    width: ${({ isTrainBranding }) => (isTrainBranding ? "100%" : "92%")};
  margin: ${({ isTrainBranding }) => (isTrainBranding ? "0 0" : "0 4%")};

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
        <Image src={image} alt={`${index + 1}`} />
      </GridItem>
    ))}
  </GridContainer>
);

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
  isTrainBranding: PropTypes.bool,
};

export default ImageGrid;
