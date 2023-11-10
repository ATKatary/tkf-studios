import * as React from "react";
import "../assets/css/utils.css";
import { GC, Image } from "./utils";

import { Container, Row } from "reactstrap";
import { IconButton, Modal, Typography } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Photography(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedGroup, setSelectedGroup] = React.useState(null);
    const [selectedKey, setSelectedKey] = React.useState(null);

    const photography = {
        Portraits: [
            require.context(`../assets/media/images/photography/people/group0`, true),
            require.context(`../assets/media/images/photography/people/group1`, true),
            require.context(`../assets/media/images/photography/people/group2`, true),
            require.context(`../assets/media/images/photography/people/group3`, true),
            require.context(`../assets/media/images/photography/people/group4`, true),
            require.context(`../assets/media/images/photography/people/group5`, true)
        ],
        Landscapes: [
            require.context(`../assets/media/images/photography/places/group0`, true),
            require.context(`../assets/media/images/photography/places/group1`, true),
            require.context(`../assets/media/images/photography/places/group2`, true),
            require.context(`../assets/media/images/photography/places/group3`, true),
            require.context(`../assets/media/images/photography/places/group4`, true),
            require.context(`../assets/media/images/photography/places/group5`, true)
        ],
        Events: [
            require.context(`../assets/media/images/photography/events/group0`, true),
            require.context(`../assets/media/images/photography/events/group1`, true),
            require.context(`../assets/media/images/photography/events/group2`, true),
            require.context(`../assets/media/images/photography/events/group3`, true),
            require.context(`../assets/media/images/photography/events/group4`, true),
            require.context(`../assets/media/images/photography/events/group5`, true)
        ],
        Videos: [
            require.context(`../assets/media/images/photography/videos/group0`, true),
            require.context(`../assets/media/images/photography/videos/group1`, true),
            require.context(`../assets/media/images/photography/videos/group2`, true),
        ],
    }

    const nextKey = () => {
        let {i, j} = {i: selectedGroup, j: selectedKey + 1};
        console.log(photography[props.section][selectedGroup].keys().length)
        if (j == photography[props.section][selectedGroup].keys().length) {
            i += 1;
            j = 0;
        }
        if (i == photography[props.section].length) return
        if (j == photography[props.section][i].keys().length) return

        setSelectedGroup(i);
        setSelectedKey(j);
    }

    const prevKey = () => {
        let {i, j} = {i: selectedGroup, j: selectedKey - 1};
        
        if (j == -1) {
            i -= 1;
            j = 0;
        }
        if (i == -1) return
        if (j == photography[props.section][i].keys().length) return

        setSelectedGroup(i);
        setSelectedKey(j);
    }
    console.log(selectedGroup, selectedKey)
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
            <Container style={{padding: "40px 0px 0px 40px", marginTop: "40px", overflow: "scroll"}}>
                {photography[props.section].map((subsection, i) => 
                    <div id={`group${i}`} className="flex" style={{margin: `${props.section.length - 1 == i? "0" : "0 0 30px 0"}`, flexWrap: "wrap"}}>
                        {subsection.keys().map((key, j) => {
                            console.log(subsection(key))
                            return (props.section === GC.PHOTOGRAPHY.VIDEOS?
                                    <video 
                                        controls 
                                        muted 
                                        autoFocus={false}
                                        autoPlay
                                        style={{objectFit: "cover", objectPosition: "top", width: "400px", height: "400px", margin:"5px", marginRight: "10px"}} 
                                    >
                                        <source src={subsection(key)} type="video/mp4"/>
                                    </video>
                                    :
                                    <img 
                                        className="appear pointer" 
                                        src={subsection(key)} 
                                        onClick={() => {setSelectedGroup(i); setSelectedKey(j); setOpen(true)}}
                                        style={{objectFit: "cover", objectPosition: "top", width: "400px", height: "400px", margin:"5px", marginRight: "10px"}}
                                    />
                                    )
                        }
                        )}
                    </div>
                )}
            </Container>
            <Modal
                open={open}
                onClose={() => {setOpen(false); setSelectedGroup(null); setSelectedKey(null);}}
            >
            <div className="flex modal align-center height-100 justify-center" style={{width: "fit-content"}}>
                {(selectedGroup !== null) && (selectedKey !== null)? 
                    <>
                        <IconButton sx={{width: "50px", height: "50px"}} onClick={prevKey}>
                            <ArrowBackIosIcon sx={{color: GC.WHITE}}/>
                        </IconButton>

                        <img 
                            className="appear" 
                            src={photography[props.section][selectedGroup](photography[props.section][selectedGroup].keys()[selectedKey])} 
                            style={{objectFit: "cover", objectPosition: "top", height: "95%", width: "600px", margin:"5px", marginRight: "10px"}}
                        /> 

                        <IconButton sx={{width: "50px", height: "50px"}} onClick={nextKey}>
                            <ArrowForwardIosIcon sx={{color: GC.WHITE}}/>
                        </IconButton>
                    </>
                    : 
                    <></>
                }
            </div>
            </Modal>
        </div>
    );
}

export default Photography;
