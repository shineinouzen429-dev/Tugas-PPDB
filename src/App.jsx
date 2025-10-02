import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";

function App() {
   return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/L" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
