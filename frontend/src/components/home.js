import * as React from "react";
import "../assets/css/utils.css";
import { GC, Image } from "./utils";

function Home(props) {
    return (
        <Image 
            i={0} angle="0deg" 
            imageCluster={`home-image-cluster-0-animation height-100`}
            style={{
                transform: `rotate(${props.angle})`, 
                backgroundSize: "cover",
                backgroundPosition: "top",
                height: "100%",
                width: `calc(100% - ${props.navWidth}px)`
            }}
        />
    );
}

export default Home;
