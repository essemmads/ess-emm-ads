import * as React from "react";
import { useState } from "react";
import { Box, Grid, TextField, Button, CircularProgress } from "@mui/material";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "@emotion/styled";

const Container = styled(Box)`
  margin: 30px 20px -20px 20px;

  @media (max-width: 750px) {
    margin: 25px 25px -15px 25px;
  }
`;

const StyledButton = styled(Button)`
  position: relative;
  top: ${({ isContactUsSection }) => (isContactUsSection ? "120px" : "20px")};
  left: ${({ isContactUsSection }) => (isContactUsSection ? "0%" : "40%")};

  @media (max-width: 1700px) {
    top: ${({ isContactUsSection }) => (isContactUsSection ? "60px" : "10px")};
  }
`;

const StyledGrid = styled(Grid)`
  padding-left: ${({ isContactUsSection }) =>
    isContactUsSection ? "0%" : "15%"};

  @media (max-width: 900px) {
    padding-left: ${({ isContactUsSection }) =>
      isContactUsSection ? "0%" : "20%"};
  }

  @media (max-width: 600px) {
    padding-left: 0;
  }
`;

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
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email))
      errors.email = "Invalid email address.";
    if (!formValues.message.trim()) errors.message = "Message cannot be empty.";
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
      <Container>
        <form onSubmit={handleSubmit}>
          <StyledGrid
            container
            spacing={2}
            isContactUsSection={isContactUsSection}
          >
            <Grid item xs={12} sm={isContactUsSection ? 6 : 9}>
              <TextField
                placeholder="Your Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                value={formValues.name}
                onChange={handleChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={isContactUsSection ? 6 : 9}>
              <TextField
                placeholder="Your Phone"
                name="phone"
                variant="outlined"
                fullWidth
                required
                value={formValues.phone}
                onChange={handleChange}
                error={!!formErrors.phone}
                helperText={formErrors.phone}
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={isContactUsSection ? 12 : 9}>
              <TextField
                placeholder="Your Email"
                name="email"
                variant="outlined"
                fullWidth
                required
                type="email"
                value={formValues.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={isContactUsSection ? 12 : 9}>
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
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={isContactUsSection ? 12 : 8}
              sx={{
                display: isContactUsSection ? "flex" : "block",
                justifyContent: isContactUsSection ? "center" : "none",
              }}
            >
              <StyledButton
                variant="contained"
                color="primary"
                type="submit"
                isContactUsSection={isContactUsSection}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Send Message"
                )}
              </StyledButton>
            </Grid>
          </StyledGrid>
        </form>
      </Container>
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
