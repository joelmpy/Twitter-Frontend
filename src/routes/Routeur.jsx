import React from "react";
import Login from "../component/login";
import Home from "../component/home";
import {Routes, Route} from "react-router-dom"

function Routeur ()  {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
        </Routes>
    )
}

export default Routeur