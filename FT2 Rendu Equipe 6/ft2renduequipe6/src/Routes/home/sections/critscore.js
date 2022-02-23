import React from "react";
import { ReactComponent as IcoChutes} from '../../../img/chutes.svg' ;
import { ReactComponent as IcoDouleur} from '../../../img/douleur.svg';
import { ReactComponent as IcoMortalité} from '../../../img/mortalité.svg';
import { ReactComponent as IcoPoids} from '../../../img/poids.svg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Criteres (){
    return(
    <Card id="CarteCriteres">
        <CardContent>
            <p> Votre score est basé sur 4 critères </p>
            <div className="lignecrit">
                <p>Chutes</p>
                <IcoChutes className="iconecritere"/>
            </div>
            <div className="lignecrit">
                <p>Mortalité</p>
                <IcoDouleur className="iconecritere"/>
            </div>
            <div className="lignecrit">
                <p>Mesures de poids</p>
                <IcoMortalité className="iconecritere"/>
            </div>
            <div className="lignecrit">
                <p>Évaluations de la douleur</p>
                <IcoPoids className="iconecritere"/>
            </div>
        </CardContent>
    </Card>
    )
}