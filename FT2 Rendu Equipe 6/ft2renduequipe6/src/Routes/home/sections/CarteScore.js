import "../home.css";
import React from "react";
import {ReactComponent as Ehpadscoregeneral} from "../../../img/ehpadscoregeneral.svg";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function CarteScore (){
    return(
    <Card id="CarteScore">
      <CardContent id="interieurScore">
      <div id="ScoreGeneral">
        <h2> Votre score général </h2>
        <Ehpadscoregeneral id="GrosScore"/>
      </div>
      <div id="PetitsScores">
        <Card className="colonnepetitscore">
          <p> Bien être des patients </p>
          <Ehpadscoregeneral className="petitscore"/>
        </Card>
        <Card className="colonnepetitscore">
          <p> Gestion de l'établissement </p>
          <Ehpadscoregeneral className="petitscore"/>
        </Card>
      </div>
      </CardContent>
    </Card>
    )
  }
  export default CarteScore;