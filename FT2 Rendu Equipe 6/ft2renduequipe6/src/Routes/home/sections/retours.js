import "../home.css";
import { Card, CardContent } from "@mui/material";
import React from "react";
import {ReactComponent as IconeRetour} from "../../../img/iconeretourequipe.svg";
import {ReactComponent as Ligne} from "../../../img/Line.svg";
export default function Retours (){
    return(
        <Card className="CarteAccueil">
          <CardContent>
            <div>
              <h2>Retour de vos équipes</h2>
              <div className="ligneretourequipe">
              <IconeRetour className="iconeretour"/>
                <p>"Nous manquons de personnels qualifiés ce qui influe sur la qualité du travail des aides soignant(e)s actuel(le)s."</p>
              </div>
              <Ligne className="ligneseparation"/>
              <div className="ligneretourequipe">
                <IconeRetour className="iconeretour"/>
                <p>"Les patients sont heureux et bien traités, cependant certaines familles restent dubitatives."</p>
              </div>
              <Ligne className="ligneseparation"/>
            <div className="ligneretourequipe">
              <IconeRetour className="iconeretour"/>
                <p>"En terme de logistique, il manque du matériel de qualité mais pas forcément de premier prix."</p>
              </div>
            </div>
            <Ligne className="ligneseparation"/>
          </CardContent>
        </Card>
    )
}
