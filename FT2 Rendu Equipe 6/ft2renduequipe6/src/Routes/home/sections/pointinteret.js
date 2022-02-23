import React from "react";
import {ReactComponent as Confetti} from "../../../img/confetti.svg";
import {ReactComponent as Danger} from "../../../img/danger.svg";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../home.css";

export default function PointInteret (){
    return(
        <Card className="CarteAccueil">
          <CardContent>
            <div>
              <h2> Pour résumer: </h2>
              <p> Actuellement, votre score est à revoir</p>
            </div>
            <div id="ContenuInteret">
              <div className="interet">
                <Confetti/>
                <div className="colonnecard">
                    <h3>Bravo :</h3>
                    <li>Le taux de chutes entre 20h et 6h du matin a légèrement baissé.</li>
                    <li>Le taux de mise en contention des patients a également baissé.</li>
                    <li>Les évaluations de douleur ont été 1.5x plus fréquentes que le mois dernier.</li>
                    <li>La fréquence des mesures de poids reste inchangée, elles se font l'après-midi et le matin.</li>
                </div>
              </div>
              <div className="interet">
                  <Danger/>
                  <div className="colonnecard">
                    <h3>Attention :</h3>
                    <li>Vous avez accueilli 12 patients ce mois-ci.</li>
                    <li>Vous avez perdu 4 patients ce mois-ci.</li>
                    <li>Surveillez  votre jauge de capacité d'accueil</li>
                  </div>
              </div>
            </div>
          </CardContent>
        </Card>
    )
}