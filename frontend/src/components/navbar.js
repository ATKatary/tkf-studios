import '../assets/css/utils.css';

import {Navbar, Container} from "reactstrap";
import { Link, IconButton, Button} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { GC } from './utils';

function NavBar(props) {
    const socials = [
        {
            icon: InstagramIcon,
            href: "https://instagram.com/tkf.shots?igshid=OGQ5ZDc2ODk2ZA=="
        },
        {
            icon: LinkedInIcon,
            href: "https://www.linkedin.com/in/andy-acevedo-79b38619a?utm_source=share&utm_campaign=shar e_via&utm_content=profile&utm_medium=ios_app"
        },
    ]

    const sections = [
        {
            name: GC.HOME,
            href: "/"
        },
        {
            name: GC.PHOTOGRAPHY.PHOTOGRAPHY,
            subsections: [
                {
                    name: GC.PHOTOGRAPHY.PEOPLE,

                },
                {
                    name: GC.PHOTOGRAPHY.PLACES,

                },
                {
                    name: GC.PHOTOGRAPHY.EVENTS,

                },
                {
                    name: GC.PHOTOGRAPHY.VIDEOS,

                }
            ]
        },
        {
            name: GC.ABOUT,
            href: "/about"
        }
    ];
    const images = require.context('../assets/media/images', true);

    return (
        <>
        <Navbar style={{zIndex: "10", paddingBottom: "30px", position: "fixed"}}>
        <Container className={`"${props.className}`} style={{...props.style}}>
            <div className="flex column align-center">
                <img src={images("./studios_logo.png")} height="85px" className="margin-top-20px pointer align-self-center" onClick={() => window.location = "/"}></img>
                <div className="flex align-center justify-between">
                    {socials.map(social => 
                        <Link style={{color: GC.BLACK, margin: "10px", textDecoration: "none"}} className="public-sans white-hover" href={social.href}>
                            {social.icon ? <social.icon /> : <b>{social.name}</b>}
                        </Link>
                    )}
                </div>
            </div>

            <div className={`${!props.horizontal? "flex column" : "flex-more align-center none-less"}`} style={{margin: "30px 0 0 0"}}> 
            {sections.map(section => 
                section.href? 
                <Button 
                    onClick={() => props.setSelected(section.name)}
                    style={{
                        color: props.selected === section.name? GC.GRAY_2 : GC.BLACK, 
                        marginBottom: "10px", 
                        textDecoration: "none",
                        justifyContent: "flex-start",
                        fontSize: "16px"
                    }} 
                    className="public-sans white-hover flex"
                >
                    {section.icon ? <section.icon /> : <b>{section.name}</b>}
                </Button>
                :
                <div style={{padding: "6px 8px"}}>
                    <p className="public-sans" style={{fontSize: "16px", color: GC.BLACK, fontWeight: "bold"}}>{section.name.toUpperCase()}</p>
                    {section.subsections.map(subsection => 
                    <Button 
                        onClick={() => props.setSelected(subsection.name)}
                        style={{
                            color: props.selected === subsection.name? GC.GRAY_2 : GC.BLACK, 
                            marginBottom: "10px", 
                            textDecoration: "none",
                            justifyContent: "flex-start",
                            fontSize: "15px"
                        }} 
                        className="public-sans white-hover flex"
                    >
                        {subsection.icon ? <subsection.icon /> : <b>{subsection.name}</b>}
                    </Button>
                        
                    )}
                </div>
            )}
            </div>
            
            {!props.horizontal? <></> : 
            <IconButton style={{color: "#fff", marginTop: "20px"}} onClick={() => {}} className="flex-less none-more">
                <MenuIcon style={{fontSize: "40px"}} />
            </IconButton>
            }
        </Container>
        </Navbar>
        </>
    )
}

export default NavBar;