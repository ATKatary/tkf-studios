import * as React from "react";
import "../assets/css/utils.css";

import { GC } from "./utils";
import { CLIENTS_GC } from "./content/clients";
import { Typography } from "@mui/material";
import { Container } from "reactstrap";

function Clients(props) {
    const {CLIENTS, ...CLIENTS_GC_REST} = CLIENTS_GC({});

    return (
        <Container className={`flex flex-wrap align-center justify-center`} id="clients">
        <h4 style={{color: GC.BLACK, margin: "2rem 0 10px 10px"}} className="text-center">Notable Clients</h4>
        <div className="flex flex-wrap justify-center align-center">
            {CLIENTS.map(client => 
                client.src? 
                <img src={props.images(client.src)} style={{height: client.height, margin: "10px"}}/> 
                : 
                <Typography style={{color: GC.BLACK, fontWeight: "bold", margin: "10px"}} className="public-sans">{client.name}</Typography>
            )}
        </div>
        </Container>
    )
}

export default Clients;