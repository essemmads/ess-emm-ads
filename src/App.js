import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ContactUs from "./pages/ContactUs";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service1" element={<ServiceDetail serviceId="1" />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
