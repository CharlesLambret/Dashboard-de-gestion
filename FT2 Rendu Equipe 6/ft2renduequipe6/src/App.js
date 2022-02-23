import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Routes/home/home";
import Dashboard from "./Routes/dashboard/dashboard";
import Detailduscore from "./Routes/detailscore/detailscore";
import Sidebar from "./components/sidebar/sidebar";


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="detailscore" element={<Detailduscore/>} />
      </Routes>
    </div>
  );
}
export default App;
