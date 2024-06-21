import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children: children }) => {
  return (
    <div className="flex flex-col w-full shadow-[0_2px_18px_0px_#c8c8c8]">
      <div className="flex gap-4 bg-white px-6 py-4 rounded-md">{children}</div>
    </div>
  );
};

export default Card;
