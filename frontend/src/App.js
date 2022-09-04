import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recommendation from "./pages/Recommendation";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
      </div>
    </Router>
  );
}
