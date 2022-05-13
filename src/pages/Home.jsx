import React from "react";
import Tweeter from "../component/Tweeter";
import Header from "../component/header";
import Tittle from "../component/Tittle";

function Home() {
    return (
        <div id="page">
            <Header></Header>
            <Tweeter></Tweeter>
        </div>
    )
}

export default Home