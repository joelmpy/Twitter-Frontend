import React from "react";
import Login from "../pages/login";
import {Routes, Route} from "react-router-dom"
import Firstpage from "../pages/firstpage";
import Home from "../pages/Home";


function Routeur ()  {
    return (
        <Routes>
            <Route path="/" element={<Firstpage/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Homepage" element={<Home/>}></Route>
        </Routes>
    )
}

export default Routeur