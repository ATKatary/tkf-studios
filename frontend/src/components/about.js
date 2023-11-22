import * as React from "react";
import "../assets/css/utils.css";

import { GC } from "./utils";
import Clients from "./clients";
import Contact from "./forms/contact"

import { Row, Col, Container } from "reactstrap";

function About(props) {
    const {images, setNotification, ...other} = props;

    const bio = `Welcome to TKF Photography Studios, led by Andy Acevedo, a marketer and entrepreneur with a vision to enhance brand narratives through visual content. Our studio specializes in aiding businesses and professionals to amplify their digital presence with bespoke photography and videography services tailored for impactful social media campaigns.
                \nWith a background in management and a deep understanding of data analytics, Andy offers a strategic approach to content creation, ensuring every project is not just seen but remembered.
                \nHis technical skills in Adobe After Effects and computer hardware are complemented by a passion for video games, infusing a unique vigor into our studio's work.
                \nAt TKF Photography Studios, we're dedicated to helping you navigate the evolving demands of online marketing with content that stands out. Let's elevate your brand together.
                `

    return (
        <Container className="respond-section scroll align-center flex column">
            <Row 
                style={{margin: "1rem 0 0 0"}}
                className="width-100 align-center justify-center" 
            >
                <Container className="flex column align-center justify-center">
                    <img 
                        src={images("./andy.png")} 
                        style={{
                            width: "425px", 
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
                            {bio.split("\n").map(p => <>{p}<br></br></>)}
                        </p>
                    </Container>
            </Row>
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