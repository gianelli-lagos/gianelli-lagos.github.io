import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStars } from "../contexts/StarContext";
import { myDrawingLight, myDrawingDark } from "../assets";

const COLORS_LIGHT = ["#3ea1fd", "#a9d6ff", "#ffffff", "#2c5a91"];
const COLORS_DARK = ["#dfd9ff", "#b8aef0", "#ffffff", "#8f7fd6"];

const Particle = ({ i, colors }) => {
  const angle = (i / 24) * Math.PI * 2;
  const distance = 120 + Math.random() * 80;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  return (
    <motion.span
      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
      style={{ backgroundColor: colors[i % colors.length] }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ x, y, opacity: 0, scale: 0.3 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    />
  );
};

const StarReveal = ({ darkMode }) => {
  const { showReveal, closeReveal } = useStars();
  const drawing = darkMode ? myDrawingDark : myDrawingLight;
  const colors = darkMode ? COLORS_DARK : COLORS_LIGHT;

  return (
    <AnimatePresence>
      {showReveal && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeReveal}
        >
          <motion.div
            className="relative bg-primary dark:bg-carddark border border-navbar dark:border-black100 rounded-[20px] px-8 pt-10 pb-8 text-center max-w-sm mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <Particle key={i} i={i} colors={colors} />
              ))}
            </div>

            <h3 className="text-secondary dark:text-white100 text-xl font-bold mb-4">
            Remember that fun fact about me liking to draw?
            </h3>

            <img
            src={drawing}
            alt="A drawing I made"
            className="w-full max-w-[220px] mx-auto rounded-[14px] border border-navbar dark:border-black100 mb-4"
            />

            <p className="text-babyblue dark:text-secondarydark text-sm mb-6">
            This is a drawing I made for my website. 🌸🌷 Thank you for exploring it!
            </p>

            <button
              onClick={closeReveal}
              className="text-sm font-semibold px-5 py-2 rounded-full border border-[#3ea1fd] dark:border-[#dfd9ff] text-[#3ea1fd] dark:text-[#dfd9ff] transition-colors duration-200 hover:bg-[#3ea1fd] dark:hover:bg-[#dfd9ff] hover:text-white dark:hover:text-carddark"
            >
              Nice ✨
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StarReveal;