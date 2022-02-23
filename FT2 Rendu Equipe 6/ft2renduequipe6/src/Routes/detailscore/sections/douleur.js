import React from "react";
import "../detailscore.css";
import {ReactComponent as NoteDouleur} from"../../../img/notedouleur.svg";
import {ReactComponent as GraphDouleur} from "../../../img/graphdouleur.svg";
import {ReactComponent as BaremeDouleur} from "../../../img/baremedouleur.svg";
import BoutonDashboardSecondaire from "../../../components/boutons/boutondashboardsecondaire";
import { Card } from "@mui/material";

export default function Critere4 (){
    return (
        <div className="SectionCritere">
            <div className="PartieVizCritere">
                <h2>Critère 4 : évaluations de la douleur </h2>
                <div className="lignenote">
                    <h3> Note : </h3>
                    <NoteDouleur className="Note"/>
                </div>
                <Card>
                    <GraphDouleur className="Vizcritere"/>
                </Card>
                <BoutonDashboardSecondaire className="Boutoncritere"/>
            </div>
            <div className="colonnebareme">
                <BaremeDouleur/>
            </div> 
        </div>
    )
}