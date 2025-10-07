import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Fanservice from "./Pages/Fanservices";
import Register from "./Pages/Register";
import Sidnav from "./Component/Sidnav";
import Dashboard from "./Component/Dashboard";
import Profil from "./Component/Profile";

import Menu1 from "./Menu 1/Menu1"
import Tambahmenu1 from "./Menu 1/Tambahmenu1";
import Editmenu1 from "./Menu 1/Editmenu1";

import Menu2 from "./Menu 2/Menu2";
import Tambahmenu2 from "./Menu 2/Menu2tambah";
import Editmenu2 from "./Menu 2/Editmenu2";

import Menu3 from "./Menu 3/Menu3";
import Tambahmenu3 from "./Menu 3/Menu3tambah";
import Editmenu3 from "./Menu 3/Editmenu3";

function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/L" element={<Login />} />
        <Route path="/F" element={<Fanservice />} />
        <Route path="/R" element={<Register />} />
        <Route path="/P" element={<Profil/>} />
        
        <Route path="/D" element={<Dashboard />} />

        <Route path="/M1" element={<Menu1 />} />
        <Route path="/TambahM1" element={<Tambahmenu1 />} />
        <Route path="/M1edit/:id" element={<Editmenu1/>} />

        <Route path="/M2" element={<Menu2 />} />
        <Route path="/TambahM2" element={<Tambahmenu2/>}/>
        <Route path="/M2edit/:id" element={<Editmenu2/>}/>

        <Route path="/M3" element={<Menu3 />} />
        <Route path="/TambahM3" element={<Tambahmenu3/>}/>
        <Route path="/M3edit/:id" element={<Editmenu3/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
