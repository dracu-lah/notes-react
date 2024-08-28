import React, { useRef } from "react";
import Cards from "./components/Cards";
import ClearButton from "./components/ClearButton";

const App = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="relative  bg-zinc-900 text-white flex justify-center items-center min-h-screen">
      <h1 className="opacity-10 absolute text-[5rem] md:text-[15rem] select-none">
        Notes
      </h1>
      <div
        className="min-h-screen overflow-hidden flex flex-col justify-between items-center  w-full z-10 p-10"
        ref={constraintsRef}
      >
        <h1 className=" text-sm  font-base opacity-60  ">
          Drag Notes Anywhere!
        </h1>
        <Cards constraintsRef={constraintsRef} />
        <ClearButton />
      </div>
    </div>
  );
};

export default App;
