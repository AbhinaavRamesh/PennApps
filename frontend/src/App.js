import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recommendation from "./pages/Recommendation";
import Home from "./pages/Home";
import FridgeAnalyticsPage from "./pages/FridgeAnalyticsPage";
import Navigation from "./component/Navigation";

export default function App() {
  return (
    <Router>
      <div>
      <Navigation></Navigation>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<FridgeAnalyticsPage />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
      </div>
    </Router>
  );
}
