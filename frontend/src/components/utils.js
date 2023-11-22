import * as React from 'react';
import "../assets/css/utils.css";

import { Snackbar } from '@mui/material';

/*** GLobal Constants ***/
export const GC = {
    NONE: "none",
    BAGE: "#e4bb6a",
    GREEN: "#0f5132",
    BLACK: "#000000",
    WHITE: "#ffffff",
    TRANSPARENT: "transparent",

    PRIMARY: "#e4bb6a",
    SECONDARY: "#000000",

    RESPOND: {
        MIN_WIDTH: 1000
    },

    NAV: {
        WIDTH: 277,
        HEIGHT: 125,
        STYLE: {
            LINK: {textDecoration: "none"},
            BTN: {
                width: "80%", 
                color: "#000000",
                fontSize: "18px", 
                fontWeight: "bold", 
                textDecoration: "none", 
                justifyContent: "flex-start",
            }
        }
    },

    CONTACT: {
        WIDTH: 400,
        STYLE: {
            SEND_BTN: {
                padding: "10px", 
                paddingLeft: "40px", 
                paddingRight: "40px",   
            },
            CONTAINER: {
                margin: "10px",
                padding: "30px",
            }
        },
        EMAIL: "tkf@takeoffgg.com"
    },

    GALLERY: {
        SLIDESHOW: {
            STYLE: {
            },
            IMG: {
                STYLE: {
                    objectFit: "cover"
                }
            }
        }
    },

    PHOTOGRAPHY: {
        STYLE: {
            IMG: {
                margin:"5px", 
                width: "400px", 
                height: "400px", 
                objectFit: "cover", 
                marginRight: "10px",
                objectPosition: "top", 
            },

            MODAL: {
                IMG: {
                    margin:"5px", 
                    marginRight: "10px",
                    objectFit: "contain",
                }
            }
        }
    },

    DATE_FORMAT: "mm/dd/yyyy",

    DOMAIN: {
        CONTACT: "https://www.mit-msa.com:8443"
    },

    FONT: {
        TITLE: "28px"
    },

    HOME: {
        TITLE: "home"
    },

    ABOUT: {
        TITLE: "contact"
    },

    PORTRAITS: {
        TITLE: "portraits"
    },

    EVENTS: {
        TITLE: "events"
    },

    LANDSCAPES: {
        TITLE: "landscapes"
    },
}

export const Keyframes = (props) => {
    const {name, frames, ...other} = props;

    const toCss = (cssObject) =>
      typeof cssObject === "string"
        ? cssObject
        : Object.keys(cssObject).reduce((accumulator, key) => {
            const cssKey = key.replace(/[A-Z]/g, v => `-${v.toLowerCase()}`);
            const cssValue = (cssObject)[key].toString().replace("'", "");
            return `${accumulator}${cssKey}:${cssValue};`;
          }, "");
  
    return (
      <style>
        {`@keyframes ${name} {
          ${Object.keys(frames)
            .map(key => {
              return ["from", "to"].includes(key)
                ? `${key} { ${toCss(frames[key])} }`
                : /^_[0-9]+[.]*[0-9]*$/.test(key)
                ? `${key.replace("_", "")}% { ${toCss(frames[key])} }`
                : "";
            })
            .join(" ")}
        }`}
      </style>
    );
  };

export function Notification(props) {
    const {notification, setNotification, duration, ...other} = props;
   
    const {value, notify} = notification;
    const handleClose = () => {setNotification({value: "", notify: false});}

    return (
        <Snackbar 
            {...props}
            open={notify}
            message={value}
            onClose={handleClose}
            autoHideDuration={duration}
            anchorOrigin={{
                vertical: other.vertical? other.vertical : "top", 
                horizontal: other.horizontal? other.horizontal : "right"
            }}
        />
    )
}

export function useCustomState(initialState) {
    const [state, setState] = React.useState(initialState);
    const setCustomSate = (newState) => {
        setState((prevState) => ({...prevState, ...newState}))
    };
    
    return [state, setCustomSate];
}

export function formatDate(date, format) {
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();

    return format.toLowerCase().replace("mm", month).replace("dd", day).replace("yyyy", year);
}

export function post(url, body, handleRes) {
    fetch(url, {
      method: GC.POST,
      headers: {
        'Content-Type': GC.APPLICATION_JSON,
        'X-CSRFToken': GC.CSRF_TOKEN()
      },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    }).then(handleRes)
}

export function get(url, args, handleRes) {
    url += "?";
    for (const [arg, value] of Object.entries(args)) {
        url += `${arg}=${value}&`
    }

    fetch(url, {
      method: GC.GET,
      headers: {
        'Content-Type': GC.APPLICATION_JSON
      },
    }).then(handleRes)
}