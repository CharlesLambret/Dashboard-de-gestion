import React from "react";
import "../dashboard.css";
import { ReactComponent as MoinsBien} from '../../../img/Standardnégatif.svg';
import { ReactComponent as Mieux} from '../../../img/Standardpositif.svg';
import { ReactComponent as Standard} from '../../../img/Standard.svg';

export default function Legende (){
    return(
        <div className="souslegende">
                <div className="lignesouslegende">
                    <MoinsBien />
                    <p id="txtmoinsbien">Moins bien que le standard Korian</p>
                </div>
                <div className="lignesouslegende">
                    <Mieux />
                    <p id="txtmieux">Mieux que le standard Korian</p>
                </div>
                <div className="lignesouslegende">
                    <Standard />
                    <p id="txtstandard">Standard Korian</p>
                </div>
            </div>
    )
}