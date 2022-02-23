import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./tauxmortalite.css";
/*import data from "./datas/tauxmortalite.json";*/


export default function VizTauxMortalité() {
  const data =[
    {
      name: "Janvier",
      Standard: 4,
      Etablissement: 3
    },
    {
      name: "Février",
      Standard: 3,
      Etablissement: 0
    
    },
    {
      name: "Mars",
      Standard: 5,
      Etablissement: 2
      
    },
    {
      name: "Avril",
      Standard: 5,
      Etablissement: 1
      
    },
    {
      name: "Mai",
      Standard: 4,
      Etablissement: 0
    
    },
    {
      name: "Juin",
      Standard: 4,
      Etablissement: 2
    },
    {
      name: "Juillet",
      Standard: 4,
      Etablissement: 3
      
    },
    {
      name: "Août",
      Standard: 5,
      Etablissement: 0
      
    },
    {
      name: "Septembre",
      Standard: 5,
      Etablissement: 0
      
    },
    {
      name: "Octobre",
      Standard: 3,
      Etablissement: 2
      
    },
    {
      name: "Novembre",
      Standard: 3,
      Etablissement: 4,
      fill : "#EF7D00"
      
    },
    {
      name: "Décembre",
      Standard: 4,
      Etablissement: 1
      
    }
  ]
  return (
    <ComposedChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Etablissement" barSize={20} fill="#54C352" id="Barresgraph"/>
      <Line type="monotone" dataKey="Standard" stroke="#037CBF" />
    </ComposedChart>
  );
}
