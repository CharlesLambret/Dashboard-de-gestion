import React from "react";
import "../detailscore.css";
import {ReactComponent as NoteChutes} from"../../../img/notechutes.svg";
import {ReactComponent as GraphChutes} from "../../../img/graphchutes.svg";
import {ReactComponent as IconeQuestion} from "../../../img/iconequestion.svg";
import {ReactComponent as BaremeChutes} from "../../../img/baremechutes.svg";
import BoutonDashboardSecondaire from "../../../components/boutons/boutondashboardsecondaire";
import { Card } from "@mui/material";
export default function Critere1 (){
    return (
        <div className="SectionCritere">
            <div className="PartieVizCritere">
                <h2>Critère 1 : chutes</h2>
                <div className="lignenote">
                    <h3> Note : </h3>
                    <NoteChutes className="Note"/>
                </div>
                <Card>
                    <GraphChutes className="Vizcritere"/>
                </Card>
                <BoutonDashboardSecondaire className="Boutoncritere"/>
            </div>
            <div className="colonnebareme">
                <div className="lignebareme">
                    <h3>Barème</h3>
                    <IconeQuestion/>
                </div>
                <p>Les barèmes sont sur 120 patients en un mois  </p>
                <BaremeChutes/>
            </div> 
        </div>
    )
}