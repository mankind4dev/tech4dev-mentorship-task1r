import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./page/AboutUs";
import Campains from "./page/Campains";
import Corporate from "./page/Corporate";
import Covid19 from "./page/Covid19";
import Retail from "./page/Retail";
import Sme from "./page/Sme";
import Footer from "./components/Footer";
import Home from "./page/Home";

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Retail />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/campains" element={<Campains />} />
        <Route exact path="/corporate" element={<Corporate />} />
        <Route exact path="/covid19" element={<Covid19 />} />
        <Route exact path="/sme" element={<Sme />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
