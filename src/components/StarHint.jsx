import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStars } from "../contexts/StarContext";

const StarHint = () => {
  const { count, total } = useStars();
  const [visible, setVisible] = useState(false);
  const [dismissedManually, setDismissedManually] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("starHintSeen")) return;

    const showTimer = setTimeout(() => setVisible(true), 1000);
    const hideTimer = setTimeout(() => setVisible(false), 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (visible) sessionStorage.setItem("starHintSeen", "true");
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    setDismissedManually(true);
  };

  const alreadyDone = count === total;

  return (
    <AnimatePresence>
      {visible && !dismissedManually && !alreadyDone && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 z-50 max-w-[360px] bg-primary dark:bg-carddark border border-navbar dark:border-black100 rounded-[18px] px-5 py-4 shadow-lg flex items-start gap-4"
        >
          <span className="text-3xl leading-none">⭐</span>
          <div className="flex-1">
            <p className="text-secondary dark:text-white100 text-base font-semibold mb-1">
              Find the stars!
            </p>
            <p className="text-babyblue dark:text-secondarydark text-sm leading-snug">
              5 stars are hidden around the site — click on each one to collect them! Find all 5 for a surprise.
            </p>
          </div>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="text-babyblue dark:text-secondarydark hover:text-secondary dark:hover:text-white100 text-base leading-none"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StarHint;