import { useState } from "react";
import "./output.css";
import Header from "./components/Header";
import TaskCreator from "./components/TaskCreator";
import CreatedTasks from "./components/CreatedTasks";
import Footer from "./components/Footer";
import { Task } from "./utils/interfaces";

function App() {
  const [toDoArr, setToDoArr] = useState<Task[]>([]);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-14 font-josefin bg-contain bg-[url('/src/assets/images/bg-mobile-light.jpg')] md:bg-[url('/src/assets/images/bg-desktop-light.jpg')] bg-no-repeat">
        <div className="w-full max-w-[500px]">
          <Header />

          <TaskCreator toDoArr={toDoArr} setToDoArr={setToDoArr} />

          <CreatedTasks toDoArr={toDoArr} setToDoArr={setToDoArr} />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
