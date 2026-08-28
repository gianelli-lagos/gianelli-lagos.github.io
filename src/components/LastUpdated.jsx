import React from "react";

const LAST_UPDATED = "August 2026";

const LastUpdated = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 bg-primary dark:bg-carddark border border-navbar dark:border-black100 rounded-full px-3.5 py-1.5 shadow-md">
      <p className="text-babyblue dark:text-secondarydark text-xs">
        Last updated: {LAST_UPDATED}
      </p>
    </div>
  );
};

export default LastUpdated;