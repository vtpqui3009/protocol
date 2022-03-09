import React from "react";
import Home from "./pages/Home/Home";
import WhitePaper from "./pages/WhitePaper/WhitePaper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/white-paper" element={<WhitePaper />} />
      </Routes>
    </Router>
  );
};

export default App;
