import React from "react";
import Checkbox from "./checkbox";

interface CardTaskProps {
  children: React.ReactNode;
}

const CardTask: React.FC<CardTaskProps> = ({ children: children }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row">
        <div className="flex gap-4 bg-white px-6 py-4 w-full rounded-t-md overflow-hidden">
          <Checkbox />
          <div className="flex flex-row justify-between w-full">
            {children}
            <span className="bg-[url('/src/assets/images/icon-cross.svg')] w-6 bg-no-repeat bg-contain">
              <input type="checkbox" className="appearance-none" />
            </span>
          </div>
        </div>
      </div>
      <hr className="border border-solid border-gray-300 w-full" />
    </div>
  );
};

export default CardTask;
