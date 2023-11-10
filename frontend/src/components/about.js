import * as React from "react";
import "../assets/css/utils.css";
import { GC, Image } from "./utils";

import { Col, Container, Row } from "reactstrap";

import { Typography } from '@mui/material';
import Contact from "./forms/contact";

function About(props) {
    const bio = `Welcome to TKF Photography Studios, led by Andy Acevedo, a marketer and entrepreneur with a vision to enhance brand narratives through visual content. Our studio specializes in aiding businesses and professionals to amplify their digital presence with bespoke photography and videography services tailored for impactful social media campaigns.
                \nWith a background in management and a deep understanding of data analytics, Andy offers a strategic approach to content creation, ensuring every project is not just seen but remembered.
                \nHis technical skills in Adobe After Effects and computer hardware are complemented by a passion for video games, infusing a unique vigor into our studio's work.
                \nAt TKF Photography Studios, we're dedicated to helping you navigate the evolving demands of online marketing with content that stands out. Let's elevate your brand together.
                `

    const clients = [
        {
            src: props.images("./clients/clark.png"),
            height: "80px"
        },
        {
            src: props.images("./clients/takeoff.png"),
            height: "80px"
        },
        {
            src: props.images("./clients/umass.png"),
            height: "80px"
        },
        {
            src: props.images("./clients/yale.png"),
            height: "80px"
        },
        {
            src: props.images("./clients/cex.png"),
            height: "80px"
        },
        {
            src: props.images("./clients/kipp.png"),
            height: "50px"
        },
        {
            src: props.images("./clients/hong_kong.jpeg"),
            height: "50px"
        },
        {
            name: "Former UFC Kyle Botchniak",
        },
    ]
    return (
        <div
            style={{
                width: `calc(100% - ${props.navWidth}px)`,
                height: "100%", 
                backgroundColor: GC.WHITE,
                overflow: "scroll"
            }}
            className="appear"
        >
            <Container style={{maxWidth: "1000px"}}>
                <Row className="flex align-center" style={{height: "40%", padding: "40px", margin: "30px 30px 0 0", flexWrap: "nowrap"}}>
                    <div style={{width: "300px"}} className="flex column">
                        <img src={props.images("./andy2.png")} style={{width: "100%"}} />
                    </div>
                    <span>
                        <Typography
                            variant="h5"
                            className="public-sans"
                            style={{color: GC.BLACK, fontWeight: "bold"}}
                        >
                            Bio
                        </Typography>
                        <p style={{color:  GC.BLACK, width: "73%", marginTop: "10px"}} className="public-sans">
                            {bio.split("\n").map(p => <>{p}<br></br></>)}
                        </p>
                    </span>
                </Row>
                <Row className="flex align-start width-100" style={{height: "40%"}}>
                    <Col>
                        <Contact color={GC.BLACK}/>
                    </Col>
                    <Col className="text-center">
                    <h4 className="" style={{color: GC.BLACK, margin: "1rem 0 30px 10px"}}>Notable Clients</h4>
                        {/* <Col> */}
                            {clients.map(client => 
                                client.src? <img src={client.src} style={{height: client.height, margin: "10px"}}/> 
                                : <Typography style={{color: GC.BLACK, fontWeight: "bold", margin: "10px"}} className="public-sans">{client.name}</Typography>
                            )}
                        {/* </Col> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
