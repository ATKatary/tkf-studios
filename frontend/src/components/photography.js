import * as React from "react";
import "../assets/css/utils.css";
import "../assets/css/responsive.css";
import { GC, Image } from "./utils";

import { Container, Row } from "reactstrap";
import { IconButton, Modal, Typography } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Photography(props) {
    const {PROPS_GC, ...other} = props;
    const [open, setOpen] = React.useState(false);
    const {IMAGES, ...PHOTOGRAPHY_GC_REST} = PROPS_GC({});

    const [selectedKey, setSelectedKey] = React.useState(null);
    const [selectedGroup, setSelectedGroup] = React.useState(null);

    const nextKey = () => {
        let {i, j} = {i: selectedGroup, j: selectedKey + 1};
        
        if (j == IMAGES[selectedGroup].length) {
            i += 1;
            j = 0;
        }
        if (i == IMAGES.length) return
        if (j == IMAGES[i].length) return

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
        if (j == IMAGES[i].length) return

        setSelectedGroup(i);
        setSelectedKey(j);
    }
  
    return (
        <div
            style={{height: "100%", 
                backgroundColor: GC.WHITE,

            }}
            className="appear scroll respond-section"
        >
            <Container style={{marginTop: "40px", overflow: "scroll"}}>
                {IMAGES.map((group, i) => 
                    <Row key={`group-${i}`} className={`flex justify-center`} style={{margin: i + 1 === IMAGES.length? "": "0 0 50px 0"}}>
                        {group.map((image, j) => 
                            <img 
                                key={`group-${i}-${j}`}
                                className="appear pointer" 
                                src={image.src} 
                                onClick={() => {
                                    setSelectedGroup(i); 
                                    setSelectedKey(j); 
                                    setOpen(true);
                                }}
                                style={{
                                    ...GC.PHOTOGRAPHY.STYLE.IMG,
                                    ...image.style
                                }}
                            />
                        )}
                    </Row>
                )}
            </Container>
            <Modal
                open={open}
                onClose={() => {
                    setOpen(false); 
                    setSelectedGroup(null); 
                    setSelectedKey(null);
                }}
            >
            <div className="flex modal align-center justify-center" style={{width: "max-content", height: "100%"}}>
                {(selectedGroup !== null) && (selectedKey !== null)? 
                    <>
                        <IconButton sx={{width: "50px", height: "50px"}} onClick={prevKey}>
                            <ArrowBackIosIcon sx={{color: GC.WHITE}}/>
                        </IconButton>

                        <img 
                            className="appear photography-img" 
                            src={IMAGES[selectedGroup][selectedKey].src} 
                            style={{
                                ...GC.PHOTOGRAPHY.STYLE.MODAL.IMG 
                            }}
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
