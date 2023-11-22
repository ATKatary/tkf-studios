import * as React from 'react';
import "../../assets/css/utils.css";
import "../../assets/css/responsive.css";

import { GC } from '../utils';

import { IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function ResponsiveNav(props) {
    const {vertical, itemsLeft, itemsRight, collapsed, windowWidth, open, setOpen, ...other} = props;

    return (
    <>
    <IconButton 
        className={`respond-min ${vertical? "height" : "width"}-${collapsed? "fit" : "100"} ${other.className}`}
        style={{
            position: "fixed",
            color: GC.SECONDARY,
            borderRadius: "0%", 
            backgroundColor: GC.PRIMARY, 
            ...other.style, ...other.closedStyle,

            display: open? "none" : "inline-flex",
        }} 
        onClick={() => setOpen(true)}
    >
        {other.openIcon? <other.openIcon /> : <MenuOpenIcon />}
    </IconButton>
        
    <div 
        style={{
            color: GC.SECONDARY,
            backgroundColor: GC.PRIMARY, 
            ...other.style, ...other.openedStyle,

            top: open? "0" : "",
            left: open? "0" : "",
            display: open? "flex" : "",
        }} 
        className={`respond-max flex justify-between align-center fixed ${vertical? "column height-100" : "width-100"} ${other.className}`}
    >
        <IconButton 
            className="align-self-end respond-min" 
            style={{
                position: "fixed",
                borderRadius: "0%",
                color: GC.SECONDARY,
                backgroundColor: GC.PRIMARY,
                ...other.style, ...other.closedStyle, 
                // left: vertical? "" : "calc(100% - 65px)", 
                top: vertical? "" : `${GC.NAV.HEIGHT - 25}px`, 
            }}
            onClick={() => setOpen(false)}
        >
            {other.closeIcon? <other.closeIcon /> : <CloseIcon />}
        </IconButton>
        {other.children}
    </div>
    </>
    )

}

export default ResponsiveNav;