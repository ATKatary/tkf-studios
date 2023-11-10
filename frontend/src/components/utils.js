import * as React from 'react';
import "../assets/css/utils.css";

import { Snackbar } from '@mui/material';

/*** GLobal Constants ***/
export const GC = {
    NONE: "none",
    WHITE: "#ffffff",
    BLACK: "#000",
    GRAY: "#161616",
    YELLOW: "#fff000",
    GRAY_2: "#87888C",
    GREEN: "#B4FC59",
    RED: "#E07D83",
    ORANGE: "#FEB95A",
    LIGHT_GRAY: "#f2f2f2",
    LIGHT_BLUE: "#A9DFD8",
    PINK: "#F2C8ED",
    BLUE: "#20AEF3",
    BAGE: "#E8D4AF",

    HOME: "Home",
    ABOUT: "About",
    PHOTOGRAPHY: {
        PHOTOGRAPHY: "Photography",
        PEOPLE: "Portraits",
        PLACES: "Landscapes",
        EVENTS: "Events",
        VIDEOS: "Videos"
    },

    GROUPS: 5
}

export function Image(props) {
    return (
        <div 
            style={{...props.style}} 
            className={`flex justify-center box-shadow ${props.imageCluster}`}>
        </div>
    )
}

export function Notification(props) {
    const notify = props.notification.notify;
    const notification = props.notification.value;
    const handleClose = () => {props.setNotification({value: "", notify: false});}

    return (
        <Snackbar id={props.id}
            open={notify}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={props.duration}
            onClose={handleClose}
            message={notification}
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