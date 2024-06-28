import { useState } from "react";

import { Task, TaskCreatorProps } from "../utils/interfaces";

const TaskCreator: React.FC<TaskCreatorProps> = ({ toDoArr, setToDoArr, darkTheme }) => {
  const [taskText, setTaskText] = useState<string>("");
  const [taskId, setTaskId] = useState<number>(1);

  const createNewTask = () => {
    const newTask: Task = {
      id: taskId,
      taskInfo: taskText,
      completed: false,
    };

    taskText !== "" && taskText !== " " && setToDoArr([...toDoArr, newTask]);
    setTaskText("");
    setTaskId(taskId + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createNewTask();
    }
  };

  return (
    <div className="flex flex-col w-full rounded-md">
      <div
        className={`flex gap-4 ${
          darkTheme
            ? "bg-desaturated-blue shadow-[0_2px_18px_0px_#101010] text-white"
            : "bg-white shadow-[0_2px_18px_0px_#c8c8c8]"
        } px-6 py-4 rounded-md`}
      >
        <button
          className={`block h-6 w-6 rounded-full border ${darkTheme ? "border-gray-700" : "border-inherit"}`}
          title="Create New Task"
          onClick={() => {
            createNewTask();
          }}
        ></button>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={taskText}
          onChange={handleInputChange}
          className={`focus:outline-none ${darkTheme ? "bg-desaturated-blue" : "bg-white"}`}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default TaskCreator;
