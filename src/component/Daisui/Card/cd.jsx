import { ArrowDownRight } from "lucide-react";
import React from "react";

const CD = ({ dtn }) => {
  console.log(dtn);
  return (
    <div className="text-left p-5 flex flex-col ">
      <h1>{dtn.name}</h1>
      <h3>{dtn.price}</h3>
      <div className="mt-3 bg-yellow-400 rounded-2xl p-4 flex-1">
        <p>{dtn.description}</p>
        {dtn.features.map((fth) => (
          <p className=" flex mt-2">
            <ArrowDownRight />
            {fth}
          </p>
        ))}
      </div>
      <button className="btn bg-black text-white mt-3 rounded-md">
        {" "}
        Buy Now
      </button>
    </div>
  );
};

export default CD;
