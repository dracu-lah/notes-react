import React from "react";
import Card from "./components/Card";

const Cards = ({ constraintsRef }) => {
  return (
    <div className="relative flex justify-center items-center h-[480px] w-full">
      {/* Adjust height as needed */}
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index} constraintsRef={constraintsRef} index={index} />
      ))}
    </div>
  );
};

export default Cards;
