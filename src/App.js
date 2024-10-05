import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceDetail from './components/services/ServiceDetail';
import Home from './components/common/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service1" element={<ServiceDetail serviceId="1" />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
