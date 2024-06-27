import { useState } from "react";
import "./output.css";
import Header from "./components/Header";
import TaskCreator from "./components/TaskCreator";
import CreatedTasks from "./components/CreatedTasks";
import Footer from "./components/Footer";
import { Task } from "./utils/interfaces";

function App() {
  const [toDoArr, setToDoArr] = useState<Task[]>([
    { id: 1, taskInfo: "Complete online JavaScript course", completed: true },
    { id: 2, taskInfo: "Jog around the park 3x", completed: false },
    { id: 3, taskInfo: "10 minutes meditation", completed: false },
    { id: 4, taskInfo: "Read for 1 hour", completed: false },
    { id: 5, taskInfo: "Pick up groceries", completed: false },
    { id: 6, taskInfo: "Complete Todo App on Frontend Mentor", completed: false },
  ]);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center px-6 py-14 font-josefin bg-contain ${
          darkTheme
            ? "bg-[url('/src/assets/images/bg-mobile-dark.jpg')] bg-very-dark-blue"
            : "bg-[url('/src/assets/images/bg-mobile-light.jpg')] bg-white"
        } md:bg-[url('/src/assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-very-darker-grayish-blue`}
      >
        <div className={`w-full max-w-[500px]`}>
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

          <TaskCreator toDoArr={toDoArr} setToDoArr={setToDoArr} darkTheme={darkTheme} />

          <CreatedTasks toDoArr={toDoArr} setToDoArr={setToDoArr} darkTheme={darkTheme} />

          <Footer darkTheme={darkTheme} />
        </div>
      </div>
    </>
  );
}

export default App;
