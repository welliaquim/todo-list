import React from "react";
import { CardProps } from "../utils/interfaces";

const Card: React.FC<CardProps> = ({ children, className, darkTheme }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className={`flex gap-4 ${darkTheme ? "bg-desaturated-blue" : "bg-white"} px-6 py-4 rounded-md`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
