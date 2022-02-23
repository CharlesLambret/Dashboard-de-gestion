import React from "react";
import "../detailscore.css";
import {ReactComponent as NotePoids} from"../../../img/notepoids.svg";
import {ReactComponent as GraphPoids} from "../../../img/graphpoids.svg";
import {ReactComponent as BaremePoids} from "../../../img/baremepoids.svg";
import BoutonDashboardSecondaire from "../../../components/boutons/boutondashboardsecondaire";
import { Card } from "@mui/material";

export default function Critere3 (){
    return (
        <div className="SectionCritere">
            <div className="PartieVizCritere">
                <h2>Critère 3 : prises de poids </h2>
                <div className="lignenote">
                    <h3> Note : </h3>
                    <NotePoids className="Note"/>
                </div>
                <Card>
                    <GraphPoids className="Vizcritere"/>
                </Card>
                <BoutonDashboardSecondaire className="Boutoncritere"/>
            </div>
            <div className="colonnebareme">
                <h3>Barème</h3>
                <BaremePoids/>
            </div> 
        </div>
    )
}