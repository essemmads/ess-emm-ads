import * as React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Link,
  Card,
} from "@mui/material";
import contactImage from "../images/contact-us.jpg"; // Replace with your actual image path
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import styled from "@emotion/styled";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardContainer = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name: ", event.target.name.value);

    const formData = {
      to_name: "Ess Emm Ads",
      from_name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    emailjs
      .send(
        "service_urq47dg",
        "template_dhlalip",
        formData,
        "GXytm2qy1at-uutUj"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Error sending message.");
        }
      );
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <Box
        component="img"
        src={contactImage}
        alt="Banner"
        sx={{
          width: "100%",
          height: "auto",
          marginBottom: "40px",
        }}
      />
      <Container maxWidth="lg">
        <Card
          sx={{
            padding: "20px",
            boxShadow: 3,
            borderRadius: "8px",
            marginBottom: "40px",
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            <CardContainer>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <Link
                  href="https://www.google.com/maps?q=1234+Railway+St,+City,+Country"
                  target="_blank"
                  rel="noopener"
                >
                  <LocationOnIcon
                    sx={{ width: "50px", height: "50px", marginBottom: "10px" }}
                  />
                </Link>
                <Typography variant="h6">Our Location</Typography>
                <Typography variant="body1">
                  1234 Railway St, City, Country
                </Typography>
              </Grid>

              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <Link href="tel:+1234567890">
                  <PhoneIcon
                    sx={{ width: "50px", height: "50px", marginBottom: "10px" }}
                  />
                </Link>

                <Typography variant="h6">Call Us</Typography>
                <Typography variant="body1">+1 (234) 567-890</Typography>
              </Grid>

              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <Link href="mailto:contact@railwayads.com">
                  <MailIcon
                    sx={{ width: "50px", height: "50px", marginBottom: "10px" }}
                  />
                </Link>
                <Typography variant="h6">Email Us</Typography>
                <Typography variant="body1">contact@railwayads.com</Typography>
              </Grid>
            </CardContainer>
          </Grid>
        </Card>
        <Box sx={{ margin: "40px" }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", color: "#000", marginBottom: "20px" }}
          >
            Hire us & get in touch
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: "#000", marginBottom: "40px" }}
          >
            Contact us today to start your railway advertising campaign.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="name" // Ensure this matches what you're trying to access
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email" // Ensure this matches what you're trying to access
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  name="phone" // Ensure this matches what you're trying to access
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message" // Ensure this matches what you're trying to access
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />{" "}
    </div>
  );
}
