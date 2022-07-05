import React from "react";

export const Card = ({ children }) => {
  return (
    <div
      className="rounded-none md:rounded-xl overflow-hidden shadow-lg bg-white"
    >
      <div className="px-6 py-4">
        <div className="h-full py-2 flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};
