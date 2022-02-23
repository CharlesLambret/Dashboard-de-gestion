import React from "react";
import "../detailscore.css";
import {ReactComponent as NoteMortalite} from"../../../img/notemortalite.svg";
import VizTauxMortalité from '../../../components/charts/tauxmortalite.js';
import {ReactComponent as BaremeMortalite} from "../../../img/barememortalite.svg";
import BoutonDashboardSecondaire from "../../../components/boutons/boutondashboardsecondaire";
import { Card } from "@mui/material";

export default function Critere2 (){
    return (
        <div className="SectionCritere">
            <div  className="PartieVizCritere">
                <h2>Critère 2 : mortalité </h2>
                <div div className="lignenote">
                    <h3> Note : </h3>
                    <NoteMortalite className="Note"/>
                </div>
                <Card>
                    <VizTauxMortalité className="Vizcritere"/>
                </Card>
                <BoutonDashboardSecondaire className="Boutoncritere"/>
            </div>
            <div className="colonnebareme">
                <p> Barème sur 120 patients en un mois  </p>
                <BaremeMortalite/>
            </div> 
        </div>
    )
}