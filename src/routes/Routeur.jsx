import React from "react";
import Login from "../pages/login";
import {Routes, Route} from "react-router-dom";
import Firstpage from "../pages/firstpage";
import Home from "../pages/Home";

import Profil from "../pages/profil"

function Routeur ()  {
    return (
        <Routes>
            <Route path="/" element={<Firstpage/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Homepage" element={<Home/>}></Route>
            <Route path="/profil" element={<Profil/>}></Route>
        </Routes>
    )
}

export default Routeur