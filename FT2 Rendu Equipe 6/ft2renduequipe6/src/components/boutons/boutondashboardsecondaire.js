import React from "react";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import"./boutons.css";
import theme from "../layout/theme.js";

export default function BoutonDashboardSecondaire (){
    const navigate = useNavigate();
    function handleClick() {
    navigate('/dashboard');}
    return(
    <Button theme={theme} border-color="contraste" className="Boutonsecondaire" variant="outlined" onClick={() => handleClick('dashboard')} ><h3>Accéder aux données associées</h3></Button>
    )
}