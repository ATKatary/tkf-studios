import * as React from "react";
import "../assets/css/utils.css";

import { GC } from "../components/utils";
import { HOME_GC } from "./content/home";
import { SlideShow } from "./gallery";

function Home(props) {
    const {images, ...other} = props;
    const {IMAGES, ...HOME_GC_REST} = HOME_GC({images: images});

    return (
        <div className={`respond-section height-100 appear width-100 ${other.className}`}>
            <SlideShow 
                images={IMAGES} 
                className="width-100 height-100"
                imgStyle={{width: "100%", height: "100%"}}
                style={{padding: "0", margin: "0", maxWidth: "100%"}}
            />
        </div>
    );
}

export default Home;
