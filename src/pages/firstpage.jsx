import React from "react";
import "../styles/home.css"
import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom"
import Exemple from "../component/button";

function Firstpage() {
    return (
        <div className="d-flex flex-row">
            <div className="col-6">
                <img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" ></img>
            </div>

            <div className="col-6 bg-white">
                <div className="right-logo">
                    <img src={logo} className="img-logo"></img>
                </div>
                <h1>Tout se passe maintenant</h1>
                <h2>Rejoignez Twitter des aujourd'hui.</h2>
                <div className="register">
                    <button type="button" class="btn btn-outline-info btn-rounded p-2 mb-2 mr-1" data-mdb-ripple-color="dark"><i class="fa-brands fa-twitter"></i>S'inscrire sur Twitter</button>
                    <button type="button" class="btn btn-outline-dark btn-rounded p-2 mb-2" data-mdb-ripple-color="dark"><i class="fa-brands fa-apple"></i>S'inscrire avec Apple</button>
                    <span className="pb-2">ou</span>
                    <Exemple/>
                    <div className="button-connect pt-3">
                        <h3>Vous avez deja un compte</h3>
                        <button type="button" class="btn btn-outline-primary btn-rounded p-2 mb-2 mt-2" data-mdb-ripple-color="dark"><Link to="/Login">Se connecter</Link></button>
                    </div>
                </div>
            </div>
        
        </div>
     
    )
}

export default Firstpage