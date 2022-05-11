import React from "react";
import Login from "../pages/login";
import {Routes, Route} from "react-router-dom"
import Firstpage from "../pages/firstpage";

function Router ()  {
    return (
        <Routes>
            <Route path="/" element={<Firstpage/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
        </Routes>
    )
}

export default Router