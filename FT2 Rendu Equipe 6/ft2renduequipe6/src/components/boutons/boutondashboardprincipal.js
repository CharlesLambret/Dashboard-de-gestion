import React from "react";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import"./boutons.css";
import theme from "../layout/theme.js";

export default function Boutondashboard (){
    const navigate = useNavigate();
    function handleClick() {
    navigate('dashboard');}
    return(
    <Button theme={theme} className="Boutonprincipal" variant="contained" onClick={() => handleClick('dashboard')} color="contraste" text-color="" ><h3>Accéder au dashboard</h3></Button>
    )
}

