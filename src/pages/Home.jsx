import React from "react";
import "../styles/homepage.css"
import Tweeter from "../component/Tweeter";
import Tweets from "../component/Tweets";
import Headear from "../component/header";

function Home() {
    return (


        <div className="row">
                <Headear></Headear>
                <Tweeter></Tweeter>
                <Tweets></Tweets>
          
        </div>
    )
}

export default Home