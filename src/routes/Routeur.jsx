import React from "react";
import Login from "../pages/login";
import {Routes, Route} from "react-router-dom";
import Firstpage from "../pages/firstpage";
import Profil from "../pages/profil"

function Routeur ()  {
    return (
        <Routes>
            <Route path="/" element={<Firstpage/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/profil" element={<Profil/>}></Route>
        </Routes>
    )
}

export default Routeur