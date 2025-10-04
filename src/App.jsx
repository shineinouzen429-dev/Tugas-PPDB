import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Fanservice from "./Pages/Fanservices";
import Register from "./Pages/Register";
import Dashboard from "./Component/Dashboard";

function App() {
   return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/L" element={<Login/>}/>
      <Route path="/F" element={<Fanservice/>}/>
      <Route path="/R" element={<Register/>}/>
      <Route path="/D" element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
