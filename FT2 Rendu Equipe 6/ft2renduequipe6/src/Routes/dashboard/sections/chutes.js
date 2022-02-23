import React from "react";
import Card from "@mui/material/Card";
import "../dashboard.css";
import VizMortsChutesGraves from "../../../components/charts/mortalitechutesgraves";
import {ReactComponent as HorairesChutes} from "../../../img/horaireschutes.svg";
import {ReactComponent as Chutespatients} from "../../../img/chutespatients.svg";
import {ReactComponent as Chutesan} from "../../../img/chutesan.svg";
import {ReactComponent as ChutesChutesGraves} from "../../../img/chuteschutesgraves.svg";
import {ReactComponent as CausesMorts} from "../../../img/causesdeces.svg";
import Legende from "./legende.js";
import {ReactComponent as PictoChutesGraves} from "../../../img/pictotauxmortalitechutesgraves.svg";



function Chutes (){
    return(
        <div id="sectionChutes">
            <h2>Chutes</h2>
            <Legende/>
            <div id="Divchutes">
                <div className="lignechute">
                    <Card className="ContenantViz" id="groscontenant">
                        <h3>Horaires fréquents de chute</h3>
                        <HorairesChutes className="Dataviz"/>
                    </Card>
                    <Card className="ContenantViz" id="petitcontenant">
                        <h3>Taux de mortalité des chutes graves</h3>
                        <PictoChutesGraves id="pictospecial"/>
                        <VizMortsChutesGraves className="Dataviz"/>
                    </Card>
                </div>
                <div className="lignechute">
                    <Card className="ContenantViz">
                        <Chutespatients className="Dataviz"/>
                    </Card>
                    <Card className="ContenantViz">
                        <Chutesan className="Dataviz"/>
                    </Card>
                </div>
                <div className="lignechute">
                    <Card className="ContenantViz">
                        <ChutesChutesGraves className="Dataviz"/>
                    </Card>
                    <Card className="ContenantViz">
                        <h3>Causalité des décès</h3>
                        <CausesMorts className="Dataviz"/>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Chutes;