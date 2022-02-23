import React from 'react-dom';
import "../dashboard.css";

import { ReactComponent as Illustration} from '../../../img/illustrationjolie.svg';
import { Card, CardContent, Checkbox } from '@mui/material';
import { ReactComponent as IcoLogistique} from '../../../img/Logistique.svg';
import { ReactComponent as IcoEquipes} from '../../../img/statutequipes.svg';
import { ReactComponent as IcoCompta} from '../../../img/compta.svg';
import { ReactComponent as IcoOccupation} from '../../../img/occupation.svg';
import { ReactComponent as IcoContention} from '../../../img/contentions.svg';
import { ReactComponent as IcoChutes} from '../../../img/chutes.svg' ;
import { ReactComponent as IcoDouleur} from '../../../img/douleur.svg';
import { ReactComponent as IcoMortalité} from '../../../img/mortalité.svg';
import { ReactComponent as IcoPoids} from '../../../img/poids.svg';

function Herodash(){
    return(
        <div id="HeroDash">
        <div className='rangeefiltre'>
            <Card className="filtre gauche" id="ui1">
                <Checkbox/>
                <p>Logistique</p>
                <IcoLogistique className="iconefiltre"/>
            </Card>
            <Card className="filtre gauche" id="ui2">
                <Checkbox/>
                <p>Statut des équipes</p>
                <IcoEquipes className="iconefiltre" />
            </Card>
            <Card className="filtre gauche" id="ui3">
                <Checkbox/>
                <p>Comptabilité</p>
                <IcoCompta className="iconefiltre" />
            </Card>
            <Card className="filtre gauche" id="ui4">
                <Checkbox/>
                <p>Occupation</p>
                <IcoOccupation className="iconefiltre"/>
            </Card>
        </div>
        <Illustration id="illustration"/>
        <div className='rangeefiltre'>
            <Card className="filtre" id="i1">
                <Checkbox/>
                <p>Contentions physiques</p>
                <IcoContention className="iconefiltre"/>
            </Card>
            <Card className="filtre" id="i2">
                <Checkbox/>
                <p>Chutes</p>
                <IcoChutes className="iconefiltre"/>
            </Card>
            <Card className="filtre" id="i3">
                <Checkbox/>
                <p>Mortalité</p>
                <IcoMortalité className="iconefiltre"/>
            </Card>
            <Card className="filtre" id="i4">
                <Checkbox/>
                <p>Évaluations de la douleur</p>
                <IcoDouleur className="iconefiltre"/>
            </Card>
            <Card className="filtre" id="i5">
                <Checkbox/>
                <p>Mesures de poids</p>
                <IcoPoids className="iconefiltre"/>
            </Card>
        </div>
    </div>
    )
}
export default Herodash;
