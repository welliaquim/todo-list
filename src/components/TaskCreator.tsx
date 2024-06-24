import { useState } from "react";

import { Task } from "../App";

interface TaskCreatorProps {
  setToDoArr: React.Dispatch<React.SetStateAction<Task[]>>;
  toDoArr: Task[];
}

const TaskCreator: React.FC<TaskCreatorProps> = ({ toDoArr, setToDoArr }) => {
  const [taskText, setTaskText] = useState<string>("");

  const createNewTask = () => {
    const newTask: Task = { task: taskText };
    taskText !== "" && taskText !== " " && setToDoArr([...toDoArr, newTask]);
    setTaskText("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  return (
    <div className={`flex flex-col w-full rounded-md`}>
      <div className="flex gap-4 bg-white px-6 py-4 rounded-md">
        <button
          className={"block h-6 w-6 rounded-full border"}
          title="Create New Task"
          onClick={() => {
            createNewTask();
          }}
        ></button>
        <input type="text" placeholder="Create a new todo..." value={taskText} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default TaskCreator;
