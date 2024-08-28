import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Card = ({ constraintsRef, index }) => {
  const controls = useAnimationControls();
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (note.length > 0) {
      setIsSaved(false); // Reset saved status when note changes

      const delayTimeout = setTimeout(() => {
        setIsLoading(true);

        const saveTimeout = setTimeout(() => {
          setIsLoading(false);
          setIsSaved(true); // Set saved status after saving
        }, 1000); // Simulate save delay

        return () => clearTimeout(saveTimeout); // Cleanup save timeout
      }, 1000); // Initial delay before saving

      return () => clearTimeout(delayTimeout); // Cleanup delay timeout
    } else {
      setIsSaved(false); // Reset saved status if note is empty
    }
  }, [note]);

  const statusText = () => {
    if (note.length === 0) return "Write Something";
    if (isLoading) return "Saving...";
    if (isSaved) return "Saved!";
    return "Stop to Save";
  };

  const bgColor = () => {
    if (isLoading) return "bg-yellow-800";
    if (isSaved) return "bg-green-800";
    return "bg-blue-800"; // Blue background for "Stop to Save"
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      variants={{ initial: { scale: 0 } }}
      initial="initial"
      whileInView={{ scale: 1 }}
      className={` flex flex-col items-center justify-between h-[240px] w-[180px] rounded-3xl overflow-hidden absolute `}
      animate={controls}
    >
      <textarea
        className="outline-none text-sm p-6 flex-1 w-full duration-300 max-w-full bg-zinc-700 focus:bg-zinc-800"
        placeholder="Type Here..."
        disabled={isLoading}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <span
        className={`${bgColor()} outline-none text-center duration-300 font-mono w-full text-zinc-200 bottom-0 py-4`}
      >
        <p className={`${isLoading && "animate-pulse"}`}>{statusText()}</p>
      </span>
    </motion.div>
  );
};

export default Card;
