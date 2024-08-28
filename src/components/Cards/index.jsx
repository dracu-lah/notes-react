import React from "react";
import Card from "./components/Card";

const Cards = ({ constraintsRef }) => {
  return (
    <div className="space-y-4  flex flex-wrap   gap-8 justify-center ">
      {Array.from({ length: 4 }).map((item, index) => (
        <Card key={index} constraintsRef={constraintsRef} />
      ))}
    </div>
  );
};

export default Cards;
