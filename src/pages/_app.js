import * as React from "react";
import "../styles/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EmailJsInitializer from "../components/EmailInitializer";
import PropTypes from 'prop-types';

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <EmailJsInitializer />
      <div style={{ width: "100%" }}>
        <Header />
        <SubHeader />
        <Component {...pageProps} />
        <Footer isHome = { Component.name === "Home" ? true : false}/>
      </div>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
