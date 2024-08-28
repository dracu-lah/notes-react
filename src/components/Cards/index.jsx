import React from "react";
import Card from "./components/Card";

const Cards = ({ constraintsRef }) => {
  return (
    <div className="relative flex justify-center items-center">
      {Array.from({ length: 4 }).map((item, index) => (
        <Card key={index} index={index} constraintsRef={constraintsRef} />
      ))}
    </div>
  );
};

export default Cards;
