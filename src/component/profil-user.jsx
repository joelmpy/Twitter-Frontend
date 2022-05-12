import React from "react";
import Tweets from "../component/Tweets"


function ProfilUser() {
    return (
        <div id="content" class="col-md-5 col-10">
            <div>
                <img id="banner" src="https://images.squarespace-cdn.com/content/v1/591a2282bebafb6254a1f083/1494885767592-RY0PVAGNDBPYTIM6BEO9/pov-blue.jpg?format=2500w" />
            </div>
            <div id="user">
                <div>
                    <h5>Jean</h5>
                    <p>Je suis sympa | Mon site: <a href="">http://JeRaconteMaVie.com</a> | CEO de MangeBien</p>
                </div>
                <div>
                    <p>124 abonnements  1 abonnés</p>
                </div>
            </div>
            <Tweets />
        </div>
    )
}

export default ProfilUser