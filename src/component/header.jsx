import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrands, faTwitter } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
            <aside className="col-md-2 col-0 pt-2 bg-dark">
                <header className="bg-dark">
                    <ul className="flex-column">
                        {/* <FontAwesomeIcon icon="fa-brands fa-twitter" id="twitter-icon" /> */}
                        <li className="nav-item">
                            <a className="nav-link pl-0 text-light" href="#">Acceuil</a>
                            <a className="nav-link pl-0 text-light" href="#">Profil</a>
                        </li>
                        <Button id="button-tweeter" variant="info">Tweeter</Button>
                    </ul>
                </header>
            </aside>
    )
}

export default Header








