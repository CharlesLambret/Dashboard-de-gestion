import React from "react";
import "./detailscore.css";
import {ReactComponent as ScoreHaut} from "../../img/scorecoupe.svg";
import Critere1 from "./sections/criterechutes";
import Critere2 from "./sections/criteremortalité";
import Critere3 from "./sections/criterepoids";
import Critere4 from "./sections/douleur";
import {ReactComponent as BaremeGlobal} from "../../img/baremeglobal.svg";

export default function Detailduscore () {
        return (
            <main>
                <div id="hautpage">
                    <div className="positiontitre">
                        <h1>Détail du score</h1>
                    </div>
                    <ScoreHaut/>
                </div>
                <h2 id="raisonscore">Les raisons pour lesquelles vous avez le <span>Score C</span></h2>
                <Critere1/>
                <Critere2/>
                <Critere3/>
                <Critere4/>
                <div id="centrage">
                    <BaremeGlobal/>
                </div>
            </main>

        )
}