import React from "react";
import { motion } from "framer-motion";
import { useStars } from "../contexts/StarContext";

const FloatingStar = ({ id, className = "", size = 28 }) => {
  const { collectStar, isCollected } = useStars();
  const filled = isCollected(id);

  return (
    <motion.button
      onClick={() => collectStar(id)}
      aria-label={filled ? "Star collected" : "Click to collect star"}
      className={className}
      style={{ width: size, height: size }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        animate={{ scale: filled ? [1, 1.4, 1] : 1 }}
        transition={{ duration: 0.4 }}
        className={
          filled
            ? "text-[#3ea1fd] dark:text-[#dfd9ff]"
            : "text-babyblue dark:text-secondarydark"
        }
      >
        <path
          d="M12 2.5l2.9 6.2 6.8.7-5.1 4.6 1.5 6.7L12 17.3 5.9 20.7l1.5-6.7L2.3 9.4l6.8-.7L12 2.5z"
          fill={filled ? "currentColor" : "transparent"}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </motion.svg>
    </motion.button>
  );
};

export default FloatingStar;