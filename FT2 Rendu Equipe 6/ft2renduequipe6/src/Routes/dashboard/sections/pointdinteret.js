import * as React from "react";
import '../dashboard.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Legende from './legende';
import {ReactComponent as LegStandard} from '../../../img/legendestandardviz.svg';
import VizTauxMortalité from '../../../components/charts/tauxmortalite.js';
import {ReactComponent as IconeDanger} from '../../../img/dangerinteret.svg';
import { Card } from '@mui/material';
import {ReactComponent as IcoInsight} from "../../../img/iconeinsight.svg";
import {ReactComponent as IcoTips} from "../../../img/iconetips.svg";

export default function ModalInteret() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <div id="pointdinteret" onClick={handleOpen}>
        <h2>Point d'intérêt</h2>
        <Legende/>
        <Card id="vizdinteret">
            <div id="indicationstandard">
                <LegStandard id="repstandard"/>
                <p>Standard Korian</p>
            </div>
            <div id="titreviz">
                <h3>Taux de mortalité au fil des mois</h3>
            </div>
            <div id="ligneinteret">
                <VizTauxMortalité id="DatavizTxMortalite"/>
                <div id="contenantinfo">
                    <IconeDanger/>
                    <p>Novembre</p>
                    <p>4 décès</p>
                </div>
            </div>
        </Card>
    </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Fenetremodale">
          <h3>Détail de la dataviz</h3>
          <Card id="CarteDataviz">
            <VizTauxMortalité/>
          </Card>
          <div id="CartesModal">
            <Card className="Petitecarte">
              <h4>Hypothèses et insights</h4>
              <div className="ligneinsight">
                <IcoInsight className="icoinsight"/>
                <p>Les chutes arrivent souvent car les patients ne sont pas bien pris en charge.</p>
              </div>
              <div className="ligneinsight">
                <IcoInsight className="icoinsight"/>
                <p>Les équipements de surveillance et d’aides aux personnes âgées sont peut-être défaillants.</p>
              </div>
            </Card>
            <Card className="Petitecarte" id="cartetip">
              <h4>Tips</h4>
              <p>Nous avons remarqué un nombre élevé de chutes durant le début de matinée. Veillez à avoir un éclairage suffisant et pensez à renforcer la surveillance durant ces créneaux.</p>
              <IcoTips id="icotips"/>
            </Card>
          </div>
        </Box>
      </Modal></>
  );
}