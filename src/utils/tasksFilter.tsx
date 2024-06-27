import { Task } from "./interfaces";

export const selectStateTask = (filterOption: string, toDoArr: Task[]) => {
  switch (filterOption) {
    case "All":
      return toDoArr;
    case "Active":
      return toDoArr.filter((task) => !task.completed);
    case "Completed":
      return toDoArr.filter((task) => task.completed);
    default:
      throw new Error(`Invalid filter option: ${filterOption}`);
  }
};
