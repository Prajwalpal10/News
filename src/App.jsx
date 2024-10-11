import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from './components/LandingPage' // The landing page component
import News from "./components/News"; // The News component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
