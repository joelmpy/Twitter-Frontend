import React from "react";
import "../styles/home.css"
import Header from "../component/header"

function Profil() {
    return (
        <div id="page">
            <Header />
            <div id="content">
                <div>
                    <img id="banner" src="../assets/banner.png" />
                    <img id="icon-user" src="../assets/icon-user.png" />
                </div>
                <p>Jean</p>
                <p>Je suis sympa | Mon Site: <a href="">http://JeRaconteMaVie.com</a> | CEO de MangeBien <em>chaine de restaurant</em></p>
            </div>
        </div>
    )
}

export default Profil