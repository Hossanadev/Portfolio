import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";

const PortfolioRoutes = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
};

export default PortfolioRoutes;
