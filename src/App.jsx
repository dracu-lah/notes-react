import React, { useRef } from "react";
import Cards from "./components/Cards";
import ClearButton from "./components/ClearButton";

const App = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="relative bg-zinc-900 text-white flex justify-center items-center min-h-screen">
      <h1 className="opacity-10 absolute text-[15rem] select-none">Notes</h1>
      <div
        className="min-h-screen overflow-hidden  w-full z-10 p-10"
        ref={constraintsRef}
      >
        <ClearButton />
        <h1 className="w-full text-sm mt-28 font-base opacity-60  text-center">
          Drag Notes Anywhere!
        </h1>
        <Cards constraintsRef={constraintsRef} />
      </div>
    </div>
  );
};

export default App;
