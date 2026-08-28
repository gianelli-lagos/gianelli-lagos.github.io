import React, { createContext, useContext, useState, useCallback } from "react";

const StarContext = createContext(null);
const TOTAL_STARS = 5;

export const StarProvider = ({ children }) => {
  const [collected, setCollected] = useState(() => new Set());
  const [showReveal, setShowReveal] = useState(false);

  const collectStar = useCallback((id) => {
    setCollected((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      if (next.size === TOTAL_STARS) setShowReveal(true);
      return next;
    });
  }, []);

  const isCollected = useCallback((id) => collected.has(id), [collected]);

  return (
    <StarContext.Provider
      value={{
        collectStar,
        isCollected,
        total: TOTAL_STARS,
        count: collected.size,
        showReveal,
        closeReveal: () => setShowReveal(false),
      }}
    >
      {children}
    </StarContext.Provider>
  );
};

export const useStars = () => {
  const ctx = useContext(StarContext);
  if (!ctx) throw new Error("useStars must be used within a StarProvider");
  return ctx;
};