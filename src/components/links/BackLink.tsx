import React from "react";
import { useNavigate } from "react-router-dom"
import {ReactComponent as BackArrow} from "assets/images/arrow.svg"

const BackLink  = () => {
    const navigate = useNavigate();

    const back = () => navigate(-1)

    return (<button type="button" aria-label="back" onClick={back}><BackArrow /></button>)
} 

export default BackLink;