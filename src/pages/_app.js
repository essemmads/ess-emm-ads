import "../styles/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EmailJsInitializer from "../components/EmailInitializer";


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
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
