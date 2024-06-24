import { useState } from "react";
import { Task } from "../App";
import Card from "./card";
import CheckButton from "./CheckButton";

interface CreatedTasksProps {
  toDoArr: Task[];
}
const CreatedTasks: React.FC<CreatedTasksProps> = ({ toDoArr }) => {
  const [checkedTask, setCheckedTask] = useState<boolean>(false);

  const handleTextDecoration = () => {
    if (checkedTask) return "text-gray-200 line-through";
  };

  return (
    <div className="mt-6 w-full shadow-[0_2px_18px_0px_#c8c8c8] bg-white rounded-md">
      <ul className="flex flex-col items-center">
        {toDoArr.map((key) => (
          <li className="flex flex-col w-full">
            <div className="flex flex-row">
              <div className="flex gap-4 bg-white px-6 py-4 w-full rounded-md group">
                <CheckButton title={"Check this task"} checkedTask={checkedTask} setCheckedTask={setCheckedTask} />
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-row items-center text-gray-500">
                    <p className={`${handleTextDecoration()}`}>{key.task}</p>
                  </div>
                </div>
                <button
                  className="bg-[url('/src/assets/images/icon-cross.svg')] w-6 bg-no-repeat bg-contain cursor-pointer opacity-0 group-hover:opacity-100"
                  title="Deletar task"
                ></button>
              </div>
            </div>
            <hr className="border border-solid border-gray-300 w-full" />
          </li>
        ))}
      </ul>
      <Card>
        <div className="flex flex-row justify-between w-full text-gray-400">
          <p>{toDoArr.length} items left</p>
          <div className="hidden lg:flex">
            <div className="flex justify-center gap-2 text-gray-400 font-bold">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
          </div>
          <button type="reset">Clear Completed</button>
        </div>
      </Card>
    </div>
  );
};

export default CreatedTasks;
