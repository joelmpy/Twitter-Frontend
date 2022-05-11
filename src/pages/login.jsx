import React from "react";
import "../styles/login.css"
import logo from "../assets/logo.jpg"
function Login() {
    return (
        <div className="card">
            <div className="card-section">
                <div className="cards">
                    <div className="logo">
                        <img src={logo}></img></div>
                    <div className="section-title">Bonjour</div>
                </div>
            </div>
        </div>
    )
}

export default Login