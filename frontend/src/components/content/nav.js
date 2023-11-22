import logo from "../../assets/media/images/studios_logo.png";

import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PortraitIcon from '@mui/icons-material/Portrait';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LandscapeIcon from '@mui/icons-material/Landscape';
import InstagramIcon from '@mui/icons-material/Instagram';
import CelebrationIcon from '@mui/icons-material/Celebration';

import { GC } from "../utils";

import { Button, IconButton } from "@mui/material";

const DEFAULT = GC.HOME.TITLE;

export const NAV_GC = (props) => {
    const left = [];
    const sections = [
        {
            name: GC.HOME.TITLE,
            icon: HomeIcon
        },
        {
            name: GC.PORTRAITS.TITLE,
            icon: PortraitIcon
        },
        {
            name: GC.EVENTS.TITLE,
            icon: CelebrationIcon
        },
        {
            name: GC.LANDSCAPES.TITLE,
            icon: LandscapeIcon
        },  
        {
            name: GC.ABOUT.TITLE,
            icon: EmailIcon
        },
    ];
    for (const section of sections) {
        left.push(
            {
                meta: {
                    className: `public-sans`,
                    onClick: () => select({id: `nav-${section.name}`, name: section.name}),
                },
                content: {
                    title: 
                    <IconButton
                        id={`nav-${section.name}`}
                        style={{
                            ...GC.NAV.STYLE.BTN, 
                            color: GC.SECONDARY,
                            borderRadius: "5px",
                            margin: "20px 0 0 30px", 
                        }}
                        className={`${section.name === DEFAULT? "select-section" : ""}`}
                    >
                        <section.icon style={{margin: "0 10px 0 0"}}/> {section.name.toUpperCase()}
                    </IconButton>
                }
            },
        )
    }
    
    const select = (section) => {
        for (const section of sections) {
            const sectionBtn = document.getElementById(`nav-${section.name}`);
            if (sectionBtn) sectionBtn.classList.remove("select-section");
        }

        const sectionBtn = document.getElementById(section.id);
        if (sectionBtn) {
            props.setOpen(false);
            props.setSelected(section.name);
            sectionBtn.classList.add("select-section");
        }
    }

    return {
        NAV_LEFT: [
            {
                meta: {
                    href: "/",
                    style: {margin: "20px 0 0 0", display: "flex", flexDirection: "column"},
                },
                content: {
                    title: <img src={logo} height="85px" className="pointer align-self-center"/>
                }
            },
            {
                meta: {
                    isRow: true,
                    className: "justify-center",
                    style: {margin: "0 0 20px 0"},
                },
                content: {
                    items: [
                        {
                            meta: {
                                isIcon: true,
                                style: {margin: "0 5px 0 5px"},
                                href: "https://instagram.com/tkf.shots?igshid=OGQ5ZDc2ODk2ZA==", 
                            },
                            content: {
                                icon: InstagramIcon,
                            }
                        },

                        {
                            meta: {
                                isIcon: true,
                                style: {margin: "0 5px 0 5px"},
                                href: "https://www.linkedin.com/in/andy-acevedo-79b38619a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", 
                            },
                            content: {
                                icon: LinkedInIcon,
                            }
                        }
                    ]
                }
            },
            ...left
        ],

        NAV_RIGHT: []
    }
}
