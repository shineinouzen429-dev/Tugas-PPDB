import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Fanservice from "./Pages/Fanservices";
import Register from "./Pages/Register";
import Sidnav from "./Component/Sidnav";
import Dashboard from "./Component/Dashboard";
import Menu1 from "./Menu 1/Menu1"
import Menu2 from "./Menu 2/Menu2";
import Menu3 from "./Menu 3/Menu3";

function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/L" element={<Login />} />
        <Route path="/F" element={<Fanservice />} />
        <Route path="/R" element={<Register />} />
        <Route path="/M1" element={<Menu1 />} />
        <Route path="/M2" element={<Menu2 />} />
        <Route path="/M3" element={<Menu3 />} />

      <Route
  path="/D"
  element={
    <div className="flex min-h-screen">

      <Sidnav />

  
      <div className="flex-1 p-6 bg-gray-100 ml-60">
        <Dashboard />
      </div>
    </div>
  }
/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
