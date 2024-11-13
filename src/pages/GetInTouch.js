import * as React from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GetInTouch({isContactUsSection = false}) {

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = {
          to_name: "Ess Emm Ads",
          from_name: event.target.name.value,
          from_email: event.target.email.value,
          from_phone: event.target.phone.value,
          message: event.target.message.value,
        };
    
        emailjs
          .send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_API_KEY,
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
    <div>
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
            placeholder="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            sx={{ backgroundColor: "#fff"}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            placeholder="Phone Number"
            name="phone"
            variant="outlined"
            fullWidth
            required
            sx={{ backgroundColor: "#fff" }}
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            placeholder="Email"
            name="email"
            variant="outlined"
            fullWidth
            required
            type="email"
            sx={{ backgroundColor: "#fff" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            sx={{ backgroundColor: "#fff" }}
          />
        </Grid>
        <Grid item xs={12} sx={{display: isContactUsSection ? "flex" : "block", justifyContent: isContactUsSection ? "center": "none"}}>
          <Button variant="contained" color="primary" type="submit" sx={{top: isContactUsSection ? "120px" : "0"}}>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  </Box>
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
