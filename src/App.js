import "./App.css";
import Header from "./components/Header";
import * as React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ContactUs from "./pages/ContactUs";
import SubHeader from "./components/SubHeader";
import AboutUs from "./pages/AboutUs";
import StationBranding from "./pages/StationBranding";
import OutdoorAdvertising from "./pages/OutdoorAdvertising";
import PlatformWiseBranding from "./pages/PlatformWiseBranding";
import TrainBranding from "./pages/TrainBranding";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App" style={{ width: "100%" }}>
          <Header />
          <SubHeader/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/service1" element={<ServiceDetail serviceId="1" />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/station-branding" element={<StationBranding />} />
            <Route
              path="/outdoor-advertising"
              element={<OutdoorAdvertising />}
            />
            <Route
              path="/platform-wise-branding"
              element={<PlatformWiseBranding />}
            />
            <Route path="/train-branding" element={<TrainBranding />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
