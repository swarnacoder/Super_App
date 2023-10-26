import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import React from "react";
import Genre from "./Componets/Genre";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Genre" element={<Genre />} />
      </Routes>
      </Router>
  );
};

export default App;
