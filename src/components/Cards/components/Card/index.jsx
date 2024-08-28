import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Card = ({ constraintsRef, index }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cardValue, setCardValue] = useState(
    localStorage.getItem(`card-${index}`) || "",
  );

  useEffect(() => {
    localStorage.setItem(`card-${index}`, cardValue);
  }, [cardValue, index]);

  const statusText = () => {
    if (isLoading) return "Saving...";
    if (cardValue) return "Saved";
    return "Write Something";
  };

  const bgColor = () => {
    if (isLoading) return "bg-yellow-800";
    if (cardValue) return "bg-green-800";
    return "bg-blue-800";
  };

  const stackVariants = {
    initial: { x: 0, y: 0, opacity: 0 },
    animate: {
      y: index * 10,
      x: index * 15,
      opacity: 1,
    },
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      variants={stackVariants}
      initial="initial"
      animate="animate"
      className="absolute border border-zinc-900/10 flex flex-col items-center justify-between h-[240px] w-[180px] rounded-3xl overflow-hidden"
    >
      <textarea
        className="outline-none text-sm p-6 flex-1 w-full duration-300 max-w-full bg-zinc-700 focus:bg-zinc-800"
        placeholder="Type Here..."
        value={cardValue}
        onChange={(e) => {
          setIsLoading(true);
          setCardValue(e.target.value);
          setTimeout(() => setIsLoading(false), 1000);
        }}
      />
      <span
        className={`${bgColor()} outline-none text-center duration-300 h-14 font-mono w-full text-zinc-200 bottom-0 py-4`}
      >
        <p className={`${isLoading ? "animate-pulse" : ""}`}>{statusText()}</p>
      </span>
    </motion.div>
  );
};

export default Card;
