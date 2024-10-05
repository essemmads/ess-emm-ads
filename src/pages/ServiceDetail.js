import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

export default function ServiceDetail() {
  const { serviceId } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Service Details</Typography>
      <Typography variant="body1">Details for service {serviceId}.</Typography>
    </div>
  );
}
