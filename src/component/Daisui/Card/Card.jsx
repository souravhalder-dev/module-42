import React, { use } from "react";
import CD from "./cd";

const Card = ({ Data }) => {
  const DataBase = use(Data);
  console.log(DataBase);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-5 ">
      {DataBase.map((dtn) => (
        <CD dtn={dtn}></CD>
      ))}
    </div>
  );
};

export default Card;
