import * as React from 'react';
import "../assets/css/utils.css";

import ResponsiveNav from './responsive/nav';
import { GC, useCustomState } from './utils';

import { Col, Container, Row } from 'reactstrap';
import { IconButton, Link } from '@mui/material';

function Nav(props) {
    const {primary, secondary, vertical, itemsLeft, itemsRight, collapsed, windowWidth, open, setOpen, ...other} = props;

    return (
        <>
        <ResponsiveNav 
            {...other}
            open={open}
            setOpen={setOpen}
            vertical={vertical}
            collapsed={collapsed}
            itemsLeft={itemsLeft} 
            rightItems={itemsRight}
        >
            {other.children? 
            other.children 
            : 
            <>
            <section 
                id="nav-left" 
                className={`flex ${vertical? "column" : "align-center"}`}
                style={{...other.leftStyle}}
            >
                {other.fillNav? other.fillNav(itemsLeft) : fillNav(itemsLeft)}
            </section>
            <section 
                id="nav-right" 
                className={`flex ${vertical? "column" : "align-center"}`}
                style={{...other.rightStyle}}
            >
                {other.fillNav? other.fillNav(itemsRight) : fillNav(itemsRight)}
            </section>
            </>
            }
        </ResponsiveNav>
        <div className="respond-max" style={{width: vertical? GC.NAV.WIDTH : "100%", height: vertical? "100%" : GC.NAV.HEIGHT}}></div>
        </>
    )
}

export default Nav;

function fillNav(items) {
    if (!items) return;
    return items.map((item, i) => {
        const {meta, content, ...rest} = item;
        const {isRow, style, href, isIcon, className, ...other} = meta;
        if (isRow) {
            return (
                <div 
                    {...other} 
                    key={`nav-${i}`}
                    style={{...style}} 
                    className={`width-100 flex align-center ${className}`} 
                >
                    {fillNav(content.items)}
                </div>
            )
        }
        return (
            <Link href={href} style={{color: GC.SECONDARY, ...style}} {...other} key={`nav-${i}`}>
                {isIcon? <content.icon /> : content.title}
            </Link>
        ); 
    })
}