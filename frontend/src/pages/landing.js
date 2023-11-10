import * as React from "react";
import "../assets/css/utils.css";

import Home from "../components/home";
import About from "../components/about";
import { GC } from "../components/utils";
import NavBar from "../components/navbar";
import Photography from "../components/photography";

function Landing() {
    const [navWidth, setNavWidth] = React.useState(225);
    const [selected, setSelected] = React.useState(GC.HOME);
    const images = require.context('../assets/media/images', true);

    return (
        <div className="width-100 height-100 flex justify-between align-start appear">
            <NavBar 
                selected={selected}
                setSelected={setSelected}
                className="flex column justify-start" 
                style={{marginLeft: "0", width:`${navWidth}px`, padding: "30px 30px 0 30px", marginRight: "30px"}}
            />
            <div style={{width: `${navWidth + 30}px`}}></div>
            {selected === GC.HOME? <Home navWidth={navWidth}/> 
            : 
            <>{
                selected === GC.ABOUT? <About navWidth={navWidth} images={images}/> : 
                <Photography section={selected} navWidth={navWidth}/>
            }</>
            }
        </div>
    );
}

export default Landing;
