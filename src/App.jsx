import react from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import Campains from "./page/Campains";
import Corporate from "./page/Corporate";
import Covid19 from "./page/Covid19";
import Retail from "./page/Retail";
import Sme from "./page/Sme";
import Footer from "./components/Footer";
import Navbar from "./task2/Navbar";
import Responsive from "./responsive/Responsive";
import Navbar2 from "./dropdown/Navbar";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Retail />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/responsive" element={<Responsive />} />
        <Route exact path="/dropdown" element={<Navbar2 />} />
        <Route exact path="/corporate" element={<Corporate />} />
        <Route exact path="/covid19" element={<Covid19 />} />
        <Route exact path="/sme" element={<Sme />} />
        <Route exact path="/task2" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
