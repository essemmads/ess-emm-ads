import * as React from "react";
import { useState } from "react";
import { Typography, Box, Grid, TextField, Button, CircularProgress } from "@mui/material";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GetInTouch({ isContactUsSection = false }) {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) errors.name = "Name is required.";
    if (!/^[0-9]{10}$/.test(formValues.phone))
      errors.phone = "Phone number must be 10 digits.";
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)
    )
      errors.email = "Invalid email address.";
    if (!formValues.message.trim())
      errors.message = "Message cannot be empty.";
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    const formData = {
      to_name: "Ess Emm Ads",
      from_name: formValues.name,
      from_email: formValues.email,
      from_phone: formValues.phone,
      message: formValues.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!");
          setFormValues({ name: "", phone: "", email: "", message: "" });
          setFormErrors({});
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Error sending message.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Box sx={{ margin: "40px" }}>
        {!isContactUsSection && (
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", color: "#000", marginBottom: "20px" }}
          >
            Hire us & get in touch
          </Typography>
        )}
        {!isContactUsSection && (
          <Typography
            variant="body1"
            align="center"
            sx={{ color: "#000", marginBottom: "40px" }}
          >
            Contact us today to start your railway advertising campaign.
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                value={formValues.name}
                onChange={handleChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Phone Number"
                name="phone"
                variant="outlined"
                fullWidth
                required
                value={formValues.phone}
                onChange={handleChange}
                error={!!formErrors.phone}
                helperText={formErrors.phone}
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
                value={formValues.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
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
                value={formValues.message}
                onChange={handleChange}
                error={!!formErrors.message}
                helperText={formErrors.message}
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: isContactUsSection ? "flex" : "block",
                justifyContent: isContactUsSection ? "center" : "none",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ top: isContactUsSection ? "120px" : "0" }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
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
      />
    </div>
  );
}
