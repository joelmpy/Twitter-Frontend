import React from "react";
import "../styles/home.css"
import logo from "../assets/logo.jpg"
import twitter from "../assets/twitterBlue.png"
import { Link } from "react-router-dom"
import Exemple from "../component/button";

function Firstpage() {
    return (
        <div className="bloc">
            <div className="section-left">
                <img src={twitter}></img>
            </div>
            <div className="section-right">
                <div className="right-logo">
                    <img src={logo} className="img-logo"></img>
                </div>
                <h1>Tout se passe maintenant</h1>
                <h2>Rejoignez Twitter des aujourd'hui.</h2>
                <div className="register">
                    <button type="button" class="btn btn-outline-info btn-rounded p-2 mb-2 mr-1" data-mdb-ripple-color="dark"><i class="fa-brands fa-twitter"></i>S'inscrire sur Twitter</button>
                    <button type="button" class="btn btn-outline-dark btn-rounded p-2 mb-2" data-mdb-ripple-color="dark"><i class="fa-brands fa-apple"></i>S'inscrire avec Apple</button>
                    <span>ou</span>
                    <Exemple/>
                    <div className="button-connect">
                        <h3>Vous avez deja un compte</h3>
                        <button type="button" class="btn btn-outline-primary btn-rounded p-2 mb-2 mt-2" data-mdb-ripple-color="dark"><Link to="/Login">Se connecter</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firstpage