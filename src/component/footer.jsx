import React from "react";
import "../styles/footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-link">
            <div className="title">
                        <h3>Resaux sociaux</h3>
                    </div>
                <div className="resaux">
                    <ul>
                        <li><a href="https://github.com/SoraNoTami"><i class="fa-brands fa-github"></i> </a></li>
                        <li><a href="https://github.com/habibouomar"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="https://github.com/joelmpy"><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                </div>

                <div className="info">
                    <ul>
                        <li><a href="#">a Props</a></li>
                        <li><a href="#">Centre d'assitence</a></li>
                        <li><a href="#">Conditions d'utilisation</a></li>
                        <li><a href="#">Politique de Confidentialité</a></li>
                        <li><a href="#">Politique relatives aux cookies</a></li>
                        <li><a href="#">Accessibiltéi</a></li>
                        <li><a href="#">Informations sur les publicités</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Staut</a></li>
                        <li><a href="#">Carrières</a></li>
                        <li><a href="#">Ressources de la marque</a></li>
                        <li><a href="#">Publicité</a></li>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Twitter pour les professionnels</a></li>
                        <li><a href="#">Développeurs</a></li>
                        <li><a href="#">Répertoire</a></li>
                        <li><a href="">Paramètres</a></li>
                    </ul>
                </div>
                <div className="end-page">
                    <a href="">@ 2022 Twitter, Inc</a>
                </div>
            </div>
        </footer>
    )


}

export default Footer