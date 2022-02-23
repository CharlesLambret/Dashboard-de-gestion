import "./home.css";
import Boutondashboard from "../../components/boutons/boutondashboardprincipal"
import '../../index.css';
import CarteScore from "./sections/CarteScore";
import Criteres from "./sections/critscore";
import PointInteret from "./sections/pointinteret";
import Retours from "./sections/retours";
import BoutonDetailScore from "../../components/boutons/boutondetailscore";

export default function Home () {
  return (
    <main>
      <div className="">
          <div className="positiontitre">
            <h1>Bienvenue Daniel Richard</h1>
          </div>
      </div>
      <div className="SectionScore">
        <CarteScore/>
        <Criteres/>
      </div>
      <div className="boutons" >
        <Boutondashboard/>
        <BoutonDetailScore/>
      </div>
        <PointInteret/>
        <Retours />
    </main>
  );
};



