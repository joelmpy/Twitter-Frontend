import React from "react";
import "../styles/homepage.css"
import Tweeter from "../component/Tweeter";
import Tweets from "../component/Tweets";

function Home() {
    return (


        <div class="row h-100 ">
            <aside class="col-12 col-md-2 p-0 bg-dark">
                <nav class="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start">
                    <div class="collapse navbar-collapse">
                        <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link pl-0" href="#">Menu 1</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside> 
            <main class="col-6">
                <Tweeter></Tweeter>
                <Tweets></Tweets>
            </main>
        </div>
    )
}

export default Home