import React from 'react-dom';
import "./sidebar.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import {ReactComponent as IconeAccueil} from "../../img/iconeaccueil.svg";
import {ReactComponent as IconeDashboard } from "../../img/iconedashboard.svg";
import {ReactComponent as IconeCompte} from "../../img/iconecompte.svg";
import {ReactComponent as Iconeparamètres} from "../../img/iconeparametres.svg";

 function Sidebar  (){
    return (
      <div id="sidebar">
        <div className="contenantlogo">
            <img src={logo} alt="logo" id="logokorian" />
        </div>
        <div className="menu">
          <div className="lignelien">
            <IconeAccueil className="iconelien"/>
            <Link to="/" className="liensidebar">Accueil</Link>
          </div>
          <div className="lignelien">
            <IconeDashboard className="iconelien"/>
            <Link to="dashboard" className="liensidebar">Dashboard</Link>
          </div>
          <div className="lignelien">
            <IconeCompte className="iconelien"/>
            <a href="#" className="liensidebar">Mon compte</a>
          </div>
          <div className="lignelien">
            <Iconeparamètres className="iconelien"/>
            <a href="#" className="liensidebar">Paramètres</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  