import * as React from 'react';
import "../assets/css/utils.css";

import Nav from '../components/nav';
import Home from '../components/home';
import { NAV_GC } from '../components/content/nav';
import { GC, Notification, useCustomState } from '../components/utils';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import About from '../components/about';
import Photography from '../components/photography';
import { PORTRAITS_GC } from '../components/content/portraits';
import { LANDSCAPES_GC } from '../components/content/landscapes';
import { EVENTS_GC } from '../components/content/events';


function Landing(props) {
    const [openNav, setOpenNav] = React.useState(false);
    const [selected, setSelected] = React.useState(GC.HOME.TITLE);
    const images = require.context('../assets/media/images', true);
    const [notification, setNotification] = useCustomState({value: null, notify: false});
    const {NAV_LEFT, NAV_RIGHT, ...NAV_GC_REST} = NAV_GC({setSelected: setSelected, setOpen: setOpenNav});

    return (
        <>
        <Nav 
            open={openNav}
            vertical={true}
            collapsed={true}
            className="appear"
            setOpen={setOpenNav}
            itemsLeft={NAV_LEFT} 
            itemsRight={NAV_RIGHT}
            style={{zIndex: "100"}}
            closeIcon={KeyboardDoubleArrowLeftIcon}

            leftStyle={{width: "calc(100% - 30px)", padding: "40px 0 0 0"}}
            rightStyle={{width: "calc(100% - 30px)", padding: "0 0 100px 0"}}
            openedStyle={{width: `${GC.NAV.WIDTH}px`, padding: "30px 10px 0 0"}}
            closedStyle={{width: `75px`, height: "50px", top: "calc(0% + 50px)"}}
        />

        {selected === GC.HOME.TITLE? <Home images={images} className="appear"/> : <></>}
        {selected === GC.ABOUT.TITLE? <About images={images} setNotification={setNotification}/> : <></>}
        {selected === GC.PORTRAITS.TITLE? <Photography PROPS_GC={PORTRAITS_GC}/> : <></>}
        {selected === GC.LANDSCAPES.TITLE? <Photography PROPS_GC={LANDSCAPES_GC}/> : <></>}
        {selected === GC.EVENTS.TITLE? <Photography PROPS_GC={EVENTS_GC}/> : <></>}
        
        <Notification notification={notification} setNotification={setNotification} duration={6000}/>
        </>
    )
}

export default Landing;