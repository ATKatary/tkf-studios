import * as React from "react";
import "../assets/css/utils.css";

import { GC } from "./utils";
import Clients from "./clients";
import Contact from "./forms/contact"

import { Row, Col, Container } from "reactstrap";
import { People } from "@mui/icons-material";

function About(props) {
    const {images, setNotification, ...other} = props;

    const people = [
        {
            img: "./andy.png",
            bio: 
            `Welcome to TKF Studios, a comprehensive digital marketing agency led by marketer and entrepreneur Andy Acevedo. 
            \nWe specialize in enhancing digital presence through tailored photography, videography, and expert social media management. 
            \nOur agency is dedicated to creating strategic, memorable content that amplifies your brand's narrative. 
            \nWith Andy's background in management, data analytics, and proficiency in Adobe After Effects, enriched by his passion for video games, we ensure impactful and unique online marketing solutions. 
            \nChoose TKF Studios for an all-inclusive approach to elevate your brand in the digital world.
            `
        },
        {
            img: "./noel.jpeg",
            bio: 
            `My name is Noel Pichardo. As an artist I go by Leone, I have a combined 8 years invested in the film and photo industry. 
            \nThe foundation of my art is strongly rooted in my experiences, culture, and convictions. 
            \nArt for me is to capture human experiences and provoke meaningful thought.
            `
        }
    ]

    return (
        <Container className="respond-section scroll align-center flex column">
            {people.map((person, i) => 
            <>
                <Row 
                    style={{margin: "1rem 0 0 0"}}
                    className="width-100 align-center justify-center" 
                >
                    <Container className="flex column align-center justify-center">
                        <img 
                            src={images(person.img)} 
                            style={{
                                width: "min(425px, 90%)", 
                                height: "300px", 
                                objectFit: "cover", 
                                borderRadius: "5px"
                            }}/>
                    </Container>
                </Row>
                <Row 
                    className="width-100 text-center align-start justify-center"
                >
                    <Container className="flex column align-center justify-center respond-about">
                            <p 
                                style={{ 
                                    color: GC.BLACK, 
                                    marginTop: "40px",
                                }} 
                                className="public-sans"
                            >
                                {person.bio.split("\n").map(p => <>{p}<br></br></>)}
                            </p>
                        </Container>
                </Row>
            </>
            )}
            
            <Row 
                className="text-center align-start justify-center respond-about" 
            >
                <Clients images={props.images}/>
            </Row>
            <Row 
                className="align-start justify-center respond-about" 
            >
               <Contact setNotification={setNotification}/>
            </Row>
        </Container>
    )
}

export default About;