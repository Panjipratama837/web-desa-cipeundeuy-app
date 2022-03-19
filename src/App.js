import About from "./Pages/About/About";
import Navbar from "./Component/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import ScrollToTop from "./Component/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
