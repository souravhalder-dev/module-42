import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
const data = [
  {
    id: 1,
    name: "Rahim",
    math: 45,
    english: 78,
    physics: 90,
  },
  {
    id: 2,
    name: "Karim",
    math: 92,
    english: 69,
    physics: 88,
  },
  {
    id: 3,
    name: "Sonia",
    math: 76,
    english: 85,
    physics: 80,
  },
  {
    id: 4,
    name: "Jamal",
    math: 56,
    english: 70,
    physics: 72,
  },
  {
    id: 5,
    name: "Tania",
    math: 88,
    english: 90,
    physics: 86,
  },
  {
    id: 6,
    name: "Imran",
    math: 95,
    english: 83,
    physics: 91,
  },
  {
    id: 7,
    name: "Farhana",
    math: 73,
    english: 88,
    physics: 79,
  },
  {
    id: 8,
    name: "Hasan",
    math: 81,
    english: 75,
    physics: 84,
  },
  {
    id: 9,
    name: "Shamim",
    math: 68,
    english: 72,
    physics: 65,
  },
  {
    id: 10,
    name: "Nadia",
    math: 90,
    english: 94,
    physics: 89,
  },
];

const Resultchart = () => {
  return (
    <div>
      <LineChart width={900} height={500} data={data}>
        <XAxis dataKey={"name"}></XAxis>

        <Line dataKey="math" stroke="purple" />
        <Line dataKey="english" />
        <Line dataKey="physics" />
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default Resultchart;
