import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children: children, className }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex gap-4 bg-white px-6 py-4 rounded-md">{children}</div>
    </div>
  );
};

export default Card;
