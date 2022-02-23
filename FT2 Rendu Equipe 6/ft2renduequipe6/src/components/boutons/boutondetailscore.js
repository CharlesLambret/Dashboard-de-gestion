import React from "react";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import"./boutons.css";
import theme from "../layout/theme.js";
export default function BoutonDetailScore (){
    const navigate = useNavigate();
    function handleClick() {
    navigate('detailscore');}
    return(
        <Button theme={theme} border="1 px solid contraste" className="Boutonsecondaire" variant="outlined" onClick={() => handleClick('detailscore')}><h3>Accéder au détail du score</h3></Button>
    )
}