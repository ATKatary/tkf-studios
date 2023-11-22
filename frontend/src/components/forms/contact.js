import * as React from 'react';
import "../../assets/css/utils.css";
import "../../assets/css/responsive.css";

import { FormField } from './fields';
import { sendMessage } from '../api/contact';
import { GC, useCustomState } from '../utils';
import ResponsiveContact from '../responsive/contact';

import { Textarea } from '@mui/joy';
import { Typography } from '@mui/material';

/*** Constants ***/
const NAME = {MESSAGE: "contact-message"}
const ID = {EMAIL: "contact-email", SUBJECT: "contact-subject"}

const contact = (event, setNotification) => {
    const email = document.getElementById(ID.EMAIL).value;
    const subject = document.getElementById(ID.SUBJECT).value;
    const message = document.getElementsByName(NAME.MESSAGE)[0].value; 

    if (email === "") setNotification({value: "Email required to send message", notify: true});
    else if (subject === "") setNotification({value: "Subject required to send message", notify: true});
    else if (message === "") setNotification({value: "Message required to send message", notify: true});
    else sendMessage(email, subject, message, setNotification);
    return;
}

function Contact(props) {
    const {setNotification, ...other} = props;
    const [headers, setHeaders] = useCustomState({email: null, subject: null});

    return (
        <>
        <ResponsiveContact 
            title={
                <Typography style={{color: GC.BLACK, fontSize: GC.FONT.TITLE}}>
                    Let's get in touch 
                </Typography>
            }
            style={{...GC.CONTACT.STYLE.CONTAINER}}
            className="text-center justify-center align-center flex column width-100"
            headerStyle={{
                margin: "10px 0 20px 0",
                width: "min(540px, 100%)"
            }}
            headerFields={
                <>
                <FormField 
                    label="Email"
                    id={ID.EMAIL}
                    value={headers.email}
                    style={{margin: "0 0 10px 0"}}
                    inputStyle={{color: GC.BLACK}}
                    labelStyle={{color: GC.BLACK}}
                />
                <FormField 
                    label="Subject"
                    id={ID.SUBJECT}
                    value={headers.email}
                    inputStyle={{color: GC.BLACK}}
                    labelStyle={{color: GC.BLACK}}
                />
                </>
            }

            bodyStyle={{
                margin: "0 0 20px 0", 
                width: "min(540px, 100%)"
            }}
            bodyFields={
                <Textarea
                    minRows={5}
                    name={NAME.MESSAGE}
                    variant="outlined"
                    placeholder="Type message here…"
                    className="public-sans"
                    style={{
                        color: GC.BLACK,
                        padding: "15px", 
                        fontSize: "18px",
                        borderRadius: "5px",
                        border: "1px solid", 
                        backgroundColor: GC.TRANSPARENT
                    }}
                />
            }

            sendBtnStyle={{
                width: "150px", 
                backgroundColor: GC.BAGE, 
                borderRadius: "5px"
            }}
            sendStyle={{margin: "0 0 5px 0"}}
            sendOnClick={(event) => contact(event, setNotification)}
        />
        </> 
    )
}

export default Contact;