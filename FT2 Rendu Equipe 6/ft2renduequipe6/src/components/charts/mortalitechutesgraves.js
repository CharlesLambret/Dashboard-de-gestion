
import React from "react";
import { RadialBarChart, RadialBar, Tooltip } from "recharts";
/*import data from "./datas/mortalitechutesgraves.json";*/

export default function VizMortsChutesGraves() {
  const data =[
    {
      name: "Etablissement",
      Taux: 65,
      fill: "#EF7D00"
    },
    {
      name: "Standard",
      Taux: 40,
      fill: "#037CBF"
    },
    {
      name: "Invisible",
      Taux: 100,
      fill: "#FFFFFF"
    }
  ]
  return (
    <RadialBarChart
      width={290}
      height={290}
      innerRadius={120}
      outerRadius={150}
      barSize={40}
      data={data}
    >
      <Tooltip/>
      <RadialBar
        minAngle={1}
        background
        clockWise
        dataKey="Taux"
      />
    </RadialBarChart>
  );
}
