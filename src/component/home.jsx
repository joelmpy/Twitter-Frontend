import React from "react";
import "../styles/home.css"
import logo from "../assets/logo.jpg"
import twitter from "../assets/twitterBlue.png"
import {Link}  from "react-router-dom"

function Home() {
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
                    <button className="btn-1"><i class="fa-brands fa-twitter"></i>S'inscrire sur Twitter</button>
                  
                    <button className="btn-2" > <i class="fa-brands fa-apple"></i>S'inscrire avec Apple</button>
                    <span>ou</span>
                    <button className="btn-3"><i class="fa-solid fa-mobile"></i>S'inscrire avec le numéro de télephone</button>
                    <div className="button-connect">
                        <h3>Vous avez deja un compte</h3>
                        <Link to="/Login">Se connecter</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home