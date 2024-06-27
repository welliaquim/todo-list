import React, { useState } from "react";
import { TaskCreatorProps } from "../utils/interfaces";
import Card from "./card";
import CheckButton from "./CheckButton";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { selectStateTask } from "../utils/tasksFilter";

const CreatedTasks: React.FC<TaskCreatorProps> = ({ toDoArr, setToDoArr }) => {
  const [filterOption, setFilterOption] = useState<string>("All");
  const uncompletedTasks = toDoArr.filter((task) => !task.completed).length;

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = toDoArr.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task));
    setToDoArr(updatedTasks);
  };

  const deleteSelectedTask = (taskId: number) => {
    const updatedToDoArr = toDoArr.filter((task) => task.id !== taskId);
    setToDoArr(updatedToDoArr);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(toDoArr);
    const [reorderedItem] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, reorderedItem);

    setToDoArr(reorderedTasks);
  };

  const filteredTasks = selectStateTask(filterOption, toDoArr);

  return (
    <div className="mt-6 w-full shadow-[0_2px_18px_0px_#c8c8c8] bg-white rounded-md">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul className="flex flex-col items-center" {...provided.droppableProps} ref={provided.innerRef}>
              {filteredTasks.map((task, index) => (
                <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <li
                      className="flex flex-col w-full"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div className="flex flex-row">
                        <div className="flex gap-4 bg-white px-6 py-4 w-full rounded-md group">
                          <CheckButton
                            title={"Check this task"}
                            onTaskCompleted={toggleTaskCompletion}
                            taskId={task.id}
                            completed={task.completed}
                          />
                          <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-row items-center text-gray-500">
                              <p className={`${task.completed ? "text-gray-200 line-through" : ""}`}>{task.taskInfo}</p>
                            </div>
                          </div>
                          <button
                            className="bg-[url('/src/assets/images/icon-cross.svg')] w-4 bg-no-repeat bg-contain bg-center cursor-pointer opacity-0 group-hover:opacity-100"
                            title="Deletar task"
                            onClick={() => deleteSelectedTask(task.id)}
                          ></button>
                        </div>
                      </div>
                      <hr className="border border-solid border-gray-300 w-full" />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <Card>
        <div className="flex flex-row justify-between w-full text-gray-400 text-nowrap">
          <p className="text-sm">{uncompletedTasks} items left</p>
          <div className="relative top-[100px] lg:flex lg:static">
            <div className="flex justify-center gap-2 text-gray-400 font-bold ">
              <button onClick={() => setFilterOption("All")} className={filterOption === "All" ? "text-blue-500" : ""}>
                All
              </button>
              <button
                onClick={() => setFilterOption("Active")}
                className={filterOption === "Active" ? "text-blue-500" : ""}
              >
                Active
              </button>
              <button
                onClick={() => setFilterOption("Completed")}
                className={filterOption === "Completed" ? "text-blue-500" : ""}
              >
                Completed
              </button>
            </div>
          </div>
          <button type="reset" className="text-sm">
            Clear Completed
          </button>
        </div>
      </Card>
    </div>
  );
};

export default CreatedTasks;
